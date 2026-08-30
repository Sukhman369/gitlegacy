'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import { Header } from './Header';
import { Footer } from './Footer';
import { ToolsHubGrid } from './ToolsHubGrid';
import { useTheme } from '../context/ThemeContext';
import { Sparkles, Terminal, GitPullRequest, BookOpen, ArrowRight, ExternalLink } from 'lucide-react';

function ToolsContent() {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-300 ${
        isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      <Header />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-12 space-y-12">
        {/* Tools Page Hero */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 whitespace-nowrap">
            <Sparkles className="w-4 h-4" />
            <span>Complete Developer Suite</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            GitLegacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Developer Tools Hub</span>
          </h1>
          <p className={`max-w-2xl mx-auto text-sm sm:text-base ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Explore our expanding catalog of contribution planners, real activity visualizers, profile badge generators, and commit automation tools.
          </p>
        </div>

        {/* Tools Suite Grid */}
        <div>
          <ToolsHubGrid showTitle={false} />
        </div>

        {/* Open Source & Extensibility Section - Sharp Boxy Developer Architecture */}
        <section className={`border-2 border-l-4 border-l-emerald-500 p-6 sm:p-8 transition-all ${
          isDarkMode
            ? 'bg-slate-900/90 border-emerald-500/30'
            : 'bg-white border-emerald-300 shadow-md'
        }`}>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className={`inline-flex items-center gap-2 px-3 py-1 border text-xs font-mono font-bold uppercase tracking-wider ${
                isDarkMode
                  ? 'bg-emerald-950/60 text-emerald-400 border-emerald-500/40'
                  : 'bg-emerald-50 text-emerald-900 border-emerald-300'
              }`}>
                <Terminal className="w-3.5 h-3.5" />
                <span>Open Source & MIT Licensed</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black tracking-tight font-sans">
                Build, Fork & Extend GitLegacy
              </h2>

              <p className={`text-xs sm:text-sm leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                GitLegacy is built with Next.js, TypeScript, and TailwindCSS. The platform is modular — easily contribute 53-week matrix algorithms, color palettes, tech badges, or social export layouts.
              </p>
            </div>

            {/* Action Buttons - Sharp Rectangular Styling */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto shrink-0">
              <a
                href="https://github.com/Sukhman369/gitlegacy"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-6 border border-emerald-400/60 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-transform hover:scale-[1.02] active:scale-95 text-center"
              >
                <GitPullRequest className="w-4 h-4" />
                <span>Fork on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              <Link
                href="/contribute"
                className={`py-3 px-6 border font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all hover:scale-[1.02] text-center ${
                  isDarkMode
                    ? 'bg-slate-950 border-slate-700 hover:bg-slate-800 text-slate-200 hover:text-white'
                    : 'bg-slate-50 border-slate-300 hover:bg-slate-100 text-slate-800 shadow-xs'
                }`}
              >
                <BookOpen className="w-4 h-4 text-emerald-500" />
                <span>Contribution Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export function ToolsPageClient() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center font-mono text-sm">
          Loading Tools Library...
        </div>
      }
    >
      <ToolsContent />
    </Suspense>
  );
}
