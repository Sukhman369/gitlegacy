'use client';

import React from 'react';
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
} from 'lucide-react';

interface ToolItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  icon: React.ElementType;
  accentColor: string;
  href: string;
  ctaText: string;
}

const BASE_TOOLS: ToolItem[] = [
  {
    id: 'badge-studio',
    title: 'Developer Badge & Shield Studio',
    badge: '150+ Shields',
    description: 'Build high-impact GitHub README profiles with 1-click tech stack baskets, verified status shields, and clean HTML/Markdown output across 16 categories.',
    icon: ShieldCheck,
    accentColor: 'text-cyan-400',
    href: '/tools/github-badges',
    ctaText: 'Open Badge Studio',
  },
  {
    id: 'planner',
    title: 'Contribution Art Planner',
    badge: '53-Week Canvas',
    description: 'Design custom pixel text and matrix artwork across your GitHub contribution graph with full intensity controls and instant preview.',
    icon: Palette,
    accentColor: 'text-emerald-400',
    href: '/tools/art-studio',
    ctaText: 'Launch Art Studio',
  },
  {
    id: 'history-visualizer',
    title: 'GitHub History Visualizer',
    badge: 'Live Data',
    description: 'Fetch real 365-day contribution data for any GitHub username and generate dynamic live SVG profile cards and posters.',
    icon: BarChart3,
    accentColor: 'text-teal-400',
    href: '/tools/history-visualizer',
    ctaText: 'View History',
  },
  {
    id: 'social-exporter',
    title: 'Social Banner Exporter',
    badge: 'Retina 4K',
    description: 'Export high-res headers for Twitter/X (1500 x 500), LinkedIn covers (1584 x 396), and Instagram matrix cards.',
    icon: Share2,
    accentColor: 'text-purple-400',
    href: '/tools/art-studio#export-studio',
    ctaText: 'Export Banners',
  },
  {
    id: 'presets-gallery',
    title: 'Preset Pattern Gallery',
    badge: 'Templates',
    description: 'Browse categorized pre-made 5x7 matrix templates including Arcade classics, career banners, and tech logos.',
    icon: LayoutTemplate,
    accentColor: 'text-amber-400',
    href: '/tools/presets',
    ctaText: 'Browse Templates',
  },
];

const SCRIPT_GENERATOR_TOOL: ToolItem = {
  id: 'script-generator',
  title: 'Automation Script Exporter',
  badge: 'Zero-Dep',
  description: 'Export zero-dependency PowerShell (.ps1), Bash (.sh), or Python commit scripts to automatically backdate and render your matrix.',
  icon: Terminal,
  accentColor: 'text-emerald-400',
  href: '/tools/script-generator',
  ctaText: 'Generate Scripts',
};

const EXPLORE_ALL_CARD: ToolItem = {
  id: 'all-tools',
  title: 'Explore All Tools & Resources',
  badge: 'Full Suite',
  description: 'Discover our complete catalog of contribution planners, badge studios, theme engines, and developer workflow utilities.',
  icon: Wrench,
  accentColor: 'text-emerald-400',
  href: '/tools',
  ctaText: 'View All Tools',
};

export function ToolsHubGrid({ showTitle = true }: { showTitle?: boolean }) {
  const { isDarkMode } = useTheme();

  // On Homepage (showTitle = true): show EXPLORE_ALL_CARD as 6th card
  // On /tools page (showTitle = false): show SCRIPT_GENERATOR_TOOL as 6th tool
  const displayTools = showTitle
    ? [...BASE_TOOLS, EXPLORE_ALL_CARD]
    : [...BASE_TOOLS, SCRIPT_GENERATOR_TOOL];

  return (
    <section className="w-full space-y-8">
      {showTitle && (
        <div className="text-center space-y-3">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
            isDarkMode
              ? 'bg-slate-900 border border-slate-800 text-emerald-400'
              : 'bg-slate-100 border border-slate-200 text-emerald-700'
          }`}>
            <Sparkles className="w-3.5 h-3.5" />
            <span>Developer Tools Suite</span>
          </div>

          <h2 className={`text-2xl sm:text-4xl font-extrabold tracking-tight ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Crafted for <span className="text-emerald-500">GitHub Developers</span>
          </h2>

          <p className={`max-w-xl mx-auto text-xs sm:text-sm ${
            isDarkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Everything you need to craft custom contribution artwork, showcase live activity, and build high-impact profile READMEs.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {displayTools.map((tool) => {
          const Icon = tool.icon;

          return (
            <Link
              key={tool.id}
              href={tool.href}
              className={`group relative p-6 rounded-2xl border transition-all duration-200 flex flex-col justify-between hover:-translate-y-0.5 ${
                isDarkMode
                  ? 'bg-slate-900/70 border-slate-800/80 hover:bg-slate-900 hover:border-slate-700 hover:shadow-lg'
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`p-2.5 rounded-xl border transition-colors ${
                    isDarkMode
                      ? 'bg-slate-950 border-slate-800'
                      : 'bg-slate-100 border-slate-200'
                  }`}>
                    <Icon className={`w-5 h-5 ${tool.accentColor}`} />
                  </div>
                  <span className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full border transition-colors ${
                    isDarkMode
                      ? 'bg-slate-950 text-slate-300 border-slate-800'
                      : 'bg-slate-100 text-slate-700 border-slate-200'
                  }`}>
                    {tool.badge}
                  </span>
                </div>

                <div>
                  <h3 className={`text-base sm:text-lg font-bold transition-colors ${
                    isDarkMode
                      ? 'text-white group-hover:text-emerald-400'
                      : 'text-slate-900 group-hover:text-emerald-600'
                  }`}>
                    {tool.title}
                  </h3>
                  <p className={`text-xs mt-1.5 leading-relaxed ${
                    isDarkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {tool.description}
                  </p>
                </div>
              </div>

              <div className={`pt-4 mt-5 border-t ${
                isDarkMode ? 'border-slate-800/80' : 'border-slate-100'
              }`}>
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-500 group-hover:text-emerald-400 transition-all group-hover:translate-x-1"
                >
                  <span>{tool.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
