import { BackHomeButton, ResponsivePage } from "components";
import { ProjectBanner } from "./ProjectBanner";

import correctionWebsiteImage from "assets/correctionwebsite.png";
import cub3dGifExample from "assets/cub3dexample.png";

import "./WorkPage.css";

const correctionWebsiteDescription =
  "This full stack website is built using React and NestJS. It is compiled with Webpack, containerized with Docker and optimized with nginx.\n\n" +
  "The backend implements authentication, a PostgreSQL database, and a file service and the frontend includes a custom UI library and utilizes React Query for efficient data handling with optimistic and undoable updates.";

const cub3dDescription =
  "This project is based on the FPS game Wolfenstein3D and utilizes a rendering technique called RayCasting.\n\n" +
  "It is written entirely in C and uses a simple rendering engine called MiniLibX. The project includes features such as rendering, simple enemy AI, a game loop, and game state handling."

const WorkPage = () => {
  return (
    <>
      <BackHomeButton />
      <ResponsivePage className="WorkPage">
        <h1 className="WorkPageTitle">My projects</h1>
        <ProjectBanner
          src={correctionWebsiteImage}
          alt="correctionwebsite"
          codeLink="https://github.com/tamighi/correction-service-website"
          description={correctionWebsiteDescription}

        />
        <ProjectBanner
          src={cub3dGifExample}
          alt="cub3dexample"
          codeLink="https://github.com/Lysique/cub3d"
          description={cub3dDescription}
        />
        <span>
          Wanna see my other project ? Check out my github repository at{" "}
          <a
            href="https://github.com/tamighi"
            target="_blank"
            style={{ borderBottom: "1px solid" }}
          >
            https://github.com/tamighi
          </a>
          .
        </span>
      </ResponsivePage>
    </>
  );
};

export default WorkPage;
