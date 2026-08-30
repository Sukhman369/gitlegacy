'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { THEMES } from '../../lib/theme-config';
import { useTheme } from '../../context/ThemeContext';
import {
  Palette,
  Play,
  GitPullRequest,
  Sparkles,
  Check,
  Copy,
  ExternalLink,
  BookOpen,
  PlusCircle,
} from 'lucide-react';

export default function ThemesPage() {
  const { isDarkMode } = useTheme();
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const themeSnippet = `{
  id: 'my-custom-theme',
  name: 'Nord Frost',
  isDark: true,
  levels: ['#2e3440', '#3b4252', '#4c566a', '#88c0d0', '#8fbcbb'],
}`;

  const handleCopySnippet = () => {
    navigator.clipboard.writeText(themeSnippet);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <div
      className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${
        isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      <Header />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-10 w-full space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-wider whitespace-nowrap ${
              isDarkMode
                ? 'bg-purple-500/10 border-purple-500/20 text-purple-400'
                : 'bg-purple-50 border-purple-200 text-purple-700'
            }`}
          >
            <Palette className="h-3.5 w-3.5" />
            <span>Custom Color Palettes</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            GitHub Contribution <span className="text-purple-500">Theme Gallery</span>
          </h1>

          <p className={`text-base sm:text-lg ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Preview 6 curated color themes engineered for high-contrast contribution art visibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {THEMES.map((theme) => (
            <div
              key={theme.id}
              className={`rounded-2xl border p-6 flex flex-col justify-between transition-all hover:scale-[1.02] ${
                isDarkMode
                  ? 'bg-slate-900/90 border-slate-800 text-slate-100'
                  : 'bg-white border-slate-200 text-slate-900 shadow-sm'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{theme.name}</h3>
                  <span className="text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
                    {theme.id}
                  </span>
                </div>

                {/* Color Swatch Bar */}
                <div className={`flex items-center gap-2 p-2 rounded-xl border justify-between ${
                  isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  {theme.levels.map((color, idx) => (
                    <div
                      key={idx}
                      style={{ backgroundColor: color }}
                      className="h-8 flex-1 rounded-md border border-slate-700/50 shadow-inner"
                      title={`Level ${idx}: ${color}`}
                    />
                  ))}
                </div>

                <div className="grid grid-cols-5 gap-1 pt-1">
                  {[0, 1, 2, 3, 4].map((lvl) => (
                    <span key={lvl} className="text-[10px] font-mono text-center text-slate-500">
                      Lvl {lvl}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`mt-6 pt-4 border-t flex items-center justify-between ${
                isDarkMode ? 'border-slate-800/60' : 'border-slate-100'
              }`}>
                <span className="text-xs text-slate-400 font-mono">5 Intensity Levels</span>
                <Link
                  href={`/tools/art-studio?theme=${encodeURIComponent(theme.id)}`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-purple-500 hover:bg-purple-600 text-white font-bold text-xs hover:scale-105 transition-all shadow-md"
                >
                  <Play className="h-3.5 w-3.5 fill-white" />
                  <span>Apply to Art Studio</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Community Theme Motivator Banner */}
        <section className={`relative overflow-hidden rounded-3xl border p-8 sm:p-10 transition-all ${
          isDarkMode
            ? 'bg-gradient-to-br from-purple-950/40 via-slate-900/80 to-slate-950 border-purple-500/30'
            : 'bg-gradient-to-br from-purple-50 via-white to-slate-50 border-purple-200 shadow-lg'
        }`}>
          {/* Subtle Background Glow Accent */}
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                isDarkMode
                  ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                  : 'bg-purple-100 text-purple-800 border border-purple-200'
              }`}>
                <PlusCircle className="w-4 h-4 text-purple-400" />
                <span>Open Source Contribution</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
                Missing your favorite palette?{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
                  Add it in 2 minutes!
                </span>
              </h2>

              <p className={`text-sm sm:text-base leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                From <strong>Catppuccin</strong>, <strong>Nord</strong>, and <strong>Gruvbox</strong> to custom neon aesthetic gradients — GitLegacy is open-source. Anyone can contribute a 5-level commit intensity theme with a single GitHub Pull Request.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href="https://github.com/Sukhman369/gitlegacy"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-lg transition-transform hover:scale-105 active:scale-95"
                >
                  <GitPullRequest className="w-4 h-4" />
                  <span>Submit Theme on GitHub</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>

                <Link
                  href="/contribute"
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border font-bold text-xs transition-all ${
                    isDarkMode
                      ? 'bg-slate-900/80 border-slate-700 text-slate-200 hover:bg-slate-800 hover:text-white'
                      : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-slate-900 shadow-xs'
                  }`}
                >
                  <BookOpen className="w-4 h-4 text-purple-400" />
                  <span>View Contribution Guide</span>
                </Link>
              </div>
            </div>

            {/* Right Interactive Code Blueprint Box */}
            <div className="lg:col-span-5">
              <div className={`rounded-2xl border p-4.5 space-y-3 font-mono text-xs shadow-xl ${
                isDarkMode ? 'bg-[#0d1117] border-slate-800' : 'bg-slate-900 text-slate-100 border-slate-800'
              }`}>
                <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 text-[11px] text-slate-400">
                  <span className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span>src/lib/theme-config.ts</span>
                  </span>
                  <button
                    onClick={handleCopySnippet}
                    className="flex items-center gap-1 text-[10px] text-purple-300 hover:text-white px-2 py-1 rounded bg-slate-800 border border-slate-700 transition-colors"
                  >
                    {copiedSnippet ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy Template</span>
                      </>
                    )}
                  </button>
                </div>

                <pre className="text-[11px] text-emerald-400 overflow-x-auto leading-relaxed custom-scrollbar p-1">
                  <code>{themeSnippet}</code>
                </pre>

                <p className="text-[10px] text-slate-400 font-sans pt-1">
                  💡 Just provide 5 hex codes from Level 0 (empty) to Level 4 (peak intensity).
                </p>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
