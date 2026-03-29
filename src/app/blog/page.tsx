import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, Tag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/common/AnimatedSection";
import PageTransition from "@/components/common/PageTransition";
import { blogPosts } from "@/lib/data";
import { SITE_CONFIG } from "@/lib/constants";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts, tutorials, and insights about web development and technology.",
};

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <PageTransition>
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Sharing my thoughts, tutorials, and insights about web
              development, technology trends, and product engineering.
            </p>
          </AnimatedSection>

          {featuredPost && (
            <AnimatedSection delay={0.1} className="mb-16">
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(featuredPost.publishedAt)}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredPost.readingTime} min read
                    </div>
                    <Badge variant="secondary">Featured</Badge>
                  </div>

                  <Link href={`/blog/${featuredPost.id}`}>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 hover:text-primary transition-colors">
                      {featuredPost.title}
                    </h2>
                  </Link>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="flex items-center"
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Link
                    href={`/blog/${featuredPost.id}`}
                    className="text-primary hover:underline font-medium"
                  >
                    Read article
                  </Link>
                </CardContent>
              </Card>
            </AnimatedSection>
          )}

          {otherPosts.length > 0 && (
            <AnimatedSection delay={0.2}>
              <h2 className="text-2xl font-bold mb-8">Recent Posts</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {otherPosts.map((post) => (
                  <Card
                    key={post.id}
                    className="group hover:shadow-lg transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {formatDate(post.publishedAt)}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readingTime} min read
                        </div>
                      </div>

                      <Link href={`/blog/${post.id}`}>
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                      </Link>

                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <Link
                        href={`/blog/${post.id}`}
                        className="text-primary hover:underline text-sm font-medium"
                      >
                        Read article
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AnimatedSection>
          )}

          <AnimatedSection delay={0.3} className="text-center mt-16">
            <div className="bg-secondary/10 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
              <p className="text-muted-foreground mb-6">
                Want to be notified when I publish new posts? Follow me on
                social media or feel free to reach out directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-block">
                  <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 rounded-md transition-colors">
                    Get In Touch
                  </button>
                </Link>
                <Link
                  href={SITE_CONFIG.links.twitter}
                  target="_blank"
                  className="inline-block"
                >
                  <button className="border border-border hover:bg-accent px-6 py-2 rounded-md transition-colors">
                    Follow on X
                  </button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </PageTransition>
  );
}
