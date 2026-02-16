
import React from 'react';
import Slider from './Slider';
import SectionHeading from './SectionHeading';
import { PROJECTS } from '../constants';
import { ExternalLink, Layers } from 'lucide-react';

const ProjectSection: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-[#0f172a] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Featured Projects" subtitle="My Recent Works" />
        
        <div className="relative">
          <Slider>
            {PROJECTS.map((project) => (
              <div key={project.id} className="p-2 sm:p-8">
                <div className="grid lg:grid-cols-2 gap-10 items-center bg-[#020617]/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-800 p-4 sm:p-10">
                  <div className="relative h-64 sm:h-96 rounded-2xl overflow-hidden group shadow-2xl border border-slate-800">
                    <img 
                      src={project.image} 
                      alt={project.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 to-transparent"></div>
                  </div>
                  
                  <div className="flex flex-col h-full justify-center">
                    <h4 className="text-3xl font-bold mb-4 text-white">{project.name}</h4>
                    <p className="text-slate-400 text-lg leading-relaxed mb-8">
                      {project.description}
                    </p>
                    
                    <div className="mb-8">
                      <p className="flex items-center gap-2 text-sm font-semibold text-orange-400 uppercase tracking-widest mb-4">
                        <Layers className="w-4 h-4" /> Tech Stack
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span 
                            key={tech} 
                            className="px-3 py-1 bg-orange-500/10 text-orange-300 rounded-lg text-xs font-medium border border-orange-500/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-bold transition-colors group"
                      >
                        View Project
                        <ExternalLink className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
