import { motion } from 'framer-motion';
import { 
  GraduationCap, Award, Code, Database, Server, Cpu,
  Target, Users, BookOpen, Zap, Rocket, TrendingUp,
  Globe, Brain, Lightbulb, ChevronRight
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function About() {
  const { isDark } = useTheme();

  const competencies = [
    {
      icon: <Code className="text-teal-500" size={24} />,
      title: "Full-Stack Development",
      description: "End-to-end application development with Django, React, and modern JavaScript ecosystems.",
      tools: ["Django", "React", "Node.js", "TypeScript"],
    },
    {
      icon: <Brain className="text-teal-500" size={24} />,
      title: "AI Integration",
      description: "Practical AI/ML implementation with Google Gemini, LLM prompting, and intelligent systems.",
      tools: ["Google Gemini", "LLM", "AI APIs", "OpenAI"],
    },
    {
      icon: <Database className="text-teal-500" size={24} />,
      title: "Database Architecture",
      description: "SQL/NoSQL optimization, PostgreSQL, MongoDB, and Firebase for scalable data solutions.",
      tools: ["PostgreSQL", "MongoDB", "Firebase", "Redis"],
    },
    {
      icon: <Server className="text-teal-500" size={24} />,
      title: "DevOps & Deployment",
      description: "Containerization with Docker, CI/CD pipelines, and cloud deployment strategies.",
      tools: ["Docker", "CI/CD", "Vercel", "Render"],
    }
  ];

  const journey = [
    {
      year: "2024 - Present",
      title: "Production-Grade Development",
      description: "Built multiple production-ready applications solving real-world problems in healthcare, e-commerce, and education sectors.",
      skills: ["Django", "React", "PostgreSQL", "Docker"],
      icon: <Rocket className="text-teal-500" size={20} />
    },
    {
      year: "2023 - 2024",
      title: "AI Engineering Integration",
      description: "Incorporated AI capabilities into practical applications, including AI-powered healthcare and automated assessment systems.",
      skills: ["Google Gemini", "LLM", "AI APIs", "Python"],
      icon: <Cpu className="text-teal-500" size={20} />
    },
    {
      year: "2022 - 2023",
      title: "Full-Stack Foundation",
      description: "Mastered core web development technologies and built foundational projects with modern architectures.",
      skills: ["JavaScript", "Python", "React", "Node.js"],
      icon: <Code className="text-teal-500" size={20} />
    }
  ];

  const education = [
    {
      icon: <BookOpen className="text-teal-500" size={20} />,
      title: "Advanced Curriculum",
      description: "Comprehensive study of software architecture, algorithms, database systems, and modern development methodologies."
    },
    {
      icon: <Target className="text-teal-500" size={20} />,
      title: "Practical Application",
      description: "Leveraging academic foundation to build real-world solutions addressing industry challenges."
    },
    {
      icon: <Zap className="text-teal-500" size={20} />,
      title: "Industry Alignment",
      description: "Focus on emerging technologies and market-demanded skills including AI integration and scalable system design."
    },
    {
      icon: <Globe className="text-teal-500" size={20} />,
      title: "Global Perspective",
      description: "Understanding of international best practices and remote collaboration in software development."
    }
  ];

  return (
    <div className={`pt-24 pb-20 min-h-screen ${isDark ? 'bg-gray-950' : 'bg-gray-50'} overflow-hidden`}>
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-teal-600 text-white px-6 py-3 rounded-full mb-6 shadow-lg shadow-teal-600/25"
          >
            <Code size={20} />
            <span className="font-medium">Software Engineer</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`text-4xl md:text-6xl font-bold mb-6 leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}
          >
            Building Scalable Solutions at<br/>
            <span className="text-teal-500">
              The Intersection of AI & Full-Stack
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto leading-relaxed`}
          >
            Specializing in production-grade applications with expertise across Django, React, 
            and cloud-native architectures. Passionate about solving real-world problems through innovative technology.
          </motion.p>
        </motion.div>

        {/* Technical Expertise Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-teal-500/10 text-teal-500 px-4 py-2 rounded-full mb-4 border border-teal-500/20">
              <TrendingUp size={18} />
              <span className="font-medium">Core Competencies</span>
            </div>
            <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Technical Expertise</h2>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>Areas where I deliver exceptional value and innovation</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {competencies.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`${isDark ? 'glass-card' : 'bg-white shadow-xl'} p-6 rounded-2xl ${isDark ? 'glow-border' : 'border border-gray-200'}`}
              >
                <div className="bg-teal-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-6`}>{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tools.map((tool, i) => (
                    <span key={i} className="bg-teal-500/10 text-teal-500 text-xs px-3 py-1 rounded-full border border-teal-500/20">
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience & Education */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          
          {/* Professional Journey */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="w-2 h-10 bg-gradient-to-b from-teal-500 to-teal-600 rounded-full"></div>
              <div>
                <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Professional Journey</h2>
                <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>My path to becoming a full-stack developer</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 to-teal-600 timeline-glow"></div>
              
              <div className="space-y-10">
                {journey.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-16"
                  >
                    <div className="absolute left-4 top-1 w-6 h-6 bg-gray-950 border-4 border-teal-500 rounded-full flex items-center justify-center">
                      {item.icon}
                    </div>
                    
                    <div className={`${isDark ? 'glass-card' : 'bg-white shadow-xl'} p-6 rounded-2xl ${isDark ? 'glow-border' : 'border border-gray-200'}`}>
                      <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                        <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
                        <span className="text-sm font-medium text-teal-500 bg-teal-500/10 px-3 py-1 rounded-full">
                          {item.year}
                        </span>
                      </div>
                      <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-4`}>{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, i) => (
                          <span key={i} className={`${isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'} text-sm px-3 py-1 rounded-full`}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education & Qualifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="w-2 h-10 bg-gradient-to-b from-teal-500 to-teal-600 rounded-full"></div>
              <div>
                <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Education & Growth</h2>
                <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Academic foundation and continuous learning</p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`${isDark ? 'glass-card' : 'bg-white shadow-xl'} p-8 rounded-2xl ${isDark ? 'glow-border' : 'border border-gray-200'}`}
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-600 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <GraduationCap size={36} className="text-white" />
                </div>
                <div>
                  <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>BSc Software Engineering</h3>
                  <p className="text-teal-500">University of Zimbabwe</p>
                  <p className={`text-sm mt-1 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Ongoing • Level 2</p>
                </div>
              </div>
              
              <div className="space-y-6">
                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="mt-1">
                      <div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                        {item.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className={`font-semibold mb-1 group-hover:text-teal-500 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.title}</h4>
                      <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm`}>{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className={`mt-8 pt-8 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>Continuous Learning</h4>
                    <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Always expanding skills through projects and research</p>
                  </div>
                  <ChevronRight className="text-teal-500" />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-teal-500/10 text-teal-500 px-4 py-2 rounded-full mb-4 border border-teal-500/20">
              <Lightbulb size={18} />
              <span className="font-medium">Philosophy</span>
            </div>
            <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Development Philosophy</h2>
            <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>How I approach problem-solving and technology</p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`${isDark ? 'glass-card' : 'bg-white shadow-xl'} p-8 md:p-12 rounded-2xl ${isDark ? 'glow-border' : 'border border-gray-200'}`}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-teal-500/10 rounded-2xl flex items-center justify-center">
                <Users className="text-teal-500" size={28} />
              </div>
              <div>
                <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Human-Centered Engineering</h3>
                <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Technology should solve real human problems</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className={`text-xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
              >
                "I approach software engineering as a discipline of solving human problems 
                through elegant technical solutions. Every system I build is designed with 
                scalability, maintainability, and real-world impact as primary considerations."
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className={`text-lg leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
              >
                My work bridges the gap between academic excellence and industry requirements, 
                delivering production-ready applications that serve actual user needs while 
                maintaining technical excellence and innovation.
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className={`mt-10 pt-8 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'} flex flex-col sm:flex-row sm:items-center justify-between gap-4`}
            >
              <div>
                <p className={`font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>— Joshua Tevera</p>
                <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Software Engineering Student & Full-Stack Developer</p>
              </div>
              <div className="flex items-center gap-2">
                <Award className="text-teal-500" size={20} />
                <span className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Building with purpose since 2022</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}