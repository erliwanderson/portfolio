import { HiComputerDesktop } from "react-icons/hi2";
function Services() {
  const services = [
    {
      title: "Frontend",
      description:
        "Desenvolvimento de sistemas web estáticos e dinâmicos com HTML5, CSS3, TailwindCSS, JavaScript, TypeScript, React",
      icon: <HiComputerDesktop className="h-12 w-12" />,
    },
    {
      title: "Backend",
      description:
        "Desenvolvimento de sistemas e APIs REST com Node.js, Express, PostgreSQL e MongoDB",
      icon: <HiComputerDesktop className="h-12 w-12" />,
    },
    {
      title: "Plataformas",
      description:
        "Sistemas Low-code com  PowerApps, Power Automate, e SharePoint",
      icon: <HiComputerDesktop className="h-12 w-12" />,
    },
  ];

  return (
    <section className="container mx-auto my-12 max-w-4xl p-4">
      <div className="p-4 text-center">
        <p className="text-sm font-semibold uppercase text-blue-600">
          O que eu faço de melhor
        </p>
        <h2 className="mb-2 font-bold text-blue-900">
          <span className="mr-2 font-headline text-3xl">Meus</span>
          <span className="font-handwriting text-4xl">Serviços</span>
        </h2>

      
      </div>

      <div className="mt-6 flex flex-col gap-2 md:flex-row justify-center ">
        {services.map((service, index) => (
          <div
            className="basis-1/3 rounded-lg bg-gradient-to-tr from-black to-blue-800 p-4 text-white cursor-pointer transition-shadow hover:shadow-2xl"
            key={index}>
            <div className="mb-2 flex items-center justify-center">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold flex items-center justify-center">
              {service.title}
            </h3>
            <p className="text-sm text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
