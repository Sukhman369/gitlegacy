'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';
import {
  Palette,
  BarChart3,
  ShieldCheck,
  Share2,
  LayoutTemplate,
  ArrowRight,
  Sparkles,
  Copy,
  Check,
} from 'lucide-react';

export function ToolsHubGrid({ showTitle = true }: { showTitle?: boolean }) {
  const { isDarkMode } = useTheme();
  
  // Interactive Bento State
  const [bentoWord, setBentoWord] = useState('OCTO');
  const [copiedShield, setCopiedShield] = useState<string | null>(null);

  const handleCopyShield = (shieldName: string) => {
    setCopiedShield(shieldName);
    navigator.clipboard?.writeText(`[![${shieldName}](https://img.shields.io/badge/${shieldName}-000000?style=for-the-badge&logo=${shieldName.toLowerCase()}&logoColor=white)](https://gitlegacy.co)`);
    setTimeout(() => setCopiedShield(null), 1500);
  };

  return (
    <section className="w-full space-y-6">
      {showTitle && (
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
          <div>
            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2 ${
              isDarkMode
                ? 'bg-slate-900 border border-slate-800 text-emerald-400'
                : 'bg-slate-100 border border-slate-200 text-emerald-700'
            }`}>
              <Sparkles className="w-3.5 h-3.5" />
              <span>Crafted for GitHub Developers</span>
            </div>
            <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Developer Tools <span className="text-emerald-500">Suite</span>
            </h2>
          </div>

          <p className={`text-xs max-w-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Interactive studios for contribution art, badges, history telemetry, and automation scripts.
          </p>
        </div>
      )}

      {/* Bento Matrix Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Bento Item 1: Contribution Art Planner (Spans 2 cols) */}
        <div className={`md:col-span-2 lg:col-span-2 p-6 rounded-2xl border flex flex-col justify-between transition-all duration-200 ${
          isDarkMode
            ? 'bg-slate-900/80 border-slate-800 hover:border-emerald-500/40'
            : 'bg-white border-slate-200 hover:border-emerald-500/50 shadow-sm'
        }`}>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className={`p-2.5 rounded-xl border ${isDarkMode ? 'bg-slate-950 border-slate-800 text-emerald-400' : 'bg-slate-100 border-slate-200 text-emerald-600'}`}>
                  <Palette className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold">Contribution Art Planner</h3>
                  <p className="text-xs text-slate-400">53-Week Pixel Matrix Engine</p>
                </div>
              </div>
              <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Live Interactive
              </span>
            </div>

            <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Design pixel artwork and custom alphanumeric slogans across your GitHub contribution graph with live 53-week alignment.
            </p>

            {/* Embedded Micro-Canvas Preview */}
            <div className={`p-3.5 rounded-xl border space-y-2.5 ${
              isDarkMode ? 'bg-slate-950/80 border-slate-800/80' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Preview Matrix:</span>
                <div className="flex gap-1">
                  {['OCTO', 'HIRE', 'CODE', 'DEV'].map((w) => (
                    <button
                      key={w}
                      onClick={() => setBentoWord(w)}
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        bentoWord === w ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:text-white'
                      }`}
                    >
                      {w}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mini Simulated Pixel Strip */}
              <div className="flex gap-1 overflow-hidden py-1 justify-center">
                {Array.from({ length: 28 }).map((_, col) => (
                  <div key={col} className="flex flex-col gap-1">
                    {Array.from({ length: 5 }).map((_, row) => {
                      const isLit = (col + row) % 3 === 0 || (col * row) % 4 === 1;
                      return (
                        <div
                          key={row}
                          className={`w-2.5 h-2.5 rounded-[2px] transition-colors ${
                            isLit
                              ? isDarkMode ? 'bg-emerald-400' : 'bg-emerald-600'
                              : isDarkMode ? 'bg-slate-800' : 'bg-slate-200'
                          }`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between">
            <span className="text-[11px] font-mono text-slate-400">Word: &quot;{bentoWord}&quot;</span>
            <Link
              href={`/tools/art-studio?text=${encodeURIComponent(bentoWord)}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <span>Launch Studio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Bento Item 2: Badge & Shield Studio (Spans 2 cols) */}
        <div className={`md:col-span-1 lg:col-span-2 p-6 rounded-2xl border flex flex-col justify-between transition-all duration-200 ${
          isDarkMode
            ? 'bg-slate-900/80 border-slate-800 hover:border-cyan-500/40'
            : 'bg-white border-slate-200 hover:border-cyan-500/50 shadow-sm'
        }`}>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className={`p-2.5 rounded-xl border ${isDarkMode ? 'bg-slate-950 border-slate-800 text-cyan-400' : 'bg-slate-100 border-slate-200 text-cyan-600'}`}>
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold">Badge & Shield Studio</h3>
                  <p className="text-xs text-slate-400">150+ Verified Shields</p>
                </div>
              </div>
              <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                1-Click Basket
              </span>
            </div>

            <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Curate high-impact tech stack badges across 16 categories with verified brand logos and direct Markdown output.
            </p>

            {/* Embedded Live Shield Samples */}
            <div className={`p-3 rounded-xl border flex flex-wrap gap-2 items-center ${
              isDarkMode ? 'bg-slate-950/80 border-slate-800/80' : 'bg-slate-50 border-slate-200'
            }`}>
              {[
                { name: 'Next.js', color: 'bg-black text-white' },
                { name: 'TypeScript', color: 'bg-blue-600 text-white' },
                { name: 'React', color: 'bg-cyan-500 text-slate-950' },
                { name: 'Docker', color: 'bg-sky-600 text-white' },
              ].map((s) => (
                <button
                  key={s.name}
                  onClick={() => handleCopyShield(s.name)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-bold font-mono border border-slate-700 flex items-center gap-1.5 transition-transform hover:scale-105 active:scale-95 ${s.color}`}
                  title="Click to copy badge markdown"
                >
                  <span>{s.name}</span>
                  {copiedShield === s.name ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-2.5 h-2.5 opacity-60" />}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between">
            <span className="text-[11px] font-mono text-slate-400">16 Categories</span>
            <Link
              href="/tools/github-badges"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>Explore Badges</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Bento Item 3: GitHub History Visualizer (1 col) */}
        <div className={`p-5 rounded-2xl border flex flex-col justify-between transition-all duration-200 ${
          isDarkMode
            ? 'bg-slate-900/80 border-slate-800 hover:border-teal-500/40'
            : 'bg-white border-slate-200 hover:border-teal-500/50 shadow-sm'
        }`}>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-teal-400" />
              <h4 className="text-sm font-bold">History Visualizer</h4>
            </div>
            <p className="text-xs text-slate-400">
              Fetch real 365-day contributions for any username and create dynamic SVG badges.
            </p>
            <div className={`p-2.5 rounded-lg border text-[11px] font-mono ${
              isDarkMode ? 'bg-slate-950 border-slate-800 text-teal-400' : 'bg-slate-50 border-slate-200 text-teal-700'
            }`}>
              $ gitlegacy fetch @username
            </div>
          </div>
          <Link
            href="/tools/history-visualizer"
            className="pt-3 text-xs font-bold text-teal-400 flex items-center gap-1 hover:text-teal-300 mt-2"
          >
            <span>Analyze User</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Bento Item 4: Preset Patterns Gallery (2 cols) */}
        <div className={`md:col-span-2 lg:col-span-2 p-5 rounded-2xl border flex flex-col justify-between transition-all duration-200 ${
          isDarkMode
            ? 'bg-slate-900/80 border-slate-800 hover:border-amber-500/40'
            : 'bg-white border-slate-200 hover:border-amber-500/50 shadow-sm'
        }`}>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className={`p-2 rounded-xl border ${isDarkMode ? 'bg-slate-950 border-slate-800 text-amber-400' : 'bg-slate-100 border-slate-200 text-amber-600'}`}>
                  <LayoutTemplate className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold">Preset Patterns Gallery</h4>
                  <p className="text-xs text-slate-400">40+ Curated Grid Templates</p>
                </div>
              </div>
              <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                1-Click Studio Load
              </span>
            </div>

            <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Browse signature art templates for gaming, career branding, retro arcade icons, and tech stack initials.
            </p>

            <div className={`p-3 rounded-xl border flex flex-wrap gap-2 items-center ${
              isDarkMode ? 'bg-slate-950/80 border-slate-800/80' : 'bg-slate-50 border-slate-200'
            }`}>
              {[
                { name: '🕹️ INVADERS', text: 'INVADERS' },
                { name: '💼 HIRE ME', text: 'HIRE ME' },
                { name: '🚀 SPACESHIP', text: 'SPACESHIP' },
                { name: '❤️ HEART', text: 'HEART' },
              ].map((p) => (
                <Link
                  key={p.text}
                  href={`/tools/art-studio?text=${encodeURIComponent(p.text)}`}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-bold font-mono border transition-transform hover:scale-105 ${
                    isDarkMode
                      ? 'bg-slate-900 border-slate-700 text-amber-300 hover:border-amber-400'
                      : 'bg-white border-slate-200 text-amber-700 hover:border-amber-500 shadow-xs'
                  }`}
                >
                  {p.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between mt-2">
            <span className="text-[11px] font-mono text-slate-400">Gaming • Career • Logos</span>
            <Link
              href="/tools/presets"
              className="inline-flex items-center gap-1 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
            >
              <span>Explore Gallery</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Bento Item 5: Social Banner Exporter (1 col) */}
        <div className={`p-5 rounded-2xl border flex flex-col justify-between transition-all duration-200 ${
          isDarkMode
            ? 'bg-slate-900/80 border-slate-800 hover:border-purple-500/40'
            : 'bg-white border-slate-200 hover:border-purple-500/50 shadow-sm'
        }`}>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Share2 className="w-5 h-5 text-purple-400" />
              <h4 className="text-sm font-bold">Social Banner 4K</h4>
            </div>
            <p className="text-xs text-slate-400">
              Export 1500x500 X/Twitter & 1584x396 LinkedIn high-res covers.
            </p>
            <div className="h-8 rounded border border-purple-500/30 bg-purple-500/10 flex items-center justify-center text-[10px] font-mono text-purple-300">
              2x Retina Render Engine
            </div>
          </div>
          <Link
            href="/tools/art-studio#export-studio"
            className="pt-3 text-xs font-bold text-purple-400 flex items-center gap-1 hover:text-purple-300 mt-2"
          >
            <span>Export Banners</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </section>
  );
}
