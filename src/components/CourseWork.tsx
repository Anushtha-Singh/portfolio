import React from 'react';
import { BookOpen, Code, Brain, Shield, Cpu, Network, BarChart } from 'lucide-react';

interface Course {
  code: string;
  name: string;
  description: string;
  grade: string;
  credits: number;
  skills: string[];
  category: 'core' | 'advanced' | 'elective';
}

const CourseWork = () => {
  const courses: Course[] = [
    {
      code: "CS 401",
      name: "Data Structures & Algorithms",
      description: "Comprehensive study of fundamental data structures, algorithm design, and complexity analysis.",
      grade: "A+",
      credits: 4,
      skills: ["Problem Solving", "Algorithm Design", "Time Complexity", "Space Optimization"],
      category: 'core'
    },
    {
      code: "CS 305",
      name: "Database Management Systems",
      description: "Relational database design, SQL, normalization, indexing, and transaction management.",
      grade: "A",
      credits: 3,
      skills: ["SQL", "Database Design", "Normalization", "Query Optimization"],
      category: 'core'
    },
    {
      code: "CS 415",
      name: "Software Engineering",
      description: "Software development lifecycle, design patterns, testing methodologies, and project management.",
      grade: "A+",
      credits: 4,
      skills: ["SDLC", "Design Patterns", "Testing", "Agile Methodology"],
      category: 'core'
    },
    {
      code: "CS 420",
      name: "Machine Learning",
      description: "Statistical learning theory, supervised/unsupervised learning, neural networks, and deep learning.",
      grade: "A",
      credits: 3,
      skills: ["Python", "TensorFlow", "Statistical Analysis", "Neural Networks"],
      category: 'advanced'
    },
    {
      code: "CS 380",
      name: "Computer Networks",
      description: "Network protocols, TCP/IP, network security, distributed systems, and performance analysis.",
      grade: "A-",
      credits: 3,
      skills: ["Network Protocols", "TCP/IP", "Network Security", "Distributed Systems"],
      category: 'core'
    },
    {
      code: "CS 425",
      name: "Cybersecurity Fundamentals",
      description: "Information security principles, cryptography, ethical hacking, and security assessment.",
      grade: "A+",
      credits: 3,
      skills: ["Cryptography", "Ethical Hacking", "Security Assessment", "Risk Analysis"],
      category: 'advanced'
    },
    {
      code: "CS 350",
      name: "Operating Systems",
      description: "Process management, memory management, file systems, and system performance optimization.",
      grade: "A",
      credits: 4,
      skills: ["System Programming", "Process Management", "Memory Management", "Linux"],
      category: 'core'
    },
    {
      code: "CS 445",
      name: "Data Analytics & Visualization",
      description: "Big data processing, statistical analysis, data mining, and interactive visualization techniques.",
      grade: "A+",
      credits: 3,
      skills: ["Big Data", "Statistical Analysis", "Data Mining", "Visualization"],
      category: 'elective'
    }
  ];

  const getIcon = (category: string) => {
    switch (category) {
      case 'core':
        return <Code className="w-5 h-5" />;
      case 'advanced':
        return <Brain className="w-5 h-5" />;
      case 'elective':
        return <BarChart className="w-5 h-5" />;
      default:
        return <BookOpen className="w-5 h-5" />;
    }
  };

  const getGradient = (category: string) => {
    switch (category) {
      case 'core':
        return 'from-blue-500 to-cyan-500';
      case 'advanced':
        return 'from-purple-500 to-pink-500';
      case 'elective':
        return 'from-green-500 to-emerald-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'core':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'advanced':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'elective':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getGradeColor = (grade: string) => {
    if (grade === 'A+') return 'bg-green-500/20 text-green-400 border-green-500/30';
    if (grade === 'A') return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    if (grade === 'A-') return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  };

  const categoryCounts = {
    core: courses.filter(c => c.category === 'core').length,
    advanced: courses.filter(c => c.category === 'advanced').length,
    elective: courses.filter(c => c.category === 'elective').length,
  };

  const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0);
  const averageGrade = courses.filter(c => c.grade === 'A+').length / courses.length;

  return (
    <section id="coursework" className="py-20 bg-gradient-to-br from-gray-900 via-indigo-900/20 to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Academic <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Coursework</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Core computer science courses that built my technical foundation and problem-solving skills
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 text-center">
            <div className="text-3xl font-bold text-white mb-2">{courses.length}</div>
            <div className="text-gray-400">Total Courses</div>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 text-center">
            <div className="text-3xl font-bold text-white mb-2">{totalCredits}</div>
            <div className="text-gray-400">Credit Hours</div>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 text-center">
            <div className="text-3xl font-bold text-white mb-2">3.9</div>
            <div className="text-gray-400">GPA</div>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 text-center">
            <div className="text-3xl font-bold text-white mb-2">{Math.round(averageGrade * 100)}%</div>
            <div className="text-gray-400">A+ Grades</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-4 bg-white/5 backdrop-blur-lg rounded-lg p-2 border border-white/10">
            <div className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg border border-blue-500/30 font-medium">
              Core ({categoryCounts.core})
            </div>
            <div className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg border border-purple-500/30 font-medium">
              Advanced ({categoryCounts.advanced})
            </div>
            <div className="px-4 py-2 bg-green-500/20 text-green-400 rounded-lg border border-green-500/30 font-medium">
              Elective ({categoryCounts.elective})
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div
              key={course.code}
              className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Course Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 bg-gradient-to-br ${getGradient(course.category)} rounded-lg text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {getIcon(course.category)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{course.name}</h3>
                    <p className="text-gray-400 font-mono text-sm">{course.code}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <div className={`px-3 py-1 rounded-full border text-sm font-semibold ${getGradeColor(course.grade)}`}>
                    {course.grade}
                  </div>
                  <div className="text-gray-400 text-sm">{course.credits} Credits</div>
                </div>
              </div>

              {/* Category Badge */}
              <div className="mb-4">
                <span className={`px-3 py-1 rounded-full border text-xs font-semibold uppercase tracking-wide ${getCategoryColor(course.category)}`}>
                  {course.category}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed mb-6">
                {course.description}
              </p>

              {/* Skills */}
              <div>
                <h4 className="text-white font-semibold mb-3 flex items-center">
                  <Cpu className="w-4 h-4 mr-2 text-indigo-400" />
                  Key Skills Learned
                </h4>
                <div className="flex flex-wrap gap-2">
                  {course.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm border border-white/20 hover:border-white/40 hover:bg-white/20 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-purple-500/5 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Academic Achievements */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Academic <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Achievements</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Dean&apos;s List</h4>
              <p className="text-gray-400">Maintained 3.5+ GPA for 6 consecutive semesters</p>
            </div>
            <div className="text-center p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Research Assistant</h4>
              <p className="text-gray-400">Contributed to machine learning research project</p>
            </div>
            <div className="text-center p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Network className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Teaching Assistant</h4>
              <p className="text-gray-400">Assisted in Data Structures & Algorithms course</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseWork;