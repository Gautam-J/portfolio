import type { NextPage } from "next";
import Intro from "../components/Intro";

const Home: NextPage = () => {
  return (
    <div className="bg-light-base00 dark:bg-dark-base00">
      <Intro />
    </div>
  );
};

export default Home;
