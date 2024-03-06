import { FaCss3Alt, FaHtml5 } from "react-icons/fa";

interface SkillsProps {
  name: string;
  icon: JSX.Element;
}

function Skills() {
  const skills: SkillsProps[] = [
    {
      name: "HTML",
      icon: <FaHtml5 className="h-12 w-12" />,
    },
    {
      name: "CSS",
      icon: <FaCss3Alt className="h-12 w-12" />,
    },
    {
      name: "JavaScript",
      icon: <FaCss3Alt className="h-12 w-12" />,
    },
    {
      name: "TypeScript",
      icon: <FaCss3Alt className="h-12 w-12" />,
    },
    {
      name: "React.js",
      icon: <FaCss3Alt className="h-12 w-12" />,
    },
    {
      name: "Node.js",
      icon: <FaCss3Alt className="h-12 w-12" />,
    },
    {
      name: "Git",
      icon: <FaCss3Alt className="h-12 w-12" />,
    },
    {
      name: "GitHub",
      icon: <FaCss3Alt className="h-12 w-12" />,
    },
    {
      name: "TailwindCSS",
      icon: <FaCss3Alt className="h-12 w-12" />,
    },
    {
      name: "PostgreSQL",
      icon: <FaCss3Alt className="h-12 w-12" />,
    },
    {
      name: "PowerApps",
      icon: <FaCss3Alt className="h-12 w-12" />,
    },
    {
      name: "Power Automate",
      icon: <FaCss3Alt className="h-12 w-12" />,
    },
    {
      name: "SharePoint",
      icon: <FaCss3Alt className="h-12 w-12" />,
    },
  ];

  return (
    <>
      <section className=" bg-gray-300  p-5">
        <div className="container mx-auto max-w-4xl p-4 py-12">
          <div className="relative mb-4 p-4 text-center">
            <h2 className="relative z-50 mb-2 font-bold">
              <span className="font-handwriting text-4xl text-blue-800">
                Habilidades
              </span>
            </h2>
            <p className="relative text-sm text-gray-700">
              Front-end Developer | React.js | JavaScript | TypeScript | Node.js
              | Power Platform
            </p>
            <div className="absolute left-1/2 top-3 z-0 h-10 rounded-lg bg-blue-400/10"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex justify-center">
          <div className="grid grid-cols-2 gap-5 font-semibold md:grid-cols-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-row items-center gap-2 md:flex-col md:items-start">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white p-2">
                  <img
                    // src={skill.icon}
                    alt={skill.name}
                    className="h-10 w-10 rounded"
                  />
                </div>
                <div className="w-full flex-grow">
                  <h4 className="font-headline text-gray-900">{skill.name}</h4>
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
