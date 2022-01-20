import { FunctionComponent } from "react";

const About: FunctionComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="mb-20 text-8xl">About</h1>
      <p className="text-3xl">This is some description about me</p>
    </div>
  );
};

export default About;
