import React from 'react';
import { Github, Code, Trophy, Star, GitBranch } from 'lucide-react';

interface CodingProfile {
  platform: string;
  username: string;
  url: string;
  icon: React.ReactNode;
  stats: {
    label: string;
    value: string;
  }[];
  description: string;
  color: string;
}

const CodingProfiles = () => {
  const profiles: CodingProfile[] = [
    {
      platform: "GitHub",
      username: "Anushtha-Singh",
      url: "https://github.com/Anushtha-Singh",
      icon: <Github className="w-6 h-6" />,
      stats: [
        { label: "Repositories", value: "25+" },
        { label: "Followers", value: "150+" },
        { label: "Stars", value: "200+" }
      ],
      description: "Open source contributions and personal projects",
      color: "from-gray-700 to-gray-900"
    },
    {
      platform: "LeetCode",
      username: "AnushthaSK",
      url: "https://leetcode.com/u/AnushthaSK/",
      icon: <Code className="w-6 h-6" />,
      stats: [
        { label: "Problems Solved", value: "300+" },
        { label: "Ranking", value: "Top 15%" },
        { label: "Contest Rating", value: "1650+" }
      ],
      description: "Competitive programming and algorithm challenges",
      color: "from-orange-500 to-yellow-500"
    },
    {
      platform: "CodeChef",
      username: "yourusername",
      url: "https://codechef.com/users/yourusername",
      icon: <Trophy className="w-6 h-6" />,
      stats: [
        { label: "Rating", value: "1800+" },
        { label: "Stars", value: "4★" },
        { label: "Global Rank", value: "Top 20%" }
      ],
      description: "Competitive programming contests and challenges",
      color: "from-amber-600 to-orange-600"
    },
    {
      platform: "Codeforces",
      username: "yourusername",
      url: "https://codeforces.com/profile/yourusername",
      icon: <GitBranch className="w-6 h-6" />,
      stats: [
        { label: "Rating", value: "1400+" },
        { label: "Max Rating", value: "1550+" },
        { label: "Contests", value: "50+" }
      ],
      description: "Algorithm contests and problem solving",
      color: "from-blue-600 to-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Coding <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Profiles</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Showcasing my competitive programming journey and open-source contributions across various platforms
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {profiles.map((profile, index) => (
            <div
              key={profile.platform}
              className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* Gradient Background */}
                className={`absolute inset-0 bg-gradient-to-br ${profile.color} opacity-10 rounded-2xl group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}
              
              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 bg-gradient-to-br ${profile.color} rounded-lg text-white shadow-lg`}>
                      {profile.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{profile.platform}</h3>
                      <p className="text-gray-400">@{profile.username}</p>
                    </div>
                  </div>
                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white font-medium transition-all duration-300 hover:scale-110"
                  >
                    Visit Profile
                  </a>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {profile.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  {profile.stats.map((stat, statIndex) => (
                    <div
                      key={statIndex}
                      className="text-center p-4 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300"
                    >
                      <div className="text-2xl font-bold text-white mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-400">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Hover Effect */}
                <div   className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-white/5 backdrop-blur-lg rounded-full border border-white/10">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="text-white font-medium">Always learning and improving through coding challenges</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;