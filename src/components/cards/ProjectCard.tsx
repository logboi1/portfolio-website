"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
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
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
            )}
            {project.liveUrl && (
              <Button size="sm" variant="secondary" asChild>
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
          {project.featured && (
            <div className="absolute top-4 right-4">
              <Badge className="bg-primary text-primary-foreground">
                Featured
              </Badge>
            </div>
          )}
        </div>
        <CardContent className="p-6 flex flex-col flex-1">
          <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground mb-4 flex-1 line-clamp-3">
            {project.longDescription || project.description}
          </p>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="flex space-x-4">
              {project.githubUrl && (
                <Button variant="outline" size="sm" asChild>
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Link>
                </Button>
              )}
              {project.liveUrl && (
                <Button size="sm" asChild>
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
