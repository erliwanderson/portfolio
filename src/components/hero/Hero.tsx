import { HiDownload } from "react-icons/hi";
import img from "../../assets/img.jpg";

import pdf from "../../assets/pdf/Curriculo-Wanderson.pdf";

function Hero() {
  return (
    <section className=" pt-10">
      <div className="container mx-auto max-w-7xl p-3 py-6 flex flex-col md:flex-row">
        <div className="basis-1/2">
          <h1 className="mb-6  ">
            <span className="font-handwriting block text-3xl ">
              Olá, me chamo
            </span>
            <span className="font-headline text-5xl font-semibold text-[#eaeaea]">
              Wanderson
            </span>
            <span className="font-headline text-5xl font-light text-[#bbed2f] pl-3">
              Erli
            </span>
          </h1>
          <h2 className="font-semibold flex items-center gap-2 ">
            <div className="h-1 w-12 rounded-full  bg-[#bbed2f]  "></div>
            <p className="text-xl"> Desenvolvedor Front-end</p>
          </h2>
          <p className="my-4  text-gray-400 text-lg  md:text-left">
            Sou comunicativo, analítico e apaixonado por tecnologia. Após o
            serviço militar, decidi me especializar em desenvolvimento de
            software. Ao longo dessa jornada, adquiri habilidades em HTML5,
            CSS3, JavaScript, Git, Sass, Bootstrap, React, Node, TypeScript,
            React Native e Firebase. Um desenvolvedor audacioso, em busca de uma
            oportunidade para gerar valor em uma equipe tech.
          </p>

          <div className="flex items-center  justify-center md:justify-start gap-2">
            <a
              href="../#contact "
              className="underline font-bold text-[#eaeaea]">
              Fale Comigo
            </a>
            <span className="italic text-gray-500">ou</span>
            <a
              target="_blank"
              href={pdf}
              download={"Curriculo-Wanderson.pdf"}
              className=" flex items-center gap-2 bg-[#bbed2f]  hover:bg-[#eaeaea] px-3 py-2 rounded-lg text-black ">
              <HiDownload />
              Baixe meu CV
            </a>
          </div>
        </div>

        <div className="basis-1/2 pt-10 pr-2 ">
          <img
            style={{ boxShadow: " 0px 0px 30px #bbed2f" }}
            className="hidden md:block w-80 h-80 rounded-full ml-auto "
            src={img}
            alt="Wanderson Erli"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
