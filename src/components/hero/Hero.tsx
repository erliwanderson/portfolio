import { HiDownload } from "react-icons/hi";
import img from "../../assets/img.jpg";
function Hero() {
  return (
    <section className="bg-gradient-to-tr pl-3 from-black to-blue-900 text-white ">
      <div className="container mx-auto max-w-5xl p-2 py-6 flex flex-col md:flex-row">
        <div className="basis-1/2">
          <h1 className="mb-6 text-center md:text-left ">
            <span className="font-handwriting block text-3xl text-center md:text-left">
              Olá, me chamo
            </span>
            <span className="font-headline text-5xl font-semibold">
              Wanderson
            </span>
            <span className="font-headline text-5xl font-light text-blue-400 pl-3">
              Erli
            </span>
          </h1>
          <h2 className="font-semibold flex items-center gap-2 justify-center md:justify-start">
            <div className="h-1 w-12 rounded-full bg-blue-800  "></div>
            Desenvolvedor React.js Front-end
          </h2>
          <p className="my-4  text-gray-400 text-center md:text-left">
            Sou apaixonado por tecnologia e inovação. Gosto de abraçar novos
            desafios, trabalhar em equipe e aprender novas habilidades.
          </p>

          <div className="flex items-center pb-6 justify-center md:justify-start gap-2">
            <a href="#" className="underline font-bold text-white">
              Fale Comigo
            </a>
            <span className="italic text-gray-500">ou</span>
            <a
              href="#"
              className=" flex items-center gap-2 button text-gray-500 hover:text-gray-900">
              <HiDownload />
              Baixe meu CV
            </a>
          </div>
        </div>

        <div className="basis-1/2 ">
          <img
            className="hidden md:block w-64 h-64 mx-auto rounded-full shadow-2xl"
            src={img}
            alt="Wanderson Erli"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
