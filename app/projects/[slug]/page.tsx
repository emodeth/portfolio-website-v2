import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Globe, Youtube } from "lucide-react";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProjectShowcase from "@/components/ProjectShowcase";
import Footer from "@/components/Footer";
import { getProjectBySlug, getProjectSlugs } from "@/lib/queries";
import { PiArrowBendUpLeftBold } from "react-icons/pi";
import { IoLogoGithub } from "react-icons/io";
import { MDXRemote } from "next-mdx-remote/rsc";

export const generateStaticParams = async () => {
  const slugs = await getProjectSlugs();
  return slugs.map((s) => ({ slug: s.slug }));
};

export const revalidate = 60; // ISR: re-generate at most every 60 seconds

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: `${project.title} | Emirhan Keskin`,
    description: project.description,
  };
};

const mdxComponents = {
  h1: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="text-[16px] font-medium text-gray-1200 mt-8 mb-1 tracking-tight font-sans"
      {...props}
    >
      {children}
    </h2>
  ),
  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="text-[16px] font-medium text-gray-1200 mt-8 mb-1 tracking-tight font-sans"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="text-[15px] font-medium text-gray-1200 mt-6 mb-1 tracking-tight font-sans"
      {...props}
    >
      {children}
    </h3>
  ),
  p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className="text-[14px] leading-[22px] text-gray-1100 dark:text-gray-1100 mb-4 font-normal font-sans"
      {...props}
    >
      {children}
    </p>
  ),
  ul: ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className="list-disc list-outside ml-4 mb-4 space-y-1.5 text-[14px] leading-[22px] text-gray-1100 marker:text-gray-400"
      {...props}
    >
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className="list-decimal list-outside ml-4 mb-4 space-y-1.5 text-[14px] leading-[22px] text-gray-1100 marker:text-gray-400"
      {...props}
    >
      {children}
    </ol>
  ),
  li: ({ children, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="pl-0.5 text-gray-1100" {...props}>
      {children}
    </li>
  ),
  code: ({
    children,
    className,
    ...props
  }: React.HTMLAttributes<HTMLElement>) => {
    const isInline = !className;
    if (isInline) {
      return (
        <code
          className="font-mono text-[13px] text-gray-1100 bg-[#f5f5f5] dark:bg-[#1c1c1c] px-1.5 py-0.5 rounded border border-border"
          {...props}
        >
          {children}
        </code>
      );
    }
    return (
      <code
        className={`${className} font-mono text-[13px] text-gray-1100`}
        {...props}
      >
        {children}
      </code>
    );
  },
  pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="p-4 rounded-lg bg-[#f5f5f5] dark:bg-[#1c1c1c] border border-border overflow-x-auto my-4 font-mono text-[13px] text-gray-1100 leading-relaxed"
      {...props}
    >
      {children}
    </pre>
  ),
  Mono: ({ children, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
    <span
      className="font-mono text-[13px] text-gray-1100 dark:text-gray-1100 leading-relaxed block mb-4"
      {...props}
    >
      {children}
    </span>
  ),
};

const ProjectPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <MaxWidthWrapper>
        <article className="pb-4 md:pb-8 max-w-3xl mx-auto space-y-4">
          <div className="flex items-center justify-between gap-4 animate-slide-in">
            <Link
              href="/"
              className="group/button inline-flex shrink-0 items-center justify-center border border-[#e5e5e5] dark:border-input bg-transparent transition-all outline-none select-none focus-visible:border-ring active:translate-y-px h-7 w-7 rounded-full text-[#000000] dark:text-[#ffffff] [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5 hover:bg-[#f5f5f5] dark:hover:bg-input/50"
              aria-label="Back to Home"
            >
              <PiArrowBendUpLeftBold />
            </Link>

            <div className="flex items-center gap-2">
              {project.codeUrl && (
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group/button inline-flex shrink-0 items-center justify-center border border-[#e5e5e5] dark:border-input bg-transparent font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring active:translate-y-px h-7 rounded-[8px] px-2.5 text-[12.8px] text-[#000000] dark:text-[#ffffff] [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5 hover:bg-[#f5f5f5] dark:hover:bg-input/50 gap-1.5"
                >
                  <IoLogoGithub />
                  Code
                </a>
              )}
              {project.videoUrl && (
                <a
                  href={project.videoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group/button inline-flex shrink-0 items-center justify-center border border-[#e5e5e5] dark:border-input bg-transparent font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring active:translate-y-px h-7 rounded-[8px] px-2.5 text-[12.8px] text-[#000000] dark:text-[#ffffff] [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5 hover:bg-[#f5f5f5] dark:hover:bg-input/50 gap-1.5"
                >
                  <Youtube />
                  Video
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group/button inline-flex shrink-0 items-center justify-center border border-[#e5e5e5] dark:border-input bg-transparent font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring active:translate-y-px h-7 rounded-[8px] px-2.5 text-[12.8px] text-[#000000] dark:text-[#ffffff] [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5 hover:bg-[#f5f5f5] dark:hover:bg-input/50 gap-1.5"
                >
                  <Globe />
                  Live
                </a>
              )}
            </div>
          </div>

          <header className="space-y-1.5 animate-slide-in delay-75">
            <h1 className="text-[24px] font-semibold leading-[33px] text-[#000000] dark:text-[#ffffff] font-sans">
              {project.title}
            </h1>
            <p className="text-[#666666] dark:text-[#b5b5b5] text-[14px] leading-[20px]">
              {project.description}
            </p>
          </header>

          <ProjectShowcase project={project} />

          {project.content && (
            <div className="animate-slide-in delay-150">
              <MDXRemote source={project.content} components={mdxComponents} />
            </div>
          )}
        </article>
      </MaxWidthWrapper>
      <Footer />
    </>
  );
};

export default ProjectPage;
