import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import { workExperience } from "@/data/work-experience";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";
import { client } from "@/sanity/client";

const Home = async () => {
  const query = `{
    "projects": *[_type == "project"] | order(id desc){
      "id": _id,
      slug,
      title,
      description,
      "coverUrl": coverUrl.asset->url,
      videoUrl,
      codeUrl,
      demoUrl,
      "photos": photos[].asset->url,
      content,
      techStack[]->{
        "id": _id,
        name,
        iconName
      }
    }
  }`;

  const data = await client.fetch(query, {}, {
    next: { revalidate: 900, tags: ["sanity"] },
  });
  const { projects } = data;

  return (
    <>
      <MaxWidthWrapper>
        <AboutMe />
        <WorkExperience workExperience={workExperience} />
        <Projects projects={projects} />
      </MaxWidthWrapper>
      <Footer />
    </>
  );
};

// Revalidation handled by webhook

export default Home;
