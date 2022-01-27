import { FunctionComponent } from "react";
import Link from "next/link";

const NotFound: FunctionComponent = () => {
  return (
    <div className="grid min-h-screen grid-cols-12 h-max">
      <div className="flex flex-col items-center justify-center col-start-2 col-end-12">
        <h1 className="mb-4 text-3xl font-bold text-center lg:mb-10 lg:text-7xl text-light-base08 dark:text-dark-base08">
          500 - Internal Server Error
        </h1>
        <p className="text-xl text-center lg:text-4xl">
          Click{" "}
          <span className="underline text-light-base09 dark:text-dark-base09">
            <Link href="/">here</Link>
          </span>{" "}
          to try again.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
