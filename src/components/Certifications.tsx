import SectionWrapper from "./SectionWrapper";
import { certifications, education } from "@/data/portfolio";
import { FiAward, FiBookOpen } from "react-icons/fi";

export default function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
        Certifications & Education
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Certifications */}
        <div>
          <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-6 flex items-center gap-2">
            <FiAward /> Certifications
          </h3>
          <ul className="space-y-4">
            {certifications.map((cert) => (
              <li
                key={cert.title}
                className="bg-surface border border-surface-border rounded-lg p-4"
              >
                <p className="text-white font-medium text-sm">{cert.title}</p>
                <p className="text-gray-500 text-xs mt-1">{cert.issuer}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-6 flex items-center gap-2">
            <FiBookOpen /> Education
          </h3>
          {education.map((edu) => (
            <div
              key={edu.institution}
              className="bg-surface border border-surface-border rounded-lg p-6"
            >
              <p className="text-white font-semibold">{edu.degree}</p>
              <p className="text-accent text-sm mt-1">{edu.institution}</p>
              <p className="text-gray-500 text-xs mt-1">{edu.location}</p>
              <div className="flex items-center gap-4 mt-3">
                <span className="text-gray-400 text-sm">
                  {edu.startYear} — {edu.endYear}
                </span>
                <span className="text-accent-light text-sm font-medium">
                  CGPA: {edu.gpa}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
