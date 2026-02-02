import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import { projects } from '../data/projects';
import { Filter } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const categories = ['all', ...new Set(projects.map(p => p.category))];

  return (
    <div className="pt-20 pb-20 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-4 dark:text-white">My Projects</h1>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
          Click on any project to watch the demo video
        </p>
        
        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full capitalize transition-colors ${
                filter === category 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 dark:text-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard 
              key={project.id} 
              project={project}
              onVideoClick={setSelectedProject}
            />
          ))}
        </div>
      </div>
      
      {/* Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}