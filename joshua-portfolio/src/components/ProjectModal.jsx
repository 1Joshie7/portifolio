import { X, Github, ExternalLink, Calendar, User, Image, Target, Zap, Shield, Code, Video } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-gradient-to-b from-white to-gray-50 rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-gray-200"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header with gradient */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-t-2xl">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
                <p className="text-blue-100">{project.subtitle}</p>
              </div>
              <motion.button 
                onClick={onClose}
                className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={28} />
              </motion.button>
            </div>
            
            {/* Quick stats */}
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex items-center gap-2 text-blue-100">
                <Calendar size={18} />
                <span>{project.date}</span>
              </div>
              <div className="flex items-center gap-2 text-blue-100">
                <User size={18} />
                <span>{project.role}</span>
              </div>
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${project.status === 'completed' ? 'bg-green-500/20 text-green-200' : 'bg-yellow-500/20 text-yellow-200'}`}>
                {project.status}
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* Video Section */}
            {project.youtubeId ? (
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <Video className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Demo Video</h3>
                    <p className="text-gray-600 text-sm">Watch the project in action</p>
                  </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <div className="relative pt-[56.25%] bg-black">
                    <iframe
                      src={`https://www.youtube.com/embed/${project.youtubeId}?rel=0&modestbranding=1`}
                      title={`${project.title} Demo`}
                      className="absolute top-0 left-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                </div>
              </motion.div>
            ) : project.videoUrl ? (
              <div className="mb-8">
                {/* Local video player */}
              </div>
            ) : null}

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* About Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Code className="text-blue-600" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Project Overview</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">{project.longDescription}</p>
                </motion.div>

                {/* Features */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <Zap className="text-green-600" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Key Features</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.features?.map((feature, index) => (
                      <div key={index} className="bg-white p-4 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors group">
                        <div className="flex items-start gap-3">
                          <div className="mt-1">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          </div>
                          <span className="text-gray-800 group-hover:text-blue-700 transition-colors">{feature}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Tech Stack */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <Shield className="text-purple-600" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Tech Stack</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.map((tech, index) => (
                      <motion.span
                        key={index}
                        className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-800 px-4 py-2 rounded-lg border border-blue-200 font-medium hover:shadow-md transition-shadow"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Screenshots */}
                {project.images && project.images.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-orange-100 p-2 rounded-lg">
                        <Image className="text-orange-600" size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Screenshots</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      {project.images.map((img, index) => (
                        <motion.div
                          key={index}
                          className="relative group cursor-pointer"
                          whileHover={{ y: -5 }}
                          onClick={() => window.open(img, '_blank')}
                        >
                          <img
                            src={img}
                            alt={`${project.title} screenshot ${index + 1}`}
                            className="w-full h-56 object-cover rounded-xl border-2 border-gray-300 group-hover:border-blue-400 shadow-lg group-hover:shadow-xl transition-all"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                            <span className="text-white font-medium">Click to view full size</span>
                          </div>
                          <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                            {index + 1}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Links Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-6 shadow-xl"
                >
                  <h3 className="text-xl font-bold mb-6 text-white">Project Links</h3>
                  <div className="space-y-4">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 bg-gray-800 hover:bg-gray-700 rounded-xl transition-colors group"
                      whileHover={{ x: 5 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex items-center gap-3">
                        <div className="bg-gray-700 p-2 rounded-lg">
                          <Github size={20} />
                        </div>
                        <div>
                          <div className="font-medium">GitHub Repository</div>
                          <div className="text-gray-400 text-sm">View source code</div>
                        </div>
                      </div>
                      <ExternalLink size={18} className="text-gray-400 group-hover:text-white" />
                    </motion.a>

                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-xl transition-all group"
                        whileHover={{ x: 5 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-white/20 p-2 rounded-lg">
                            <ExternalLink size={20} />
                          </div>
                          <div>
                            <div className="font-medium">Live Demo</div>
                            <div className="text-blue-200 text-sm">Visit deployed site</div>
                          </div>
                        </div>
                        <ExternalLink size={18} className="text-white/80 group-hover:text-white" />
                      </motion.a>
                    )}
                  </div>
                </motion.div>

                {/* Challenges Card */}
                {project.challenges && project.challenges.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-2xl p-6"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-orange-100 p-2 rounded-lg">
                        <Target className="text-orange-600" size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Challenges & Solutions</h3>
                    </div>
                    <div className="space-y-4">
                      {project.challenges.map((challenge, index) => (
                        <div key={index} className="flex gap-3">
                          <div className="mt-1">
                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          </div>
                          <p className="text-gray-700 text-sm">{challenge}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Quick Stats */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
                >
                  <h3 className="text-xl font-bold mb-6 text-gray-900">Project Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Role</span>
                      <span className="font-medium">{project.role}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Timeline</span>
                      <span className="font-medium">{project.date}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Category</span>
                      <span className="font-medium">{project.category}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Status</span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${project.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}