import React, { useState } from 'react';
import { Menu, ArrowUpRight, X, Star } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-slate-100 font-medium tracking-tight text-lg flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <span>Saroo Krishna R</span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#work" className="hover:text-slate-100 transition-colors">Work</a>
            <a href="#stack" className="hover:text-slate-100 transition-colors">Skills</a>
            <a href="#about" className="hover:text-slate-100 transition-colors">About</a>
            <a href="mailto:sarookrishnar@gmail.com" className="text-slate-100 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full transition-all flex items-center gap-2">
              <span>Contact</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-950 pt-20 px-6 md:hidden">
            <div className="flex flex-col space-y-6 text-lg font-medium text-slate-300">
                <a href="#work" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 border-b border-white/5">Work</a>
                <a href="#stack" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 border-b border-white/5">Skills</a>
                <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 border-b border-white/5">About</a>
                <a href="mailto:sarookrishnar@gmail.com" className="flex items-center gap-2 text-white">
                    <span>Contact Me</span>
                    <ArrowUpRight className="w-4 h-4" />
                </a>
            </div>
        </div>
      )}
    </>
  );
};

export default Navbar;