import SectionWrapper from "./SectionWrapper";
import { about } from "@/data/portfolio";

export default function About() {
  return (
    <SectionWrapper id="about">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
        About Me
      </h2>
      <div className="max-w-3xl space-y-4">
        {about.map((paragraph, i) => (
          <p key={i} className="text-gray-400 text-lg leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </SectionWrapper>
  );
}
