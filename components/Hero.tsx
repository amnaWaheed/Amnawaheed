
import React from 'react';
import { FileDown, MapPin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const resumePlaceholder = "data:application/pdf;base64,JVBERi0xLjcKMSAwIG9iagogIDw8IC9UeXBlIC9DYXRhbG9nIC9QYWdlcyAyIDAgUiA+PiBlbmRvYmogMiAwIG9iagogIDw8IC9UeXBlIC9QYWdlcyAvS2lkcyBbMyAwIFJdIC9Db3VudCAxID4+IGVuZG9iaiAzIDAgb2JqCiAgPDwgL1R5cGUgL1BhZ2UgL1BhcmVudCAyIDAgUiAvTWVkaWFCb3ggWzAgMCA1OTUgODQyXSAvUmVzb3VyY2VzIDw8ID4+ID4+IGVuZG9iagp0cmFpbGVyCiAgPDwgL1Ryb290IDEgMCBSID4+CJSVFT0Y=";

  return (
    <section id="about" className="relative min-h-screen flex items-center overflow-hidden scroll-mt-24 transition-colors duration-1000 pt-20 lg:pt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <p className="text-orange-400 font-semibold tracking-wider uppercase mb-3 text-sm sm:text-base animate-pulse">Welcome to my portfolio</p>
            <h1 className="text-4xl xs:text-5xl md:text-7xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
              I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-500">Amna Waheed</span>
            </h1>
            <h2 className="text-xl md:text-3xl text-slate-300 font-medium mb-6 sm:mb-8">
              Senior MERN & Next.js Developer
            </h2>
            <p className="text-base md:text-lg text-slate-400 mb-8 sm:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0">
              With over <span className="font-bold text-orange-300">4+ years of experience</span>, I specialize in building scalable, 
              high-performance web applications using React, Next.js, and Node.js. Expertise in Shopify integrations, 
              micro-frontends, and AI-driven workflows.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              <a 
                href={resumePlaceholder}
                download="Amna_Waheed_Resume.pdf"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 text-white rounded-xl font-bold shadow-lg shadow-orange-900/20 hover:bg-orange-600 transition-all transform hover:-translate-y-1 no-underline active:scale-95"
              >
                <FileDown className="w-5 h-5" />
                Download Resume
              </a>
              <div className="flex flex-col xs:flex-row flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 text-slate-500">
                <div className="flex items-center gap-1.5 hover:text-orange-300 transition-colors cursor-default group">
                  <MapPin className="w-4 h-4 text-orange-400" />
                  <span className="text-xs sm:text-sm font-medium">Lahore, PK</span>
                </div>
                <div className="flex items-center gap-1.5 hover:text-orange-300 transition-colors cursor-default group">
                  <Mail className="w-4 h-4 text-orange-400" />
                  <span className="text-xs sm:text-sm font-medium truncate max-w-[200px] xs:max-w-none">amnawaheed445@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative order-1 lg:order-2 w-full max-w-[280px] xs:max-w-xs sm:max-w-md lg:max-w-none">
            <div className="relative w-48 h-48 xs:w-64 xs:h-64 md:w-80 md:h-80 mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-800 transform rotate-2 hover:rotate-0 transition-all duration-700 animate-float-img">
              <img 
                src="assets/amna-waheed.jpg" 
                alt="Amna Waheed" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-4 -right-4 xs:-right-2 md:right-10 bg-[#0f172a]/90 backdrop-blur-md p-3 md:p-6 rounded-2xl shadow-xl border border-slate-800 animate-bounce-slow z-10">
              <p className="text-2xl md:text-4xl font-bold text-orange-400">4+</p>
              <p className="text-[10px] md:text-sm text-slate-400 font-medium uppercase tracking-tighter">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes float-img {
          0% { transform: translateY(0) rotate(2deg); }
          50% { transform: translateY(-12px) rotate(0deg); }
          100% { transform: translateY(0) rotate(2deg); }
        }
        .animate-float-img {
          animation: float-img 6s ease-in-out infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
