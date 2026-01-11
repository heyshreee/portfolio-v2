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
    <section id="projects" className="py-24 background-dark dark:background-dark/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Explore some of my recent work in web development and security analysis.
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="h-10 w-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visibleProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
            {hasMore && (
              <div className="flex justify-center mt-12">
                <button
                  onClick={handleLoadMore}
                  className="px-8 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-primary/25"
                >
                  Load More
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
