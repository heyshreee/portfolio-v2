import ProjectCard from "./ProjectCard";
import { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://portfolio-data-manger.onrender.com/api/v1/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);
  return (
    <section id="projects" className="py-16 px-6 bg-transparent">
      <h2 className="text-3xl font-bold text-center text-blue-400 mb-10">
        Projects
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
