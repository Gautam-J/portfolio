import { FunctionComponent } from "react";
import { ICertification, IDegree } from "../utils/types";

const Education: FunctionComponent<{
  data: { degrees: IDegree[]; certifications: ICertification[] };
}> = ({ data }) => {
  return (
    <div className="relative grid items-center justify-center min-h-screen grid-cols-12 h-max">
      <div className="flex justify-center col-start-1 col-span-full">
        <h1 className="mainHeading">Education</h1>
      </div>
      <h1 className="absolute col-start-10 linux col-span-full top-1/4">
        $ man
      </h1>

      <div className="col-span-8 col-start-3">
        <h3 className="text-5xl font-bold">Degrees</h3>
        <div className="flex items-center justify-around">
          {data.degrees.map((degree) => (
            <div
              key={degree.degree}
              className="flex flex-col items-start justify-center"
            >
              <h4>{degree.institution}</h4>
              <p className="text-light-base09 dark:text-dark-base09">
                {new Date(degree.startDate).getFullYear()} -{" "}
                {new Date(degree.endDate).getFullYear()}
              </p>
              <h5>{degree.degree}</h5>
            </div>
          ))}
        </div>
      </div>

      <div className="col-start-2 col-end-12">
        <h3 className="text-5xl font-bold">Certifications</h3>
        <div className="flex flex-wrap items-center justify-around">
          {data.certifications.map((certification) => (
            <div key={certification.credential}>
              <h5>{certification.name}</h5>
              <a
                href={certification.credential}
                className="underline cursor-pointer text-light-base09 dark:text-dark-base09"
                rel="noopener noreferrer"
                target="_blank"
              >
                {certification.organization}
              </a>
              <span className="text-light-base09 dark:text-dark-base09">
                {" "}
                -{" "}
                {new Date(certification.issueDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                })}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
