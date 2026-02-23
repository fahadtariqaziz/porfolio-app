import { FiLinkedin } from "react-icons/fi";
import { socialLinks } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-surface-border py-8 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Fahad Tariq Aziz. All rights
          reserved.
        </p>
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.platform}
              className="text-gray-500 hover:text-accent transition-colors duration-200"
            >
              <FiLinkedin size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
