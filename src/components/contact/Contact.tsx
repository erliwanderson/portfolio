import { FaSpinner } from "react-icons/fa";
import { HiCheckCircle } from "react-icons/hi";

import useContact from "./useContact";

function Contact() {
  const { contacts, error, loading, sendEmail, form, success } = useContact();

  return (
    <>
      <section className="" id="contact">
        <div className="container mx-auto max-w-6xl p-4 py-8">
          <div className="mb-6">
            <h2 className="z-50 mb-2 p-4">
              <span className="mr-2 font-headline text-3xl font-semibold">
                Fale
              </span>
              <span className="font-handwriting text-4xl  text-[#bbed2f]">
                Comigo
              </span>
            </h2>
          </div>
          <div className="flex flex-col gap-6 md:flex-row p-4">
            <div className="basis-2/3">
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="mb-2 block ps-4 font-headline font-semibold ">
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
                      className="mb-2 block ps-4 font-headline font-semibold ">
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
                    className="button flex items-center   bg-[#bbed2f] gap-2 px-3 py-2 rounded-lg text-black hover:bg-[#eaeaea]"
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
            <div className="basis-1/3 ">
              {contacts.map((contact, index) => (
                <div
                  key={index}
                  className="mb-4 flex items-center gap-4 rounded-lg border border-dashed border-gray-400 p-4">
                  {contact.icon}
                  <div>
                    <p className="font-headline font-semibold ">
                      {contact.name}
                    </p>
                    <a
                      href={contact.link}
                      target="_blank"
                      className=" underline underline-offset-2">
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
