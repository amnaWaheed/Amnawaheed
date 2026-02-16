
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExperienceSection from './components/ExperienceSection';
import ProjectSection from './components/ProjectSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import ScrollToTop from './components/ScrollToTop';
import Reveal from './components/Reveal';
import TechBackground from './components/TechBackground';

const Home: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const sectionId = pathname.substring(1);
    
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        const timeoutId = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return () => clearTimeout(timeoutId);
      }
    } else if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname]);

  return (
    <div className="relative">
      {/* Tech-inspired Particle Background */}
      <TechBackground />
      
      {/* Dynamic Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-20">
        <div className="blob top-[-10%] left-[-5%] scale-150 opacity-10" style={{ animationDelay: '0s' }}></div>
        <div className="blob bottom-[5%] right-[-10%] opacity-15" style={{ animationDelay: '-5s', background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0) 70%)' }}></div>
        <div className="absolute inset-0 bg-grid opacity-10"></div>
      </div>

      <Reveal><Hero /></Reveal>
      <Reveal><ExperienceSection /></Reveal>
      <Reveal><ProjectSection /></Reveal>
      <Reveal><SkillsSection /></Reveal>
      <Reveal><ContactSection /></Reveal>
    </div>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen bg-[#020617] selection:bg-orange-500 selection:text-white flex flex-col">
    <Navbar />
    <main className="flex-grow">
      {children}
    </main>
    <footer className="py-12 bg-[#020617] border-t border-slate-800 mt-auto relative z-10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-6">
          Amna Waheed
        </p>
        <p className="text-slate-500 text-sm font-medium">
          © {new Date().getFullYear()} All Rights Reserved. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  </div>
);

const App: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/experience" element={<Home />} />
          <Route path="/projects" element={<Home />} />
          <Route path="/skills" element={<Home />} />
          <Route path="/contact" element={<Home />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
