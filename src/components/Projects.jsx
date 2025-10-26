import ProjectCard from "./ProjectCard";
import { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    fetch("https://project-management-mdb.onrender.com/api/v1/projects")
    // fetch("http://localhost:3000/api/v1/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data.data))
      .catch((err) => console.error("Error fetching projects:", err))
      .finally(() => setIsLoading(false));
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleProjects.length < projects.length;
  return (
    <section id="projects" className="py-16 px-6 bg-transparent">
      <h2 className="text-3xl font-bold text-center text-blue-400 mb-10">
        Projects
      </h2>

      {isLoading ? (
        <div className="flex justify-center items-center py-20">
          <div className="h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {visibleProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
          {hasMore && (
            <div className="flex justify-center mt-10">
              <button
                onClick={handleLoadMore}
                className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Load More
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
