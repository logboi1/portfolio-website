"use client";

import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Experience } from "@/types";

interface ExperienceCardProps {
  experience: Experience;
  index?: number;
}

export default function ExperienceCard({
  experience,
  index = 0,
}: ExperienceCardProps) {
  const typeColors = {
    work: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    freelance:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    internship:
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  };

  const typeLabels = {
    work: "Full-time",
    freelance: "Freelance",
    internship: "Internship",
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden border-l-4 border-l-primary hover:shadow-lg transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold text-foreground">
                  {experience.position}
                </h3>
                <Badge className={typeColors[experience.type]}>
                  {typeLabels[experience.type]}
                </Badge>
              </div>

              <div className="flex items-center text-muted-foreground mb-2">
                <Building2 className="h-4 w-4 mr-2" />
                <span className="font-medium">{experience.company}</span>
              </div>

              <div className="flex items-center text-muted-foreground text-sm">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{experience.duration}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
              <ul className="space-y-2">
                {experience.description.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start text-muted-foreground"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
