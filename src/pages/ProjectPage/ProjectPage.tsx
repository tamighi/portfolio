import { ResponsivePage } from "@/components";
import { projectsArray } from "@/assets";

import { ProjectBanner } from "./ProjectBanner";

const ProjectPage = () => {
  return (
    <>
      <ResponsivePage className="flex flex-col justify-center">
        <h1 className="text-center text-5xl font-bold mb-20">My projects</h1>
        <div className="gap-20 flex flex-col">
          {projectsArray.map((project, index) => {
            return <ProjectBanner key={index} project={project} />;
          })}
        </div>
      </ResponsivePage>
    </>
  );
};

export default ProjectPage;
