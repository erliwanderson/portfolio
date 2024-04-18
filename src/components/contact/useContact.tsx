import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin, FaGithub } from "react-icons/fa";

interface ContactProps {
  name: string;
  description: string;
  link: string;
  icon?: JSX.Element;
}

export default function useContact() {
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
      link: "https://wa.me/5521981177091",
      icon: <IoLogoWhatsapp className="h-7 w-7 text-[#bbed2f]" />,
    },

    {
      name: "LinkedIn",
      description: "in/wandersonerli",
      link: "https://www.linkedin.com/in/wandersonerli/",
      icon: <FaLinkedin className="h-7 w-7 text-[#bbed2f]" />,
    },
    {
      name: "GitHub",
      description: "/erliwanderson",
      link: "https://www.github.com/erliwanderson/",
      icon: <FaGithub className="h-7 w-7 text-[#bbed2f]" />,
    },
  ];
  return {
    form,
    sendEmail,
    loading,
    error,
    contacts,
    success,
  };
}
