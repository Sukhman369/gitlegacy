import type { Metadata } from 'next';
import { BehindTheScenesClient } from '../../components/BehindTheScenesClient';

export const metadata: Metadata = {
  title: 'Behind the Scene & Our Story – Why We Built GitLegacy',
  description:
    'The story of how GitLegacy was created by Sukhman out of a personal developer profile renovation frustration to become a 100% open-source GitHub branding platform.',
  keywords: [
    'GitLegacy story',
    'why GitLegacy',
    'behind the scene GitLegacy',
    'GitHub profile decoration',
    'developer branding',
    'open source developer tools',
    'Sukhman GitLegacy',
  ],
  openGraph: {
    title: 'Behind the Scene: Why We Built GitLegacy',
    description:
      'From a frustrating weekend attempt to renew a personal GitHub profile to building a 100% open-source developer branding ecosystem.',
    url: 'https://gitlegacy.co/behind-the-scene',
    type: 'article',
    siteName: 'GitLegacy',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Behind the Scene: Why We Built GitLegacy',
    description:
      'The origin story and technical architecture behind the open-source GitLegacy developer platform.',
  },
  alternates: {
    canonical: 'https://gitlegacy.co/behind-the-scene',
  },
};

export default function BehindTheScenePage() {
  return <BehindTheScenesClient />;
}
