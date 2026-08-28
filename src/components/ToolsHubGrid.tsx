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
  Terminal,
  ArrowRight,
  Sparkles,
  Wrench,
  Code2,
  Copy,
  Check,
  Play,
  Monitor,
  FolderGit2,
  FileCode2,
  Cpu,
  Layers,
} from 'lucide-react';

export function ToolsHubGrid({ showTitle = true }: { showTitle?: boolean }) {
  const { isDarkMode } = useTheme();
  const [activeDirection, setActiveDirection] = useState<'bento' | 'blueprint' | 'terminal'>('bento');
  
  // Interactive Bento State
  const [bentoWord, setBentoWord] = useState('OCTO');
  const [copiedShield, setCopiedShield] = useState<string | null>(null);
  const [scriptLang, setScriptLang] = useState<'bash' | 'py' | 'ps1'>('bash');

  // Terminal IDE State
  const [activeTab, setActiveTab] = useState<'planner' | 'badges' | 'history' | 'scripts' | 'banner'>('planner');

  const handleCopyShield = (shieldName: string) => {
    setCopiedShield(shieldName);
    navigator.clipboard?.writeText(`[![${shieldName}](https://img.shields.io/badge/${shieldName}-000000?style=for-the-badge&logo=${shieldName.toLowerCase()}&logoColor=white)](https://gitlegacy.co)`);
    setTimeout(() => setCopiedShield(null), 1500);
  };

  /* -------------------------------------------------------------------------- */
  /* DIRECTION 1: INTERACTIVE BENTO MATRIX WITH LIVE MICRO-DEMOS                */
  /* -------------------------------------------------------------------------- */
  const renderBentoDirection = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Bento Item 1: Contribution Art Planner (Spans 2 cols, 2 rows) */}
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

        {/* Bento Item 2: Badge & Shield Studio (2 cols) */}
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

        {/* Bento Item 4: Automation Script Engine (2 cols) */}
        <div className={`md:col-span-2 lg:col-span-2 p-5 rounded-2xl border flex flex-col justify-between transition-all duration-200 ${
          isDarkMode
            ? 'bg-slate-900/80 border-slate-800 hover:border-emerald-500/40'
            : 'bg-white border-slate-200 hover:border-emerald-500/50 shadow-sm'
        }`}>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal className="w-5 h-5 text-emerald-400" />
                <h4 className="text-sm font-bold">Automation Script Engine</h4>
              </div>
              <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800">
                {(['bash', 'py', 'ps1'] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => setScriptLang(l)}
                    className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                      scriptLang === l ? 'bg-emerald-500 text-slate-950' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    .{l}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-[11px] font-mono text-emerald-400 overflow-x-auto">
              <code>
                {scriptLang === 'bash' && `GIT_AUTHOR_DATE="2026-04-12T12:00:00" git commit --allow-empty -m "legacy"`}
                {scriptLang === 'py' && `os.environ["GIT_AUTHOR_DATE"] = "2026-04-12T12:00:00"; subprocess.run(...)`}
                {scriptLang === 'ps1' && `$env:GIT_AUTHOR_DATE="2026-04-12T12:00:00"; git commit -m "legacy"`}
              </code>
            </div>
          </div>

          <Link
            href="/tools/script-generator"
            className="pt-3 text-xs font-bold text-emerald-400 flex items-center gap-1 hover:text-emerald-300 mt-2"
          >
            <span>Export Automation Scripts</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
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
    );
  };

  /* -------------------------------------------------------------------------- */
  /* DIRECTION 2: MONOLITHIC MONOSPACE BLUEPRINT GRID (LINEAR / VERCEL DOCS)    */
  /* -------------------------------------------------------------------------- */
  const renderBlueprintDirection = () => {
    const blueprintItems = [
      {
        idx: '01',
        name: 'CONTRIBUTION_ART_PLANNER',
        badge: 'ENGINE_53W',
        desc: '53-week alphanumeric matrix mapping with custom intensity distribution and column offsets.',
        tag: 'ART_STUDIO',
        href: '/tools/art-studio',
        icon: Palette,
      },
      {
        idx: '02',
        name: 'BADGE_AND_SHIELD_STUDIO',
        badge: '150_SHIELDS',
        desc: 'Curated developer shields with 1-click stack basket and multi-format HTML/Markdown exports.',
        tag: 'SHIELDS_IO',
        href: '/tools/github-badges',
        icon: ShieldCheck,
      },
      {
        idx: '03',
        name: 'REAL_HISTORY_VISUALIZER',
        badge: 'LIVE_SVG',
        desc: 'Extract 365-day commit telemetry for any public GitHub handle with real-time SVG card generation.',
        tag: 'TELEMETRY',
        href: '/tools/history-visualizer',
        icon: BarChart3,
      },
      {
        idx: '04',
        name: 'AUTOMATION_SCRIPT_CLI',
        badge: 'ZERO_DEP',
        desc: 'Standalone Bash, Python, and PowerShell execution scripts to automatically commit matrices.',
        tag: 'CLI_EXPORT',
        href: '/tools/script-generator',
        icon: Terminal,
      },
      {
        idx: '05',
        name: 'SOCIAL_BANNER_4K_EXPORTER',
        badge: 'RETINA_DPI',
        desc: 'High-res header exports formatted for Twitter/X (1500x500) and LinkedIn (1584x396) cover specs.',
        tag: 'MEDIA_EXPORT',
        href: '/tools/art-studio#export-studio',
        icon: Share2,
      },
      {
        idx: '06',
        name: 'PRESET_PATTERN_GALLERY',
        badge: 'TEMPLATES',
        desc: 'Categorized pre-drawn arcade art, career banners, and ecosystem matrices ready to load.',
        tag: 'CATALOG',
        href: '/tools/presets',
        icon: LayoutTemplate,
      },
    ];

    return (
      <div className={`rounded-2xl border overflow-hidden transition-all ${
        isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
      }`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-800/80">
          {blueprintItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.idx}
                href={item.href}
                className={`p-6 flex flex-col justify-between group transition-colors relative ${
                  index >= 3 ? 'border-t border-slate-800/80' : ''
                } ${
                  isDarkMode
                    ? 'hover:bg-slate-900/60'
                    : 'hover:bg-slate-50'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-500 font-bold tracking-widest">[{item.idx}]</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold border border-slate-800 text-emerald-400 bg-slate-900">
                      {item.badge}
                    </span>
                  </div>

                  <div className="space-y-1.5 pt-1">
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-emerald-500" />
                      <h4 className="text-sm font-bold font-mono tracking-tight group-hover:text-emerald-400 transition-colors">
                        {item.name}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-6 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>TAG: {item.tag}</span>
                  <span className="text-emerald-400 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    <span>EXECUTE</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  };

  /* -------------------------------------------------------------------------- */
  /* DIRECTION 3: TERMINAL / IDE WORKSPACE WITH FILE TABS                       */
  /* -------------------------------------------------------------------------- */
  const renderTerminalDirection = () => {
    const tabs = [
      { id: 'planner', name: 'contribution-studio.tsx', icon: Palette, title: 'Contribution Art Planner' },
      { id: 'badges', name: 'badges-studio.sh', icon: ShieldCheck, title: 'Developer Badge Studio' },
      { id: 'history', name: 'history-analyzer.svg', icon: BarChart3, title: 'Real History Visualizer' },
      { id: 'scripts', name: 'script-exporter.py', icon: Terminal, title: 'Automation Script Exporter' },
      { id: 'banner', name: 'retina-banner.canvas', icon: Share2, title: 'Social Banner Exporter' },
    ] as const;

    const currentTabInfo = tabs.find((t) => t.id === activeTab)!;

    return (
      <div className={`rounded-2xl border overflow-hidden shadow-2xl transition-all ${
        isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-900 border-slate-800 text-white shadow-xl'
      }`}>
        {/* Terminal Tab Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-xs font-mono text-slate-500 hidden sm:inline">gitlegacy-workspace</span>
          </div>

          <div className="flex items-center gap-1">
            {tabs.map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-medium transition-all ${
                    isActive
                      ? 'bg-slate-950 text-emerald-400 border border-slate-800 shadow-sm font-bold'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  <TabIcon className="w-3.5 h-3.5" />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Tool Workbench Body */}
        <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          <div className="lg:col-span-2 space-y-4 font-mono text-xs">
            <div className="flex items-center gap-2 text-emerald-400 font-bold">
              <Terminal className="w-4 h-4" />
              <span>$ gitlegacy run --tool={activeTab} --mode=interactive</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800/90 space-y-2 text-slate-300 leading-relaxed">
              <p className="text-slate-400"># Tool Definition:</p>
              <h3 className="text-base font-bold text-white font-sans">{currentTabInfo.title}</h3>
              <p className="text-xs text-slate-400 font-sans">
                {activeTab === 'planner' && 'Pixel-accurate alphanumeric text generator with full alignment and intensity controls.'}
                {activeTab === 'badges' && 'Curate 150+ technology shields with 1-click Markdown baskets and brand colors.'}
                {activeTab === 'history' && 'Fetch real GitHub activity stream and generate dynamic live README cards.'}
                {activeTab === 'scripts' && 'Export backdated Git commit scripts in Bash, Python, and PowerShell.'}
                {activeTab === 'banner' && 'Render 2x Retina high-resolution banner graphics for social profiles.'}
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-[11px] text-slate-400 font-mono">
                <span className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-cyan-400">Status: READY</span>
                <span className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-emerald-400">Zero Dependencies</span>
                <span className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-purple-400">Client-Side Privacy</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 justify-center items-center lg:items-end">
            <Link
              href={
                activeTab === 'planner'
                  ? '/tools/art-studio'
                  : activeTab === 'badges'
                  ? '/tools/github-badges'
                  : activeTab === 'history'
                  ? '/tools/history-visualizer'
                  : activeTab === 'scripts'
                  ? '/tools/script-generator'
                  : '/tools/art-studio#export-studio'
              }
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/20 transition-all hover:scale-105 active:scale-95 font-sans"
            >
              <Play className="w-4 h-4 fill-slate-950" />
              <span>Launch {currentTabInfo.title}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/tools"
              className="text-xs font-mono text-slate-400 hover:text-slate-200 transition-colors"
            >
              [ View all tools index ↗ ]
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="w-full space-y-6">
      {showTitle && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
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

          {/* Interactive Layout Direction Switcher */}
          <div className="flex items-center p-1 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono">
            <button
              onClick={() => setActiveDirection('bento')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeDirection === 'bento'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              1. Bento Matrix
            </button>
            <button
              onClick={() => setActiveDirection('blueprint')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeDirection === 'blueprint'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              2. Blueprint Grid
            </button>
            <button
              onClick={() => setActiveDirection('terminal')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeDirection === 'terminal'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              3. Terminal IDE
            </button>
          </div>
        </div>
      )}

      {/* Render Active Direction */}
      {activeDirection === 'bento' && renderBentoDirection()}
      {activeDirection === 'blueprint' && renderBlueprintDirection()}
      {activeDirection === 'terminal' && renderTerminalDirection()}
    </section>
  );
}
