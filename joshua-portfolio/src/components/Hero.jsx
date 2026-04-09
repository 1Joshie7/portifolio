import { motion } from 'framer-motion';
import { ArrowRight, Github } from 'lucide-react';
import { socialLinks } from '../data/social';
import { DownloadCVButton } from './DownloadCVButton';
import { useTheme } from '../context/ThemeContext';

export default function Hero() {
  const { isDark } = useTheme();

  // Generate random floating dots
  const dots = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 15 + Math.random() * 20,
  }));

  const skills = [
    "React", "Next.js", "JavaScript", "Node.js", "GraphQL", "PostgreSQL",
    "MongoDB", "Redis", "AWS", "Tailwind CSS", "Docker", "Git",
     "Python", "Django","React-Native","GitHub","GitBucket","Post-man"
  ];

  return (
    <section className={`relative min-h-screen flex items-center overflow-hidden ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
      {/* Animated Floating Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dots.map((dot) => (
          <div
            key={dot.id}
            className="absolute w-1.5 h-1.5 rounded-full bg-teal-500/40"
            style={{
              left: `${dot.left}%`,
              top: `${dot.top}%`,
              animation: `slow-drift ${dot.duration}s ease-in-out infinite`,
              animationDelay: `${dot.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Background Gradient Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          
          {/* Right Column - Profile Avatar (SMALLER & CIRCULAR) */}
          <div className="relative lg:w-2/5 flex justify-center">
            <div className="relative max-w-[280px] mx-auto">
              {/* Animated Glow Ring */}
              <div className="absolute -inset-4 rounded-full bg-teal-500/20 blur-2xl animate-pulse" />
              
              {/* Circular Avatar Container */}
              <div className={`relative rounded-full ${isDark ? 'glass-card' : 'bg-white shadow-xl'} p-2 ${isDark ? 'glow-border' : 'border border-gray-200'}`}>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-500/10 via-transparent to-teal-500/5" />
                <img
                  src="/assets/images/profile.jpeg"
                  alt="Joshua Tevera"
                  className="w-56 h-56 md:w-64 md:h-64 rounded-full object-cover relative z-10 mx-auto"
                  onError={(e) => {
                    e.target.src = 'https://ui-avatars.com/api/?name=Joshua+Tevera&background=0D9488&color=fff&size=400&rounded=true';
                  }}
                />

                {/* Floating Badge - Available (moved further out) */}
                <div className={`absolute -bottom-5 -right-5 ${isDark ? 'glass' : 'bg-white shadow-lg'} rounded-xl px-4 py-2 animate-float z-20`}>
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                    <span className={`text-xs font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>Available for work</span>
                  </div>
                </div>

                {/* Stats Badge - 2+ Years (moved further out) */}
                <div className={`absolute -top-5 -left-5 ${isDark ? 'glass' : 'bg-white shadow-lg'} rounded-xl px-4 py-2 animate-float animation-delay-500 z-20`}>
                  <div className="text-xl font-bold text-teal-500 text-center">2+</div>
                  <div className={`text-[10px] ${isDark ? 'text-gray-400' : 'text-gray-500'} text-center`}>Years Exp.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Left Column - Text Content */}
          <div className="lg:w-3/5 space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="animate-fade-in"
            >
              <p>

              </p>
              <br />
            </motion.div>

            <div className="space-y-4">
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-100 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Crafting <span className="text-teal-500 glow-text">digital</span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-teal-500">
                  precision.
                </span>
              </h1>
              <p className={`text-base md:text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-lg animate-fade-in animation-delay-200 mx-auto lg:mx-0`}>
                Hi, I'm Joshua Tevera — a software engineer specializing in
                React, Django and JavaScript. I build scalable, performant web
                and mobile applications that users love.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in animation-delay-300">
              <a href="#projects" className="btn-primary flex items-center gap-2">
                View My Projects <ArrowRight className="w-5 h-5" />
              </a>
              <DownloadCVButton variant="animated" />
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 justify-center lg:justify-start animate-fade-in animation-delay-400">
              <span className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Follow me:</span>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full ${isDark ? 'glass hover:bg-teal-500/10' : 'bg-gray-100 hover:bg-teal-100'} hover:text-teal-500 transition-all duration-300`}
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className={`p-2 rounded-full ${isDark ? 'glass hover:bg-teal-500/10' : 'bg-gray-100 hover:bg-teal-100'} hover:text-teal-500 transition-all duration-300`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="#"
                className={`p-2 rounded-full ${isDark ? 'glass hover:bg-teal-500/10' : 'bg-gray-100 hover:bg-teal-100'} hover:text-teal-500 transition-all duration-300`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.683-11.89c0-.213 0-.425-.015-.637A10.025 10.025 0 0024 4.557z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Marquee Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <u><b><p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'} mb-6 text-center tracking-wider uppercase`}>
            Technologies I work with
          </p></b></u>
          <div className="relative overflow-hidden">
            <div className={`absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r ${isDark ? 'from-gray-950' : 'from-gray-50'} to-transparent z-10`} />
            <div className={`absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l ${isDark ? 'from-gray-950' : 'from-gray-50'} to-transparent z-10`} />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className={`text-lg md:text-xl font-semibold ${isDark ? 'text-gray-600 hover:text-teal-400' : 'text-gray-400 hover:text-teal-600'} transition-colors duration-300`}>
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a href="#projects" className={`flex flex-col items-center gap-2 ${isDark ? 'text-gray-500 hover:text-teal-400' : 'text-gray-400 hover:text-teal-600'} transition-colors group`}>
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}