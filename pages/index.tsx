import type { GetStaticProps, NextApiResponse, NextPage } from "next";
import Intro from "../components/Intro";
import About from "../components/About";
import { IRole, IAbout } from "../utils/types";
import { getIntroData } from "./api/intro/index";
import { getAboutData } from "./api/about/index";

interface Props {
  roles: IRole[];
  about: IAbout;
}

const Home: NextPage<Props> = (props) => {
  const { roles, about } = props;

  return (
    <div className="bg-light-base00 dark:bg-dark-base00">
      <Intro data={roles} />
      <About data={about} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const introData = await getIntroData();
  const roles: IRole[] = JSON.parse(JSON.stringify(introData));

  const aboutData = await getAboutData();
  const about: IAbout = JSON.parse(JSON.stringify(aboutData));

  return { props: { roles, about } };
};

export default Home;
