
import React from 'react';
import Slider from './Slider';
import SectionHeading from './SectionHeading';
import { EXPERIENCES } from '../constants';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-[#020617] scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Work Experience" subtitle="My Career Journey" />
        
        <div className="bg-[#0f172a] rounded-3xl p-4 sm:p-10 shadow-xl border border-slate-800">
          <Slider>
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="p-4 sm:p-6 min-h-[400px]">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-1">{exp.role}</h4>
                    <div className="flex items-center gap-2 text-orange-400 font-semibold text-lg">
                      <Briefcase className="w-5 h-5" />
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 text-slate-400">
                    <div className="flex items-center gap-2 bg-[#1e293b] px-4 py-2 rounded-full border border-slate-700 shadow-sm">
                      <Calendar className="w-4 h-4 text-orange-400" />
                      <span className="text-sm font-medium">{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 px-4">
                      <MapPin className="w-4 h-4 text-orange-400" />
                      <span className="text-sm font-medium">{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-1 gap-4">
                  <h5 className="font-bold text-slate-300 uppercase text-xs tracking-wider mb-2">Key Responsibilities</h5>
                  <ul className="space-y-4">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex gap-4 group">
                        <div className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-orange-500 group-hover:scale-150 transition-transform"></div>
                        <p className="text-slate-400 leading-relaxed">{resp}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
