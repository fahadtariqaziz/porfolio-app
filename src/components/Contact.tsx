import SectionWrapper from "./SectionWrapper";
import { email, phone, socialLinks } from "@/data/portfolio";
import { FiMail, FiPhone, FiLinkedin } from "react-icons/fi";

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Get in Touch
      </h2>
      <p className="text-gray-400 text-lg mb-10 max-w-xl">
        I&apos;m open to new opportunities and collaborations. Feel free to
        reach out.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <a
          href={`mailto:${email}`}
          className="flex items-center gap-4 bg-surface border border-surface-border rounded-lg p-5 hover:border-accent/50 transition-colors duration-200 group"
        >
          <FiMail className="text-accent text-xl shrink-0 group-hover:scale-110 transition-transform" />
          <div>
            <p className="text-xs text-gray-500 mb-0.5">Email</p>
            <p className="text-sm text-gray-300">{email}</p>
          </div>
        </a>

        <a
          href={`tel:${phone}`}
          className="flex items-center gap-4 bg-surface border border-surface-border rounded-lg p-5 hover:border-accent/50 transition-colors duration-200 group"
        >
          <FiPhone className="text-accent text-xl shrink-0 group-hover:scale-110 transition-transform" />
          <div>
            <p className="text-xs text-gray-500 mb-0.5">Phone</p>
            <p className="text-sm text-gray-300">{phone}</p>
          </div>
        </a>

        {socialLinks.map((link) => (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-surface border border-surface-border rounded-lg p-5 hover:border-accent/50 transition-colors duration-200 group"
          >
            <FiLinkedin className="text-accent text-xl shrink-0 group-hover:scale-110 transition-transform" />
            <div>
              <p className="text-xs text-gray-500 mb-0.5">{link.platform}</p>
              <p className="text-sm text-gray-300">View Profile</p>
            </div>
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
}
