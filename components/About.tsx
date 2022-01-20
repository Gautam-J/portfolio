import { FunctionComponent } from "react";
import { IAbout } from "../utils/types";

const About: FunctionComponent<{
  data: IAbout;
}> = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="mb-20 text-8xl">About</h1>
      <p className="text-3xl">{data.description}</p>
    </div>
  );
};

export default About;
