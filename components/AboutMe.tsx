import { IoIosDocument, IoLogoGithub, IoMdMail } from "react-icons/io";
import type { AboutMe } from "@/lib/queries";

const AboutMe = ({ data }: { data: AboutMe }) => {
  return (
    <section className="flex max-w-full flex-col font-sans">
      <header className="flex flex-col">
        <h1 className="text-wrap-balance text-[16px] font-semibold leading-[22px] tracking-tight text-foreground">
          {data.name}
        </h1>
        <p className="text-[16px] font-normal leading-[22px] text-muted-foreground">
          {data.role}
        </p>
      </header>

      <div className="mt-5 space-y-2 text-pretty text-sm font-normal leading-6 text-muted-foreground">
        {data.bio.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <p className="mt-4 text-pretty text-sm font-normal leading-6 text-muted-foreground">
        You can reach me via{" "}
        <a
          className="inline-flex items-baseline gap-1 font-semibold text-foreground underline decoration-foreground/40 underline-offset-4 transition-colors hover:decoration-foreground focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          href={`mailto:${data.email}`}
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
          href={data.githubUrl}
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
          href={data.resumeUrl}
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
