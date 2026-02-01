import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { skills } from '../data/skills';
import { useState } from 'react';
import ProjectModal from '../components/ProjectModal';
import { Code2, Database, Wrench, Zap, Rocket, Target, ChevronRight, Star, TrendingUp } from 'lucide-react';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <>
      <Hero />
      
      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-4 py-2 rounded-full mb-4">
              <Star size={18} />
              <span className="font-medium">Showcase</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Click any project to watch the demo video and explore technical details
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.slice(0, 3).map((project, index) => (
              <motion.div key={project.id} variants={itemVariants}>
                <ProjectCard 
                  project={project}
                  index={index}
                  onVideoClick={setSelectedProject}
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-16"
          >

            <p className="text-gray-500 mt-4 text-sm">3 of {projects.length} projects shown</p>
          </motion.div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-4 py-2 rounded-full mb-4">
              <Zap size={18} />
              <span className="font-medium">Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Technical <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-30 blur transition duration-500"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-200 hover:border-blue-300 transition-all">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-3 rounded-xl">
                    <Code2 className="text-blue-600" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Languages</h3>
                    <p className="text-gray-600">Core programming expertise</p>
                  </div>
                </div>
                <div className="space-y-6">
                  {skills.languages.map((skill, index) => (
                    <motion.div 
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-800">{skill.name}</span>
                        <span className="font-bold text-blue-600">{skill.level}%</span>
                      </div>
                      <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Frameworks Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-30 blur transition duration-500"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-200 hover:border-purple-300 transition-all">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-3 rounded-xl">
                    <Database className="text-purple-600" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Frameworks</h3>
                    <p className="text-gray-600">Modern development stacks</p>
                  </div>
                </div>
                <div className="space-y-6">
                  {skills.frameworks.map((skill, index) => (
                    <motion.div 
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-800">{skill.name}</span>
                        <span className="font-bold text-purple-600">{skill.level}%</span>
                      </div>
                      <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Tools & Learning Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl opacity-0 group-hover:opacity-30 blur transition duration-500"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-200 hover:border-orange-300 transition-all">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-gradient-to-r from-orange-100 to-red-100 p-3 rounded-xl">
                    <Wrench className="text-orange-600" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Tools & More</h3>
                    <p className="text-gray-600">Development ecosystem</p>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Target size={18} className="text-blue-600" />
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
                        className="bg-gradient-to-r from-gray-50 to-gray-100 text-gray-800 px-3 py-2 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all"
                      >
                        {tool}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Rocket size={18} className="text-green-600" />
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
                        className="bg-gradient-to-r from-green-50 to-emerald-50 text-green-800 px-3 py-2 rounded-lg border border-green-200 hover:border-green-400 hover:shadow-sm transition-all font-medium"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm mt-4">
                    <TrendingUp className="inline mr-1" size={14} />
                    Continuously expanding skillset
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}