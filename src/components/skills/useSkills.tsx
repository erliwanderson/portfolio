import {
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMicrosoftsharepoint,
  SiPowerautomate,
  SiPowerapps,
  SiTypescript,
} from "react-icons/si";

interface SkillsProps {
  name: string;
  icon: JSX.Element;
}

export default function useSkills() {
  const skills: SkillsProps[] = [
    {
      name: "HTML",
      icon: <FaHtml5 className="h-12 w-12 text-[#bbed2f]" />,
    },
    {
      name: "CSS",
      icon: <FaCss3Alt className="h-12 w-12 text-[#bbed2f]" />,
    },
    {
      name: "JavaScript",
      icon: <FaJs className="h-12 w-12 text-[#bbed2f]" />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="h-12 w-12 text-[#bbed2f]" />,
    },
    {
      name: "React.js",
      icon: <FaReact className="h-12 w-12 text-[#bbed2f]" />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="h-12 w-12 text-[#bbed2f]" />,
    },
    {
      name: "Git",
      icon: <FaGitAlt className="h-12 w-12 text-[#bbed2f]" />,
    },
    {
      name: "GitHub",
      icon: <FaGithub className="h-12 w-12 text-[#bbed2f]" />,
    },
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss className="h-12 w-12 text-[#bbed2f]" />,
    },
    {
      name: "PowerApps",
      icon: <SiPowerapps className="h-12 w-12 text-[#bbed2f]" />,
    },
    {
      name: "Power Automate",
      icon: <SiPowerautomate className="h-12 w-12 text-[#bbed2f]" />,
    },
    {
      name: "SharePoint",
      icon: <SiMicrosoftsharepoint className="h-12 w-12 text-[#bbed2f]" />,
    },
  ];
  return { skills };
}
