'use client';

import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { NotFoundMatrix } from './NotFoundMatrix';
import { useTheme } from '../context/ThemeContext';

export function NotFoundClient() {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${
        isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      <Header />

      <main className="flex-1 flex flex-col justify-center">
        <NotFoundMatrix />
      </main>

      <Footer />
    </div>
  );
}
