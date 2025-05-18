import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button"; // adjust based on your project structure

import { ChevronDown } from "lucide-react";


export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-4xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Ankit
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Shaw
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I create and develop user-friendly, eye-catching web interfaces using the latest front-end technologies—turning intricate concepts into smooth and enjoyable user experiences.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>









      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10 text-adaptive-medium">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 animate-fade-in text-left">
            <span className="inline-block py-1 px-3 mb-4 rounded-full bg-tech-blue/15 text-navy border border-tech-blue/20 text-sm backdrop-blur-sm">
              Tech Enthusiast & Problem Solver
            </span>

            
            <h1 className="text-blue-900 text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight relative">
              Welcome to My <span className="text-gradient relative">Creative Space</span>
              <div className="absolute -bottom-2 left-0 h-1 w-16 bg-gradient-to-r from-tech-blue to-tech-blue/50 rounded-full"></div>
            </h1>


            <p className="text-lg mb-8 max-w-lg">
              Building innovative solutions with 
              <span className="text-tech-blue font-medium"> Java Development </span> 
              and 
              <span className="text-tech-blue font-medium"> Data Science </span>. 
              Passionate about creating efficient, elegant code and data-driven applications.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-gradient-to-r from-tech-blue to-tech-blue/80 hover:from-tech-blue/90 hover:to-tech-blue shadow-lg shadow-tech-blue/20 transition-all duration-300 hover:scale-105 " variant="primary">
                View Portfolio
              </Button>
              
              <Button
              variant="outline"
              className="border-gray-300 hover:bg-gray-200 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-tech-blue/50 hover:text-tech-blue"
              onClick={() => {
              // Try to scroll first
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              } else {
                // Fallback to email if no section exists
                window.location.href = "mailto:your-ashaw2588.com";
              }
            }}>
                          Contact Me
              </Button>
            </div>
            
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <div className="flex items-center space-x-2 bg-white bg-opacity-70 backdrop-blur-sm py-2 px-4 rounded-full shadow-sm border border-gray-200 transition-all duration-300 hover:border-tech-blue/50 hover:shadow-md">
                <div className="w-2 h-2 rounded-full bg-tech-blue animate-pulse-glow"></div>
                <p className="text-sm text-gray-700 font-medium">Java Developer</p>
              </div>
              <div className="flex items-center space-x-2 bg-white bg-opacity-70 backdrop-blur-sm py-2 px-4 rounded-full shadow-sm border border-gray-200 transition-all duration-300 hover:border-tech-blue/50 hover:shadow-md">
                <div className="w-2 h-2 rounded-full bg-tech-blue animate-pulse-glow"></div>
                <p className="text-sm text-gray-700 font-medium">Data Scientist</p>
              </div>
              <div className="flex items-center space-x-2 bg-white bg-opacity-70 backdrop-blur-sm py-2 px-4 rounded-full shadow-sm border border-gray-200 transition-all duration-300 hover:border-tech-blue/50 hover:shadow-md">
                <div className="w-2 h-2 rounded-full bg-tech-blue animate-pulse-glow"></div>
                <p className="text-sm text-gray-700 font-medium">Problem Solver</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
            <div className="relative animate-fade-in">
              {/* Enhanced profile image with glowing effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-tech-blue via-tech-blue/70 to-tech-blue/30 rounded-full blur opacity-70 animate-pulse-glow"></div>
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl bg-gradient-to-b from-white to-gray-100">
                <img alt="Ankit Shaw" className="w-full h-full object-cover" src="/Photo/9fb2e7d1-9d73-459b-a370-d05aa0ff4999.jpg" />
              </div>
              
              {/* Enhanced info card */}
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg border border-gray-200 shadow-xl backdrop-blur-sm transform transition-transform hover:scale-105">
                <p className="text-tech-blue font-semibold">B.Tech CSE</p>
                <p className="text-sm text-gray-700">Expected 2025</p>
              </div>

              {/* Enhanced background blurs */}
              <div className="absolute -z-10 -bottom-8 -left-8 w-32 h-32 bg-tech-blue/10 rounded-full blur-xl"></div>
              <div className="absolute -z-10 -top-8 -right-8 w-20 h-20 bg-tech-blue/10 rounded-full blur-lg"></div>
              
              {/* New decorative elements */}
              <div className="absolute top-5 -left-10 w-8 h-8 bg-tech-blue/20 rounded-full"></div>
              <div className="absolute bottom-10 -right-5 w-6 h-6 bg-tech-blue/20 rounded-full"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center animate-bounce">
          <a href="#about" className="inline-block p-3 bg-gray/90 rounded-full border border-gray-200 shadow-lg backdrop-blur-sm hover:border-tech-blue/50 transition-all hover:shadow-tech-blue/10">
            <ChevronDown className="text-tech-blue" size={24} />
          </a>
        </div>
      </div>
  









      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};