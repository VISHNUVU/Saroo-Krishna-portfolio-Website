import React from 'react';
import { 
  BarChart2, FileCode, Database, Table2, Terminal, 
  BrainCircuit, Layers, Box, Sparkles, Workflow, 
  Server, Container, Cloud, GitBranch, LayoutDashboard,
  Zap, BookOpen, Code, Eye
} from 'lucide-react';

const TechStack: React.FC = () => {
  return (
    <section id="stack" className="py-24 px-6 relative bg-slate-950 border-t border-white/5">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">Technical Arsenal</h2>
            <p className="text-slate-400 max-w-xl">The frameworks, libraries, and infrastructure powering my data workflows.</p>
          </div>
          
          {/* Status Badge */}
          <div className="hidden md:flex items-center gap-3 px-3 py-1.5 rounded-md bg-white/5 border border-white/10">
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            </div>
            <span className="text-xs font-mono text-slate-400">Available for Hire</span>
          </div>
        </div>

        {/* Tech Grid: 3 Column Layout with Inner Borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 bg-slate-800 border border-slate-800 rounded-2xl overflow-hidden gap-[1px]">
            
          {/* Column 1: Core & Analysis */}
          <div className="bg-slate-950 p-0 flex flex-col h-full">
            <div className="p-6 border-b border-white/5 bg-slate-950/50 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4">
                <BarChart2 className="w-5 h-5 text-indigo-400" />
              </div>
              <h3 className="text-lg font-medium text-slate-100">Core & Analysis</h3>
              <p className="text-sm text-slate-500 mt-1">Data manipulation and visualization.</p>
            </div>
            
            <div className="flex-1 divide-y divide-white/5">
              <TechRow icon={<FileCode />} name="Python" label="Primary" />
              <TechRow icon={<Database />} name="SQL" label="Querying" />
              <TechRow icon={<Table2 />} name="Pandas / NumPy" label="Data Analysis" />
              <TechRow icon={<BarChart2 />} name="Power BI / Excel" label="Dashboards" />
            </div>
          </div>

          {/* Column 2: Machine Learning */}
          <div className="bg-slate-950 p-0 flex flex-col h-full">
            <div className="p-6 border-b border-white/5 bg-slate-950/50 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4">
                <BrainCircuit className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-lg font-medium text-slate-100">Intelligence</h3>
              <p className="text-sm text-slate-500 mt-1">Machine Learning and Deep Learning models.</p>
            </div>

            <div className="flex-1 divide-y divide-white/5">
              <TechRow icon={<Layers />} name="TensorFlow / Keras" label="Deep Learning" labelColor="text-cyan-500 bg-cyan-500/10" />
              <TechRow icon={<Workflow />} name="Scikit-learn" label="ML Models" />
              <TechRow icon={<Eye />} name="OpenCV" label="Computer Vision" />
              <TechRow icon={<Sparkles />} name="NLP" label="Text Processing" />
            </div>
          </div>

          {/* Column 3: Dev Tools */}
          <div className="bg-slate-950 p-0 flex flex-col h-full">
            <div className="p-6 border-b border-white/5 bg-slate-950/50 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                <Code className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-lg font-medium text-slate-100">Development</h3>
              <p className="text-sm text-slate-500 mt-1">Tools and environments for deployment.</p>
            </div>

            <div className="flex-1 divide-y divide-white/5">
              <TechRow icon={<LayoutDashboard />} name="Flask" label="Web Apps" />
              <TechRow icon={<Terminal />} name="VS Code" label="IDE" />
              <TechRow icon={<BookOpen />} name="Jupyter" label="Notebooks" />
              <TechRow icon={<Cloud />} name="Google Colab" label="Cloud Compute" />
            </div>
          </div>

        </div>

        {/* Optional: Bottom Activity Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-3 rounded-lg border border-white/5 bg-white/[0.02] flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-slate-900 border border-slate-800 flex items-center justify-center">
              <Zap className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <div className="text-xs text-slate-500">Currently Learning</div>
              <div className="text-sm font-medium text-slate-300">Advanced DL</div>
            </div>
          </div>
          <div className="p-3 rounded-lg border border-white/5 bg-white/[0.02] flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-slate-900 border border-slate-800 flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-blue-400" />
            </div>
            <div>
              <div className="text-xs text-slate-500">Recent Cert</div>
              <div className="text-sm font-medium text-slate-300">Data Science</div>
            </div>
          </div>
          <div className="hidden md:block"></div>
          <div className="hidden md:block"></div>
        </div>
      </div>
    </section>
  );
};

interface TechRowProps {
  icon: React.ReactNode;
  name: string;
  label: string;
  labelColor?: string;
}

const TechRow: React.FC<TechRowProps> = ({ icon, name, label, labelColor }) => {
  // Clone element to add classNames if needed, or wrap it
  const iconWithClasses = React.cloneElement(icon as React.ReactElement<{ className?: string }>, {
    className: "tech-icon w-4 h-4 text-slate-600 transition-all duration-300"
  });

  return (
    <div className="tech-row group flex items-center justify-between p-4 hover:bg-white/[0.02] transition-colors cursor-default">
      <div className="flex items-center gap-3">
        {iconWithClasses}
        <span className="text-sm font-medium text-slate-300">{name}</span>
      </div>
      <span className={`text-xs font-mono transition-colors ${labelColor ? labelColor + ' px-2 py-0.5 rounded' : 'text-slate-600 group-hover:text-indigo-400'}`}>
        {label}
      </span>
    </div>
  );
};

export default TechStack;