import React from "react";

import { Project } from "@/assets";
import { BulletPoints, Loader } from "@/components";

type Props = {
  project: Project;
};

const ProjectBanner = (props: Props) => {
  const { project } = props;
  const [imageLoaded, setImageLoaded] = React.useState(false);

  const Link = ({ link, label }: { link: string; label: string }) => {
    return (
      <a
        target="_blank"
        className="bg-[#fffb] cursor-pointer rounded-3xl px-4 py-2
                    text-lg font-bold text-black hover:bg-white border border-black"
        href={link}
      >
        {label}
      </a>
    );
  };

  return (
    <div className="flex flex-col items-center gap-14">
      <h2
        className="text-transparent bg-clip-text bg-linear-to-r to-emerald-600
          from-sky-400  text-4xl font-bold"
      >
        {project.name}
      </h2>
      <div className="grid grid-cols-1 gap-12 xl:grid-cols-2">
        <div className="w-full justify-self-center">
          <div className="flex aspect-video items-center justify-center">
            <div className="relative">
              <img
                alt={project.name}
                src={project.medias[0].src}
                className="max-h-[50vh] lg:h-full rounded-3xl"
                style={{ display: imageLoaded ? "block" : "none" }}
                onLoad={() => setImageLoaded(true)}
              />
              {imageLoaded ? null : <Loader />}
              <div className="absolute bottom-3 right-2 flex flex-col gap-3">
                {project.links.map((link, i) => (
                  <Link key={i} label={link.label} link={link.href} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 ">
          <p className="whitespace-break-spaces">{project.description}</p>
          <BulletPoints bullets={project.tools} label="Tools" />
          {project.features && (
            <BulletPoints bullets={project.features} label="Features" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectBanner;
