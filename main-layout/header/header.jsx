import React from "react";
import Logo from "../../assets/header/logo";
import Icon from "../../assets/header/icon";
import Input from "../../components/ui/input";
import Search from "../../assets/header/search";
import Karzinka from "../../assets/header/karzinka";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <div className=" container flex justify-between items-center mt-10 mb-10">
        <Logo />
        <ul className="flex gap-6 text-headerList text-primary">
          <li> <Link to={"/"}>Home</Link> </li>
          <li> <Link to={"/about"}>About</Link> </li>
          <li className="flex items-center gap-1">
            <Link>Pages </Link> <Icon />
          </li>
          <li> <Link to={"/shop"}>Shop</Link> </li>
          <li> <Link>Projects</Link> </li>
          <li> <Link>News</Link> </li>
        </ul>
        <div className="flex gap-3 ">
          <div className="relative w-[321px]">
            <Input variant="headerInput" />
            <div className="absolute top-1/2 right-[6px] translate-y-[-50%] cursor-pointer">
              <Search />
            </div>
          </div>
          <div className="relative border border-Btn1 w-[139px] h-[66px] rounded-full">
            <div className="flex items-center gap-2 absolute top-1/2 left-[6px] translate-y-[-50%] cursor-pointer ">
              <Karzinka />{" "}
              <p className="text-cart text-primary">
                Cart (<span>0</span>){" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
