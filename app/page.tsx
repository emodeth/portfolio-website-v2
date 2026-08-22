import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import { workExperience } from "@/data/work-experience";
import { projects } from "@/data/projects";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProjectsComponent from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";

const Home = () => {
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
