import { Loader, Paragraph } from "components";
import React from "react";

import "./ProjectBanner.css";

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
    <div className="ProjectBanner">
      <div className="ProjectBannerLeft">
        <div className="ProjectBannerImageContainer">
          <img
            alt={alt}
            src={src}
            className="ProjectBannerImage"
            style={{ display: imageLoaded ? "block" : "none" }}
            onLoad={() => setImageLoaded(true)}
          />
          {imageLoaded ? null : <Loader />}
          <div className="ProjectBannerLinks">
            {demoLink && (
              <a target="_blank" className="ProjectBannerLink" href={demoLink}>
                Demo
              </a>
            )}
            {codeLink && (
              <a target="_blank" className="ProjectBannerLink" href={codeLink}>
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
