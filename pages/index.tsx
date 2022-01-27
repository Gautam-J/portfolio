import type { GetStaticProps, NextApiResponse, NextPage } from "next";
import Intro from "../components/Intro";
import About from "../components/About";
import Experience from "../components/Experience";
import NavBar from "../components/NavBar";
import Education from "../components/Education";
import Technology from "../components/Technology";
import Project from "../components/Project";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { getIntroData } from "./api/intro";
import { getAboutData } from "./api/about";
import { getExperienceData } from "./api/experience";
import { getDegreeData } from "./api/education/degree";
import { getCertificationData } from "./api/education/certification";
import { getTechData } from "./api/technology";
import { getProjectData } from "./api/project";
import {
  IProps,
  IRole,
  IAbout,
  IExperience,
  IDegree,
  ICertification,
  ITechnology,
  IProject,
} from "../utils/types";
import Head from "next/head";

const Home: NextPage<IProps> = (props) => {
  const {
    roles,
    about,
    experience,
    degrees,
    certifications,
    technologies,
    projects,
  } = props;

  return (
    <div className="flex flex-col">
      <Head>
        <title>Gautam J | Portfolio</title>
      </Head>

      <NavBar />
      <Intro data={roles} />
      <About data={about} />
      <Experience data={experience} />
      <Education data={{ degrees, certifications }} />
      <Technology data={technologies} />
      <Project data={projects} />
      <Contact />
      <Footer />
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

  const technologyData = await getTechData();
  const technologies: ITechnology[] = JSON.parse(
    JSON.stringify(technologyData)
  );

  const projectData = await getProjectData();
  const projects: IProject[] = JSON.parse(JSON.stringify(projectData));

  return {
    props: {
      roles,
      about,
      experience,
      degrees,
      certifications,
      technologies,
      projects,
    },
  };
};

export default Home;
