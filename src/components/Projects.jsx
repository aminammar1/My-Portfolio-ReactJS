{
  /* <Projects />  */
}

import { GoRepoForked } from "react-icons/go";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "MERN-RealEstate",
      description: "Real Estate website using MERN stack",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      stars: 0,
      forks: 0,
      repoUrl: "https://github.com/aminammar1/React-project-MERN",
    },
    {
      id: 2,
      title: "MERN-RealEstate",
      description: "Real Estate website using MERN stack",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      stars: 0,
      forks: 0,
      repoUrl: "https://github.com/aminammar1/React-project-MERN",
    },
    {
      id: 3,
      title: "MERN-RealEstate",
      description: "Real Estate website using MERN stack",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      stars: 0,
      forks: 0,
      repoUrl: "https://github.com/aminammar1/React-project-MERN",
    },
    {
      id: 4,
      title: "MERN-RealEstate",
      description: "Real Estate website using MERN stack",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      stars: 0,
      forks: 0,
      repoUrl: "https://github.com/aminammar1/React-project-MERN",
    },
    {
      id: 5,
      title: "MERN-RealEstate",
      description: "Real Estate website using MERN stack",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      stars: 0,
      forks: 0,
      repoUrl: "https://github.com/aminammar1/React-project-MERN",
    },
  ];

  return (
    <section className="px-10 py-10" id="projects">
      <div className="text-4xl font-bold text-center mb-10">Projects</div>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="dark:bg-zinc-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 block"
          >
            <div className="text-xl font-bold text-white mb-2">
              {project.title}
            </div>
            <div className="text-gray-400 text-sm mb-4">
              {project.description}
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-green-700 text-white-300 text-xs px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-yellow-500"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
                </svg>
                {project.stars}
              </div>
              <div className="flex items-center gap-2">
                <GoRepoForked className="w-5 h-5 text-green-500" />
                {project.forks}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
