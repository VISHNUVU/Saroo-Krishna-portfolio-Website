import React from 'react';
import { Mail, Github, Linkedin, FileText } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-slate-900 bg-slate-950 text-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-medium tracking-tight text-white">Let's collaborate</h2>
          <p className="text-slate-500">Passionately using data to uncover insights. Open to new opportunities.</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a href="mailto:sarookrishnar@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-950 font-medium hover:bg-slate-200 transition-colors">
            <Mail className="w-4 h-4" />
            Get in touch
          </a>
          <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-700 bg-slate-900/50 text-white font-medium hover:bg-slate-800 transition-colors">
            <FileText className="w-4 h-4" />
            Download Resume
          </a>
        </div>

        <div className="flex gap-6 mt-4">
          <a href="https://github.com/SAROO-KRISHNA" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
          {/* Placeholder for LinkedIn if not provided */}
          <a href="#" className="text-slate-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
        </div>

        <p className="text-xs text-slate-600 mt-8">© 2025 Saroo Krishna R. Trivandrum, India.</p>
      </div>
    </footer>
  );
};

export default Footer;