import type { Metadata } from 'next';
import { ToolsPageClient } from '../../components/ToolsPageClient';

export const metadata: Metadata = {
  title: 'Developer Tools Hub – GitHub Contribution & Badge Tools | GitLegacy',
  description:
    'Explore GitLegacy\'s complete developer toolkit: GitHub contribution art studio, free badge & shield generator, history visualizer, CLI script generator, and more. All tools are free.',
  keywords: [
    'GitHub developer tools',
    'contribution art studio',
    'github badge generator',
    'commit script generator',
    'github history visualizer',
    'developer profile tools',
    'gitlegacy tools',
  ],
  openGraph: {
    title: 'GitLegacy Developer Tools Hub – Free GitHub Profile Tools',
    description:
      'Design contribution graph art, generate tech stack badges, visualize your GitHub history, and automate commit strategies — all free on GitLegacy.',
    url: 'https://gitlegacy.co/tools',
    type: 'website',
    siteName: 'GitLegacy',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GitLegacy Developer Tools Hub',
    description: 'Free GitHub profile tools: contribution art, badge generator, history visualizer, and CLI script generator.',
  },
  alternates: {
    canonical: 'https://gitlegacy.co/tools',
  },
};

export default function ToolsPage() {
  return <ToolsPageClient />;
}
