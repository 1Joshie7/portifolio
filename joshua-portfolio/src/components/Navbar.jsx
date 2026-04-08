import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, Mail, Sun, Moon, Code2, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { socialLinks } from '../data/social';
import { DownloadCVButton } from './DownloadCVButton';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // About page removed
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? isDark 
            ? 'bg-gray-950/90 backdrop-blur-md shadow-xl' 
            : 'bg-white/90 backdrop-blur-md shadow-xl'
          : isDark 
            ? 'bg-gray-950/80 backdrop-blur-sm'
            : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div 
              className="bg-gradient-to-r from-teal-600 to-teal-500 p-2 rounded-xl"
              whileHover={{ rotate: 5 }}
            >
              <Code2 className="text-white" size={24} />
            </motion.div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
                Joshua Tevera
              </h1>
              <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'} hidden sm:block`}>
                Software Engineer
              </p>
            </div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-teal-500'
                    : isDark 
                      ? 'text-gray-300 hover:text-teal-400'
                      : 'text-gray-600 hover:text-teal-600'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-600 to-teal-500 rounded-full"
                  />
                )}
              </Link>
            ))}
            
            {/* Download CV Button */}
            <div className="ml-4">
              <DownloadCVButton variant="solid" />
            </div>
            
            {/* Theme Toggle Button - Light/Dark Mode */}
            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                {isDark ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                  >
                    <Sun size={18} className="text-yellow-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -180, opacity: 0 }}
                  >
                    <Moon size={18} className="text-gray-600" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
            
            {/* Social Links */}
            <div className={`flex items-center gap-4 ml-4 pl-4 ${isDark ? 'border-l border-gray-800' : 'border-l border-gray-200'}`}>
              <motion.a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-colors ${
                  isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={18} className={isDark ? 'text-gray-300' : 'text-gray-700'} />
              </motion.a>
              
              <motion.a
                href={`mailto:${socialLinks.email}`}
                className={`p-2 rounded-lg transition-colors ${
                  isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={18} className={isDark ? 'text-gray-300' : 'text-gray-700'} />
              </motion.a>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            {/* Theme Toggle for Mobile */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun size={18} className="text-yellow-400" />
              ) : (
                <Moon size={18} className="text-gray-600" />
              )}
            </button>
            
            <motion.button 
              className={`p-2 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className={`py-4 space-y-4 ${isDark ? 'border-t border-gray-800' : 'border-t border-gray-200'} mt-4`}>
                {navLinks.map((link) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to={link.path}
                      className={`block px-4 py-3 rounded-lg text-lg font-medium transition-colors ${
                        location.pathname === link.path
                          ? 'bg-teal-500/10 text-teal-500'
                          : isDark 
                            ? 'hover:bg-gray-800 text-gray-300'
                            : 'hover:bg-gray-100 text-gray-700'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                      {location.pathname === link.path && (
                        <Sparkles size={16} className="inline ml-2 text-teal-500" />
                      )}
                    </Link>
                  </motion.div>
                ))}
                
                {/* Download CV Button in Mobile Menu */}
                <div className="px-4 pt-4">
                  <DownloadCVButton variant="solid" className="w-full justify-center" />
                </div>
                
                {/* Social Links for Mobile */}
                <div className={`flex gap-4 px-4 pt-4 ${isDark ? 'border-t border-gray-800' : 'border-t border-gray-200'}`}>
                  <motion.a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-lg transition-colors ${
                      isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(false)}
                  >
                    <Github size={18} className={isDark ? 'text-gray-300' : 'text-gray-700'} />
                    <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>GitHub</span>
                  </motion.a>
                  
                  <motion.a
                    href={`mailto:${socialLinks.email}`}
                    className="flex-1 flex items-center justify-center gap-2 p-3 rounded-lg bg-teal-500/10 hover:bg-teal-500/20 transition-colors"
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(false)}
                  >
                    <Mail size={18} className="text-teal-500" />
                    <span className="text-teal-500">Email</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}