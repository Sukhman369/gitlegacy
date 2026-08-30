'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowRight, Shield, Palette, Terminal, Layers } from 'lucide-react';
import { createYearlyCalendarGrid, applyPatternToCalendar } from '../lib/calendar-engine';

interface HeroSectionProps {
  onSelectPreset?: (text: string) => void;
  activeText?: string;
  isDarkMode?: boolean;
}

const PRESET_WORDS = ['LEGACY', 'HIRE ME', 'BUILD', '2026', 'CODE', 'SHIP'];

export const HeroSection: React.FC<HeroSectionProps> = ({
  isDarkMode = true,
}) => {
  const [inputText, setInputText] = useState('LEGACY');
  const currentYear = new Date().getFullYear();

  // Compute 53-week preview grid based on live input
  const previewGrid = useMemo(() => {
    const rawGrid = createYearlyCalendarGrid(currentYear);
    const populated = applyPatternToCalendar(rawGrid, {
      text: inputText || 'LEGACY',
      year: currentYear,
      intensityMaxCommits: 10,
      letterSpacing: 1,
      wordSpacing: 4,
      alignment: 'center',
      columnOffset: 0,
      themeId: isDarkMode ? 'github-dark' : 'github-light',
      drawingMode: 'select',
      drawIntensityLevel: 4,
    });
    return populated;
  }, [inputText, currentYear, isDarkMode]);

  // Color mapping based on theme and GitHub intensity level
  const getCellColor = (level: number) => {
    if (isDarkMode) {
      switch (level) {
        case 4: return 'bg-[#39d353] border-[#39d353] shadow-[0_0_8px_rgba(57,211,83,0.3)]';
        case 3: return 'bg-[#26a641] border-[#26a641]';
        case 2: return 'bg-[#006d32] border-[#006d32]';
        case 1: return 'bg-[#0e4429] border-[#0e4429]';
        default: return 'bg-[#161b22] border-[#21262d]';
      }
    } else {
      switch (level) {
        case 4: return 'bg-[#216e39] border-[#216e39]';
        case 3: return 'bg-[#30a14e] border-[#30a14e]';
        case 2: return 'bg-[#40c463] border-[#40c463]';
        case 1: return 'bg-[#9be9a8] border-[#9be9a8]';
        default: return 'bg-[#ebedf0] border-[#d0d7de]';
      }
    }
  };

  return (
    <section className="relative pt-6 pb-12 px-4 sm:px-6 max-w-7xl mx-auto space-y-8">
      {/* Top Header & Punchy Thesis */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold uppercase tracking-wider whitespace-nowrap ${
          isDarkMode
            ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
            : 'bg-emerald-50 border-emerald-200 text-emerald-700'
        }`}>
          <Terminal className="h-3.5 w-3.5" />
          <span>GitHub Contribution Art & Badge Studio</span>
        </div>

        <h1 className={`text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] ${
          isDarkMode ? 'text-white' : 'text-slate-900'
        }`}>
          Design your GitHub legacy <br className="hidden sm:inline" />
          <span className="text-emerald-500">before you write code.</span>
        </h1>

        <p className={`text-sm sm:text-base max-w-2xl mx-auto leading-relaxed ${
          isDarkMode ? 'text-slate-400' : 'text-slate-600'
        }`}>
          Create pixel-perfect 53-week contribution graphs, curate 150+ verified shields, and export automated commit strategies in seconds.
        </p>

        {/* Primary Action Buttons */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <Link
            href={`/tools/art-studio?text=${encodeURIComponent(inputText || 'LEGACY')}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/20 transition-all hover:scale-105 active:scale-95"
          >
            <Palette className="w-4 h-4" />
            <span>Launch Art Studio</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/tools/github-badges"
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold border transition-all hover:scale-105 active:scale-95 ${
              isDarkMode
                ? 'bg-slate-900 border-slate-800 text-slate-200 hover:bg-slate-800 hover:text-white'
                : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-slate-900 shadow-sm'
            }`}
          >
            <Shield className="w-4 h-4 text-cyan-400" />
            <span>Badge Studio</span>
          </Link>
        </div>
      </div>

      {/* Interactive Hero Canvas Artifact */}
      <div className={`p-4 sm:p-6 rounded-2xl border shadow-xl transition-all ${
        isDarkMode
          ? 'bg-slate-900/90 border-slate-800 text-slate-100'
          : 'bg-white border-slate-200 text-slate-900 shadow-sm'
      }`}>
        {/* Interactive Controls Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pb-4 border-b border-slate-800/80">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              LIVE CANVAS PREVIEW
            </span>
          </div>

          {/* Quick-Preset Pills & Input */}
          <div className="flex flex-wrap items-center gap-1.5">
            <div className="flex items-center gap-1 overflow-x-auto py-1">
              {PRESET_WORDS.map((preset) => (
                <button
                  key={preset}
                  onClick={() => setInputText(preset)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                    inputText === preset
                      ? 'bg-emerald-500 text-slate-950 shadow-sm'
                      : isDarkMode
                      ? 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                      : 'bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200'
                  }`}
                >
                  {preset}
                </button>
              ))}
            </div>

            <input
              type="text"
              value={inputText}
              maxLength={12}
              onChange={(e) => setInputText(e.target.value.toUpperCase())}
              placeholder="TYPE TEXT..."
              className={`w-28 sm:w-36 px-2.5 py-1 rounded-lg text-xs font-mono font-bold uppercase tracking-wider border outline-none transition-all ${
                isDarkMode
                  ? 'bg-slate-950 border-slate-800 text-emerald-400 placeholder:text-slate-600 focus:border-emerald-500'
                  : 'bg-slate-100 border-slate-300 text-emerald-700 placeholder:text-slate-400 focus:border-emerald-500'
              }`}
            />
          </div>
        </div>

        {/* Live Contribution Grid Rendering */}
        <div className="py-4 overflow-x-auto scrollbar-none">
          <div className="min-w-[700px] flex flex-col gap-1 select-none">
            {/* 7 Days Matrix Grid */}
            {[0, 1, 2, 3, 4, 5, 6].map((dayOfWeek) => (
              <div key={dayOfWeek} className="flex gap-1">
                {previewGrid.weeks.map((week, weekIdx) => {
                  const cell = week.days.find((d) => d.dayOfWeek === dayOfWeek);
                  const level = cell ? cell.level : 0;
                  return (
                    <div
                      key={weekIdx}
                      className={`w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-[2px] border transition-all duration-150 ${getCellColor(level)}`}
                      title={cell ? `${cell.date}: ${cell.commitCount} commits` : ''}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Developer Telemetry Bar */}
        <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-emerald-400" />
              <span>53-Week Calendar Engine</span>
            </span>
            <span className="hidden sm:inline-block text-slate-600">•</span>
            <span className="hidden sm:flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>Bash / Python / PowerShell</span>
            </span>
          </div>

          <Link
            href={`/tools/art-studio?text=${encodeURIComponent(inputText || 'LEGACY')}`}
            className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1 transition-colors"
          >
            <span>Edit in Full Studio</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </section>
  );
};
