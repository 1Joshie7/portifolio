import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { skills } from '../data/skills';
import { useState } from 'react';
import ProjectModal from '../components/ProjectModal';
import Experience from './Experience';
import { Code2, Database, Wrench, Zap, Rocket, Target, Star, TrendingUp } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  const { isDark } = useTheme();

  return (
    <>
      <Hero />
      
      {/* Projects Section */}
      <section id="projects" className={`py-24 overflow-hidden ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-teal-500/10 text-teal-500 px-4 py-2 rounded-full mb-4 border border-teal-500/20">
              <Star size={18} />
              <span className="font-medium">Featured Work</span>
            </div>
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Featured <span className="text-teal-500">Projects</span>
            </h2>
            <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
              Click any project to watch the demo video and explore technical details
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
                onVideoClick={setSelectedProject} 
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
<Link to="/projects" className="animated-border-btn inline-flex">
  View All Projects
  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
</Link>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <Experience />

      {/* Skills Section */}
      <section className={`py-24 ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-teal-500/10 text-teal-500 px-4 py-2 rounded-full mb-4 border border-teal-500/20">
              <Zap size={18} />
              <span className="font-medium">Expertise</span>
            </div>
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Technical <span className="text-teal-500">Skills</span>
            </h2>
            <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
              Continuously evolving skillset with hands-on experience across full-stack development
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Languages Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`${isDark ? 'glass-card' : 'bg-white shadow-xl'} p-8 rounded-2xl ${isDark ? 'glow-border' : 'border border-gray-200'}`}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-teal-500/10 p-3 rounded-xl">
                  <Code2 className="text-teal-500" size={28} />
                </div>
                <div>
                  <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Languages</h3>
                  <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Core programming expertise</p>
                </div>
              </div>
              <div className="space-y-6">
                {skills.languages.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className={`font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{skill.name}</span>
                      <span className="font-bold text-teal-500">{skill.level}%</span>
                    </div>
                    <div className={`h-2 ${isDark ? 'bg-gray-800' : 'bg-gray-200'} rounded-full overflow-hidden`}>
                      <motion.div 
                        className="h-full bg-gradient-to-r from-teal-500 to-teal-400 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Frameworks Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`${isDark ? 'glass-card' : 'bg-white shadow-xl'} p-8 rounded-2xl ${isDark ? 'glow-border' : 'border border-gray-200'}`}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-teal-500/10 p-3 rounded-xl">
                  <Database className="text-teal-500" size={28} />
                </div>
                <div>
                  <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Frameworks</h3>
                  <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Modern development stacks</p>
                </div>
              </div>
              <div className="space-y-6">
                {skills.frameworks.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className={`font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{skill.name}</span>
                      <span className="font-bold text-teal-500">{skill.level}%</span>
                    </div>
                    <div className={`h-2 ${isDark ? 'bg-gray-800' : 'bg-gray-200'} rounded-full overflow-hidden`}>
                      <motion.div 
                        className="h-full bg-gradient-to-r from-teal-500 to-teal-400 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tools Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`${isDark ? 'glass-card' : 'bg-white shadow-xl'} p-8 rounded-2xl ${isDark ? 'glow-border' : 'border border-gray-200'}`}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-teal-500/10 p-3 rounded-xl">
                  <Wrench className="text-teal-500" size={28} />
                </div>
                <div>
                  <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Tools & More</h3>
                  <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Development ecosystem</p>
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className={`font-bold text-lg mb-4 flex items-center gap-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <Target size={18} className="text-teal-500" />
                  Development Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((tool, index) => (
                    <motion.span
                      key={tool}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className={`${isDark ? 'bg-gray-800 text-gray-300 border-gray-700 hover:text-teal-400' : 'bg-gray-100 text-gray-700 border-gray-200 hover:text-teal-600'} px-3 py-2 rounded-lg border hover:border-teal-500/50 transition-all`}
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className={`font-bold text-lg mb-4 flex items-center gap-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <Rocket size={18} className="text-teal-500" />
                  Currently Learning
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.learning.map((item, index) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + (index * 0.05) }}
                      className="bg-teal-500/10 text-teal-500 px-3 py-2 rounded-lg border border-teal-500/20 hover:bg-teal-500/20 transition-all font-medium"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
                <p className={`text-sm mt-4 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                  <TrendingUp className="inline mr-1" size={14} />
                  Continuously expanding skillset
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </>
  );
}