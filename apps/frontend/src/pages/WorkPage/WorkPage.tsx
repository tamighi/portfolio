import { BackHomeButton, ResponsivePage } from "components";
import { ProjectBanner } from "./ProjectBanner";

import correctionWebsiteImage from "assets/correctionwebsite.png";
import cub3dGifExample from "assets/cub3dexample.gif";

import "./WorkPage.css";

const WorkPage = () => {
  return (
    <>
      <BackHomeButton />
      <ResponsivePage className="WorkPage">
        <ProjectBanner
          src={correctionWebsiteImage}
          alt="correctionwebsite"
          codeLink="https://github.com/tamighi/correction-service-website"
          description="
            This full stack website is built using React and NestJS, with
            authentication, PostgreSQL integration, and file services. It is
            compiled with webpack, containerized with Docker and optimized with
            nginx. The project includes a custom UI library and utilizes React
            Query for efficient data handling with optimistic and undoable
            updates."
        />
        <ProjectBanner
          src={cub3dGifExample}
          alt="cub3dexample"
          codeLink="https://github.com/Lysique/cub3d"
          description="
            This project is based on the FPS game Wolfenstein3D and utilizes a
            rendering technique called RayCasting. It is written entirely in C
            and uses a simple rendering engine called MiniLibX. The project
            includes features such as rendering, simple enemy AI, a game loop,
            and game state handling."
        />
      </ResponsivePage>
    </>
  );
};

export default WorkPage;
