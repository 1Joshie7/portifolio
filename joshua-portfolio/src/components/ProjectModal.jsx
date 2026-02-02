import { X, Github, ExternalLink, Calendar, User, Image as ImageIcon, Target, Zap, Shield, Code, Video, ChevronLeft, ChevronRight, Maximize2, Minimize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ProjectModal({ project, onClose }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        if (lightboxOpen) {
          setLightboxOpen(false);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose, lightboxOpen]);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <>
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
            className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with gradient */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 p-6 rounded-t-2xl">
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
                    <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-lg">
                      <Video className="text-red-600 dark:text-red-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">Demo Video</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Watch the project in action</p>
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
                      <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                        <Code className="text-blue-600 dark:text-blue-400" size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Project Overview</h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">{project.longDescription}</p>
                  </motion.div>

                  {/* Features */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                        <Zap className="text-green-600 dark:text-green-400" size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Key Features</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      {project.features?.map((feature, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 transition-colors group">
                          <div className="flex items-start gap-3">
                            <div className="mt-1">
                              <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
                            </div>
                            <span className="text-gray-800 dark:text-gray-300 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">{feature}</span>
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
                      <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg">
                        <Shield className="text-purple-600 dark:text-purple-400" size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Tech Stack</h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {project.techStack.map((tech, index) => (
                        <motion.span
                          key={index}
                          className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-lg border border-blue-200 dark:border-blue-700 font-medium hover:shadow-md transition-shadow"
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
                        <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded-lg">
                          <ImageIcon className="text-orange-600 dark:text-orange-400" size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Screenshots</h3>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        {project.images.map((img, index) => (
                          <motion.div
                            key={index}
                            className="relative group cursor-pointer"
                            whileHover={{ y: -5 }}
                            onClick={() => openLightbox(index)}
                          >
                            <img
                              src={img}
                              alt={`${project.title} screenshot ${index + 1}`}
                              className="w-full h-56 object-cover rounded-xl border-2 border-gray-300 dark:border-gray-600 group-hover:border-blue-400 dark:group-hover:border-blue-500 shadow-lg group-hover:shadow-xl transition-all"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-3 rounded-lg shadow-lg flex items-center gap-2">
                                <Maximize2 size={18} className="text-gray-700 dark:text-gray-300" />
                                <span className="font-medium text-gray-800 dark:text-white">View fullscreen</span>
                              </div>
                            </div>
                            <div className="absolute top-3 right-3 bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-sm font-medium shadow-md dark:text-white">
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
                    className="bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 text-white rounded-2xl p-6 shadow-xl"
                  >
                    <h3 className="text-xl font-bold mb-6 text-white">Project Links</h3>
                    <div className="space-y-4">
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 bg-gray-800 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 rounded-xl transition-colors group"
                        whileHover={{ x: 5 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-gray-700 dark:bg-gray-600 p-2 rounded-lg">
                            <Github size={20} />
                          </div>
                          <div>
                            <div className="font-medium">GitHub Repository</div>
                            <div className="text-gray-400 dark:text-gray-300 text-sm">View source code</div>
                          </div>
                        </div>
                        <ExternalLink size={18} className="text-gray-400 group-hover:text-white" />
                      </motion.a>

                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 hover:from-blue-700 hover:to-indigo-700 dark:hover:from-blue-600 dark:hover:to-indigo-600 rounded-xl transition-all group"
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
                      className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border border-orange-200 dark:border-orange-700 rounded-2xl p-6"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded-lg">
                          <Target className="text-orange-600 dark:text-orange-400" size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Challenges & Solutions</h3>
                      </div>
                      <div className="space-y-4">
                        {project.challenges.map((challenge, index) => (
                          <div key={index} className="flex gap-3">
                            <div className="mt-1">
                              <div className="w-2 h-2 bg-orange-500 dark:bg-orange-400 rounded-full"></div>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">{challenge}</p>
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
                    className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-sm"
                  >
                    <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Project Details</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Role</span>
                        <span className="font-medium dark:text-white">{project.role}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Timeline</span>
                        <span className="font-medium dark:text-white">{project.date}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Category</span>
                        <span className="font-medium dark:text-white">{project.category}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Status</span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${project.status === 'completed' ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300'}`}>
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

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && project.images && project.images[currentImageIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-lg z-[100] flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <motion.button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white hover:bg-white/20 p-3 rounded-full transition-colors z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <X size={32} />
            </motion.button>

            {/* Previous button */}
            {project.images.length > 1 && (
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 p-3 rounded-full transition-colors z-10"
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <ChevronLeft size={32} />
              </motion.button>
            )}

            {/* Next button */}
            {project.images.length > 1 && (
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 p-3 rounded-full transition-colors z-10"
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <ChevronRight size={32} />
              </motion.button>
            )}

            {/* Minimize button */}
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.images[currentImageIndex], '_blank');
              }}
              className="absolute top-6 left-6 text-white hover:bg-white/20 p-3 rounded-full transition-colors z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              title="Open in new tab"
            >
              <Maximize2 size={32} />
            </motion.button>

            {/* Image counter */}
            <motion.div
              className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {currentImageIndex + 1} / {project.images.length}
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-7xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={project.images[currentImageIndex]}
                alt={`Screenshot ${currentImageIndex + 1}`}
                className="w-full h-full object-contain rounded-lg"
              />
            </motion.div>

            {/* Thumbnails (if multiple images) */}
            {project.images.length > 1 && (
              <motion.div
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {project.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(index);
                    }}
                    className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentImageIndex
                        ? 'border-white scale-110'
                        : 'border-transparent opacity-60 hover:opacity-100 hover:scale-105'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}