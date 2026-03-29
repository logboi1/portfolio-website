"use client";
// import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/cards/ProjectCard";
import AnimatedSection from "@/components/common/AnimatedSection";
import PageTransition from "@/components/common/PageTransition";
import { projects } from "@/lib/data";
import { useState } from "react";

// export const metadata: Metadata = {
//   title: "Projects",
//   description:
//     "Explore my portfolio of web development projects and applications.",
// };

function ProjectsClient() {
  const [filter, setFilter] = useState<string>("all");

  const allTechnologies = Array.from(
    new Set(projects.flatMap((project) => project.technologies))
  ).sort();

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) =>
          project.technologies.some((tech) =>
            tech.toLowerCase().includes(filter.toLowerCase())
          )
        );

  return (
    <PageTransition>
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <AnimatedSection className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              My Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A collection of projects that showcase my frontend engineering,
              mobile app work, backend integrations, and modern web
              technologies.
            </p>
          </AnimatedSection>

          {/* Filter */}
          <AnimatedSection delay={0.1} className="mb-12">
            <div className="flex flex-wrap justify-center gap-2">
              <Button
                variant={filter === "all" ? "default" : "outline"}
                onClick={() => setFilter("all")}
                size="sm"
              >
                All Projects ({projects.length})
              </Button>
              {allTechnologies.slice(0, 8).map((tech) => {
                const count = projects.filter((p) =>
                  p.technologies.includes(tech)
                ).length;
                return (
                  <Button
                    key={tech}
                    variant={filter === tech ? "default" : "outline"}
                    onClick={() => setFilter(tech)}
                    size="sm"
                  >
                    {tech} ({count})
                  </Button>
                );
              })}
            </div>
          </AnimatedSection>

          {/* Projects Grid */}
          <AnimatedSection delay={0.2}>
            {filteredProjects.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  No projects found with the selected technology.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setFilter("all")}
                  className="mt-4"
                >
                  Show All Projects
                </Button>
              </div>
            )}
          </AnimatedSection>

          {/* CTA */}
          <AnimatedSection delay={0.3} className="text-center mt-16">
            <div className="bg-secondary/10 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">
                Interested in Working Together?
              </h2>
              <p className="text-muted-foreground mb-6">
                {`I'm always open to discussing new opportunities and exciting
                projects. Feel free to reach out!`}
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </PageTransition>
  );
}

export default function ProjectsPage() {
  return <ProjectsClient />;
}
