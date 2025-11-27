import React from 'react';
import { ArrowDown, Github } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-20 px-6 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 hero-glow pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none mix-blend-screen"></div>

      <div className="relative max-w-4xl mx-auto text-center space-y-8 z-10">
        <div className="fade-enter inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-500/20 text-cyan-400 text-xs font-medium tracking-wide uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          Open to new roles
        </div>
        
        <h1 className="fade-enter animate-delay-100 text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white">
          Data driven insights, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-slate-200 to-slate-600">informed decisions.</span>
        </h1>
        
        <p className="fade-enter animate-delay-200 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
          Data Analyst & ML Enthusiast specialized in Python, Deep Learning, and building interactive dashboards to uncover meaningful patterns in data.
        </p>

        <div className="fade-enter animate-delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#work" className="w-full sm:w-auto px-8 py-3 rounded-lg bg-white text-slate-950 font-medium hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
            View Projects
            <ArrowDown className="w-4 h-4" />
          </a>
          <a href="https://github.com/SAROO-KRISHNA" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-3 rounded-lg border border-slate-800 bg-slate-950/50 text-white font-medium hover:bg-slate-900 transition-colors flex items-center justify-center gap-2">
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </div>
      
      {/* Abstract Data Vis Animation Placeholder */}
      <div className="fade-enter animate-delay-400 mt-20 w-full max-w-5xl h-64 border-t border-l border-r border-slate-800 rounded-t-3xl bg-gradient-to-b from-slate-900/50 to-transparent relative overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-12 gap-4 p-8 opacity-20">
            {/* Generating random bars to simulate the visualization */}
            <div className="col-span-1 h-32 bg-slate-500 rounded-md mt-auto"></div>
            <div className="col-span-1 h-16 bg-slate-500 rounded-md mt-auto"></div>
            <div className="col-span-1 h-48 bg-slate-500 rounded-md mt-auto"></div>
            <div className="col-span-1 h-24 bg-slate-500 rounded-md mt-auto"></div>
            <div className="col-span-1 h-40 bg-slate-500 rounded-md mt-auto"></div>
            <div className="col-span-1 h-56 bg-slate-500 rounded-md mt-auto"></div>
            <div className="col-span-1 h-32 bg-slate-500 rounded-md mt-auto"></div>
            <div className="col-span-1 h-20 bg-slate-500 rounded-md mt-auto"></div>
            <div className="col-span-1 h-44 bg-slate-500 rounded-md mt-auto"></div>
            <div className="col-span-1 h-64 bg-slate-500 rounded-md mt-auto"></div>
            <div className="col-span-1 h-36 bg-slate-500 rounded-md mt-auto"></div>
            <div className="col-span-1 h-28 bg-slate-500 rounded-md mt-auto"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;