import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { socialLinks } from '../data/social';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image with SLOWER Animation */}
          <motion.div 
            className="md:w-1/3"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 1.2,  // Slower
              delay: 0.3,     // Later start
              ease: "easeOut" // Smooth curve
            }}
          >
            <div className="relative">
              <img 
                src="/assets/images/profile.jpeg" 
                alt="Joshua Tevera"
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white shadow-2xl mx-auto"
              />
              <motion.div 
                className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 1.5,  // Much later
                  ease: "backOut" // Bounce effect
                }}
                whileHover={{ scale: 1.05 }}
              >
                🚀 Available for work
              </motion.div>
            </div>
          </motion.div>
          
          {/* Text Content with SLOWER Staggered Animations */}
          <div className="md:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1,  // Slower
                delay: 0.5,   // Later
                ease: "easeOut"
              }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Joshua Tevera</span>
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1, 
                delay: 0.7, 
                ease: "easeOut"
              }}
            >
              <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
                Full-Stack Developer & Software Engineering Student
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1, 
                delay: 0.9, 
                ease: "easeOut"
              }}
            >
              <p className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed">
                I build scalable web applications with Django, React, and Node.js. 
                Passionate about solving real-world problems in healthcare, e-commerce, 
                and education through innovative technology solutions.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 1.1, 
                ease: "easeOut"
              }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <motion.div 
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100"
                whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-700">Open to opportunities</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100"
                whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">Harare, Zimbabwe</span>
              </motion.div>
              <motion.a 
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all"
                whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                <span className="text-gray-700">GitHub: 1Joshie7</span>
              </motion.a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 1.3, 
                ease: "easeOut"
              }}
              className="flex flex-wrap gap-4"
            >
              <motion.a 
                href="#projects" 
                className="btn-primary flex items-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                View My Projects
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </motion.a>
              
              <motion.a 
                href="/contact" 
                className="btn-secondary flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Me
              </motion.a>
              
              <motion.a 
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05, backgroundColor: "#111827" }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </motion.a>
            </motion.div>
            
            {/* Tech Stack Badges - SLOWER staggered */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="mt-12"
            >
              <p className="text-gray-600 mb-4 font-medium">Tech I work with:</p>
              <div className="flex flex-wrap gap-2">
                {['Django', 'React', 'Node.js', 'Python', 'JavaScript', 'PostgreSQL', 'TailwindCSS'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="bg-white px-3 py-1.5 rounded-full text-sm shadow-sm border border-gray-200 hover:border-blue-300 transition-colors"
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 1.8 + (index * 0.08), // Slower stagger
                      ease: "backOut" // Bounce effect
                    }}
                    whileHover={{ 
                      scale: 1.08, 
                      backgroundColor: "#3B82F6",
                      color: "white",
                      borderColor: "#3B82F6"
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}