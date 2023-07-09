import { BackHomeButton, ResponsivePage } from "components";

import correctionWebsiteImage from "assets/correctionwebsite.png";
import cub3dGifExample from "assets/cub3dexample.gif";

import "./WorkPage.css";

const WorkPage = () => {
  return (
    <>
      <BackHomeButton />
      <ResponsivePage className="WorkPage">
        <div className="WorkSection">
          <div className="WorkDemo">
            <div className="WorkDemoImageContainer">
              <img
                alt="correctionwebsite"
                src={correctionWebsiteImage}
                className="WorkDemoImage"
              />
              <div className="WorkDemoLinks">
                <a className="WorkDemoLink">Demo</a>
                <a className="WorkDemoLink">Code</a>
              </div>
            </div>
          </div>
          <div className="WorkDescription">
            This full stack website is built using React and NestJS, with
            authentication, PostgreSQL integration, and file services. It is
            compiled with webpack, containerized with Docker and optimized with
            nginx. The project includes a custom UI library and utilizes React
            Query for efficient data handling with optimistic and undoable
            updates.
          </div>
        </div>
        <div className="WorkSection">
          <div className="WorkDemo">
            <div className="WorkDemoImageContainer">
              <img
                alt="cub3dexample"
                src={cub3dGifExample}
                className="WorkDemoImage"
              />
              <div className="WorkDemoLinks">
                <a className="WorkDemoLink">Code</a>
              </div>
            </div>
          </div>
          <div className="WorkDescription">
            This project is based on the FPS game Wolfenstein3D and utilizes
            a rendering technique called RayCasting. It is written entirely in C
            and uses a simple rendering engine called MiniLibX. The project
            includes features such as rendering, simple enemy AI, a game loop, and game
            state handling.
          </div>
        </div>
      </ResponsivePage>
    </>
  );
};

export default WorkPage;
