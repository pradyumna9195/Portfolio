import React from "react";
import { Github, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 pt-16"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-100">
                Hi, I'm Pradyumna Wagholikar
              </h1>
              <p className="text-xl text-gray-400">
                An Information Technology graduate specializing in data science,
                machine learning, and web development. I am passionate about
                creating impactful solutions through data-driven insights and
                AI-powered technologies.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/pradyumna9195"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border-2 border-gray-400 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Github className="w-5 h-5 mr-2" />
                View GitHub
              </a>
            </div>

            <div className="flex gap-8">
              <div>
                <div className="text-4xl font-bold text-gray-100">3+</div>
                <div className="text-gray-400">Years Coding</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-100">15+</div>
                <div className="text-gray-400">Projects</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <img
                src="/pradpic2.jpg"
                alt="Image"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-4 -right-4 bg-gray-800 p-4 rounded-xl shadow-lg">
              <div className="text-gray-100 font-semibold">
                Featured Projects:
              </div>
              <div className="text-gray-400">
                Pose Estimation • KhetiSathi • MediLink
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="p-2 rounded-full bg-gray-800 shadow-md">
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
