import type { Metadata } from 'next';
import { BlogIndexClient } from '../../components/BlogIndexClient';

export const metadata: Metadata = {
  title: 'Developer Blog – GitHub Guides & Git Insights | GitLegacy',
  description:
    'Tutorials, deep dives, and guides on GitHub contribution graphs, custom badges, backdated commits, developer profile optimization, and Git CLI automation.',
  keywords: [
    'GitHub tutorial',
    'git contribution graph',
    'github badge tutorial',
    'backdated git commits',
    'developer profile guide',
    'github profile README',
    'git insights',
  ],
  openGraph: {
    title: 'GitLegacy Blog – Developer Guides & GitHub Insights',
    description:
      'Deep dives on GitHub contribution algorithms, profile badges, commit art strategies, and developer tooling. Read the latest from the GitLegacy team.',
    url: 'https://gitlegacy.co/blog',
    type: 'website',
    siteName: 'GitLegacy',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GitLegacy Blog – GitHub Guides & Git Insights',
    description: 'Tutorials and deep dives on GitHub contribution graphs, badge generators, and developer profile optimization.',
  },
  alternates: {
    canonical: 'https://gitlegacy.co/blog',
  },
};

export default function BlogPage() {
  return <BlogIndexClient />;
}
