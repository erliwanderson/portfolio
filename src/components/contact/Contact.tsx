import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaSpinner } from "react-icons/fa";
import { HiCheckCircle } from "react-icons/hi";
import { FiMapPin } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { IoLogoWhatsapp } from "react-icons/io";

interface ContactProps {
  name: string;
  description: string;
  link: string;
  icon?: JSX.Element;
}

function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_apeo6uk",
        "template_t6b1ita",
        form.current,
        "4VQPkfeR2UWiYVqpc"
      )
      .then(
        () => {
          setSuccess(true);
          setLoading(false);
        },
        (error) => {
          setError(true);
          setLoading(false);
          console.log(error);
        }
      );
  };
  const contacts: ContactProps[] = [
    {
      name: "WhatsApp",
      description: "+55 21 98117-7091",
      link: "https://wa.me/5551999999999",
      icon: <IoLogoWhatsapp className="h-7 w-7" />,
    },
    {
      name: "Email",
      description: "wandersonerli.dev@gmail.com",
      link: "mailto: wandersonerli.dev@gmail.com?subject=Ola...",
      icon: <TfiEmail className="h-7 w-7" />,
    },
    {
      name: "Rio de Janeiro",
      description: "Nova Iguaçu",
      link: "https://goo.gl/maps/2SxHn7hH7Yq",
      icon: <FiMapPin className="h-7 w-7" />,
    },
  ];

  return (
    <>
      <section className="bg-blue-700 text-white" id="contact">
        <div className="container mx-auto max-w-4xl p-4 py-8">
          <div className="mb-6">
            <h2 className="z-50 mb-2">
              <span className="mr-2 font-headline text-3xl font-semibold">
                Fale
              </span>
              <span className="font-handwriting text-4xl">Comigo</span>
            </h2>
            <p className="text-sm">
              Entre em contato por formulário ou WhatsApp, com certeza irei te
              ajudar.
            </p>
          </div>
          <div className="flex flex-col gap-6 md:flex-row">
            <div className="basis-2/3">
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="mb-2 block ps-4 font-headline font-semibold">
                    Mensagem:
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className="h-36 w-full rounded-lg border border-white bg-transparent p-2 outline-none"
                    required
                  />
                </div>

                <div className="mb-6 flex flex-col gap-4 md:flex-row">
                  <div className="flex-grow">
                    <label
                      htmlFor="fullName"
                      className="mb-2 block ps-4 font-headline font-semibold">
                      Seu nome:
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      className="w-full rounded-lg border border-white bg-transparent p-2 outline-none"
                      required
                    />
                  </div>
                  <div className="flex-grow">
                    <label
                      htmlFor="email"
                      className=" mb-2 block ps-4 font-headline font-semibold">
                      Seu email:
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="w-full rounded-lg border border-white bg-transparent p-2  outline-none"
                      required
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="button flex items-center gap-2 text-blue-700"
                    disabled={loading}>
                    {loading && <FaSpinner className="h4- w-4 animate-spin" />}
                    {success && <HiCheckCircle className="h4- w-4" />}
                    Enviar mensagem
                  </button>
                  {error && (
                    <p className="mt-2">
                      Ocorreu um erro ao enviar a mensagem, tente novamente.
                    </p>
                  )}
                </div>
              </form>
            </div>
            <div className="basis-1/3">
              {contacts.map((contact, index) => (
                <div
                  key={index}
                  className="mb-4 flex items-center gap-4 rounded-lg border border-dashed border-gray-400 p-4">
                  {contact.icon}
                  <div>
                    <p className="font-headline font-semibold">
                      {contact.name}
                    </p>
                    <a
                      href={contact.link}
                      target="_blank"
                      className="text-gray-300 underline underline-offset-2">
                      {contact.description}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
