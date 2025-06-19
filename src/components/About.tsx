import React from 'react';
import { User, Code, Coffee, Zap, Target, Rocket } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full Stack Developer",
      description: "Passionate about creating end-to-end solutions"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Love tackling complex challenges with elegant solutions"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Goal Oriented",
      description: "Focused on delivering results and continuous improvement"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Innovation Driven",
      description: "Always exploring cutting-edge technologies"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image and Stats */}
          <div className="relative">
            {/* Profile Image Placeholder */}
            <div className="relative w-80 h-80 mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl transform rotate-6"></div>
              <div className="relative w-full h-full bg-gray-800 rounded-2xl flex items-center justify-center border-4 border-white/10">
                <User className="w-32 h-32 text-gray-400" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">2+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm text-gray-300">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Crafting Digital Experiences with 
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Passion</span>
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a dedicated full-stack developer with a passion for creating innovative web solutions. 
                My journey in tech started with curiosity and has evolved into a career focused on building 
                impactful applications that solve real-world problems.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or mentoring aspiring developers. I believe in continuous learning and staying 
                ahead of the curve in this ever-evolving tech landscape.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="group p-6 bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h4 className="text-white font-semibold text-lg">{item.title}</h4>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <Coffee className="w-5 h-5 inline-block mr-2" />
                Let's Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;