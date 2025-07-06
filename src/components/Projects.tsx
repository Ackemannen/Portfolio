import { useState } from "react";
import { Github, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "../projects";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const categories = ["all", "Web Dev", "Mobile"];
  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);
  const featuredProject = projects.find((p) => p.featured);

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            A showcase of my recent work and projects
          </p>
        </div>

        {/* Featured Project */}
        {featuredProject && (
          <div className="mb-20 glass-card p-8 animate-fade-in">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium mb-4">
                  Featured Project
                </div>
                <h3 className="text-3xl font-bold mb-4 gradient-text">
                  {featuredProject.title}
                </h3>
                <p className="text-foreground/80 text-lg mb-6 leading-relaxed">
                  {featuredProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-foreground rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={featuredProject.code}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-primary hover:bg-primary/90 cursor-pointer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                  </a>
                  <a
                    href={featuredProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="border-primary/50 text-primary hover:bg-primary/10 cursor-pointer"
                    >
                      <ArrowUp className="w-4 h-4 mr-2 rotate-45" />
                      Live Demo
                    </Button>
                  </a>
                </div>
              </div>
              <div className="lg:order-first">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-80 object-cover rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        )}

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 cursor-pointer ${
                filter === category
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-secondary/50 text-foreground/80 hover:bg-secondary"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <div
                key={project.id}
                className="glass-card group hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-t-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-1 bg-primary/20 text-primary rounded text-xs font-medium">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-foreground/70 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary/50 text-foreground/80 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 text-xs cursor-pointer"
                      >
                        <Github className="w-3 h-3 mr-1" />
                        Code
                      </Button>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        className="flex-1 text-xs cursor-pointer"
                      >
                        <ArrowUp className="w-3 h-3 mr-1 rotate-45" />
                        Demo
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
