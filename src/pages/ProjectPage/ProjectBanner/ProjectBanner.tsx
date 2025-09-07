import React from "react";

import { Loader, Paragraph } from "@/components";
import { Project } from "@/assets";

type Props = {
  project: Project;
};

const ProjectBanner = (props: Props) => {
  const { project } = props;
  const [imageLoaded, setImageLoaded] = React.useState(false);

  return (
    <div className="flex flex-col items-center gap-10 text-3xl font-bold">
      <h2
        className="text-transparent bg-clip-text bg-linear-to-r to-emerald-600
          from-sky-400"
      >
        {project.name}
      </h2>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="w-full justify-self-center">
          <div className="relative flex aspect-video items-center justify-center">
            <img
              alt={project.name}
              src={project.medias[0].src}
              className="max-h-[50vh] lg:h-full rounded-3xl"
              style={{ display: imageLoaded ? "block" : "none" }}
              onLoad={() => setImageLoaded(true)}
            />
            {imageLoaded ? null : <Loader />}
            <div className="absolute bottom-3 right-2 flex flex-col gap-3">
              {project.demoLink && (
                <a
                  target="_blank"
                  className="bg-[#fffb] cursor-pointer rounded-3xl px-4 py-2
                    text-lg font-bold text-black hover:bg-white"
                  href={project.demoLink}
                >
                  Demo
                </a>
              )}
              {project.githubLink && (
                <a
                  target="_blank"
                  className="bg-[#fffb] cursor-pointer rounded-3xl px-4 py-2
                    text-lg font-bold text-black hover:bg-white"
                  href={project.githubLink}
                >
                  Code
                </a>
              )}
            </div>
          </div>
        </div>
        <Paragraph>{project.description}</Paragraph>
      </div>
    </div>
  );
};

export default ProjectBanner;
