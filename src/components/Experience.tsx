"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experience } from "@/data/portfolio";

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      ref={ref}
      className="py-16 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Work Experience
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-surface-border hidden md:block" />

          <div className="space-y-12">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.company}
                variants={itemVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: i * 0.2 }}
                className="relative md:pl-10"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full bg-accent border-2 border-background hidden md:block" />

                <div className="bg-surface border border-surface-border rounded-xl p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {exp.role}
                      </h3>
                      <p className="text-accent">{exp.company}</p>
                    </div>
                    <p className="text-sm text-gray-500">
                      {exp.startDate} — {exp.endDate}
                    </p>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((point, j) => (
                      <li
                        key={j}
                        className="text-gray-400 text-sm flex items-start gap-2"
                      >
                        <span className="text-accent mt-1.5 shrink-0">▹</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  {exp.achievement && (
                    <div className="mt-4 pt-4 border-t border-surface-border">
                      <p className="text-sm text-accent-light font-medium">
                        ★ {exp.achievement}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
