'use client';
import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram,
  Heart,
  ArrowUp,
  Code,
  Coffee,
  Send
} from 'lucide-react';

const Footer = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "anushthasinghk@gmail.com",
      href: "mailto:anushthasinghk@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 6267666059",
      href: "tel:+916267666059"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Indore, Madhya Pradesh, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/Anushtha-Singh",
      color: "hover:text-gray-300"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/anushtha-singh-kushwah/overlay",
      color: "hover:text-blue-400"
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      label: "Twitter",
      href: "https://twitter.com/yourusername",
      color: "hover:text-blue-400"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: "Instagram",
      href: "https://instagram.com/yourusername",
      color: "hover:text-pink-400"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Coursework", href: "#coursework" },
    { name: "Coding Profiles", href: "#coding-profiles" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent)]"></div>
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                  Your Name
                </h3>
                <p className="text-gray-300 leading-relaxed max-w-md">
                  Passionate full-stack developer crafting digital experiences with modern technologies. 
                  Always learning, always building, always pushing the boundaries of what's possible.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <h4 className="text-white font-semibold mb-4 flex items-center">
                  <Send className="w-4 h-4 mr-2 text-blue-400" />
                  Get In Touch
                </h4>
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 group"
                  >
                    <div className="p-2 bg-white/5 rounded-lg border border-white/10 group-hover:border-white/20 group-hover:bg-white/10 transition-all duration-300">
                      {contact.icon}
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">{contact.label}</div>
                      <div className="font-medium">{contact.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-6 flex items-center">
                <Code className="w-4 h-4 mr-2 text-purple-400" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links & Newsletter */}
            <div>
              <h4 className="text-white font-semibold mb-6 flex items-center">
                <Coffee className="w-4 h-4 mr-2 text-orange-400" />
                Connect
              </h4>
              
              {/* Social Links */}
              <div className="flex space-x-4 mb-8">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-white/5 rounded-lg border border-white/10 text-gray-400 ${social.color} hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:rotate-12`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div>
                <h5 className="text-white font-medium mb-3">Stay Updated</h5>
                <p className="text-gray-400 text-sm mb-4">
                  Get notified about new projects and tech insights
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                  />
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-r-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105">
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              
              {/* Copyright */}
              <div className="flex items-center space-x-2 text-gray-400">
                <span>© 2024 Your Name. Made with</span>
                <Heart className="w-4 h-4 text-red-400 animate-pulse" />
                <span>and lots of</span>
                <Coffee className="w-4 h-4 text-orange-400" />
              </div>

              {/* Tech Stack */}
              <div className="flex items-center space-x-4 text-gray-400 text-sm">
                <span>Built with</span>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">Next.js</span>
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs">Tailwind</span>
                  <span className="px-2 py-1 bg-gray-500/20 text-gray-400 rounded text-xs">TypeScript</span>
                </div>
              </div>

              {/* Scroll to Top */}
              <button
                onClick={scrollToTop}
                className="p-3 bg-white/5 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-30"></div>
      </div>

      {/* Floating Action Button for Mobile */}
      <div className="fixed bottom-6 right-6 md:hidden z-50">
        <button
          onClick={scrollToTop}
          className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;