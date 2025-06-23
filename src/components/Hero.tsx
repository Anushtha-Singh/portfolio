"use client"

import { ArrowDown, Code, Sparkles, Heart, Star, Zap, Rocket, Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-slate-900 to-black relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Circles with improved colors */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-400/5 rounded-full animate-float-slow blur-sm"></div>
        <div className="absolute top-32 right-20 w-32 h-32 bg-cyan-400/5 rounded-full animate-float-reverse blur-sm"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-violet-400/5 rounded-full animate-float-fast blur-sm"></div>
        <div className="absolute top-1/2 right-10 w-24 h-24 bg-indigo-400/5 rounded-full animate-float-slow blur-sm"></div>
        <div className="absolute bottom-32 right-1/3 w-40 h-40 bg-purple-400/3 rounded-full animate-float-reverse blur-lg"></div>
        
        {/* Enhanced Animated Lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/10 to-transparent animate-slide-right"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent animate-slide-left"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-400/8 to-transparent animate-slide-right animation-delay-2000"></div>
        
        {/* Floating Icons with better positioning */}
        <div className="absolute top-20 left-1/3 animate-float-up-down">
          <Code className="w-6 h-6 text-purple-400/20" />
        </div>
        <div className="absolute top-40 right-1/4 animate-float-up-down animation-delay-1000">
          <Star className="w-5 h-5 text-cyan-400/20" />
        </div>
        <div className="absolute bottom-40 left-1/5 animate-float-up-down animation-delay-2000">
          <Zap className="w-4 h-4 text-violet-400/20" />
        </div>
        <div className="absolute top-3/4 right-1/5 animate-float-up-down animation-delay-3000">
          <Rocket className="w-5 h-5 text-indigo-400/20" />
        </div>
        
        {/* Enhanced Pulsing Dots */}
        <div className="absolute top-16 right-32 w-2 h-2 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-60 left-20 w-1 h-1 bg-cyan-400/30 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-purple-400/20 rounded-full animate-pulse animation-delay-1000"></div>
        <div className="absolute top-80 right-40 w-1 h-1 bg-violet-400/30 rounded-full animate-ping animation-delay-2000"></div>
        <div className="absolute bottom-40 left-40 w-2 h-2 bg-indigo-400/20 rounded-full animate-pulse animation-delay-3000"></div>
        
        {/* Enhanced Gradient Orbs */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-600/5 to-cyan-600/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-violet-600/5 to-indigo-600/5 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/3 via-cyan-500/3 to-violet-500/3 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.02&quot;%3E%3Cpath d=&quot;M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-10"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Desktop Layout: Side by Side */}
        <div className="hidden lg:flex items-center justify-between min-h-screen py-20">
          {/* Left Side - Profile Picture */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              {/* Enhanced Animated Border Rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-cyan-400 to-violet-400 animate-spin p-2">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-950 via-slate-900 to-black"></div>
              </div>
              <div className="absolute inset-2 rounded-full bg-gradient-to-r from-violet-400 via-indigo-400 to-purple-400 animate-spin-reverse p-1">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-950 via-slate-900 to-black"></div>
              </div>
              
              {/* Profile Picture with enhanced styling */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl shadow-purple-500/10 transform hover:scale-105 transition-all duration-500 hover:shadow-purple-500/20">
                <img 
                  src="/api/placeholder/320/320" 
                  alt="Anushtha Singh Kushwah" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5"></div>
              </div>
              
              {/* Enhanced Orbiting Icons */}
              <div className="absolute top-10 -right-5 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full p-3 animate-orbit-1 shadow-lg shadow-purple-500/25">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full p-3 animate-orbit-2 shadow-lg shadow-cyan-500/25">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="absolute top-1/2 -right-8 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full p-2 animate-orbit-3 shadow-lg shadow-violet-500/25">
                <Heart className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 text-left pl-20">
            <div className="space-y-6">
              <div>
                <h1 className="text-6xl xl:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent animate-fade-in-up">
                  Anushtha Singh
                </h1>
                <h1 className="text-6xl xl:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-violet-300 to-purple-300 bg-clip-text text-transparent animate-fade-in-up animation-delay-500">
                  Kushwah
                </h1>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 animate-expand"></div>
                  <Heart className="w-5 h-5 text-violet-400 animate-pulse" />
                  <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-400 animate-expand animation-delay-1000"></div>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-2xl text-gray-300 animate-fade-in-right animation-delay-1000">
                  <span className="text-purple-400 font-semibold">Full Stack Developer</span>
                </p>
                <p className="text-2xl text-gray-300 animate-fade-in-right animation-delay-1500">
                  <span className="text-cyan-400 font-semibold">Problem Solver</span>
                </p>
                <p className="text-2xl text-gray-300 animate-fade-in-right animation-delay-2000">
                  <span className="text-violet-400 font-semibold">Tech Enthusiast</span>
                </p>
              </div>

              <div className="py-6 animate-fade-in-up animation-delay-2500">
                <p className="text-gray-300 italic text-lg opacity-90">
                  <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    {'"Crafting digital experiences with passion and precision ✨"'}
                  </span>
                </p>
              </div>
              
              <div className="flex gap-6 animate-fade-in-up animation-delay-3000">
                <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-violet-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-purple-500/25 border border-purple-500/20">
                  <span className="flex items-center gap-2">
                    View My Work
                    <Sparkles className="w-4 h-4 group-hover:animate-spin" />
                  </span>
                </button>
                <button className="px-8 py-4 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/5 hover:border-white/40 transition-all duration-300 backdrop-blur-sm">
                  Download CV
                </button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 animate-fade-in-up animation-delay-3500">
                <a href="#" className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110 border border-white/10 hover:border-purple-400/30">
                  <Github className="w-5 h-5 text-gray-300 hover:text-purple-400 transition-colors" />
                </a>
                <a href="#" className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110 border border-white/10 hover:border-cyan-400/30">
                  <Linkedin className="w-5 h-5 text-gray-300 hover:text-cyan-400 transition-colors" />
                </a>
                <a href="#" className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110 border border-white/10 hover:border-violet-400/30">
                  <Mail className="w-5 h-5 text-gray-300 hover:text-violet-400 transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Layout: Centered */}
        <div className="lg:hidden flex flex-col items-center justify-center min-h-screen py-20 text-center">
          {/* Profile Picture */}
          <div className="mb-8 relative">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-cyan-400 to-violet-400 animate-spin p-1">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-950 via-slate-900 to-black"></div>
              </div>
              
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl shadow-purple-500/10 transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="/api/placeholder/224/224" 
                  alt="Anushtha Singh Kushwah" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5"></div>
              </div>
              
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full p-2 animate-bounce shadow-lg shadow-purple-500/25">
                <Code className="w-4 h-4 text-white" />
              </div>
              <div className="absolute -bottom-2 -left-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full p-2 animate-pulse shadow-lg shadow-cyan-500/25">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* Name */}
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent animate-fade-in">
              Anushtha Singh Kushwah
            </h1>
            <div className="flex items-center justify-center gap-2 text-purple-300">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-purple-400"></div>
              <Heart className="w-4 h-4 text-violet-400 animate-pulse" />
              <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-cyan-400"></div>
            </div>
          </div>
          
          {/* Roles */}
          <div className="mb-6 space-y-2">
            <p className="text-lg md:text-xl text-purple-300 font-semibold">Full Stack Developer</p>
            <p className="text-lg md:text-xl text-cyan-300 font-semibold">Problem Solver</p>
            <p className="text-lg md:text-xl text-violet-300 font-semibold">Tech Enthusiast</p>
          </div>

          {/* Tagline */}
          <div className="mb-8">
            <p className="text-gray-300 italic text-sm md:text-base opacity-80">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {'"Crafting digital experiences with passion and precision ✨"'}
              </span>
            </p>
          </div>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-violet-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-purple-500/25 border border-purple-500/20">
              <span className="flex items-center justify-center gap-2">
                View My Work
                <Sparkles className="w-4 h-4 group-hover:animate-spin" />
              </span>
            </button>
            <button className="px-8 py-4 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/5 hover:border-white/40 transition-all duration-300 backdrop-blur-sm">
              Download CV
            </button>
            </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-12">
            <a href="#" className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110 border border-white/10 hover:border-purple-400/30">
              <Github className="w-5 h-5 text-gray-300 hover:text-purple-400 transition-colors" />
            </a>
            <a href="#" className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110 border border-white/10 hover:border-cyan-400/30">
              <Linkedin className="w-5 h-5 text-gray-300 hover:text-cyan-400 transition-colors" />
            </a>
            <a href="#" className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110 border border-white/10 hover:border-violet-400/30">
              <Mail className="w-5 h-5 text-gray-300 hover:text-violet-400 transition-colors" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <div className="flex flex-col items-center gap-2">
              <span className="text-white/60 text-sm">Explore More</span>
              <ArrowDown className="text-white/60 animate-pulse" size={32} />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-180deg); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes float-up-down {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes slide-right {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        
        @keyframes slide-left {
          0% { transform: translateX(100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(-100%); opacity: 0; }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes orbit-1 {
          0% { transform: rotate(0deg) translateX(100px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(100px) rotate(-360deg); }
        }
        
        @keyframes orbit-2 {
          0% { transform: rotate(0deg) translateX(120px) rotate(0deg); }
          100% { transform: rotate(-360deg) translateX(120px) rotate(360deg); }
        }
        
        @keyframes orbit-3 {
          0% { transform: rotate(0deg) translateX(140px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(140px) rotate(-360deg); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-right {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes expand {
          from { width: 0; }
          to { width: 3rem; }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.1; }
        }
        
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-reverse { animation: float-reverse 8s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
        .animate-float-up-down { animation: float-up-down 3s ease-in-out infinite; }
        .animate-slide-right { animation: slide-right 8s ease-in-out infinite; }
        .animate-slide-left { animation: slide-left 10s ease-in-out infinite; }
        .animate-spin { animation: spin 10s linear infinite; }
        .animate-spin-reverse { animation: spin-reverse 12s linear infinite; }
        .animate-orbit-1 { animation: orbit-1 15s linear infinite; }
        .animate-orbit-2 { animation: orbit-2 20s linear infinite; }
        .animate-orbit-3 { animation: orbit-3 25s linear infinite; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; opacity: 0; }
        .animate-fade-in-right { animation: fade-in-right 1s ease-out forwards; opacity: 0; }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; opacity: 0; }
        .animate-expand { animation: expand 1s ease-out forwards; width: 0; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        
        .animation-delay-500 { animation-delay: 0.5s; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-1500 { animation-delay: 1.5s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-2500 { animation-delay: 2.5s; }
        .animation-delay-3000 { animation-delay: 3s; }
        .animation-delay-3500 { animation-delay: 3.5s; }
      `}</style>
    </section>
  )
}

export default Hero