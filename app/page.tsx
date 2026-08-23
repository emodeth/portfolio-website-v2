import AboutMe from "@/components/AboutMe";

export const revalidate = 60; // ISR: re-generate at most every 60 seconds
import Footer from "@/components/Footer";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProjectsComponent from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";
import { getAboutMe, getProjects, getWorkExperience } from "@/lib/queries";

const Home = async () => {
  const [aboutMe, projects, workExperience] = await Promise.all([
    getAboutMe(),
    getProjects(),
    getWorkExperience(),
  ]);

  if (!aboutMe) return null;

  return (
    <>
      <MaxWidthWrapper>
        <div className="animate-slide-in">
          <AboutMe data={aboutMe} />
        </div>
        <div className="animate-slide-in delay-75">
          <WorkExperience workExperience={workExperience} />
        </div>
        <div className="animate-slide-in delay-100">
          <ProjectsComponent projects={projects} />
        </div>
      </MaxWidthWrapper>
      <Footer />
    </>
  );
};

export default Home;
