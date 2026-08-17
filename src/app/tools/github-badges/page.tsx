import type { Metadata } from 'next';
import { BadgesStudioClient } from '../../../components/BadgesStudioClient';
import { getSoftwareApplicationSchema, getFAQSchema } from '../../../lib/schema-org';

export const metadata: Metadata = {
  title: 'GitHub Badge Generator – Free Developer Shields & Tech Stack Badges | GitLegacy',
  description:
    'Create custom GitHub README badges and tech stack shields for 50+ technologies. Free badge generator with 5 styles, custom shield builder, 1-click stack basket, and instant copy.',
  keywords: [
    'github badge generator',
    'github readme badges',
    'developer badges',
    'tech stack badges',
    'shields.io alternative',
    'github pro badge',
    'github markdown badges',
    'custom github shields',
    'readme badge maker',
  ],
  openGraph: {
    title: 'GitHub Badge Generator – Free Developer Shields & Tech Badges | GitLegacy',
    description:
      'Browse 50+ curated tech stack badges, build a custom shield with your own colors and logo, and copy ready-to-paste Markdown for your GitHub profile README.',
    url: 'https://gitlegacy.co/tools/github-badges',
    type: 'website',
    siteName: 'GitLegacy',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GitLegacy – Free GitHub Badge Generator',
    description: 'Create custom developer badges and tech stack shields. 50+ technologies, 5 badge styles, custom shield builder.',
  },
  alternates: {
    canonical: 'https://gitlegacy.co/tools/github-badges',
  },
};

const badgeSchema = getSoftwareApplicationSchema(
  'GitLegacy Badge Studio',
  'Free GitHub README badge generator with 50+ curated tech stack shields, 5 badge styles, custom shield builder, and 1-click stack basket copy.',
  '/tools/github-badges'
);

const faqSchema = getFAQSchema([
  {
    q: 'How do I add badges to my GitHub profile README?',
    a: 'Use GitLegacy Badge Studio to browse 50+ curated tech stack badges. Click any badge to copy the Markdown snippet, then paste it into your GitHub profile README.md file. You can also use the Stack Basket to select multiple technologies and copy them all at once in a formatted HTML block.',
  },
  {
    q: 'What is a GitHub badge generator?',
    a: 'A GitHub badge generator is a tool that creates SVG shield images (powered by Shields.io) for your GitHub README. GitLegacy makes it easy to customize label text, message text, colors, badge style, and logo icons without writing any URLs manually.',
  },
  {
    q: 'How do I add a GitHub Pro badge to my profile?',
    a: 'You can create a custom GitHub PRO status badge using GitLegacy\'s Custom Shield Generator. Set label to "GitHub", message to "PRO", choose your color and logo, then copy the Markdown snippet to paste into your profile README.md.',
  },
  {
    q: 'What badge styles are available?',
    a: 'GitLegacy supports 5 badge styles: for-the-badge (large, blocky), flat (minimal, clean), flat-square (flat with sharp corners), plastic (3D shaded), and social (GitHub-style social count). You can switch styles instantly without regenerating URLs.',
  },
  {
    q: 'Are the GitLegacy badges free to use?',
    a: 'Yes, all badges on GitLegacy are completely free. They are served through the GitLegacy badge proxy which connects to the Shields.io API. You can use them on your GitHub profile, repositories, or any markdown document.',
  },
]);

export default function BadgesStudioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(badgeSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BadgesStudioClient />
    </>
  );
}
