import { Github, ExternalLink, Play, Calendar } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function ProjectCard({ project, onVideoClick, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const { isDark } = useTheme();

  return (
    <motion.div 
      className="animated-card cursor-pointer group"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onVideoClick(project)}
    >
      <div className={`relative ${isDark ? 'glass-card' : 'bg-white shadow-xl'} overflow-hidden rounded-2xl`}>
        {/* Image Section */}
        <div className="relative h-52 overflow-hidden">
          {project.youtubeId ? (
            <img 
              src={`https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          ) : (
            <div className={`w-full h-full ${isDark ? 'bg-teal-900/20' : 'bg-teal-100'} flex items-center justify-center`}>
              <div className="text-center">
                <div className={`w-16 h-16 ${isDark ? 'bg-teal-500/20' : 'bg-teal-200'} rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <Play size={28} className="text-teal-500" />
                </div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Watch Demo</p>
              </div>
            </div>
          )}
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: isHovered ? 1 : 0.8, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <Play size={24} className="text-teal-600 ml-1" fill="currentColor" />
            </motion.div>
          </div>
          
          {/* Category Badge */}
          <div className="absolute top-3 right-3">
            <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
              {project.category}
            </span>
          </div>
          
          {/* Tech Preview */}
          <div className="absolute bottom-3 left-3 flex gap-1">
            {project.techStack.slice(0, 3).map((tech, i) => (
              <span key={i} className="bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Content */}
        <div className="p-5">
          <div className="flex justify-between items-start mb-2">
            <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} group-hover:text-teal-500 transition-colors line-clamp-1`}>
              {project.title}
            </h3>
            <span className={`text-xs px-2 py-1 rounded-full ${
              project.status === 'completed' 
                ? 'bg-green-500/20 text-green-500 border border-green-500/30' 
                : 'bg-yellow-500/20 text-yellow-500 border border-yellow-500/30'
            }`}>
              {project.status}
            </span>
          </div>
          
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm mb-3 line-clamp-1`}>
            {project.subtitle}
          </p>
          
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-4 line-clamp-2 text-sm`}>
            {project.description}
          </p>
          
          {/* Tech Chips */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.techStack.slice(0, 3).map((tech, idx) => (
              <span 
                key={idx} 
                className={`${isDark ? 'bg-teal-500/10 text-teal-400 border-teal-500/20' : 'bg-teal-100 text-teal-700 border-teal-200'} text-xs px-2.5 py-1 rounded-full border group-hover:border-teal-500/40 transition-colors`}
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className={`${isDark ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-600'} text-xs px-2.5 py-1 rounded-full`}>
                +{project.techStack.length - 3}
              </span>
            )}
          </div>
          
          {/* Footer */}
          <div className={`flex justify-between items-center pt-3 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
            <div className="flex items-center gap-3">
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-2 ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} rounded-lg transition-colors`}
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={18} className={isDark ? 'text-gray-400' : 'text-gray-600'} />
              </a>
              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`p-2 ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} rounded-lg transition-colors`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={18} className={isDark ? 'text-gray-400' : 'text-gray-600'} />
                </a>
              )}
            </div>
            <div className={`flex items-center gap-1.5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
              <Calendar size={14} />
              <span className="text-xs">{project.date}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}