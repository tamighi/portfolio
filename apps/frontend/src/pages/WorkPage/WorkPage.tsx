import { BackHomeButton, ResponsivePage } from "components";

import "./WorkPage.css";

// TODO
const WorkPage = () => {
  return (
    <>
      <BackHomeButton />
      <ResponsivePage className="WorkPage">
        <div className="WorkSection">
          <div className="WorkDescription">
            Full stack website with react in frontend and nestjs in backend.
          </div>
          <div className="WorkDemo">
            Image / video of correction website service + link to demo + link to
            github
          </div>
        </div>
        <div className="WorkSection">
          <div className="WorkDemo">
            Gif of cub3d + github link https://github.com/Lysique/cub3d
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
