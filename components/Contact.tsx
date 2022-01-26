import { FunctionComponent } from "react";
import Image from "next/image";
import linkedin from "../public/assets/linkedin.svg";
import github from "../public/assets/github.svg";
import instagram from "../public/assets/instagram.svg";
import twitter from "../public/assets/twitter.svg";
import contactLight from "../public/assets/contactLight.svg";
import contactDark from "../public/assets/contactDark.svg";
import { useTheme } from "next-themes";

export const Contact: FunctionComponent = () => {
  const { theme } = useTheme();
  return (
    <div className="relative grid grid-cols-12 contactContainer bg-gradient-to-b from-light-base00 to-light-base01 dark:from-dark-base00 dark:to-dark-base01">
      <h1 className="z-10 col-start-8 mt-14 linux col-span-full">$ ping</h1>
      <h1 className="z-10 col-start-2 col-span-full mainHeading">Contact</h1>
      <div className="col-start-3 col-span-full">
        <h2 className="mb-2 text-4xl font-bold text-light-base0D dark:text-dark-base0D">
          Gautam J
        </h2>
        <a
          href="mailto:gautam.jayapal@gmail.com"
          className="text-2xl underline text-light-base0C dark:text-dark-base0C"
          rel="noopener noreferrer"
          target="_blank"
        >
          gautam.jayapal@gmail.com
        </a>
      </div>

      <div className="absolute right-0 col-start-1 col-span-full top-1/4">
        <Image
          src={theme === "light" ? contactLight : contactDark}
          alt="Contact Graphic"
          width={400}
          height={400}
        />
      </div>

      <div className="z-10 col-span-4 col-start-5">
        <div className="flex items-center justify-center gap-10 p-4 bg-gradient-to-b from-light-base00 to-light-base01 dark:from-dark-base01 dark:to-dark-base00 rounded-3xl drop-shadow-2xl">
          <a
            href="https://www.linkedin.com/in/gj-07"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image src={linkedin} alt="LinkedIn" />
          </a>
          <a
            href="https://www.github.com/gautam-j"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image src={github} alt="GitHub" />
          </a>
          <a
            href="https://www.twitter.com/gautamj02"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image src={twitter} alt="Twitter" />
          </a>
          <a
            href="https://www.instagram.com/gautam.j"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image src={instagram} alt="Instagram" />
          </a>
        </div>
      </div>

      <div className="flex items-center justify-center col-start-2 col-end-12">
        <span className="text-light-base09 dark:text-dark-base09">
          Made using Next.js, TypeScript, MongoDB, TailwindCSS, AWS, and Framer
          Motion |{" "}
          <a
            className="underline"
            href="https://www.github.com/gautam-j/portfolio"
            rel="noopener noreferrer"
            target="_blank"
          >
            Source Code
          </a>
        </span>
      </div>
    </div>
  );
};

export default Contact;
