'use client';

import React, { useState } from 'react';
import { Copy, Check, Eye, Moon, Sun, Monitor, Code2, Sparkles, Terminal, FileText, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export interface TechBadgeItem {
  name: string;
  logo: string;
  color: string;
  category: string;
}

export interface CustomShieldConfig {
  label: string;
  message: string;
  color: string;
  style: string;
  logo: string;
  logoColor: string;
}

interface LiveReadmePreviewProps {
  selectedBadges: string[];
  allBadges: TechBadgeItem[];
  badgeStyle: 'for-the-badge' | 'flat' | 'flat-square' | 'plastic' | 'social';
  customShield: CustomShieldConfig;
  basketFormat: 'left-html' | 'centered-html' | 'multiline-md' | 'inline-md';
  onFormatChange: (format: 'left-html' | 'centered-html' | 'multiline-md' | 'inline-md') => void;
  onCopyCode: (code: string, id: string) => void;
  copiedId: string | null;
}

export const LiveReadmePreview: React.FC<LiveReadmePreviewProps> = ({
  selectedBadges,
  allBadges,
  badgeStyle,
  customShield,
  basketFormat,
  onFormatChange,
  onCopyCode,
  copiedId,
}) => {
  const { isDarkMode } = useTheme();
  const [readmeTheme, setReadmeTheme] = useState<'github-dark' | 'github-light' | 'github-dimmed'>('github-dark');
  const [showRawMarkdown, setShowRawMarkdown] = useState<boolean>(false);
  const [profileName, setProfileName] = useState<string>('Developer');

  const GITLEGACY_TOOL_URL = 'https://gitlegacy.co/tools/github-badges';
  const GITLEGACY_API_BASE = 'https://gitlegacy.co/api/badge/shield';

  const selectedBadgeObjects = allBadges.filter((b) => selectedBadges.includes(b.name));

  // Custom shield URLs
  const logoQuery = customShield.logo && customShield.logo !== 'none' ? `&logo=${customShield.logo}&logoColor=${encodeURIComponent(customShield.logoColor)}` : '';
  const customShieldLocalUrl = `/api/badge/shield?label=${encodeURIComponent(customShield.label)}&message=${encodeURIComponent(customShield.message)}&color=${customShield.color}&style=${customShield.style}${logoQuery}`;
  const customShieldProdUrl = `${GITLEGACY_API_BASE}?label=${encodeURIComponent(customShield.label)}&message=${encodeURIComponent(customShield.message)}&color=${customShield.color}&style=${customShield.style}${logoQuery}`;

  // Generate HTML/Markdown snippet for Stack Basket
  const generateBasketCode = (format: 'left-html' | 'centered-html' | 'multiline-md' | 'inline-md') => {
    if (selectedBadgeObjects.length === 0) return '';
    if (format === 'left-html') {
      const imgTags = selectedBadgeObjects
        .map(
          (b) =>
            `  <a href="${GITLEGACY_TOOL_URL}" target="_blank" rel="noopener noreferrer"><img src="${GITLEGACY_API_BASE}?name=${encodeURIComponent(b.name)}&color=${b.color}&style=${badgeStyle}&logo=${b.logo}&logoColor=white" alt="${b.name}" /></a>`
        )
        .join('\n');
      return `<p align="left">\n${imgTags}\n</p>`;
    } else if (format === 'centered-html') {
      const imgTags = selectedBadgeObjects
        .map(
          (b) =>
            `  <a href="${GITLEGACY_TOOL_URL}" target="_blank" rel="noopener noreferrer"><img src="${GITLEGACY_API_BASE}?name=${encodeURIComponent(b.name)}&color=${b.color}&style=${badgeStyle}&logo=${b.logo}&logoColor=white" alt="${b.name}" /></a>`
        )
        .join('\n');
      return `<p align="center">\n${imgTags}\n</p>`;
    } else if (format === 'multiline-md') {
      return selectedBadgeObjects
        .map(
          (b) =>
            `[![${b.name}](${GITLEGACY_API_BASE}?name=${encodeURIComponent(b.name)}&color=${b.color}&style=${badgeStyle}&logo=${b.logo}&logoColor=white)](${GITLEGACY_TOOL_URL})`
        )
        .join('\n');
    } else {
      return selectedBadgeObjects
        .map(
          (b) =>
            `[![${b.name}](${GITLEGACY_API_BASE}?name=${encodeURIComponent(b.name)}&color=${b.color}&style=${badgeStyle}&logo=${b.logo}&logoColor=white)](${GITLEGACY_TOOL_URL})`
        )
        .join(' ');
    }
  };

  const fullReadmeSnippet = `### Hi there, I'm ${profileName} 👋

[![${customShield.label}](${customShieldProdUrl})](${GITLEGACY_TOOL_URL})

#### 🛠️ Tech Stack & Skills
${generateBasketCode(basketFormat) || `<!-- Select badges above to build your tech stack basket -->`}`;

  // Styles based on GitHub theme
  const themeStyles = {
    'github-dark': {
      bg: 'bg-[#0d1117]',
      border: 'border-[#30363d]',
      textPrimary: 'text-[#c9d1d9]',
      textHeading: 'text-[#f0f6fc]',
      headerBg: 'bg-[#161b22]',
      codeBg: 'bg-[#161b22]',
      pillBg: 'bg-[#21262d]',
      accentColor: '#58a6ff',
    },
    'github-light': {
      bg: 'bg-[#ffffff]',
      border: 'border-[#d0d7de]',
      textPrimary: 'text-[#24292f]',
      textHeading: 'text-[#1f2328]',
      headerBg: 'bg-[#f6f8fa]',
      codeBg: 'bg-[#f6f8fa]',
      pillBg: 'bg-[#f3f4f6]',
      accentColor: '#0969da',
    },
    'github-dimmed': {
      bg: 'bg-[#22272e]',
      border: 'border-[#444c56]',
      textPrimary: 'text-[#adbac7]',
      textHeading: 'text-[#cdd9e5]',
      headerBg: 'bg-[#2d333b]',
      codeBg: 'bg-[#2d333b]',
      pillBg: 'bg-[#373e47]',
      accentColor: '#539bf5',
    },
  }[readmeTheme];

  return (
    <div className={`p-6 sm:p-8 rounded-2xl border shadow-2xl space-y-6 ${
      isDarkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
    }`}>
      {/* Header & Control Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4 border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400">
            <Eye className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold">Live GitHub README Container Preview</h3>
              <span className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                Interactive Preview
              </span>
            </div>
            <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              Real-time preview of how your badge basket & status shield will render inside an authentic GitHub Profile README.
            </p>
          </div>
        </div>

        {/* Controls: GitHub Theme Switcher & View Toggle */}
        <div className="flex flex-wrap items-center gap-2">
          {/* GitHub Theme Buttons */}
          <div className="flex items-center p-1 rounded-xl bg-slate-950 border border-slate-800">
            <button
              onClick={() => setReadmeTheme('github-dark')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                readmeTheme === 'github-dark'
                  ? 'bg-slate-800 text-cyan-400 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Moon className="w-3.5 h-3.5" />
              <span>GitHub Dark</span>
            </button>

            <button
              onClick={() => setReadmeTheme('github-light')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                readmeTheme === 'github-light'
                  ? 'bg-slate-200 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sun className="w-3.5 h-3.5" />
              <span>GitHub Light</span>
            </button>

            <button
              onClick={() => setReadmeTheme('github-dimmed')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                readmeTheme === 'github-dimmed'
                  ? 'bg-slate-700 text-blue-300 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Dimmed</span>
            </button>
          </div>

          {/* Raw Markdown vs Rendered Toggle */}
          <button
            onClick={() => setShowRawMarkdown(!showRawMarkdown)}
            className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 border transition-all ${
              showRawMarkdown
                ? 'bg-purple-500/20 text-purple-300 border-purple-500/40'
                : isDarkMode
                ? 'bg-slate-950 border-slate-800 text-slate-300 hover:text-white'
                : 'bg-slate-100 border-slate-300 text-slate-700 hover:text-slate-900'
            }`}
          >
            {showRawMarkdown ? <Eye className="w-3.5 h-3.5" /> : <Code2 className="w-3.5 h-3.5" />}
            <span>{showRawMarkdown ? 'Rendered View' : 'Raw Markdown'}</span>
          </button>
        </div>
      </div>

      {/* GitHub Profile README Mockup Window */}
      <div className={`rounded-xl border shadow-2xl overflow-hidden transition-all duration-300 ${themeStyles.border} ${themeStyles.bg}`}>
        {/* Window Top Bar (Simulating github.com/user/README.md) */}
        <div className={`px-4 py-3 border-b flex items-center justify-between ${themeStyles.headerBg} ${themeStyles.border}`}>
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-slate-400" />
            <span className={`text-xs font-mono font-bold ${themeStyles.textHeading}`}>
              README.md
            </span>
            <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
              (Preview Mode: {readmeTheme === 'github-dark' ? 'Dark #0d1117' : readmeTheme === 'github-light' ? 'Light #ffffff' : 'Dimmed #22272e'})
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Live Render</span>
            </div>

            <button
              onClick={() => onCopyCode(fullReadmeSnippet, 'live-readme-snippet')}
              className="px-3 py-1.5 rounded-lg text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 flex items-center gap-1.5 shadow-sm transition-all"
            >
              {copiedId === 'live-readme-snippet' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedId === 'live-readme-snippet' ? 'Copied Full README!' : 'Copy README Block'}</span>
            </button>
          </div>
        </div>

        {/* README Body Content Container */}
        <div className={`p-6 sm:p-8 font-sans ${themeStyles.textPrimary}`}>
          {showRawMarkdown ? (
            /* Raw Markdown Code View */
            <div className={`p-4 rounded-lg font-mono text-xs overflow-x-auto leading-relaxed border ${themeStyles.codeBg} ${themeStyles.border} ${themeStyles.textPrimary}`}>
              <pre>{fullReadmeSnippet}</pre>
            </div>
          ) : (
            /* Rendered GitHub Markdown Preview */
            <div className="space-y-6">
              {/* Profile Intro Banner Header */}
              <div className="border-b pb-4 border-slate-700/40 flex items-center justify-between flex-wrap gap-3">
                <div className="space-y-1">
                  <h2 className={`text-xl sm:text-2xl font-bold tracking-tight ${themeStyles.textHeading}`}>
                    Hi there, I&apos;m {profileName} 👋
                  </h2>
                  <p className="text-xs text-slate-400">
                    Full-Stack Software Engineer • Open Source Contributor
                  </p>
                </div>

                {/* Custom Status Shield Render */}
                <div className="flex items-center gap-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={customShieldLocalUrl} alt="Custom Status Shield" className="h-7 object-contain max-w-full" />
                </div>
              </div>

              {/* Tech Stack Section Header */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className={`text-base font-bold flex items-center gap-2 ${themeStyles.textHeading}`}>
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span>Tech Stack &amp; Tools</span>
                  </h3>

                  {/* Format Selector inside README Preview */}
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-slate-400 font-mono hidden sm:inline">Layout:</span>
                    <select
                      value={basketFormat}
                      onChange={(e) => onFormatChange(e.target.value as any)}
                      className={`px-2.5 py-1 rounded-md text-xs font-bold border transition-all ${
                        isDarkMode ? 'bg-slate-950 border-slate-700 text-cyan-300' : 'bg-slate-100 border-slate-300 text-slate-800'
                      }`}
                    >
                      <option value="left-html">Left-Aligned (&lt;p align=&quot;left&quot;&gt;)</option>
                      <option value="centered-html">Centered (&lt;p align=&quot;center&quot;&gt;)</option>
                      <option value="multiline-md">Multiline Markdown</option>
                      <option value="inline-md">Inline Markdown</option>
                    </select>
                  </div>
                </div>

                {/* Live Rendered Badge Basket Grid */}
                {selectedBadgeObjects.length > 0 ? (
                  <div className={`p-4 rounded-xl border transition-colors ${
                    basketFormat === 'centered-html' ? 'text-center' : 'text-left'
                  } ${themeStyles.codeBg} ${themeStyles.border}`}>
                    <div className={`flex flex-wrap gap-2 ${
                      basketFormat === 'centered-html' ? 'justify-center' : 'justify-start'
                    }`}>
                      {selectedBadgeObjects.map((badge) => {
                        const localBadgeUrl = `/api/badge/shield?name=${encodeURIComponent(badge.name)}&color=${badge.color}&style=${badgeStyle}&logo=${badge.logo}&logoColor=white`;
                        return (
                          /* eslint-disable-next-line @next/next/no-img-element */
                          <img
                            key={badge.name}
                            src={localBadgeUrl}
                            alt={badge.name}
                            className="h-7 object-contain inline-block transition-transform hover:scale-105"
                          />
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <div className={`p-8 rounded-xl border border-dashed text-center space-y-2 ${themeStyles.codeBg} ${themeStyles.border}`}>
                    <Terminal className="w-8 h-8 mx-auto text-slate-500" />
                    <p className="text-xs font-semibold text-slate-400">
                      Your Tech Stack Basket is currently empty.
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Click the &quot;+&quot; or checkmark button on any badge in Section 1 above to add it to your live README preview.
                    </p>
                  </div>
                )}
              </div>

              {/* Simulated Footer Info */}
              <div className="pt-4 border-t border-slate-700/30 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>⚡ Decorated with GitLegacy.co Badge Studio</span>
                <span className="text-emerald-400 font-semibold">{selectedBadgeObjects.length} badges in basket</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
