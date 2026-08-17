'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';
import { 
  Sparkles, 
  ArrowLeft, 
  RotateCcw, 
  Shield, 
  Palette, 
  BookOpen, 
  Compass, 
  CheckCircle2, 
  AlertTriangle,
  Flame
} from 'lucide-react';
import confetti from 'canvas-confetti';

// 5x7 matrix representations for digits 4 and 0
const CHAR_4 = [
  [1, 0, 0, 1, 0],
  [1, 0, 0, 1, 0],
  [1, 0, 0, 1, 0],
  [1, 1, 1, 1, 1],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0],
];

const CHAR_0 = [
  [0, 1, 1, 1, 0],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 1, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [0, 1, 1, 1, 0],
];

const CHAR_O_SMILE = [
  [0, 1, 1, 1, 0],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 1, 0, 1, 1],
  [1, 0, 1, 0, 1],
  [0, 1, 1, 1, 0],
];

export function NotFoundMatrix() {
  const { isDarkMode } = useTheme();
  const [fixed, setFixed] = useState(false);
  const [isCommitting, setIsCommitting] = useState(false);
  const [activeCell, setActiveCell] = useState<{ row: number; col: number } | null>(null);

  // 7 rows x 53 columns grid
  const [grid, setGrid] = useState<number[][]>(() => createInitialGrid(false));

  function createInitialGrid(isFoundState: boolean) {
    const rows = 7;
    const cols = 53;
    const newGrid: number[][] = Array.from({ length: rows }, () => Array(cols).fill(0));

    // Place 4 0 4 in the center (start at col 18)
    const placeChar = (charMatrix: number[][], startCol: number, intensity: number) => {
      for (let r = 0; r < 7; r++) {
        for (let c = 0; c < charMatrix[r].length; c++) {
          if (charMatrix[r][c] === 1 && startCol + c < cols) {
            newGrid[r][startCol + c] = intensity;
          }
        }
      }
    };

    if (!isFoundState) {
      // 4 0 4 (glitched commit matrix)
      placeChar(CHAR_4, 18, 4);
      placeChar(CHAR_0, 25, 3);
      placeChar(CHAR_4, 32, 4);

      // Add a few ambient "commit noise" squares on random outer columns
      const noisePositions = [
        [1, 5, 1], [3, 8, 2], [5, 12, 1], [2, 40, 2], [4, 45, 1], [6, 49, 2],
        [0, 2, 1], [6, 7, 1], [1, 48, 2], [5, 51, 1]
      ];
      noisePositions.forEach(([r, c, val]) => {
        newGrid[r][c] = val;
      });
    } else {
      // Happy resolved matrix: 2 0 0 (HTTP 200 OK) or smiley
      placeChar(CHAR_0, 18, 4);
      placeChar(CHAR_O_SMILE, 25, 4);
      placeChar(CHAR_0, 32, 4);

      // Celebration aura
      for (let c = 0; c < cols; c += 4) {
        newGrid[c % 7][c] = (c % 3) + 1;
      }
    }

    return newGrid;
  }

  const handleCellClick = (r: number, c: number) => {
    setGrid((prev) => {
      const next = prev.map((row) => [...row]);
      next[r][c] = (next[r][c] + 1) % 5;
      return next;
    });
  };

  const handleCommitFix = () => {
    setIsCommitting(true);
    setTimeout(() => {
      setFixed(true);
      setGrid(createInitialGrid(true));
      setIsCommitting(false);
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#10b981', '#34d399', '#06b6d4', '#38bdf8']
      });
    }, 600);
  };

  const handleReset = () => {
    setFixed(false);
    setGrid(createInitialGrid(false));
  };

  // Color mapper matching GitHub contribution shades
  const getCellColor = (level: number) => {
    if (level === 0) {
      return isDarkMode ? 'bg-slate-900 border-slate-800/80 hover:bg-slate-800' : 'bg-slate-200/80 border-slate-300 hover:bg-slate-300';
    }
    if (level === 1) return 'bg-emerald-950/90 border-emerald-900 text-emerald-300';
    if (level === 2) return 'bg-emerald-700 border-emerald-600 shadow-sm text-white';
    if (level === 3) return 'bg-emerald-500 border-emerald-400 shadow-sm text-slate-950 font-bold';
    return 'bg-emerald-400 border-emerald-300 shadow-[0_0_8px_rgba(52,211,153,0.7)] text-slate-950 font-black';
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8 space-y-10 animate-in fade-in duration-300">
      {/* Top Banner Tag */}
      <div className="text-center space-y-3">
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase border transition-all ${
          fixed
            ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400'
            : 'bg-amber-500/10 border-amber-500/30 text-amber-400'
        }`}>
          {fixed ? <CheckCircle2 className="w-3.5 h-3.5" /> : <AlertTriangle className="w-3.5 h-3.5" />}
          <span>{fixed ? '200 OK • ROUTE RESTORED' : 'HTTP 404 • COMMIT NOT FOUND ON ORIGIN'}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
          {fixed ? (
            <>
              Legacy Found! <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Back on Track</span>
            </>
          ) : (
            <>
              Lost in the <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Contribution Grid</span>
            </>
          )}
        </h1>

        <p className={`max-w-xl mx-auto text-xs sm:text-sm leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          {fixed
            ? 'You resolved the corrupted commit tree! Explore our developer tools or jump back to main.'
            : 'The requested path has no authored history on this branch. Click on cells to draw or run a hotfix below.'}
        </p>
      </div>

      {/* Interactive 53x7 Contribution Matrix Frame */}
      <div className={`p-5 sm:p-7 rounded-3xl border shadow-2xl space-y-4 relative overflow-hidden transition-all ${
        isDarkMode
          ? 'bg-slate-900/90 border-slate-800 shadow-emerald-950/20'
          : 'bg-white border-slate-200 shadow-sm'
      }`}>
        {/* Glow ambient background */}
        <div className="absolute -right-20 -top-20 w-72 h-72 bg-emerald-500/10 blur-[90px] rounded-full pointer-events-none" />

        {/* Matrix Header info */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono border-b pb-3 border-slate-800/80">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-bold text-slate-300">53-Week Matrix MatrixCanvas</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400">
              {fixed ? '371 commits resolved' : '371 slots inspected (404 pattern detected)'}
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px]">
            <span className="text-slate-500">Less</span>
            <div className="flex gap-1 items-center">
              {[0, 1, 2, 3, 4].map((lvl) => (
                <div
                  key={lvl}
                  className={`w-3 h-3 rounded-sm border ${getCellColor(lvl)}`}
                />
              ))}
            </div>
            <span className="text-slate-500">More</span>
          </div>
        </div>

        {/* Grid Scrollable Wrapper */}
        <div className="overflow-x-auto py-2 no-scrollbar">
          <div className="inline-grid grid-rows-7 grid-flow-col gap-1 sm:gap-1.5 p-2 rounded-2xl bg-slate-950/60 border border-slate-800/60">
            {grid.map((row, rIdx) =>
              row.map((level, cIdx) => (
                <button
                  key={`${rIdx}-${cIdx}`}
                  onClick={() => handleCellClick(rIdx, cIdx)}
                  onMouseEnter={() => setActiveCell({ row: rIdx, col: cIdx })}
                  onMouseLeave={() => setActiveCell(null)}
                  className={`w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-[2px] border transition-all cursor-pointer hover:scale-125 ${getCellColor(
                    level
                  )}`}
                  title={`Row ${rIdx + 1}, Week ${cIdx + 1}: Intensity ${level}`}
                />
              ))
            )}
          </div>
        </div>

        {/* Grid Action Footer */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <span className="text-[11px] font-mono text-slate-500">
            💡 Tip: Click any square on the matrix to toggle its green intensity level.
          </span>

          <div className="flex items-center gap-2">
            {fixed ? (
              <button
                onClick={handleReset}
                className="px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center gap-1.5 transition-all"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset 404 Canvas</span>
              </button>
            ) : (
              <button
                onClick={handleCommitFix}
                disabled={isCommitting}
                className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 flex items-center gap-2 shadow-lg shadow-emerald-500/20 hover:scale-105 transition-all"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{isCommitting ? 'Writing Backdated Commit...' : '✨ Commit 404 Hotfix'}</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Suggested Destination Quick Cards */}
      <div className="space-y-4">
        <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
          <Compass className="w-4 h-4 text-emerald-400" />
          <span>Recommended Branches & Developer Tools</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            {
              title: 'Badge Studio & Shields',
              desc: 'Generate 50+ branded profile shields with 1-click HTML stack basket.',
              icon: Shield,
              href: '/tools/github-badges',
              color: 'text-cyan-400',
              bg: 'bg-cyan-500/10 border-cyan-500/20',
            },
            {
              title: 'Contribution Art Studio',
              desc: 'Draw pixel text and craft authentic backdated commit patterns.',
              icon: Palette,
              href: '/tools/art-studio',
              color: 'text-emerald-400',
              bg: 'bg-emerald-500/10 border-emerald-500/20',
            },
            {
              title: 'Developer Blog & Guides',
              desc: 'Deep dives on GitHub algorithms, README badges, and CLI tips.',
              icon: BookOpen,
              href: '/blog',
              color: 'text-purple-400',
              bg: 'bg-purple-500/10 border-purple-500/20',
            },
            {
              title: 'Developer Tools Hub',
              desc: 'Explore the full suite of visualizers, scripts, and theme presets.',
              icon: Sparkles,
              href: '/tools',
              color: 'text-teal-400',
              bg: 'bg-teal-500/10 border-teal-500/20',
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.title}
                href={item.href}
                className={`p-4 rounded-2xl border transition-all hover:scale-[1.02] flex flex-col justify-between group ${
                  isDarkMode
                    ? 'bg-slate-900/70 border-slate-800 hover:border-emerald-500/40 hover:bg-slate-800/80'
                    : 'bg-white border-slate-200 hover:border-emerald-500/50 shadow-sm'
                }`}
              >
                <div className="space-y-2">
                  <div className={`w-8 h-8 rounded-xl border flex items-center justify-center ${item.bg}`}>
                    <Icon className={`w-4 h-4 ${item.color}`} />
                  </div>
                  <h4 className="text-xs font-bold group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className={`text-[11px] leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 flex items-center gap-1 text-[11px] font-mono font-bold text-emerald-400">
                  <span>Explore Tool</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Return to Base CTA */}
      <div className="text-center pt-2">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 border border-slate-700 hover:border-emerald-500 text-slate-200 font-bold text-xs hover:scale-105 transition-all shadow-lg"
        >
          <ArrowLeft className="w-4 h-4 text-emerald-400" />
          <span>Return to GitLegacy Homepage</span>
        </Link>
      </div>
    </div>
  );
}
