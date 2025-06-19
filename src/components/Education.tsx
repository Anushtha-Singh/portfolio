import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Trophy } from 'lucide-react';

interface Education {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  gpa?: string;
  description: string;
  achievements: string[];
  type: 'university' | 'certification' | 'course';
}

const Education = () => {
  const educationData: Education[] = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Shri Govindram Seksaria Institute of Technology and Science",
      location: "Indore, Madhya Pradesh, India",
      duration: "2023 - 2026",
      gpa: "8.30/10",
      description: "Comprehensive study of computer science fundamentals including algorithms, data structures, software engineering, and system design.",
      achievements: [
        "Dean's List for Academic Excellence",
        "Winner of University Hackathon 2023",
        "President of Computer Science Club",
        "Published research paper on Machine Learning"
      ],
      type: 'university'
    },
    {
      degree: "Diploma in Electronics and Communication Engineering",
      institution: "Government Polytechnic College",
      location: "Raisen, Madhya Pradesh, India",
      duration: "2020 - 2023",
      description: "Focused on front-end and back-end web development technologies including HTML, CSS, JavaScript, and Node.js.",
      achievements: [
        "Topper of college",
        "President of College",
        "Internship at BSNL"
      ],
      type: 'university'
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      institution: "Coding Academy",
      location: "Online",
      duration: "2023",
      description: "Intensive 6-month program focused on modern web development technologies and best practices.",
      achievements: [
        "Graduated with Distinction",
        "Built 15+ real-world projects",
        "Mentored junior students",
        "100% job placement rate cohort"
      ],
      type: 'course'
    },
    {
      degree: "AWS Solutions Architect",
      institution: "Amazon Web Services",
      location: "Online",
      duration: "2023",
      description: "Professional certification demonstrating expertise in designing distributed systems on AWS.",
      achievements: [
        "Passed on first attempt",
        "Score: 850/1000",
        "Valid until 2026"
      ],
      type: 'certification'
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'university':
        return <GraduationCap className="w-6 h-6" />;
      case 'certification':
        return <Award className="w-6 h-6" />;
      case 'course':
        return <BookOpen className="w-6 h-6" />;
      default:
        return <GraduationCap className="w-6 h-6" />;
    }
  };

  const getGradient = (type: string) => {
    switch (type) {
      case 'university':
        return 'from-blue-500 to-indigo-600';
      case 'certification':
        return 'from-green-500 to-emerald-600';
      case 'course':
        return 'from-purple-500 to-pink-600';
      default:
        return 'from-blue-500 to-indigo-600';
    }
  };

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Education & <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Building expertise through formal education, professional certifications, and continuous learning
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 transform md:-translate-x-px"></div>

          {/* Education Items */}
          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full transform md:-translate-x-2 z-10 shadow-lg">
                  <div className="absolute inset-1 bg-white rounded-full"></div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`p-3 bg-gradient-to-br ${getGradient(edu.type)} rounded-lg text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {getIcon(edu.type)}
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-2 text-gray-400 text-sm mb-1">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-400 text-sm">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Degree & Institution */}
                    <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                    <h4 className="text-lg text-blue-400 font-semibold mb-4">{edu.institution}</h4>
                    
                    {/* GPA */}
                    {edu.gpa && (
                      <div className="inline-flex items-center space-x-2 px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold mb-4">
                        <Trophy className="w-4 h-4" />
                        <span>GPA: {edu.gpa}</span>
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {edu.description}
                    </p>

                    {/* Achievements */}
                    <div>
                      <h5 className="text-white font-semibold mb-3 flex items-center">
                        <Award className="w-4 h-4 mr-2 text-yellow-400" />
                        Key Achievements
                      </h5>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="text-gray-300 text-sm flex items-start"
                          >
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Certifications */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Additional <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Certifications</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Google Cloud Professional", issuer: "Google", year: "2023" },
              { name: "React Developer Certification", issuer: "Meta", year: "2023" },
              { name: "Node.js Application Developer", issuer: "OpenJS Foundation", year: "2022" },
              { name: "MongoDB Developer", issuer: "MongoDB University", year: "2022" },
              { name: "Docker Certified Associate", issuer: "Docker", year: "2023" },
              { name: "Agile Project Management", issuer: "PMI", year: "2022" }
            ].map((cert, index) => (
              <div
                key={index}
                className="group p-6 bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center justify-between mb-3">
                  <Award className="w-5 h-5 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm text-gray-400">{cert.year}</span>
                </div>
                <h4 className="text-white font-semibold mb-1">{cert.name}</h4>
                <p className="text-gray-400 text-sm">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;