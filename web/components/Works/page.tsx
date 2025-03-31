"use client"
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define project interface
interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  projectUrl: string;
  githubUrl?: string;
  featured?: boolean;
}

// Sample project data - replace with your actual projects
const projectsData: Project[] = [
  {
    id: 'project-1',
    title: 'Gym Booking',
    description: 'A comprehensive website for booking gyms, ',
    technologies: ['NextJs', 'TypeScript', 'Tailwind CSS'],
    imageUrl: '/projectimg/gym.png',
    projectUrl: 'https://gymbooking.vercel.app/',
    githubUrl: 'https://github.com/yourusername/project1',
    featured: true,
  }
];

interface ProjectShowcaseProps {
  limit?: number;
  showFilters?: boolean;
}

const Works: React.FC<ProjectShowcaseProps> = ({
  limit,
  showFilters = true,
}) => {
  const [visibleProjects, setVisibleProjects] = useState<Project[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [animatedItems, setAnimatedItems] = useState<Set<string>>(new Set());
  const projectRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  // Initialize visible projects
  useEffect(() => {
    const projects = limit ? projectsData.slice(0, limit) : projectsData;
    setVisibleProjects(projects);
  }, [limit]);

  // Handle filtering
  useEffect(() => {
    if (filter === 'all') {
      setVisibleProjects(limit ? projectsData.slice(0, limit) : projectsData);
    } else if (filter === 'featured') {
      const filtered = projectsData.filter(project => project.featured);
      setVisibleProjects(limit ? filtered.slice(0, limit) : filtered);
    } else {
      const filtered = projectsData.filter(project => 
        project.technologies.some(tech => 
          tech.toLowerCase().includes(filter.toLowerCase())
        )
      );
      setVisibleProjects(limit ? filtered.slice(0, limit) : filtered);
    }
  }, [filter, limit]);

  // Set up intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setAnimatedItems(prev => new Set(prev).add(entry.target.id));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all project elements
    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [visibleProjects]);

  // Get all unique technologies for filtering
  const allTechnologies = Array.from(
    new Set(
      projectsData.flatMap(project => project.technologies)
    )
  ).sort();

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          My <span className="text-blue-400">Projects</span>
        </h2>
        
        <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-12">
          Here&lsquo;s a showcase of my professional work and side projects that demonstrate my 
          skills and passion for building digital experiences.
        </p>

        {showFilters && (
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  filter === 'all'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                All Projects
              </button>
              <button
                onClick={() => setFilter('featured')}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  filter === 'featured'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                Featured
              </button>
              {allTechnologies.map((tech) => (
                <button
                  key={tech}
                  onClick={() => setFilter(tech)}
                  className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                    filter === tech
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              id={project.id}
              ref={el => {
                if (el) projectRefs.current.set(project.id, el);
              }}
              className={`bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-700 ease-out ${
                animatedItems.has(project.id)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              } hover:shadow-blue-500/20 hover:shadow-xl hover:-translate-y-2`}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Featured
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={`${project.id}-${tech}`}
                      className="inline-block px-2 py-1 text-xs font-medium bg-gray-700 text-gray-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between space-x-4">
                  <Link
                    href={project.projectUrl}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-center transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </Link>
                  
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {visibleProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-400">No projects found with the selected filter.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Works;