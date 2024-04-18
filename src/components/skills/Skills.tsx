import useSkills from "./useSkills";

function Skills() {
  const { skills } = useSkills();

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
