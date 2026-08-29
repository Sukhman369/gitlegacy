'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from './Header';
import { Footer } from './Footer';
import { useTheme } from '../context/ThemeContext';
import { SponsorModal } from './SponsorModal';
import {
  Sparkles,
  HeartHandshake,
  GitPullRequest,
  Terminal,
  ShieldCheck,
  Heart,
  Coffee,
  Lightbulb,
  Rocket,
  Zap,
  Code2,
  Lock,
  Cpu,
  Layers,
  Camera,
  Compass,
} from 'lucide-react';

const GithubIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

export function BehindTheScenesClient() {
  const { isDarkMode } = useTheme();
  const [isSponsorModalOpen, setIsSponsorModalOpen] = useState(false);


  const creatorPhotoUrl: string | null = '/images/github-profile-badges.webp';
  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-300 ${isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
        }`}
    >
      <Header />

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-12 sm:py-16 space-y-16 sm:space-y-20">
        {/* Hero Section */}
        <div className="text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Compass className="w-4 h-4" />
            <span>Behind the Scene • The Origin Story</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Why We Built{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              GitLegacy
            </span>
          </h1>

          <p
            className={`max-w-2xl mx-auto text-sm sm:text-lg leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'
              }`}
          >
            From a frustrating weekend attempt to renew a personal GitHub profile to building a 100%
            open-source developer branding ecosystem.
          </p>
        </div>

        {/* Creator Horizontal Showcase / Photo Slot Section */}
        <section
          className={`relative overflow-hidden rounded-3xl border shadow-2xl transition-all ${isDarkMode
            ? 'bg-slate-900/80 border-slate-800'
            : 'bg-white border-slate-200 shadow-slate-200/60'
            }`}
        >
          {/* Background Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="p-6 sm:p-10 space-y-8 relative z-10">
            {/* Horizontal 1120x746 Ratio Photo Area */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                  <Camera className="w-4 h-4" />
                  <span>Creator Spotlight &amp; Workspace</span>
                </div>
                <span
                  className={`text-[11px] px-2.5 py-0.5 rounded-full font-mono font-medium ${isDarkMode
                    ? 'bg-slate-800 text-emerald-400 border border-slate-700'
                    : 'bg-slate-100 text-emerald-600 border border-slate-200'
                    }`}
                >
                  1120 × 746 px (3:2 Ratio)
                </span>
              </div>

              {/* Exact 1120x746 Ratio Frame */}
              <div
                className={`relative w-full aspect-[1120/746] rounded-2xl border overflow-hidden flex flex-col items-center justify-center text-center p-6 transition-all ${creatorPhotoUrl
                  ? 'border-transparent shadow-lg'
                  : isDarkMode
                    ? 'border-dashed border-slate-700 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950'
                    : 'border-dashed border-slate-300 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100'
                  }`}
              >
                {creatorPhotoUrl ? (
                  <Image
                    src={creatorPhotoUrl}
                    alt="Sukhman - Creator of GitLegacy"
                    fill
                    unoptimized
                    sizes="(max-width: 1024px) 100vw, 960px"
                    className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                    priority
                  />
                ) : (
                  <div className="max-w-md space-y-3">
                    <div className="inline-flex p-4 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-inner">
                      <Camera className="w-8 h-8 sm:w-10 sm:h-10 animate-pulse" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-extrabold tracking-tight">
                        Creator Photo (1120 × 746 px)
                      </h3>
                      <p
                        className={`text-xs sm:text-sm mt-1 leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-500'
                          }`}
                      >
                        Reserved 1120 × 746 ratio slot. Add your photo to <code className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono text-xs">public/images/creator.jpg</code>.
                      </p>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <Sparkles className="w-3 h-3" />
                      <span>Ready to display your 1120 × 746 image</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Creator Bio & Intro Note */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-2">
              <div className="lg:col-span-8 space-y-3">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h2 className="text-xl sm:text-2xl font-black">Sukhman</h2>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Founder &amp; Lead Maintainer
                  </span>
                </div>
                <p
                  className={`text-xs sm:text-sm leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'
                    }`}
                >
                  &ldquo;I built GitLegacy because when I wanted to renew my own GitHub profile, I
                  couldn&apos;t find a proper, centralized way to discover clean README badges,
                  design custom contribution art, or export polished badges without manual headaches.
                  I decided to build a dedicated platform to solve this once and for all—and commit to
                  expanding it with maximum GitHub features over time as an open-source tool for everyone.&rdquo;
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-2.5 justify-center">
                <a
                  href="https://github.com/Sukhman369"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`py-2.5 px-4 rounded-xl text-xs font-bold border flex items-center justify-center gap-2 transition-all ${isDarkMode
                    ? 'bg-slate-950 border-slate-800 hover:bg-slate-800 text-slate-200'
                    : 'bg-slate-100 border-slate-200 hover:bg-slate-200 text-slate-800'
                    }`}
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Follow @Sukhman369</span>
                </a>
                <button
                  onClick={() => setIsSponsorModalOpen(true)}
                  className="py-2.5 px-4 rounded-xl text-xs font-extrabold bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] transition-all"
                >
                  <Coffee className="w-4 h-4 fill-slate-950" />
                  <span>Sponsor with a Chai</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* The Origin Journey: Interactive Timeline */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400">
              <Rocket className="w-4 h-4" />
              <span>How It All Unfolded</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
              The Journey from Idea to Platform
            </h2>
            <p
              className={`max-w-xl mx-auto text-xs sm:text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'
                }`}
            >
              Every tool in GitLegacy exists because of real friction we experienced firsthand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                phase: 'Chapter 01',
                title: 'The Profile Renovation Problem',
                tag: 'The Frustration',
                icon: Lightbulb,
                description:
                  'While updating my GitHub profile, I wanted clean tech stack badges, aesthetic shields, and meaningful contribution graphs. What I found was a chaotic mix of broken markdown snippets, manual Shields.io query strings, and untrusted CLI scripts.',
              },
              {
                phase: 'Chapter 02',
                title: 'The First Prototype & Canvas Studio',
                tag: 'The Solution',
                icon: Code2,
                description:
                  'I began prototyping a 53x7 pixel canvas tool that converts text, initials, and pixel drawings into safe backdated Git commit scripts. Alongside it came the Badge Studio with 1-click clean HTML badge baskets.',
              },
              {
                phase: 'Chapter 03',
                title: 'Making It 100% Open-Source',
                tag: 'The Ethos',
                icon: GitPullRequest,
                description:
                  'Developer branding should never be locked behind subscriptions or corporate paywalls. GitLegacy was released under the MIT license, opening the doors for anyone in the community to contribute new presets and themes.',
              },
              {
                phase: 'Chapter 04',
                title: 'The Long-Term Roadmap',
                tag: 'The Future',
                icon: Zap,
                description:
                  'Our goal is simple: continuously add the maximum number of GitHub-related profile features over time—including dynamic SVG cards, multi-year history visualizers, README generators, and interactive streak tools.',
              },
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className={`p-6 sm:p-8 rounded-2xl border flex flex-col justify-between space-y-4 transition-all hover:scale-[1.01] ${isDarkMode
                    ? 'bg-slate-900/90 border-slate-800 hover:border-slate-700'
                    : 'bg-white border-slate-200 shadow-sm hover:shadow-md'
                    }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-emerald-400">
                        {card.phase}
                      </span>
                      <span
                        className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${isDarkMode
                          ? 'bg-slate-800 text-slate-300'
                          : 'bg-slate-100 text-slate-700'
                          }`}
                      >
                        {card.tag}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold">{card.title}</h3>
                    </div>

                    <p
                      className={`text-xs sm:text-sm leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'
                        }`}
                    >
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Technical Architecture: Under the Hood */}
        <section
          className={`p-6 sm:p-10 rounded-3xl border shadow-xl space-y-8 ${isDarkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-6 border-slate-800/80">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                <Terminal className="w-4 h-4" />
                <span>Technical Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black">Under the Hood of GitLegacy</h2>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Lock className="w-3.5 h-3.5" />
              <span>Zero Tracking • 100% Client-Side</span>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-bold text-sm">
                <Cpu className="w-4 h-4 text-teal-400" />
                <h4>53-Week Matrix Algorithm</h4>
              </div>
              <p
                className={`text-xs leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}
              >
                Calculates Sunday-aligned week columns, leap-year offsets, and maps commit intensities
                (0 to 4) directly to standard GitHub contribution percentiles.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 font-bold text-sm">
                <Layers className="w-4 h-4 text-cyan-400" />
                <h4>Clean HTML Basket Bundler</h4>
              </div>
              <p
                className={`text-xs leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}
              >
                Aggregates dozens of selected technology shields into a single, beautifully centered
                `&lt;p align=&quot;center&quot;&gt;` block to eliminate markdown clutter.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <h4>Non-Destructive Scripts</h4>
              </div>
              <p
                className={`text-xs leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}
              >
                Generates standalone Bash, PowerShell, and Python scripts using isolated empty
                repositories so your production repositories are never touched or modified.
              </p>
            </div>
          </div>
        </section>

        {/* Our 4 Core Principles */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black">Our Core Principles</h2>
            <p
              className={`text-xs sm:text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'
                }`}
            >
              The non-negotiable values guiding how GitLegacy is built and maintained.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: 'Open Source Always',
                desc: '100% MIT Licensed. No paywalls, no locked pro tiers.',
                icon: HeartHandshake,
              },
              {
                title: 'Developer Privacy',
                desc: 'We don’t store your tokens or harvest your repo data.',
                icon: Lock,
              },
              {
                title: 'Community Driven',
                desc: 'New presets, badges, and themes are merged openly.',
                icon: GitPullRequest,
              },
              {
                title: 'Continuous Growth',
                desc: 'Constantly building new tools for the GitHub community.',
                icon: Rocket,
              },
            ].map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl border space-y-2.5 ${isDarkMode
                    ? 'bg-slate-900/60 border-slate-800'
                    : 'bg-white border-slate-200'
                    }`}
                >
                  <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 w-fit">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold">{p.title}</h4>
                  <p
                    className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-600'
                      }`}
                  >
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Call To Action Box */}
        <section className="p-8 sm:p-12 rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-cyan-500/10 text-center space-y-6">
          <div className="inline-flex p-3 rounded-2xl bg-emerald-500/20 text-emerald-400 shadow-sm">
            <Heart className="w-6 h-6 fill-emerald-400 animate-pulse" />
          </div>

          <div className="space-y-2 max-w-xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-black">
              Help Us Build the Ultimate GitHub Studio
            </h3>
            <p
              className={`text-xs sm:text-sm ${isDarkMode ? 'text-slate-300' : 'text-slate-600'
                }`}
            >
              Whether it’s starring the repo on GitHub, adding a custom color palette, or contributing
              a new pixel art preset—we’d love to have you involved!
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="https://github.com/Sukhman369/gitlegacy"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 rounded-xl text-xs font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center gap-2 shadow-lg transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Star on GitHub</span>
            </a>
            <Link
              href="/contribute"
              className={`py-3 px-6 rounded-xl text-xs font-bold border flex items-center gap-2 transition-all ${isDarkMode
                ? 'bg-slate-900 border-slate-800 hover:bg-slate-800 text-slate-200'
                : 'bg-white border-slate-300 hover:bg-slate-100 text-slate-800'
                }`}
            >
              <GitPullRequest className="w-4 h-4" />
              <span>Contribution Guide</span>
            </Link>
            <button
              onClick={() => setIsSponsorModalOpen(true)}
              className="py-3 px-6 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center gap-2 shadow-md transition-all"
            >
              <Coffee className="w-4 h-4 fill-slate-950" />
              <span>Sponsor a Chai</span>
            </button>
          </div>
        </section>
      </main>

      <Footer />

      {/* Sponsor Modal */}
      <SponsorModal
        isOpen={isSponsorModalOpen}
        onClose={() => setIsSponsorModalOpen(false)}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}
