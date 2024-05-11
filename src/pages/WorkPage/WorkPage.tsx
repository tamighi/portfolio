import { Appbar, ResponsivePage } from "components";
import { ProjectBanner } from "./ProjectBanner";
import { projects } from "constants";

import "./WorkPage.css";

const WorkPage = () => {
  return (
    <>
      <Appbar />
      <ResponsivePage className="WorkPage">
        <h1 className="WorkPageTitle">My projects</h1>
        <div className="ProjectSection">
          {projects.map((project, index) => {
            return (
              <ProjectBanner
                key={index}
                demoLink={project.demoLink}
                src={project.medias[0].src}
                alt={project.name}
                codeLink={project.githubLink}
                description={project.description}
              />
            );
          })}
        </div>
      </ResponsivePage>
    </>
  );
};

export default WorkPage;
