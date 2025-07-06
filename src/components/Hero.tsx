import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Hero = () => {
  const [displayedCode, setDisplayedCode] = useState("");
  const [currentLine, setCurrentLine] = useState(0);

  const codeLines = [
    "const developer = {",
    '  name: "Axel Jansson Åhlén",',
    "  skills: [",
    '    "React", "TypeScript",',
    '    "Node.js", "PostgreSQL",',
    '    "CSS", "Python",',
    "  ],",
    '  passion: "Building fun apps and websites",',
    '  status: "Available for hire"',
    "};",
  ];

  useEffect(() => {
    if (currentLine < codeLines.length) {
      const timer = setTimeout(() => {
        setDisplayedCode(
          (prev) => prev + (prev ? "\n" : "") + codeLines[currentLine]
        );
        setCurrentLine((prev) => prev + 1);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [currentLine, codeLines]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 animate-gradient-shift"></div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
      <div
        className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4 relative z-10">
        {/* Left side - Text content */}
        <div className="text-center lg:text-left animate-fade-in">
          <h1 className="font-bold mb-6">
            <span className="gradient-text !text-5xl md:!text-6xl">
              Axel Jansson Åhlén
            </span>
            <br />
            <span className="text-foreground text-4xl md:!text-5xl">
              Web Developer
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed">
            I'm a web developer with a passion for creating beautiful and
            functional websites.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              View My Work
            </Button>

            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              size="lg"
              className="border-primary/50 text-primary hover:bg-primary/10 px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              Let's Connect
            </Button>
          </div>
        </div>

        {/* Right side - Animated code snippet */}
        <div
          className="animate-slide-in-left"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="glass-card p-6 max-w-md mx-auto lg:mx-0">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-foreground/60 ml-2">
                developer.js
              </span>
            </div>
            <pre className="text-sm text-foreground/90 font-mono leading-relaxed">
              <code>{displayedCode}</code>
              <span className="animate-pulse text-primary">|</span>
            </pre>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="w-6 h-6 text-primary cursor-pointer" />
      </button>
    </section>
  );
};

export default Hero;
