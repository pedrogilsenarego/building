import { Navbar } from "../Navbar";
import Logo from "./Logo";

import RequestBudgetBtn from "./requestBudgetBtn";

const Header = () => {
  return (
    <div className="grid grid-cols-3 w-full ">
      <Logo />
      <div className=" flex justify-center">
        <Navbar />
      </div>
      <div className="flex gap-2 justify-end">
        <RequestBudgetBtn />
      </div>
    </div>
  );
};

export default Header;
