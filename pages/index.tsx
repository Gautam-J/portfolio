import type { GetStaticProps, NextApiResponse, NextPage } from "next";
import Intro from "../components/Intro";
import About from "../components/About";
import Experience from "../components/Experience";
import NavBar from "../components/NavBar";
import Education from "../components/Education";
import Footer from "../components/Footer";
import { getIntroData } from "./api/intro/index";
import { getAboutData } from "./api/about/index";
import { getExperienceData } from "./api/experience";
import { getDegreeData } from "./api/education/degree";
import { getCertificationData } from "./api/education/certification";
import {
  IProps,
  IRole,
  IAbout,
  IExperience,
  IDegree,
  ICertification,
} from "../utils/types";

const Home: NextPage<IProps> = (props) => {
  const { roles, about, experience, degrees, certifications } = props;

  return (
    <div className="flex flex-col">
      <NavBar />
      <Intro data={roles} />
      <About data={about} />
      <Experience data={experience} />
      <Education data={{ degrees, certifications }} />
      {/* <Footer /> */}
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

  const degreeData = await getDegreeData();
  const degrees: IDegree[] = JSON.parse(JSON.stringify(degreeData));

  const certificationData = await getCertificationData();
  const certifications: ICertification[] = JSON.parse(
    JSON.stringify(certificationData)
  );

  return { props: { roles, about, experience, degrees, certifications } };
};

export default Home;
