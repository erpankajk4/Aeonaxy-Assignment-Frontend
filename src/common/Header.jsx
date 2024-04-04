import { Link } from "react-router-dom";
import Logo from "./Logo";
import { navBtn, navItems } from "../data/header";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
export default function Navbar() {
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenue] = useState(false);
  function openSideMenu() {
    setSideMenue(true);
  }
  function closeSideMenu() {
    setSideMenue(false);
  }

  return (
    <header className="z-10 w-full flex-wrap flex-center text-white bg-blue sticky top-0 left-0 border-b-2 border-white font-[sohne-400]">
      {/* Destop View  */}
      <nav
        ref={animationParent}
        className="max-md:hidden w-full flex justify-between items-center p-6 "
      >
        <Logo fillColor="fill-white" />
        <ul className="flex-center gap-8">
          {navItems.map((item, index) => (
            <li className="hover:underline" key={index}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
          {navBtn.map((item, index) => (
            <Link to={item.path} key={index}>
              <button className="hvr-sweep-to-right-black btn bg-black border border-black">
                {item.name}
              </button>
            </Link>
          ))}
        </ul>
      </nav>
      {/* hamburger menu */}
      <nav className="text-4xl md:hidden flex justify-between w-full items-center p-5">
        <Logo fillColor="fill-white" />
        {!isSideMenuOpen ? (
          <FiMenu onClick={openSideMenu} className="cursor-pointer" />
        ) : (
          <AiOutlineClose
            onClick={closeSideMenu}
            className="cursor-pointer text-4xl"
          />
        )}
      </nav>
      {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
      {/* Mobile View  */}
    </header>
  );
}

function MobileNav() {
  return (
    <nav className="z-10  flex w-full justify-end md:hidden border-b-2 border-blue">
      <div className=" w-full bg-white px-4 py-4">
        <div className=" flex flex-col text-base  gap-2 transition-all">
          {navItems.map((item, index) => (
            <li
              className="px-2 text-blue hover:text-white hover:bg-blue"
              key={index}
            >
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
          {navBtn.map((item, index) => (
            <Link to={item.path} key={index}>
              <button className="hvr-sweep-to-right-black btn bg-black border border-black">
                {item.name}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
