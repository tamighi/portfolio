import React from "react";

import { Loader, Paragraph } from "components";

type Props = {
  codeLink?: string;
  demoLink?: string;
  src: string;
  alt: string;
  description: string;
};

const ProjectBanner = (props: Props) => {
  const { src, alt, description, codeLink, demoLink } = props;
  const [imageLoaded, setImageLoaded] = React.useState(false);

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      <div className="w-full justify-self-center">
        <div className="relative flex aspect-video items-center justify-center">
          <img
            alt={alt}
            src={src}
            className="h-full rounded-3xl"
            style={{ display: imageLoaded ? "block" : "none" }}
            onLoad={() => setImageLoaded(true)}
          />
          {imageLoaded ? null : <Loader />}
          <div className="absolute bottom-3 right-2 flex flex-col gap-3">
            {demoLink && (
              <a
                target="_blank"
                className="bg-[#fffb] cursor-pointer rounded-3xl px-4 py-2
                  text-lg font-bold text-black hover:bg-white"
                href={demoLink}
              >
                Demo
              </a>
            )}
            {codeLink && (
              <a
                target="_blank"
                className="bg-[#fffb] cursor-pointer rounded-3xl px-4 py-2
                  text-lg font-bold text-black hover:bg-white"
                href={codeLink}
              >
                Code
              </a>
            )}
          </div>
        </div>
      </div>
      <Paragraph>{description}</Paragraph>
    </div>
  );
};

export default ProjectBanner;
