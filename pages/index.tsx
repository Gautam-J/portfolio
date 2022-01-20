import type { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import Intro from "../components/Intro";
import { IRole } from "../utils/types";

interface Props {
  roles: IRole[];
}

const Home: NextPage<Props> = (props) => {
  const { roles } = props;

  return (
    <div className="bg-light-base00 dark:bg-dark-base00">
      <Intro data={roles} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { VERCEL_URL } = process.env;
  const data = await fetch(VERCEL_URL + "/api/intro", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": `${process.env.AUTH_PASSWD}`,
    },
  });

  const roles = await data.json();

  return { props: { roles } };
};

export default Home;
