import AboutMe from "@/components/AboutMe";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";
import { client } from "@/sanity/client";
import { WorkExperience as WorkExperienceType } from "@/lib/types";

const Home = async () => {
  const query = `{
    "profile": *[_type == "profile"][0]{
      "id": _id,
      name,
      description,
      jobTitle,
      mail,
      githubUrl,
      imgUrl,
      "resume": resume.asset->url
    },
    "workExperience": *[_type == "workExperience"] | order(startDate desc){
      "id": _id,
      companyName,
      description,
      type,
      workTitle,
      startDate,
      endDate
    },
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
  const { profile, projects } = data;

  const workExperience: WorkExperienceType[] = data.workExperience.map(
    (experience: {
      id: string;
      companyName: string;
      description: string;
      type: string;
      workTitle: string;
      startDate: string;
      endDate: string;
    }) => ({
      ...experience,
      startDate: new Date(experience.startDate),
      endDate: new Date(experience.endDate),
    })
  );

  return (
    <MaxWidthWrapper>
      <AboutMe profile={profile} />
      <WorkExperience workExperience={workExperience} />
      <Projects projects={projects} />
    </MaxWidthWrapper>
  );
};

// Revalidation handled by webhook

export default Home;
