import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle,
  MessageSquare, Clock, Zap, Briefcase, Code2, Brain, ArrowRight,
  Sparkles, Shield, User, Mail as MailIcon
} from 'lucide-react';
import { socialLinks } from '../data/social';
import emailjs from '@emailjs/browser';
import { useTheme } from '../context/ThemeContext';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const successRef = useRef(null);
  const { isDark } = useTheme();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const now = new Date();
      const date = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

      await emailjs.send(
        'service_mtstrvn',
        'template_2307r2d',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Joshua',
          reply_to: formData.email,
          date: date,
          time: time
        },
        '-FYYgefs-fkXgDdd_'
      );

      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        if (successRef.current) {
          successRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);

      setTimeout(() => setIsSubmitted(false), 5000);
      
    } catch (error) {
      console.error('Failed to send:', error);
      setIsSubmitting(false);
      alert('Failed to send. Please email me directly at ' + socialLinks.email);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: <Mail className="text-teal-500" size={24} />,
      title: "Email",
      value: socialLinks.email,
      link: `mailto:${socialLinks.email}`,
      description: "Primary communication channel",
    },
    {
      icon: <Phone className="text-teal-500" size={24} />,
      title: "Phone",
      value: socialLinks.phone,
      link: `tel:${socialLinks.phone}`,
      description: "Available for calls",
    },
    {
      icon: <MapPin className="text-teal-500" size={24} />,
      title: "Location",
      value: socialLinks.location,
      description: "Open to remote opportunities",
    },
    {
      icon: <Clock className="text-teal-500" size={24} />,
      title: "Response Time",
      value: "Within 24 hours",
      description: "Usually much faster",
    }
  ];

  const inquiryTypes = [
    {
      icon: <Code2 className="text-teal-500" size={20} />,
      title: "Full-Stack Development",
      description: "Custom web applications, API development, system architecture",
    },
    {
      icon: <Brain className="text-teal-500" size={20} />,
      title: "AI Integration",
      description: "AI-powered features, LLM implementation, intelligent systems",
    },
    {
      icon: <Briefcase className="text-teal-500" size={20} />,
      title: "Technical Consultation",
      description: "Code review, architecture advice, technology stack guidance",
    }
  ];

  return (
    <div className={`pt-24 pb-20 min-h-screen ${isDark ? 'bg-gray-950' : 'bg-gray-50'} overflow-hidden`}>
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-teal-600 text-white px-6 py-3 rounded-full mb-6 shadow-lg shadow-teal-600/25"
          >
            <MessageSquare size={20} />
            <span className="font-medium">Get in Touch</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`text-4xl md:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}
          >
            Let's Build Something <span className="text-teal-500">Amazing</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}
          >
            Whether you have a project in mind, need technical consultation, or want to discuss 
            opportunities, I'm always open to meaningful conversations about technology and innovation.
          </motion.p>

          {/* Success Message */}
          <AnimatePresence>
            {isSubmitted && (
              <motion.div
                ref={successRef}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="mt-8 mx-auto max-w-md"
              >
                <div className="bg-teal-500/10 border border-teal-500/30 rounded-2xl p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-teal-500/20 p-3 rounded-full">
                      <CheckCircle className="text-teal-500" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-teal-500 text-lg">Message Sent Successfully!</h3>
                      <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>I'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className={`${isDark ? 'glass-card' : 'bg-white shadow-xl'} p-8 rounded-2xl ${isDark ? 'glow-border' : 'border border-gray-200'} sticky top-32`}>
              <div className="flex items-center gap-3 mb-10">
                <div className="bg-teal-500/10 p-3 rounded-xl">
                  <User className="text-teal-500" size={24} />
                </div>
                <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Contact Information</h2>
              </div>
              
              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-teal-500/10 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className={`font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
                        {item.link ? (
                          <a href={item.link} className={`${isDark ? 'text-gray-400 hover:text-teal-500' : 'text-gray-600 hover:text-teal-600'} transition-colors font-medium`}>
                            {item.value}
                          </a>
                        ) : (
                          <p className={`font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{item.value}</p>
                        )}
                        <p className={`text-sm mt-1 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className={`mt-12 pt-8 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}
              >
                <h3 className={`font-bold mb-6 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  <Sparkles size={18} className="text-teal-500" />
                  Connect With Me
                </h3>
                <div className="flex gap-4">
                  <motion.a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} text-white p-4 rounded-xl transition-all group flex items-center justify-center gap-3`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={20} className={isDark ? 'text-white' : 'text-gray-800'} />
                    <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-800'}`}>GitHub</span>
                    <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-teal-500" />
                  </motion.a>
                  
                  <motion.a
                    href="#"
                    className="flex-1 bg-teal-600 text-white p-4 rounded-xl hover:bg-teal-700 transition-all group flex items-center justify-center gap-3"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin size={20} />
                    <span className="font-medium">LinkedIn</span>
                    <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <div className="lg:col-span-2 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`${isDark ? 'glass-card' : 'bg-white shadow-xl'} p-8 rounded-2xl ${isDark ? 'glow-border' : 'border border-gray-200'}`}
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="bg-teal-600 p-4 rounded-2xl shadow-lg">
                  <MessageSquare className="text-white" size={28} />
                </div>
                <div>
                  <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Send Me a Message</h2>
                  <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Fill out the form below and I'll get back to you promptly</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name & Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <label className={`block text-sm font-medium mb-3 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                      <span className="flex items-center gap-2">
                        <User size={16} />
                        Your Name *
                      </span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all ${
                        isDark 
                          ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' 
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                      }`}
                      placeholder="John Doe"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <label className={`block text-sm font-medium mb-3 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                      <span className="flex items-center gap-2">
                        <MailIcon size={16} />
                        Email Address *
                      </span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all ${
                        isDark 
                          ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' 
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                      }`}
                      placeholder="john@example.com"
                    />
                  </motion.div>
                </div>

                {/* Subject */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <label className={`block text-sm font-medium mb-3 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all ${
                      isDark 
                        ? 'bg-gray-800 border-gray-700 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                  >
                    <option value="">Select a subject</option>
                    <option value="project">Project Collaboration</option>
                    <option value="freelance">Freelance Work</option>
                    <option value="job">Job Opportunity</option>
                    <option value="consultation">Technical Consultation</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </motion.div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <label className={`block text-sm font-medium mb-3 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all resize-none ${
                      isDark 
                        ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                    }`}
                    placeholder="Tell me about your project, timeline, and requirements..."
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="pt-6"
                >
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full group flex items-center justify-center gap-4 py-5 px-8 rounded-xl font-bold text-lg transition-all ${
                      isSubmitting 
                        ? 'bg-gray-700 cursor-not-allowed' 
                        : 'bg-teal-600 hover:bg-teal-700 shadow-lg shadow-teal-600/25'
                    } text-white`}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="h-6 w-6 border-2 border-white border-t-transparent rounded-full"
                        />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                        <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </>
                    )}
                  </motion.button>
                  
                  <div className="flex items-center justify-center gap-2 mt-6">
                    <Shield size={16} className={isDark ? 'text-gray-500' : 'text-gray-400'} />
                    <p className={`text-sm text-center ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                      Your information is secure and will only be used to respond to your inquiry.
                    </p>
                  </div>
                </motion.div>
              </form>
            </motion.div>

            {/* Common Inquiry Types */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className={`text-2xl font-bold mb-8 flex items-center gap-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                <Zap className="text-teal-500" size={24} />
                Common Types of Inquiries I Handle
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {inquiryTypes.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className={`${isDark ? 'glass-card' : 'bg-white shadow-xl'} p-6 rounded-2xl ${isDark ? 'glow-border' : 'border border-gray-200'}`}
                  >
                    <div className="bg-teal-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <h4 className={`font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.title}</h4>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-10 text-center"
              >
                <p className={isDark ? 'text-gray-500' : 'text-gray-400'}>
                  Don't see what you're looking for? Feel free to reach out anyway!
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}