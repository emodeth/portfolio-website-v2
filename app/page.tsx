import AboutMe from "@/components/AboutMe";

export const revalidate = 60; // ISR: re-generate at most every 60 seconds
import Footer from "@/components/Footer";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProjectsComponent from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";
import { getProjects, getWorkExperience } from "@/lib/queries";

const Home = async () => {
  const [projects, workExperience] = await Promise.all([
    getProjects(),
    getWorkExperience(),
  ]);

  return (
    <>
      <MaxWidthWrapper>
        <div className="animate-slide-in">
          <AboutMe />
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
