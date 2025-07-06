import profilePic from "../assets/me/profilePic.jpg";

const About = () => {
  const skills = [
    { name: "JavaScript", level: 95 },
    { name: "React", level: 90 },
    { name: "CSS", level: 90 },
    { name: "Node.js", level: 80 },
    { name: "Python", level: 80 },
    { name: "Java", level: 50 },
  ];

  return (
    <section id="about" className="section-padding bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Passionate about creating digital solutions that make a difference
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <div className="glass-card p-8">
              <img
                src={profilePic}
                alt="Professional workspace"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-semibold mb-4 gradient-text">
                Axel Jansson Åhlén
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                I am a passionate software developer with a strong focus on
                creating innovative and user-friendly applications. I love
                problem-solving and constantly strive to improve my skills and
                learn new tech stacks.
              </p>
            </div>
          </div>

          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold mb-8 gradient-text">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-foreground">
                      {skill.name}
                    </span>
                    <span className="text-primary font-medium">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 group-hover:scale-105"
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.1}s`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 glass-card">
              <h4 className="text-lg font-semibold mb-3 text-primary">
                Core Values
              </h4>
              <ul className="space-y-2 text-foreground/80">
                <li>• Clean, maintainable code</li>
                <li>• User-centered design approach</li>
                <li>• Continuous learning and innovation</li>
                <li>• Collaborative team spirit</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
