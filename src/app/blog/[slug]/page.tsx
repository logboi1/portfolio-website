import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/common/PageTransition";
import { blogPosts } from "@/lib/data";
import { formatDate } from "@/lib/utils";

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.id === params.slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.id,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.id === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <PageTransition>
      <article className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="mb-8">
            <Button variant="ghost" asChild className="mb-6">
              <Link href="/blog">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
            </Button>

            <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {formatDate(post.publishedAt)}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {post.readingTime} min read
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-6">
              {post.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="flex items-center"
                >
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="prose prose-lg max-w-none dark:prose-invert">
            {/* In a real implementation, you would render the markdown content here */}
            <p>
              This is where the full blog post content would be rendered. In a
              real implementation, you would use a markdown parser like
              `react-markdown` or `mdx-bundler` to render the post content from
              markdown files.
            </p>

            <p>
              The blog post content could include code examples, images, and
              other rich media. You would typically store your blog posts as
              markdown files in a `content` directory or use a headless CMS like
              Contentful or Sanity.
            </p>

            <h2>Example Code Block</h2>
            <pre>
              <code>
                {`const example = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  )
}`}
              </code>
            </pre>

            <p>
              This is just placeholder content to demonstrate the layout and
              styling. Replace this with your actual blog post content parsing
              logic.
            </p>
          </div>
        </div>
      </article>
    </PageTransition>
  );
}
