import About from "./Introduction";
import HomeLinks from "./HomeLinks";

import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="HomePage">
      <div className="HomeContainer">
        <About />
        <HomeLinks />
      </div>
    </div>
  );
};

export default HomePage;
