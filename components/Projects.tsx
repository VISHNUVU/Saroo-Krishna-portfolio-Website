import React from 'react';
import { ArrowRight, Users, Eye, Video } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="work" className="py-24 px-6 bg-slate-950 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">Selected Projects</h2>
            <p className="text-slate-400 max-w-xl">A collection of analysis, computer vision, and machine learning experiments.</p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Project 1 */}
          <article className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 p-8 rounded-2xl glass-card hover:bg-slate-900 transition-colors border border-white/5 hover:border-white/10">
            <div className="md:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">Unsupervised Learning</span>
              </div>
              <h3 className="text-2xl font-medium text-slate-100 group-hover:text-white transition-colors">
                Customer Segmentation Analysis
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Executed exploratory data analysis and dimensionality reduction (PCA, t-SNE) to uncover meaningful patterns in mall customer behavior. Applied clustering algorithms like DBSCAN to segment customers based on demographics and spending patterns.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <Tag>Python</Tag>
                <Tag>Scikit-learn</Tag>
                <Tag>Clustering</Tag>
                <Tag>Matplotlib</Tag>
              </div>
            </div>
            <div className="md:col-span-4 flex items-end justify-end">
              <div className="w-full h-40 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-900/10 border border-emerald-500/20 flex items-center justify-center relative overflow-hidden group-hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] transition-shadow">
                <div className="absolute inset-0 grid grid-cols-6 gap-1 opacity-20">
                  <div className="bg-emerald-500/20 col-span-1 h-full"></div>
                  <div className="col-span-1"></div>
                  <div className="bg-emerald-500/20 col-span-1 h-full"></div>
                </div>
                <Users className="w-10 h-10 text-emerald-400/50" />
              </div>
            </div>
          </article>

          {/* Project 2 */}
          <article className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 p-8 rounded-2xl glass-card hover:bg-slate-900 transition-colors border border-white/5 hover:border-white/10">
            <div className="md:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-medium text-indigo-400 bg-indigo-400/10 px-2 py-1 rounded">Deep Learning</span>
              </div>
              <h3 className="text-2xl font-medium text-slate-100 group-hover:text-white transition-colors">
                Dog vs Cat Image Classifier
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Developed an image classification model using Convolutional Neural Networks (CNN) with TensorFlow and Keras. Implemented real-time data augmentation and achieved high accuracy in distinguishing between classes in a cloud-based environment.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <Tag>TensorFlow</Tag>
                <Tag>Keras</Tag>
                <Tag>CNN</Tag>
                <Tag>Google Colab</Tag>
              </div>
            </div>
            <div className="md:col-span-4 flex items-end justify-end">
              <div className="w-full h-40 rounded-xl bg-gradient-to-br from-indigo-500/10 to-violet-900/10 border border-indigo-500/20 flex items-center justify-center group-hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] transition-shadow">
                <Eye className="w-10 h-10 text-indigo-400/50" />
              </div>
            </div>
          </article>

          {/* Project 3 */}
          <article className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 p-8 rounded-2xl glass-card hover:bg-slate-900 transition-colors border border-white/5 hover:border-white/10">
            <div className="md:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-medium text-orange-400 bg-orange-400/10 px-2 py-1 rounded">Computer Vision</span>
              </div>
              <h3 className="text-2xl font-medium text-slate-100 group-hover:text-white transition-colors">
                Real-Time Face Detection App
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Built a real-time face, eye, and smile detection system using Haar Cascade classifiers with OpenCV. Integrated the detection pipeline into a web interface using Flask, enabling live video streaming directly from the webcam.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <Tag>OpenCV</Tag>
                <Tag>Flask</Tag>
                <Tag>Python</Tag>
                <Tag>HTML/CSS</Tag>
              </div>
            </div>
            <div className="md:col-span-4 flex items-end justify-end">
              <div className="w-full h-40 rounded-xl bg-gradient-to-br from-orange-500/10 to-red-900/10 border border-orange-500/20 flex items-center justify-center group-hover:shadow-[0_0_30px_rgba(249,115,22,0.1)] transition-shadow">
                <Video className="w-10 h-10 text-orange-400/50" />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

const Tag: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-xs text-slate-500 border border-slate-800 px-2 py-1 rounded-md">
    {children}
  </span>
);

export default Projects;