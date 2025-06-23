import React from 'react';
import { Code2, Database, Server, Smartphone, Globe } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  color: string;
  skills: Skill[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      icon: <Code2 className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React.js", level: 90, category: "frontend" },
        { name: "Next.js", level: 85, category: "frontend" },
        { name: "TypeScript", level: 88, category: "frontend" },
        { name: "Tailwind CSS", level: 92, category: "frontend" },
        { name: "JavaScript", level: 95, category: "frontend" },
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 87, category: "backend" },
        { name: "Python", level: 85, category: "backend" },
        { name: "Express.js", level: 82, category: "backend" },
        { name: "Django", level: 78, category: "backend" },
        { name: "REST APIs", level: 90, category: "backend" },
      ]
    },
    {
      title: "Database & Cloud",
      icon: <Database className="w-6 h-6" />,
      color: "from-purple-500 to-violet-500",
      skills: [
        { name: "MongoDB", level: 85, category: "database" },
        { name: "PostgreSQL", level: 80, category: "database" },
        { name: "Firebase", level: 88, category: "database" },
        { name: "AWS", level: 75, category: "database" },
        { name: "Docker", level: 70, category: "database" },
      ]
    },
    {
      title: "Mobile & Others",
      icon: <Smartphone className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "React Native", level: 80, category: "mobile" },
        { name: "Git/GitHub", level: 95, category: "mobile" },
        { name: "Figma", level: 85, category: "mobile" },
        { name: "Linux", level: 82, category: "mobile" },
        { name: "Jest", level: 75, category: "mobile" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit built through dedication, practice, and real-world experience
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-8">
                <div className={`p-3 bg-gradient-to-br ${category.color} rounded-lg text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group/skill">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out transform origin-left`}
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">
            Additional <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Technologies</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "GraphQL", "Redux", "Material-UI", "Bootstrap", "Sass", "Webpack",
              "Vite", "Prisma", "Socket.io", "JWT", "OAuth", "Stripe",
              "Netlify", "Vercel", "Heroku", "nginx"
            ].map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white/10 backdrop-blur-lg text-white rounded-full border border-white/20 hover:border-white/40 hover:bg-white/20 transition-all duration-300 hover:scale-110 cursor-pointer"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Learning Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-3 px-6 py-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-lg rounded-full border border-white/20">
            <Globe className="w-5 h-5 text-indigo-400" />
            <span className="text-white font-medium">Currently exploring: AI/ML, Web3, and Microservices</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;