function Projects() {
  const projects = [
    {
      title: "projeto 1",
      description: "Descrição do projeto 1",
      image: "",
      link: "#",
      colSpan: "col-span-1",
    },
    {
      title: "projeto 2",
      description: "Descrição do projeto 2",
      image: "",
      link: "#",
      colSpan: "col-span-1 md:col-span-2",
    },

    {
      title: "projeto 3",
      description: "Descrição do projeto 3",
      image: "",
      link: "#",
      colSpan: "col-span-1",
    },

    {
      title: "projeto 4",
      description: "Descrição do projeto 4",
      image: "",
      link: "#",
      colSpan: "col-span-1",
    },
  ];
  return (
    <section className=" bg-gradient-to-tr from-black to-gray-900 text-white ">
      <div className="container mx-auto max-w-4xl p-4 py-12">
        <div className="relative p-4 text-center">
          <h2 className="relative z-50 mb-2 text-white">
            <span className="mr-2 font-headline text-3xl font-semibold">
              Projetos
            </span>
          </h2>
          <p className="relative text-sm text-gray-400">
            Alguns dos projetos pessoais e que já realizei ao longo da minha
            trajetória como programador front-end.
          </p>
          {/* <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-tl bg-blue-400/10"></div> */}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 ">
        {projects.map((project, index) => (
          <div
            className={`group relative h-52 cursor-default rounded-lg ${project.colSpan} bg-cover bg-center`}
            key={`project-${index}`}
            style={{ backgroundImage: `url(${project.image})` }}>
            <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-tl bg-blue-400/10">
              <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-lg bg-blue-600 text-white opacity-0 transition-opacity group-hover:opacity-100">
                <h4 className="font-headline text-lg font-semibold">
                  {project.title}
                </h4>
                <p className="mb-4 text-sm">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer">
                  {/*  */}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
