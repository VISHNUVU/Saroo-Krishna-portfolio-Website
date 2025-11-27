import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-400">
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Projects />
        <Timeline />
      </main>
      <Footer />
    </div>
  );
};

export default App;