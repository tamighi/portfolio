import About from "./Introduction";
import HomeLinks from "./HomeLinks";

const HomePage = () => {
  return (
    <div className="flex grow items-center justify-center">
      <div className="grow grid grid-cols-1 xl:grid-cols-2 gap-[120px]">
        <About />
        <HomeLinks />
      </div>
    </div>
  );
};

export default HomePage;
