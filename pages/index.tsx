import type { GetStaticProps, NextApiResponse, NextPage } from "next";
import Intro from "../components/Intro";
import About from "../components/About";
import { IRole } from "../utils/types";
import { getIntroData } from "./api/intro/index";

interface Props {
  roles: IRole[];
}

const Home: NextPage<Props> = (props) => {
  const { roles } = props;

  return (
    <div className="bg-light-base00 dark:bg-dark-base00">
      <Intro data={roles} />
      <About />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const introData = await getIntroData();
  const roles: IRole[] = JSON.parse(JSON.stringify(introData));
  return { props: { roles } };
};

export default Home;
