import Hero from "@/components/sections/Hero";
import { projects } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import AnimatedSection from "@/components/common/AnimatedSection";
import { personalInfo } from "@/lib/data";

export default function HomePage() {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 3);

  return (
    <div className="flex flex-col">
      <Hero />

      {/* Stats Section */}
      <AnimatedSection className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(personalInfo.stats).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {value}
                </div>
                <div className="text-sm text-muted-foreground capitalize">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Featured Projects Section */}
      <AnimatedSection className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and
              experience across frontend engineering, API integration, and
              product delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    {project.githubUrl && (
                      <Button size="sm" variant="secondary" asChild>
                        <Link href={project.githubUrl} target="_blank">
                          <Github className="h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button size="sm" variant="secondary" asChild>
                        <Link href={project.liveUrl} target="_blank">
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              {`Let's Work Together`}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {` I'm always interested in new opportunities and exciting projects.
              Whether you have a question or just want to say hi, feel free to
              reach out!`}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Get In Touch</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">Learn More About Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
