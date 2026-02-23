"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiPostgresql,
  SiAmazondynamodb,
  SiAwslambda,
  SiGit,
  SiPosthog,
  SiSentry,
  SiVercel,
  SiVuedotjs,
  SiPython,
  SiFastapi,
  SiMongodb,
} from "react-icons/si";
import { TbBrain } from "react-icons/tb";
import { skills } from "@/data/portfolio";
import type { SkillCategory } from "@/lib/types";
import type { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  HTML: SiHtml5,
  CSS: SiCss3,
  "Tailwind CSS": SiTailwindcss,
  "React Native": SiReact,
  "Node.js": SiNodedotjs,
  NestJS: SiNestjs,
  "Express.js": SiExpress,
  "Vue.js": SiVuedotjs,
  Python: SiPython,
  FastAPI: SiFastapi,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  "AWS Lambda": SiAwslambda,
  DynamoDB: SiAmazondynamodb,
  "Vercel AI SDK": SiVercel,
  Mem0: TbBrain,
  "LLM Integration": TbBrain,
  Git: SiGit,
  PostHog: SiPosthog,
  Sentry: SiSentry,
};

const categories: SkillCategory[] = [
  "Frontend",
  "Backend",
  "Mobile",
  "AI & LLMs",
  "Cloud & DevOps",
  "Tools & Methods",
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-16 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Skills & Technologies
        </h2>

        <div className="space-y-10">
          {categories.map((category) => {
            const categorySkills = skills.filter(
              (s) => s.category === category
            );
            if (categorySkills.length === 0) return null;

            return (
              <div key={category}>
                <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                  {category}
                </h3>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
                >
                  {categorySkills.map((skill) => {
                    const Icon = iconMap[skill.name];
                    return (
                      <motion.div
                        key={skill.name}
                        variants={itemVariants}
                        className="flex items-center gap-2 bg-surface border border-surface-border rounded-lg px-4 py-3 text-sm text-gray-300 hover:border-accent/50 transition-colors duration-200"
                      >
                        {Icon && <Icon className="text-accent shrink-0" />}
                        {skill.name}
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
