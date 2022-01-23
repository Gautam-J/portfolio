import type { GetStaticProps, NextApiResponse, NextPage } from "next";
import Intro from "../components/Intro";
import About from "../components/About";
import Experience from "../components/Experience";
import { IProps, IRole, IAbout, IExperience } from "../utils/types";
import { getIntroData } from "./api/intro/index";
import { getAboutData } from "./api/about/index";
import { getExperienceData } from "./api/experience";

const Home: NextPage<IProps> = (props) => {
  const { roles, about, experience } = props;

  return (
    <div className="bg-light-base00 dark:bg-dark-base00">
      <Intro data={roles} />
      <About data={about} />
      <Experience data={experience} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const introData = await getIntroData();
  const roles: IRole[] = JSON.parse(JSON.stringify(introData));

  const aboutData = await getAboutData();
  const about: IAbout = JSON.parse(JSON.stringify(aboutData));

  const experienceData = await getExperienceData();
  const experience: IExperience[] = JSON.parse(JSON.stringify(experienceData));

  return { props: { roles, about, experience } };
};

export default Home;
