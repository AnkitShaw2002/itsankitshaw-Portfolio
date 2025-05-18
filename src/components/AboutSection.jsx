import { Brain, Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto px-4">

        {/* Title Section */}
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-tech-blue mb-6 rounded-full"></div>
          <p className="text-adaptive-light text-center max-w-2xl">
            A passionate tech enthusiast with a strong foundation in Computer Science and a commitment to continuous learning.
          </p>
        </div>

        {/* Main content: Image left, Text right */}
        <div className="flex flex-col md:flex-row gap-10 items-start">

          {/* Image */}
      <div className="md:w-1/2 flex justify-center">
      <div className="relative w-[400px]">
      <img
      alt="Ankit Working"
      src="/Photo/cd15ce6a-230e-4c14-9138-8fc8d20e38ad.png"
      className="w-full rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
      />
    
    {/* Top-left label */}
    <div className="absolute bottom-98 right-65 bg-tech-blue/10 border border-tech-blue/20 py-1 px-3 rounded-full backdrop-blur-sm">
      <span className="text-tech-blue font-semibold">Tech Enthusiast</span>
    </div>

    {/* Bottom-right label */}
    <div className="absolute top-98 left-65 bg-tech-blue/10 border border-tech-blue/20 py-1 px-3 rounded-full backdrop-blur-sm">
      <span className="text-tech-blue font-semibold">Problem Solver</span>
    </div>
  </div>
</div>



{/* I'm into tech and love solving problems.
 Right now, I'm working on my B.Tech in Computer Science & Engineering at MCKV Institute of Engineering set to finish in 2025. 
 I've got a solid grasp of Java and data science, 
 and I get a kick out of creating real-world solutions like machine learning models and management systems.
 When I'm not studying, I'm interested in new tech, and I use gaming as a way to be creative. */}

          {/* Text & 3 hover cards */}
          <div className="md:w-1/2 flex flex-col text-adaptive-medium">

            {/* Text content */}
            <div className="mb-8 text-justify">
              <h3 className="text-2xl font-semibold mb-2 ">
                Passionate Web Developer & Tech Creator
              </h3>
              <h3 className="text-2xl font-bold mb-6">
                I'm <span className="text-primary">Ankit Shaw</span>
              </h3>
              
              <p className="text-adaptive-medium mb-6">
                Right now, I'm working on my B.Tech in Computer Science 
                & Engineering at MCKV Institute of Engineering set to finish in 2025. 
                I've got a solid grasp of Java and data science, 
                and I get a kick out of creating real-world solutions 
                like machine learning models and management systems.
                When I'm not studying, I'm interested in new tech, 
                and I use gaming as a way to be creative.
              </p>
              {/* <p className="text-adaptive-medium mb-6">
                My academic journey has equipped me with strong fundamentals in software development, particularly in Java, and data science. I specialize in building practical solutions such as machine learning models and management systems that solve real-world challenges.
              </p>
              <p className="text-adaptive-medium mb-8">
                Outside of my professional pursuits, I'm passionate about exploring emerging technologies and enjoy gaming as a way to unwind and foster creative thinking.
              </p> */}

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center sm:justify-start">
                <a href="#contact" className="cosmic-button">
                  Get In Touch
                </a>

                <a
                  href=""
                  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                >
                  Download CV
                </a>
              </div>
            </div>

            {/* 3 hoverable cards below text */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
  <div className="gradient-border p-6 card-hover">
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-full bg-primary/10">
        <Code className="h-6 w-6 text-primary" />
      </div>
      <div className="text-left">
        <h4 className="font-semibold text-lg mb-1">Java Development</h4>
        <p className="text-muted-foreground text-sm">
          Skilled in building scalable and maintainable Java applications with clean code practices.
        </p>
      </div>
    </div>
  </div>

  <div className="gradient-border p-6 card-hover">
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-full bg-primary/10">
        <User className="h-6 w-6 text-primary" />
      </div>
      <div className="text-left">
        <h4 className="font-semibold text-lg mb-1">UI/UX Design</h4>
        <p className="text-muted-foreground text-sm">
          Creating responsive websites and applications with intuitive and modern user interfaces.
        </p>
      </div>
    </div>
  </div>

  <div className="gradient-border p-6 card-hover">
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-full bg-primary/10">
        <Brain className="h-6 w-6 text-primary" />
      </div>
      <div className="text-left">
        <h4 className="font-semibold text-lg mb-1">Data Science</h4>
        <p className="text-muted-foreground text-sm">
          Experience analyzing data and building models to extract actionable insights.
        </p>
      </div>
    </div>
  </div>
</div>


          </div>
        </div>

      </div>
    </section>
  );
};
