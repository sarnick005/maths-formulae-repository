import { Github, Mail, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <p className="text-muted-foreground mb-4">
          © 2025 Maths Formulae Repository by Sarnick Chakraborty.
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/sarnick005"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 text-gray-600 hover:text-black transition-colors" />
          </a>
          <a
            href="mailto:sarnick.chakraborty@gmail.com.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <Mail className="w-5 h-5 text-gray-600 hover:text-black transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/sarnick-chakraborty-16828423a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-gray-600 hover:text-black transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
}
