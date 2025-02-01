import React from 'react';
import { Github, Activity, Stethoscope, Leaf } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Pose Estimation for Bicep Curl Analysis',
      description: 'AI-powered fitness tracker using MediaPipe Pose for real-time movement tracking and form correction.',
      icon: Activity,
      tools: ['Python', 'OpenCV', 'MediaPipe', 'NumPy', 'Matplotlib'],
      features: [
        'Real-time elbow joint angle tracking',
        'Stability detection using x, y, z coordinates',
        'Stage-based counting (up/down) for reps',
        'Performance benchmarking',
      ],
      image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80',
      github: 'https://github.com/pradyumna9195/Pose-Estimation-For-Bicep-Curl-Analysis',
      isGroupProject: false
    },
    {
      title: 'MediLink',
      description: 'Telehealth platform with multi-language support to address healthcare accessibility for rural communities.',
      icon: Stethoscope,
      tools: ['Next.js', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
      features: [
        'User-friendly interface for non-tech-savvy users',
        'Remote consultations',
        'Reliable medical information',
        'Healthcare access bridging',
      ],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
      isGroupProject: true
    },
    {
      title: 'KhetiSathi',
      description: 'Comprehensive agricultural software for disease prediction, yield management, and government scheme awareness.',
      icon: Leaf,
      tools: ['TensorFlow', 'Scikit-learn', 'MongoDB', 'Next.js', 'Express.js'],
      features: [
        'AI-based crop disease prediction',
        'Daily farming suggestions',
        'Yield predictions',
        'Community forums',
      ],
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80',
      isGroupProject: true
    },
  ];

  return (
    <section id="projects" className="section-padding gradient-bg">
      <div className="container mx-auto px-4">
        <h2 className="heading">Featured Projects</h2>
        <p className="subheading">
          A showcase of my technical expertise and problem-solving abilities through real-world applications.
        </p>

        <div className="space-y-16">
          {projects.map((project) => ( //Corrected map function
            <div key={project.title} className="card hover:scale-[1.02] transition-transform duration-300">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="h-64 md:h-auto">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gray-700 rounded-lg">
                      <project.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-black">{project.title}</h3>
                  </div>
                  <p className="text-black mb-4">{project.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-black mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside text-black space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, toolIndex) => (
                        <span
                          key={toolIndex}
                          className="px-3 py-1 bg-gray-700 text-white rounded-full text-sm"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      {!project.isGroupProject && project.github && (
                        <a
                          href={project.github}
                          className="inline-flex items-center text-blue-400 hover:text-blue-300"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-5 h-5 mr-2" />
                          View Code
                        </a>
                      )}
                      {project.isGroupProject && (
                        <span className="text-gray-400">Group Project</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
