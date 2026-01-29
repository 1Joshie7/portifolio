import { Github, ExternalLink, Play, Calendar, Code, ExternalLinkIcon } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ProjectCard({ project, onVideoClick, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="group relative cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onVideoClick(project)}
    >
      {/* Glow effect on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-30 blur transition duration-500"></div>
      
      <div className="relative bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 group-hover:border-blue-300 transition-all duration-300">
        
        {/* Image/Video Thumbnail */}
        <div className="relative h-48 overflow-hidden">
          {project.youtubeId ? (
            <img 
              src={`https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`}
              alt={`${project.title} demo thumbnail`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          ) : project.images && project.images[0] ? (
            <img 
              src={project.images[0]} 
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Play size={32} className="text-white" />
                </div>
                <p className="text-gray-500 text-sm">Watch Demo</p>
              </div>
            </div>
          )}
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: isHovered ? 1 : 0.8, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <Play size={24} className="text-blue-600" fill="currentColor" />
            </motion.div>
          </div>
          
          {/* Category badge */}
          <div className="absolute top-3 right-3">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
              {project.category}
            </span>
          </div>
          
          {/* Tech stack preview */}
          <div className="absolute bottom-3 left-3 flex gap-1">
            {project.techStack.slice(0, 3).map((tech, i) => (
              <span key={i} className="bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Card Content */}
        <div className="p-5">
          {/* Title & Status */}
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">
              {project.title}
            </h3>
            <span className={`text-xs px-2 py-1 rounded-full ${project.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
              {project.status}
            </span>
          </div>
          
          {/* Subtitle */}
          <p className="text-gray-600 text-sm mb-3 line-clamp-1">
            {project.subtitle}
          </p>
          
          {/* Description */}
          <p className="text-gray-700 mb-4 line-clamp-2 text-sm">
            {project.description}
          </p>
          
          {/* Tech stack chips */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.techStack.slice(0, 3).map((tech, index) => (
              <span 
                key={index} 
                className="bg-blue-50 text-blue-700 text-xs px-2.5 py-1 rounded-full border border-blue-100 group-hover:border-blue-200 transition-colors"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full">
                +{project.techStack.length - 3} more
              </span>
            )}
          </div>
          
          {/* Footer with links and date */}
          <div className="flex justify-between items-center pt-3 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <motion.a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={18} className="text-gray-700" />
              </motion.a>
              
              {project.liveUrl && (
                <motion.a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={18} className="text-gray-700" />
                </motion.a>
              )}
              
              {!project.liveUrl && project.githubUrl && (
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  Code Only
                </span>
              )}
            </div>
            
            <div className="flex items-center gap-1.5 text-gray-500">
              <Calendar size={14} />
              <span className="text-xs">{project.date}</span>
            </div>
          </div>
          
          {/* View Details Button (appears on hover) */}
          <motion.div 
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white to-transparent pt-8 pb-4 flex justify-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            transition={{ duration: 0.2 }}
          >
            <button className="flex items-center gap-2 text-sm font-medium text-blue-600 bg-white px-4 py-2 rounded-lg shadow-md border border-blue-100 hover:shadow-lg transition-shadow">
              <Play size={14} />
              View Demo & Details
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}