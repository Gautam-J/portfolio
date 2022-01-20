import { FunctionComponent } from "react";
import { IExperience } from "../utils/types";

const Experience: FunctionComponent<{
  data: IExperience[];
}> = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="mb-20 text-8xl">Experience</h1>

      <div>
        {data.map((exp) => (
          <div key={exp._id} className="mb-5">
            <h3 className="text-3xl">{exp._id}</h3>
            <p>
              {new Date(exp.minStartDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
              })}{" "}
              -{" "}
              {exp.onGoing
                ? "Present"
                : new Date(exp.maxEndDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                  })}
            </p>
            {exp.positions.map((pos) => (
              <p key={pos}>{pos}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
