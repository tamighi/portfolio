import { Appbar, ResponsivePage } from "components";
import { ProjectBanner } from "./ProjectBanner";
import { works } from "constants";

import "./WorkPage.css";

// TODO: Other image for cub3d
const WorkPage = () => {
  return (
    <>
      <Appbar />
      <ResponsivePage className="WorkPage">
        <h1 className="WorkPageTitle">My projects</h1>
        <div className="ProjectSection">
          {works.map((work, index) => {
            return (
              <ProjectBanner
                key={index}
                demoLink={work.demoLink}
                src={work.medias[0].src}
                alt={work.name}
                codeLink={work.githubLink}
                description={work.description}
              />
            );
          })}
        </div>
      </ResponsivePage>
    </>
  );
};

export default WorkPage;
