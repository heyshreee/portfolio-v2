import { FaReact, FaNodeJs, FaCss3Alt, FaShieldAlt, FaGitAlt, FaLinux } from "react-icons/fa";
import Card from "../components/Card";

export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React.js", level: 85, icon: FaReact },
        { name: "CSS / Tailwind", level: 90, icon: FaCss3Alt },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 75, icon: FaNodeJs },
      ],
    },
    {
      category: "Cyber Security",
      skills: [
        { name: "Cyber Security", level: 80, icon: FaShieldAlt },
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", level: 85, icon: FaGitAlt },
        { name: "Linux", level: 70, icon: FaLinux },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-16 px-6 bg-gradient-to-b "
    >
      <h2 className="text-4xl font-bold text-blue-400 text-center mb-12">
        Skills
      </h2>

      {skillCategories.map((cat, idx) => (
        <div key={idx} className="mb-12">
          <h3 className="text-2xl font-semibold text-blue-300 mb-6 text-center">
            {cat.category}
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {cat.skills.map((skill, index) => (
              <Card key={index} skill={skill} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
