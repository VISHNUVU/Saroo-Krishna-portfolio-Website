import React from 'react';

const Timeline: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 border-t border-slate-900">
      <div className="max-w-3xl mx-auto space-y-12">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white text-center">Journey</h2>
        
        <div className="relative pl-8 space-y-12 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1px] before:bg-slate-800">
            
          {/* Role 1 */}
          <div className="relative">
            <div className="absolute -left-[26px] top-1.5 h-3 w-3 rounded-full border border-slate-600 bg-slate-950"></div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
              <h3 className="text-lg font-medium text-slate-100">Data Analyst Intern</h3>
              <span className="text-xs font-mono text-slate-500">Jan 2025 — Present</span>
            </div>
            <p className="text-sm text-indigo-400 mb-2">Scipy Technology Pvt Ltd</p>
            <p className="text-slate-400 leading-relaxed text-sm">
              Practicing exploratory data analysis (EDA) to identify trends. Creating dashboards with Power BI and building beginner-level machine learning models using Scikit-learn. Exploring Deep Learning with TensorFlow/Keras and NLP techniques.
            </p>
          </div>

          {/* Role 2 */}
          <div className="relative">
            <div className="absolute -left-[26px] top-1.5 h-3 w-3 rounded-full border border-slate-800 bg-slate-950"></div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
              <h3 className="text-lg font-medium text-slate-100">Data Analyst Intern</h3>
              <span className="text-xs font-mono text-slate-500">May 2024 — Nov 2024</span>
            </div>
            <p className="text-sm text-indigo-400 mb-2">Oracuz Info Tech Pvt Ltd</p>
            <p className="text-slate-400 leading-relaxed text-sm">
              Learned data analytics fundamentals, Python for data analysis, and visualization. Practiced cleaning small datasets and started exploring tools like Power BI and Google Sheets for basic reporting.
            </p>
          </div>

          {/* Education */}
          <div className="relative">
            <div className="absolute -left-[26px] top-1.5 h-3 w-3 rounded-full border border-slate-800 bg-slate-950"></div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
              <h3 className="text-lg font-medium text-slate-100">Computer Science Engineering</h3>
              <span className="text-xs font-mono text-slate-500">2018 — 2022</span>
            </div>
            <p className="text-sm text-indigo-400 mb-2">John Cox Memorial C.S.I Institute Of Technology</p>
            <p className="text-slate-400 leading-relaxed text-sm">
              Focused on core computer science principles and software engineering foundations.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Timeline;