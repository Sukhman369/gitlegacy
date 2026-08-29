import { MetadataRoute } from 'next';
import { BLOG_POSTS } from '../lib/blog-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gitlegacy.co';

  // Use real publish dates for blog posts so Google tracks actual content changes
  const blogEntries: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date('2026-08-17'),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: new Date('2026-08-17'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools/art-studio`,
      lastModified: new Date('2026-08-17'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools/github-badges`,
      lastModified: new Date('2026-08-17'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools/history-visualizer`,
      lastModified: new Date('2026-08-01'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools/script-generator`,
      lastModified: new Date('2026-08-01'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools/presets`,
      lastModified: new Date('2026-08-01'),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date('2026-08-17'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...blogEntries,
    {
      url: `${baseUrl}/behind-the-scenes`,
      lastModified: new Date('2026-08-29'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contribute`,
      lastModified: new Date('2026-08-01'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];
}
