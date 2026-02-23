"use client";

import { motion } from "framer-motion";
import { name, role, tagline } from "@/data/portfolio";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-6"
      >
        <motion.p variants={itemVariants} className="text-accent text-lg">
          Hi, I&apos;m
        </motion.p>
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white"
        >
          {name}
        </motion.h1>
        <motion.h2
          variants={itemVariants}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-400"
        >
          {role}
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-gray-400 text-lg max-w-xl"
        >
          {tagline}
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 mt-4"
        >
          <a
            href="/Fahad-Tariq-Aziz.pdf"
            download
            className="bg-accent hover:bg-accent-dark text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200 text-center"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="border border-accent text-accent hover:bg-accent/10 font-medium px-6 py-3 rounded-lg transition-colors duration-200 text-center"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
