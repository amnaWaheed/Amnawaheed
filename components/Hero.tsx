
import React from 'react';
import { FileDown, MapPin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#020617]">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-orange-500/5 rounded-full blur-[120px] -z-10 translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-500/5 rounded-full blur-[120px] -z-10 -translate-x-1/4 translate-y-1/4"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-orange-400 font-semibold tracking-wider uppercase mb-3">Welcome to my portfolio</p>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-500">Amna Waheed</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-300 font-medium mb-8">
              Senior MERN & Next.js Developer
            </h2>
            <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              With over <span className="font-bold text-orange-300">4+ years of experience</span>, I specialize in building scalable, 
              high-performance web applications using React, Next.js, and Node.js. Expertise in Shopify integrations, 
              micro-frontends, and AI-driven workflows.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button 
                className="flex items-center gap-2 px-8 py-4 bg-orange-500 text-white rounded-lg font-bold shadow-lg shadow-orange-900/20 hover:bg-orange-600 transition-all transform hover:-translate-y-1"
                onClick={() => window.print()}
              >
                <FileDown className="w-5 h-5" />
                Download Resume
              </button>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-slate-500 mt-4 sm:mt-0 sm:ml-4">
                <div className="flex items-center gap-1.5 hover:text-orange-300 transition-colors cursor-default">
                  <MapPin className="w-4 h-4 text-orange-400" />
                  <span className="text-sm font-medium">Lahore, PK</span>
                </div>
                <div className="flex items-center gap-1.5 hover:text-orange-300 transition-colors cursor-default">
                  <Mail className="w-4 h-4 text-orange-400" />
                  <span className="text-sm font-medium">amnawaheed445@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-800 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://picsum.photos/id/1011/600/600" 
                alt="Amna Waheed" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-2 md:right-10 bg-[#0f172a] p-4 md:p-6 rounded-2xl shadow-xl border border-slate-800 animate-bounce-slow">
              <p className="text-3xl md:text-4xl font-bold text-orange-400">4+</p>
              <p className="text-xs md:text-sm text-slate-400 font-medium uppercase tracking-tighter">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
