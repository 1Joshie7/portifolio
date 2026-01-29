import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send, 
  CheckCircle,
  MessageSquare,
  Clock,
  Zap,
  Briefcase,
  Code2,
  Brain,
  ArrowRight,
  Sparkles,
  Shield,
  User,
  Mail as MailIcon
} from 'lucide-react';
import { socialLinks } from '../data/social';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="text-blue-600" size={24} />,
      bg: "bg-blue-100",
      title: "Email",
      value: socialLinks.email,
      link: `mailto:${socialLinks.email}`,
      description: "Primary communication channel",
      color: "blue"
    },
    {
      icon: <Phone className="text-green-600" size={24} />,
      bg: "bg-green-100",
      title: "Phone",
      value: socialLinks.phone,
      link: `tel:${socialLinks.phone}`,
      description: "Available for calls",
      color: "green"
    },
    {
      icon: <MapPin className="text-purple-600" size={24} />,
      bg: "bg-purple-100",
      title: "Location",
      value: socialLinks.location,
      description: "Open to remote opportunities",
      color: "purple"
    },
    {
      icon: <Clock className="text-orange-600" size={24} />,
      bg: "bg-orange-100",
      title: "Response Time",
      value: "Within 24 hours",
      description: "Usually much faster",
      color: "orange"
    }
  ];

  const inquiryTypes = [
    {
      icon: <Code2 className="text-blue-600" size={20} />,
      title: "Full-Stack Development",
      description: "Custom web applications, API development, system architecture",
      color: "blue"
    },
    {
      icon: <Brain className="text-green-600" size={20} />,
      title: "AI Integration",
      description: "AI-powered features, LLM implementation, intelligent systems",
      color: "green"
    },
    {
      icon: <Briefcase className="text-purple-600" size={20} />,
      title: "Technical Consultation",
      description: "Code review, architecture advice, technology stack guidance",
      color: "purple"
    }
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-6">
        
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
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full mb-6 shadow-lg"
          >
            <MessageSquare size={20} />
            <span className="font-medium">Get in Touch</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Let's Build Something <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Amazing</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 leading-relaxed"
          >
            Whether you have a project in mind, need technical consultation, or want to discuss 
            opportunities, I'm always open to meaningful conversations about technology and innovation.
          </motion.p>

          {/* Success Message */}
          <AnimatePresence>
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="mt-8 mx-auto max-w-md"
              >
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <CheckCircle className="text-green-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-green-900 text-lg">Message Sent Successfully!</h3>
                      <p className="text-green-700">I'll get back to you within 24 hours.</p>
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
            <div className="bg-gradient-to-b from-white to-gray-50 rounded-3xl shadow-2xl p-8 border border-gray-200 sticky top-32">
              <div className="flex items-center gap-3 mb-10">
                <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-3 rounded-xl">
                  <User className="text-blue-600" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
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
                      <div className={`${item.bg} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                        {item.link ? (
                          <a 
                            href={item.link}
                            className={`text-gray-700 hover:text-${item.color}-600 transition-colors font-medium`}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-gray-700 font-medium">{item.value}</p>
                        )}
                        <p className="text-sm text-gray-500 mt-1">{item.description}</p>
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
                className="mt-12 pt-8 border-t border-gray-200"
              >
                <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Sparkles size={18} className="text-yellow-500" />
                  Connect With Me
                </h3>
                <div className="flex gap-4">
                  <motion.a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-gray-900 to-gray-800 text-white p-4 rounded-xl hover:shadow-xl transition-all group flex items-center justify-center gap-3"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={20} />
                    <span className="font-medium">GitHub</span>
                    <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </motion.a>
                  
                  <motion.a
                    href="#"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-xl hover:shadow-xl transition-all group flex items-center justify-center gap-3"
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
              className="bg-gradient-to-b from-white to-gray-50 rounded-3xl shadow-2xl p-8 border border-gray-200"
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 rounded-2xl shadow-lg">
                  <MessageSquare className="text-white" size={28} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Send Me a Message</h2>
                  <p className="text-gray-600">Fill out the form below and I'll get back to you promptly</p>
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
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-3">
                      <span className="flex items-center gap-2">
                        <User size={16} className="text-gray-500" />
                        Your Name *
                      </span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white"
                      placeholder="John Doe"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-3">
                      <span className="flex items-center gap-2">
                        <MailIcon size={16} className="text-gray-500" />
                        Email Address *
                      </span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white"
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
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-3">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white"
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
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-3">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none bg-white"
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
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl'
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
                    <Shield size={16} className="text-gray-400" />
                    <p className="text-sm text-gray-500 text-center">
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
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Zap className="text-yellow-500" size={24} />
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
                    className={`group bg-gradient-to-br from-${item.color}-50 to-white p-6 rounded-2xl border border-${item.color}-200 hover:border-${item.color}-400 hover:shadow-xl transition-all`}
                  >
                    <div className={`bg-${item.color}-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      {item.icon}
                    </div>
                    <h4 className="font-bold text-gray-900 mb-3">{item.title}</h4>
                    <p className={`text-sm text-${item.color}-800`}>
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
                <p className="text-gray-600">
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