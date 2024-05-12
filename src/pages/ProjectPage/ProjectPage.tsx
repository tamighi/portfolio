import { Appbar, ResponsivePage } from "@/components";
import { projectsArray } from "@/assets";

import { ProjectBanner } from "./ProjectBanner";

const ProjectPage = () => {
  return (
    <>
      <Appbar />
      <ResponsivePage className="flex flex-col justify-center">
        <h1 className="text-center text-5xl font-bold mb-20">My projects</h1>
        <div className="gap-[120px] flex flex-col">
          {projectsArray.map((project, index) => {
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

export default ProjectPage;
