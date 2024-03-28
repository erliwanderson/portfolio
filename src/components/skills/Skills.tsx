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

function Skills() {
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

  return (
    <>
      <section className="py-10">
        <div className="container max-w-7xl mx-auto  p-4">
          <div className="relative mb-4 p-4 text-center">
            <h2 className="relative z-50 mb-2 font-bold">
              <span className="font-handwriting text-4xl text-[#eaeaea]">
                Habilidades
              </span>
            </h2>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex justify-center slider-container">
          <div className=" gap-10  grid grid-cols-2 md:grid-cols-6 font-semibold px-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-row gap-2 md:flex-col items-center ">
                <div>{skill.icon}</div>
                <div>
                  <h4 className="font-headline ">{skill.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
