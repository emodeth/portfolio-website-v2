import { IoIosDocument, IoLogoGithub, IoMdMail } from "react-icons/io";

const AboutMe = () => {
  return (
    <section className="flex max-w-full flex-col font-sans">
      <header className="flex flex-col">
        <h1 className="text-wrap-balance text-[16px] font-semibold leading-[22px] tracking-tight text-foreground">
          Emirhan Keskin
        </h1>
        <p className="text-[16px] font-normal leading-[22px] text-muted-foreground">
          Frontend Developer
        </p>
      </header>

      <div className="mt-5 space-y-2 text-pretty text-sm font-normal leading-6 text-muted-foreground">
        <p>
          I&apos;m a senior Software Engineering student and a Frontend
          Developer based in Istanbul, Türkiye. I am passionate about
          transforming concepts into functional products. My focus is on writing
          clean, maintainable code.
        </p>
      </div>

      <p className="mt-4 text-pretty text-sm font-normal leading-6 text-muted-foreground">
        You can reach me via{" "}
        <a
          className="inline-flex items-baseline gap-1 font-semibold text-foreground underline decoration-foreground/40 underline-offset-4 transition-colors hover:decoration-foreground focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          href="mailto:emirhankeskindev@gmail.com"
        >
          <IoMdMail
            className="relative top-[2px] shrink-0"
            aria-hidden="true"
          />
          email
        </a>{" "}
        or see my code on{" "}
        <a
          className="inline-flex items-baseline gap-1 font-semibold text-foreground underline decoration-foreground/40 underline-offset-4 transition-colors hover:decoration-foreground focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          href="https://github.com/emodeth"
          target="_blank"
          rel="noreferrer"
        >
          <IoLogoGithub
            className="relative top-[2px] shrink-0"
            aria-hidden="true"
          />
          GitHub.
        </a>{" "}
        Also you can view my{" "}
        <a
          className="inline-flex items-baseline gap-1 font-semibold text-foreground underline decoration-foreground/40 underline-offset-4 transition-colors hover:decoration-foreground focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <IoIosDocument
            className="relative top-[2px] shrink-0"
            aria-hidden="true"
          />
          resume
        </a>
        {"  "}here.
      </p>
    </section>
  );
};

export default AboutMe;
