// pages/skills.js
"use client"
import { useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';


// Import your skill icons or use an icon library like react-icons
const skillsData = [
  { name: 'HTML5', icon: '/icons/Html5.png', color: 'bg-orange-500' },
  { name: 'CSS3', icon: '/icons/css3.png', color: 'bg-blue-500' },
  { name: 'JavaScript', icon: '/icons/javascript.png', color: 'bg-yellow-400' },
  { name: 'TypeScript', icon: '/icons/typescript.png', color: 'bg-blue-600' },
  { name: 'React', icon: '/icons/react.png', color: 'bg-blue-400' },
  { name: 'Next.js', icon: '/icons/nextjs.png', color: 'bg-black' },
  { name: 'Tailwind CSS', icon: '/icons/tailwind.png', color: 'bg-cyan-500' },
  { name: 'Node.js', icon: '/icons/nodejs.png', color: 'bg-green-600' },
  { name: 'MongoDB', icon: '/icons/mongodb.png', color: 'bg-green-500' },
];

export default function Skills() {
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      skillCards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="min-h-screen text-white">
      <Head>
        <title>Skills & Technologies | Your Name</title>
        <meta name="description" content="My technical skills and technologies" />
      </Head>

      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Skills & Technologies
        </h1>
        
        <div ref={skillsRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {skillsData.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-card opacity-0 translate-y-10 transition-all duration-700 ease-out"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-gray-800 rounded-lg p-6 h-full flex flex-col items-center justify-center hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 flex items-center justify-center mb-4">
                  <Image src={skill.icon} alt={skill.name}  className="w-12 h-12" width={100} height={100}/>
                </div>
                <h3 className="text-lg font-medium text-center">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}