import { BackHomeButton, ResponsivePage } from "components";

import correctionWebsiteImage from "assets/correctionwebsite.png";
import cub3dGifExample from "assets/cub3dexample.gif"

import "./WorkPage.css";

const WorkPage = () => {
  return (
    <>
      <BackHomeButton />
      <ResponsivePage className="WorkPage">
        <div className="WorkSection">
          <div className="WorkDemo">
            <img
              alt="correctionwebsite"
              src={correctionWebsiteImage}
              className="WorkDemoImage"
            />
            <div className="WorkDemoText">
              <span>Demo</span>
              <span>Code</span>
            </div>
          </div>
          <div className="WorkDescription">
            Full stack website with react in frontend and nestjs in backend.
          </div>
        </div>
        <div className="WorkSection">
          <div className="WorkDemo">
            <img
              alt="correctionwebsite"
              src={cub3dGifExample}
              className="WorkDemoImage"
            />
            <div className="WorkDemoText">
              <span>Demo</span>
              <span>Code</span>
            </div>
          </div>
          <div className="WorkDescription">
            This project is inspired from the game Wolfenstein3D, using a
            rendering technique called the RayCasting. The program reads a file
            given in parameter (or look for specific files if no files are given
            in the bonus section) and renders a 3D environment with the
            textures, colors and structure detailled in the file.
          </div>
        </div>
      </ResponsivePage>
    </>
  );
};

export default WorkPage;
