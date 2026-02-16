
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExperienceSection from './components/ExperienceSection';
import ProjectSection from './components/ProjectSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import ScrollToTop from './components/ScrollToTop';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen bg-[#020617] selection:bg-orange-500 selection:text-white flex flex-col">
    <Navbar />
    <main className="flex-grow">
      {children}
    </main>
    <footer className="py-12 bg-[#020617] border-t border-slate-800 mt-auto">
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
        <Hero />
        <ExperienceSection />
        <ProjectSection />
        <SkillsSection />
        <ContactSection />
      </Layout>
    </>
  );
};

export default App;
