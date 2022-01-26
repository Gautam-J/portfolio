import { FunctionComponent } from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer: FunctionComponent = () => {
  return (
    <div className="grid grid-cols-12 bg-light-base00 dark:bg-dark-base00">
      <div className="flex items-center justify-start col-start-2 col-end-12 p-4 gap-x-2 text-light-base09 dark:text-dark-base09">
        <AiOutlineCopyrightCircle />
        <p>Copyright {new Date().getFullYear()}, Gautam J</p>
      </div>
    </div>
  );
};

export default Footer;
