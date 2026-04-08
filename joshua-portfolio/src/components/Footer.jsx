import { Github, Mail, Linkedin, MapPin, Code2, ArrowUp, Sparkles, Heart } from 'lucide-react';
import { socialLinks } from '../data/social';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const { isDark } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinksList = [
    {
      icon: <Github size={20} />,
      href: socialLinks.github,
      label: 'GitHub',
    },
    {
      icon: <Mail size={20} />,
      href: `mailto:${socialLinks.email}`,
      label: 'Email',
    },
    {
      icon: <Linkedin size={20} />,
      href: '#',
      label: 'LinkedIn',
    }
  ];

  return (
    <footer className={`${isDark ? 'bg-gray-950' : 'bg-gray-100'} pt-12 pb-8 border-t ${isDark ? 'border-teal-900/30' : 'border-teal-200'}`}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-teal-600 to-teal-500 p-2 rounded-lg">
                <Code2 size={24} className="text-white" />
              </div>
              <div>
                <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Joshua Tevera</h3>
                <p className="text-teal-500 text-sm">Full-Stack Developer</p>
              </div>
            </div>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-md`}>
              Building innovative web solutions with Django, React, and AI integration.
              Passionate about solving real-world problems through technology.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className={`text-lg font-bold mb-4 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              <Sparkles size={18} className="text-teal-500" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Home', 'Projects', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`/${item === 'Home' ? '' : item.toLowerCase()}`}
                    className={`${isDark ? 'text-gray-400 hover:text-teal-400' : 'text-gray-600 hover:text-teal-600'} transition-colors flex items-center gap-2 group`}
                  >
                    <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-teal-500"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Get In Touch</h4>
            <div className="space-y-3">
              <div className={`flex items-center gap-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <MapPin size={18} className="text-teal-500" />
                <span>{socialLinks.location}</span>
              </div>
              <a 
                href={`mailto:${socialLinks.email}`}
                className={`flex items-center gap-3 ${isDark ? 'text-gray-400 hover:text-teal-400' : 'text-gray-600 hover:text-teal-600'} transition-colors`}
              >
                <Mail size={18} className="text-teal-500" />
                <span>{socialLinks.email}</span>
              </a>
              <a 
                href={`tel:${socialLinks.phone}`}
                className={`flex items-center gap-3 ${isDark ? 'text-gray-400 hover:text-teal-400' : 'text-gray-600 hover:text-teal-600'} transition-colors`}
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                </div>
                <span>{socialLinks.phone}</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className={`border-t ${isDark ? 'border-teal-900/30' : 'border-teal-200'} mb-8`}></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className={`${isDark ? 'text-gray-500' : 'text-gray-500'} text-sm`}>
            <p>
              © {new Date().getFullYear()} Joshua Tevera. All rights reserved.
            </p>
            <p className="mt-1 text-gray-600">
              Built with <Heart size={12} className="inline text-red-500" /> using React & Tailwind CSS
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              {socialLinksList.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.label !== 'Email' ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className={`${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} p-3 rounded-xl transition-all group relative`}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  aria-label={social.label}
                >
                  <div className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                    {social.icon}
                  </div>
                  <span className={`absolute -top-8 left-1/2 transform -translate-x-1/2 ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-800 text-white'} text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap`}>
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Scroll to top button */}
            <motion.button
              onClick={scrollToTop}
              className="bg-gradient-to-r from-teal-600 to-teal-500 p-3 rounded-xl hover:shadow-lg hover:shadow-teal-500/25 transition-all"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} className="text-white" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}