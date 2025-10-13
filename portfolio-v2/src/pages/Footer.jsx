import React from "react";

export default function Footer() {
  return (
    <footer className="py-8 bg-transparent text-center">
      <p className="text-gray-400">
        &copy; {new Date().getFullYear()} Sriram. All rights reserved.
      </p>
    </footer>
  );
}
