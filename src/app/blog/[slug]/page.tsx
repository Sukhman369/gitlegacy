import type { Metadata } from 'next';
import { BLOG_POSTS } from '../../../lib/blog-data';
import { getArticleSchema } from '../../../lib/schema-org';
import BlogPostClient from '../../../components/BlogPostClient';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found | GitLegacy',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${post.title} | GitLegacy Blog`,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://gitlegacy.co/blog/${post.slug}`,
      type: 'article',
      siteName: 'GitLegacy',
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
    alternates: {
      canonical: `https://gitlegacy.co/blog/${post.slug}`,
    },
  };
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  const articleSchema = post ? getArticleSchema(post) : null;

  return (
    <>
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
      <BlogPostClient slug={slug} />
    </>
  );
}
