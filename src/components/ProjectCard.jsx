import {
  Github,
  ExternalLink,
  Calendar,
  ThumbsUp,
  ThumbsDown,
  ImageOff,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";

export default function ProjectCard({ project, index }) {
  const [liked, setLiked] = useState(null);
  const [totalLikes, setTotalLikes] = useState(project.likesCount || 0);
  const [isLiking, setIsLiking] = useState(false);
  const [cooldownMsg, setCooldownMsg] = useState("");
  const [views, setViews] = useState(project.viewsCount || 0);

  const formatDate = (value) => {
    const date = new Date(value);
    if (isNaN(date)) return value;
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const incrementViews = async (source) => {
    try {
      // optimistic update
      setViews((v) => v + 1);
      await axios.post(
        `https://project-management-mdb.onrender.com/api/v1/projects/${project._id}/view`,
        // `http://localhost:3000/api/v1/projects/${project._id}/view`,
        source ? { source } : {},
        { headers: { "Content-Type": "application/json" } }
      );
    } catch (err) {
      // silently ignore to avoid blocking navigation/like
      console.error(err);
    }
  };

  const handleLike = async () => {
    try {
      if (isLiking) return;
      setIsLiking(true);
      const action = liked === true ? "dislike" : "like";
      const res = await axios.put(
        `https://project-management-mdb.onrender.com/api/v1/projects/${project._id}/like`,
        // `http://localhost:3000/api/v1/projects/${project._id}/like`,
        { action },
        { headers: { "Content-Type": "application/json" } }
      );

      setLiked(action === "like" ? true : null);
      setTotalLikes(res.data.likesCount); // updated total likes from backend
      // Count like as a view interaction as requested
      // await incrementViews("like");
    } catch (err) {
      if (err.response?.status === 429) {
        const timeoutId = setTimeout(() => setCooldownMsg(""), 10000);
        setCooldownMsg(
          <div className="absolute top-0 right-0 p-2 bg-red-500 text-white rounded-full">
            {err.response.data?.message ||
              "You can like/dislike again in a few seconds"}
          </div>
        );
        setTimeout(() => setCooldownMsg(""), 10000);
      } else {
        console.error(err);
      }
    } finally {
      setIsLiking(false);
    }
  }

  const hasImage = project.imageUrl && project.imageUrl.trim() !== "";

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
      className="relative h-full flex flex-col rounded-2xl overflow-hidden group backdrop-blur-xl bg-white/10 border border-white/10 hover:border-white/20 shadow-md transition-all duration-300"
    >
      {/* Soft glowing edge on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl transition-all duration-700" />

      {/* Project Image or Placeholder */}
      <div className="relative h-48 w-full overflow-hidden">
        {hasImage ? (
          <img
            src={project.imageUrl}
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
      <div className="relative z-10 pt-5 px-5 pb-[60px] flex flex-col flex-1 text-gray-100 bg-black/40 backdrop-blur-md rounded-b-2xl">
        {/* Title & Date */}
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-semibold text-blue-300 group-hover:text-blue-200 transition">
            {project.title}
          </h3>
          <span className="text-sm text-gray-400 flex items-center gap-1">
            <Calendar size={14} /> {formatDate(project.createdAt)}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-300 flex-1 mb-4 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Footer: Links + Like */}
        <div className="absolute left-5 right-5 bottom-[10px] flex justify-between items-center">
          <div className="flex gap-4">
            {(project.codeUrl || project.codeLink) && (
              <a
                href={project.codeUrl || project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={async (e) => {
                  e.preventDefault();
                  await incrementViews("code");
                  window.open(
                    project.codeUrl || project.codeLink,
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
                className="flex items-center gap-2 text-blue-400 hover:text-blue-200 transition "
              >
                <Github size={14} /> Code
              </a>
            )}
            {(project.liveUrl || project.liveLink) && (
              <a
                href={project.liveUrl || project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={async (e) => {
                  e.preventDefault();
                  await incrementViews("live");
                  window.open(
                    project.liveUrl || project.liveLink,
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
                className="flex items-center gap-2 text-green-400 hover:text-green-200 transition"
              >
                <ExternalLink size={14} /> Live
              </a>
            )}
          </div>

          {/* Like / Dislike Section */}
          <div className="flex items-center gap-2">
            <motion.button
              whileTap={{ scale: 1.3 }}
              onClick={handleLike}
              disabled={isLiking || !!cooldownMsg}
              className={`p-1.5 rounded-full transition ${
                liked === true
                  ? "bg-blue-600 text-white"
                  : "bg-white/10 text-gray-300 hover:bg-blue-500/20"
              } ${
                isLiking || !!cooldownMsg ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <ThumbsUp size={14} />
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
              <ThumbsDown size={14} />
            </motion.button> */}

            <span className="ml-1 text-gray-200 text-sm font-medium">
              {totalLikes}
            </span>
            <span className="ml-3 text-gray-400 text-sm">Views: {views}</span>
            {cooldownMsg && (
              <span className="ml-3 text-xs text-yellow-400">
                {cooldownMsg}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
