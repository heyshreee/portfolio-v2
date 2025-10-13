import { Github, ExternalLink, Calendar, ThumbsUp, ThumbsDown, ImageOff } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";

export default function ProjectCard({ project, index }) {
  const [liked, setLiked] = useState(null);
  const [totalLikes, setTotalLikes] = useState(project.likes || 0);

  const handleLike = async () => {
    try {
      const action = liked === true ? "unlike" : "like";
      const res = await axios.patch(`https://portfolio-data-manger.onrender.com/api/v1/projects/${project.id}/like`, { action });

      setLiked(liked === true ? null : true);
      setTotalLikes(res.data.likes); // updated total likes from backend
    } catch (err) {
      console.error(err);
    }
  };

  // const handleDislike = async () => {
  //   try {
  //     if (liked === true) await handleLike(); // remove like
  //     setLiked(false);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  const hasImage = project.imageLink && project.imageLink.trim() !== "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{
        scale: 1.04,
        boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
      }}
      className="relative rounded-2xl overflow-hidden group backdrop-blur-xl bg-white/10 border border-white/10 hover:border-white/20 shadow-md transition-all duration-300"
    >
      {/* Soft glowing edge on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl transition-all duration-700" />

      {/* Project Image or Placeholder */}
      <div className="relative h-48 w-full overflow-hidden">
        {hasImage ? (
          <img
            src={project.imageLink}
            alt={project.title}
            className="object-cover h-full w-full rounded-t-2xl group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-full bg-gray-800/60 text-gray-400 backdrop-blur-sm">
            <ImageOff size={40} className="mb-2 opacity-70" />
            <span className="text-sm">No Image Available</span>
          </div>
        )}
      </div>

      {/* Glass Content Area */}
      <div className="relative z-10 p-5 flex flex-col flex-1 text-gray-100 bg-black/40 backdrop-blur-md rounded-b-2xl">
        {/* Title & Date */}
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-semibold text-blue-300 group-hover:text-blue-200 transition">
            {project.title}
          </h3>
          <span className="text-sm text-gray-400 flex items-center gap-1">
            <Calendar size={14} /> {project.createdAt}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-300 flex-1 mb-4 text-sm leading-relaxed">
          {project.desc}
        </p>

        {/* Footer: Links + Like */}
        <div className="mt-auto flex justify-between items-center">
          <div className="flex gap-4">
            {project.codeLink && (
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-400 hover:text-blue-200 transition"
              >
                <Github size={18} /> Code
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-400 hover:text-green-200 transition"
              >
                <ExternalLink size={18} /> Live
              </a>
            )}
          </div>

          {/* Like / Dislike Section */}
          <div className="flex items-center gap-2">
            <motion.button
              whileTap={{ scale: 1.3 }}
              onClick={handleLike}
              className={`p-1.5 rounded-full transition ${
                liked === true
                  ? "bg-blue-600 text-white"
                  : "bg-white/10 text-gray-300 hover:bg-blue-500/20"
              }`}
            >
              <ThumbsUp size={18} />
            </motion.button>

            {/* <motion.button
              whileTap={{ scale: 1.3 }}
              onClick={handleDislike}
              className={`p-1.5 rounded-full transition ${
                liked === false
                  ? "bg-red-600 text-white"
                  : "bg-white/10 text-gray-300 hover:bg-red-500/20"
              }`}
            >
              <ThumbsDown size={18} />
            </motion.button> */}

            <span className="ml-1 text-gray-200 text-sm font-medium">{totalLikes}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
