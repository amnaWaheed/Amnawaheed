
import React from 'react';
import SectionHeading from './SectionHeading';
import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Get In Touch" subtitle="Contact Me" />
        
        <div className="grid lg:grid-cols-5 gap-12 bg-[#0f172a] rounded-3xl overflow-hidden border border-slate-800 p-4 sm:p-12">
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-2xl font-bold text-white">Let's discuss a project</h4>
            <p className="text-slate-400 leading-relaxed">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="p-3 bg-orange-500/10 rounded-xl group-hover:bg-orange-500 group-hover:text-white text-orange-400 transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium uppercase tracking-tight">Email Me</p>
                  <p className="text-slate-200 font-bold">amnawaheed445@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="p-3 bg-orange-500/10 rounded-xl group-hover:bg-orange-500 group-hover:text-white text-orange-400 transition-all">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium uppercase tracking-tight">Call Me</p>
                  <p className="text-slate-200 font-bold">0307-6821543</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-800">
              <p className="text-sm text-slate-500 font-bold mb-4 uppercase tracking-widest">Social Profiles</p>
              <div className="flex gap-4">
                <a href="#" className="p-3 bg-[#1e293b] border border-slate-700 rounded-xl text-slate-400 hover:text-orange-400 hover:border-orange-400 transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 bg-[#1e293b] border border-slate-700 rounded-xl text-slate-400 hover:text-orange-400 hover:border-orange-400 transition-all">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 bg-[#020617] p-6 sm:p-10 rounded-2xl shadow-2xl border border-slate-800">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-400 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 rounded-xl bg-[#0f172a] border border-slate-700 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-400 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="name@email.com" 
                    className="w-full px-4 py-3 rounded-xl bg-[#0f172a] border border-slate-700 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-400 mb-2">Subject</label>
                <input 
                  type="text" 
                  placeholder="How can I help?" 
                  className="w-full px-4 py-3 rounded-xl bg-[#0f172a] border border-slate-700 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-400 mb-2">Message</label>
                <textarea 
                  rows={5} 
                  placeholder="Tell me about your project..." 
                  className="w-full px-4 py-3 rounded-xl bg-[#0f172a] border border-slate-700 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all resize-none"
                ></textarea>
              </div>
              <button className="w-full py-4 bg-orange-500 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-orange-600 transition-all shadow-lg shadow-orange-900/20 active:scale-[0.98]">
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
