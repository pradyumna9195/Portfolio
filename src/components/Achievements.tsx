import React from 'react';
import { Trophy, Medal } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'Finalist in Medecro.ai Hackathon',
      description: 'Developed a healthcare accessibility solution under tight deadlines, gaining hands-on experience in teamwork and project-based learning.',
      icon: Trophy,
    },
    {
      title: 'School Topper - Class 10th Board Examination',
      description: 'Achieved the highest academic performance in the school with 96% marks.',
      icon: Medal,
    },
  ];

  return (
    <section id="achievements" className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="heading">Achievements</h2>
        <p className="subheading">
          Recognition and milestones that showcase my dedication to excellence.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="card p-8 hover:scale-105 transition-transform duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-navy-50 rounded-lg">
                  <achievement.icon className="w-6 h-6 text-navy-900" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
