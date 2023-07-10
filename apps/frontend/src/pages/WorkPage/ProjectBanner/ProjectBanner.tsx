import { Paragraph } from "components";

import "./ProjectBanner.css";

type Props = {
  codeLink?: string;
  demoLink?: string;
  src: string;
  alt: string;
  description: string;
};

// TODO: code link in description
const ProjectBanner = (props: Props) => {
  const { src, alt, description, codeLink, demoLink } = props;

  return (
    <div className="ProjectBanner">
      <div className="ProjectBannerLeft">
        <div className="ProjectBannerImageContainer">
          <img alt={alt} src={src} className="ProjectBannerImage" />
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
