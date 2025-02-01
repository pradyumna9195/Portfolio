import React from 'react';
import { Code2, Globe, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      skills: ['C++', 'Python', 'JavaScript', 'SQL'],
    },
    {
      title: 'Web Development',
      icon: Globe,
      skills: ['HTML', 'CSS', 'React.js', 'Next.js', 'MongoDB', 'PostgreSQL', 'Tailwind CSS', 'PrismaORM', 'Git/GitHub', 'Express.js', 'Node.js'],
    },
    {
      title: 'Data Science & ML',
      icon: Brain,
      skills: ['Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn', 'TensorFlow', 'OpenCV', 'MediaPipe'],
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="heading">Skills & Expertise</h2>
        <p className="subheading">
          A comprehensive toolkit that enables me to tackle complex problems and deliver innovative solutions.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="card p-6 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gray-200 rounded-lg">
                  <category.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-bold text-black">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-100 text-black rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
