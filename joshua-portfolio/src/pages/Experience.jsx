import { motion } from 'framer-motion';
import { Code2, Brain, Rocket, Server } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const experiences = [
  {
    period: "2024 — Present",
    role: "Full-Stack Developer",
    company: "Freelance & Personal Projects",
    description: "Building production-ready applications in healthcare, e-commerce, and education sectors. Specializing in AI integration and scalable system architecture.",
    technologies: ["Django", "React", "Node.js", "PostgreSQL", "Docker", "AI APIs"],
    current: true,
  },
  {
    period: "2023 — 2024",
    role: "AI Integration Engineer",
    company: "Project-Based",
    description: "Incorporated AI capabilities into practical applications, including AI-powered healthcare platforms and automated assessment systems using Google Gemini and Sentence-BERT.",
    technologies: ["Google Gemini", "LLM", "Python", "Django REST", "React"],
    current: false,
  },
  {
    period: "2022 — 2023",
    role: "Junior Developer",
    company: "Academic & Freelance",
    description: "Mastered core web development technologies and built foundational projects with modern architectures. Collaborated on team projects and version control.",
    technologies: ["JavaScript", "Python", "React", "Node.js", "Git", "MongoDB"],
    current: false,
  },
];

export default function Experience() {
  const { isDark } = useTheme();

  return (
    <section id="experience" className={`py-24 relative overflow-hidden ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <span className="text-teal-500 text-sm font-medium tracking-wider uppercase">
            Career Journey
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold mt-4 mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Experience that{" "}
            <span className="font-serif italic font-normal text-teal-500">
              speaks volumes.
            </span>
          </h2>
          <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
            A timeline of my professional growth, from curious beginner to
            building production-ready applications at scale.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line with Glow */}
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-teal-500/70 via-teal-500/30 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative grid md:grid-cols-2 gap-8"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-teal-500 rounded-full -translate-x-1/2 ring-4 ring-gray-950 z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-teal-500 animate-ping-slow opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div className={`pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                  <div className={`${isDark ? 'glass-card' : 'bg-white shadow-xl'} p-6 rounded-2xl ${isDark ? 'glow-border' : 'border border-gray-200'} transition-all duration-500`}>
                    <span className="text-sm text-teal-500 font-medium">{exp.period}</span>
                    <h3 className={`text-xl font-semibold mt-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{exp.role}</h3>
                    <p className="text-teal-500/80">{exp.company}</p>
                    <p className={`text-sm mt-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{exp.description}</p>
                    <div className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""}`}>
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className={`px-3 py-1 text-xs rounded-full ${isDark ? 'bg-gray-800 text-gray-400 border-gray-700' : 'bg-gray-100 text-gray-600 border-gray-200'} border`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}