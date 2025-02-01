import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const About = () => {
  const education = [
    {
      school: 'Pune Institute of Computer Technology',
      degree: 'BE Computer Engineering',
      year: '2022–2026',
      grade: 'SGPA: 9.73',
      icon: GraduationCap,
    },
    {
      school: 'JSPMs Prodigy Public School',
      degree: 'Class XII',
      year: '2020–2022',
      grade: '91%',
      icon: BookOpen,
    },
    {
      school: 'The Lexicon International School',
      degree: 'Class X',
      year: '2006–2020',
      grade: '96%',
      icon: Award,
    },
  ];

  const certifications = [
    {
      name: 'Machine Learning Specialization',
      issuer: 'Stanford University, Andrew Ng',
    },
    {
      name: 'C++ Programming',
      issuer: 'PICT',
    },
    {
      name: 'Data Science & ML',
      issuer: 'ZTM-Udemy',
    },
  ];

  return (
    <section id="about" className="section-padding gradient-bg">
      <div className="container mx-auto px-4">
        <h2 className="heading">About Me</h2>
        <p className="subheading">
          With a strong foundation in computer engineering, I strive to bridge the gap between technology and real-world applications, focusing on areas such as fitness tracking, healthcare accessibility, and agriculture optimization.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-navy-900 mb-6">Education</h3>
            {education.map((item, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-navy-50 rounded-lg">
                    <item.icon className="w-6 h-6 text-navy-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900">{item.school}</h4>
                    <p className="text-gray-600">{item.degree}</p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                      <span>{item.year}</span>
                      <span className="font-medium text-navy-900">{item.grade}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-navy-900 mb-6">Certifications</h3>
            {certifications.map((cert, index) => (
              <div key={index} className="card p-6">
                <h4 className="font-semibold text-navy-900">{cert.name}</h4>
                <p className="text-gray-600">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
