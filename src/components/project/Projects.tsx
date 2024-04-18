import {
  useGitHubAutomatedRepos,
  ProjectIcons,
  StackIcons,
} from "github-automated-repos";

import { Carrosel } from "../carrosel/Carrosel";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import useProject from "./useProject";

function Projects() {
  const { settings } = useProject();
  
  const data = useGitHubAutomatedRepos("erliwanderson", "deploy");

  return (
    <section className="pb-8">
      <div className="container max-w-7xl mx-auto p-4">
        <div className="relative p-4 text-center">
          <h2 className="relative font-headline  z-50 pb-8 font-bold text-4xl">
            Meus{" "}
            <span className="font-handwriting  text-[#bbed2f]">Projetos</span>
          </h2>
        </div>
      </div>

      <div className="max-w-7xl mx-auto slider-container px-10 pt-3 ">
        <Carrosel {...settings}>
          {data.map((item) => {
            return (
              <div className="p-4 sm:w-80 md:w-96 lg:w-80 xl:w-96   shadow-lg shadow-[#bbed2f]  transition duration-300 ease-in-out hover:-translate-y-1">
                <div key={item.id} className="flex justify-center pt-5">
                  {item.topics.map((icon) => {
                    return (
                      <ProjectIcons
                        key={icon}
                        className="h-20 w-20"
                        itemTopics={icon}
                      />
                    );
                  })}
                </div>
                <div className="flex flex-col items-center">
                  <h4 className="font-headline text-lg font-semibold ">
                    {item.name}
                  </h4>
                  <p className="w-full mx-auto p-4">{item.description}</p>
                </div>

                <div className="flex gap-4  py-5 justify-center  ">
                  {item.topics.map((icon, index) => {
                    return (
                      <div key={index} className="flex justify-center">
                        <StackIcons key={icon} itemTopics={icon} />
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-between px-5 mt-auto">
                  <a
                    href={item.homepage}
                    className="shadow shadow-[#bbed2f]  px-2 py-2 rounded-lg text-black "
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaExternalLinkAlt className="h-6 w-6" color="#bbed2f" />
                  </a>

                  <a
                    href={item.html_url}
                    className=" shadow shadow-[#bbed2f]  px-2 py-2 rounded-lg text-black "
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaGithub className="h-6 w-6" color="#bbed2f" />
                  </a>
                </div>
              </div>
            );
          })}
        </Carrosel>
      </div>
    </section>
  );
}

export default Projects;
