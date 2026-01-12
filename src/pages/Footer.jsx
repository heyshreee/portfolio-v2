import React, { useEffect, useState } from "react";

export default function Footer() {
  const [visits, setVisits] = useState("Loading...");

  useEffect(() => {
    fetch("https://api.countapi.xyz/hit/heyshreee-portfolio/visits")
      .then((res) => res.json())
      .then((data) => setVisits(`${data.value} Visits`))
      .catch(() => setVisits("Visitor tracking active"));
  }, []);

  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800 relative z-10 text-center">
      <p className="text-slate-500 text-sm mb-2">
        &copy; {new Date().getFullYear()} heyshreee. Designed. Engineered.
      </p>
      <div className="flex justify-center items-center gap-2 text-xs text-slate-400">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        <span>{visits}</span>
      </div>
    </footer>
  );
}
