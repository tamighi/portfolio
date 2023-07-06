import { BackHomeButton, ResponsivePage } from "components";

import "./WorkPage.css";

// TODO
const WorkPage = () => {
  return (
    <>
      <BackHomeButton />
      <ResponsivePage className="WorkPage">
        <div className="WorkSection">
          <div className="WorkDemo">demo</div>
          <div className="WorkDescription">description</div>
        </div>
        <div className="WorkSection">
          <div className="WorkDemo">demo</div>
          <div className="WorkDescription">description</div>
        </div>
      </ResponsivePage>
    </>
  );
};

export default WorkPage;
