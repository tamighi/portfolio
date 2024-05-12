import { Paragraph } from "components";
import { EducationSectionHeader } from "./EducationSectionHeader";
import { Link } from "react-router-dom";

import { experiencesArray } from "constants";

const Education = () => {
  return (
    <div className="flex flex-col gap-20">
      {experiencesArray.map((experience) => {
        return (
          <div key={experience.id} className="flex flex-col overflow-hidden">
            <EducationSectionHeader
              title={experience.title}
              date={experience.period}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Paragraph>{experience.description}</Paragraph>
              {experience.link?.type === "relative" ? (
                <Link
                  to={experience.link.href}
                  className="border-2 py-2 px-4 rounded-xl justify-self-center
                    md:justify-self-end self-start hover:text-black
                    hover:bg-white"
                >
                  {experience.link.title}
                </Link>
              ) : experience.link || experience.download ? (
                <a
                  className="border-2 py-2 px-4 rounded-xl justify-self-center
                    md:justify-self-end self-start hover:text-black
                    hover:bg-white"
                  href={experience.link?.href ?? experience.download?.href}
                  download={experience.download?.download}
                  target="_blank"
                >
                  {experience.link?.title ?? experience.download?.title}
                </a>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Education;
