"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";
import Top from "./Top";
import "animate.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { RiCustomerServiceFill } from "react-icons/ri";
import SearchBar from "../SearchBar";
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const [openSubIndex, setSubOpenIndex] = useState(-1);

  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };
  const handleSubSubmenu = (index) => {
    if (openSubIndex === index) {
      setSubOpenIndex(-1);
    } else {
      setSubOpenIndex(index);
    }
  };
  const usePathName = usePathname();
  const handleCloseNavbar = () => {
    setNavbarOpen(false);
  };
  return (
    <div
      className={`overflow-x-clip header left-0 z-40 top-0 w-full items-center bg-gradient-to-r font-semibold`}
    >
      <Top />
      <div className="lg:grid grid-cols-2">
        <div className="flex justify-center">
          <Link href="/" className={`header-logo block lg:ml-0 ml-2 my-3`}>
            <Image
              src="/logo/logo.webp"
              alt="logo"
              width={140}
              height={30}
              className="w-[190px] h-[120px]"
            />
          </Link>
        </div>
        <div className="pt-4">
          <div className="max-w-lg mx-auto">
            <SearchBar />
          </div>
          <div className="max-w-lg lg:mx-auto pt-4 mx-2">
            <div className="flex items-center justify-center space-x-10">
              <div className="flex space-x-4">
                <div className="text-white text-xl">
                  <FaFacebookF className="px-1 text-xl bg-lightgreen" />
                </div>

                <div className="text-white text-xl">
                  <FaInstagram className="px-1 bg-lightgreen" />
                </div>
                <div className="text-white text-xl">
                  <FaLinkedinIn className="px-1 bg-lightgreen" />
                </div>
              </div>
              <div className="text-gray-400">|</div>
              <div className="flex items-center">
                <RiCustomerServiceFill className="text-lightgreen text-4xl" />
                <div className="text-gray-500 text-sm">
                  <h4>For Support</h4>
                  <div className="text-lightgreen">
                    +91 9311883059 | +011 46536898
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className="flex justify-around bg-lightblue text-white">
        <div className="container flex items-center">
          <div className="flex items-center w-full justify-between lg:w-auto mx-5"></div>
          <div className=" flex items-center w-full justify-center lg:flex-grow">
            <button
              onClick={navbarToggleHandler}
              id="navbarToggler"
              aria-label="Mobile Menu"
              className=" rounded-full px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
            >
              <span
                className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300  ${
                  navbarOpen ? " top-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 ${
                  navbarOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300  ${
                  navbarOpen ? " top-[-8px] -rotate-45" : ""
                }`}
              />
            </button>
            <nav
              id="navbarCollapse"
              className={`navbar absolute right-0 z-30 rounded px-6 py-4 duration-300 dark:bg-dark lg:visible lg:static w-full lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                navbarOpen
                  ? "visibility top-[58%] opacity-100"
                  : "invisible top-[120%] opacity-0"
              }`}
            >
              <ul className="block lg:grid grid-cols-6 gap-4 relative bg-lightblue">
                {menuData.map((menuItem, index) => (
                  <li
                    onMouseEnter={() => handleSubmenu(menuItem.id)}
                    onMouseLeave={() => {
                      handleSubmenu(-1);
                      handleSubSubmenu(-1);
                    }}
                    key={index}
                    className={`group relative text-center ${
                      usePathName === menuItem.path
                        ? "bg-lightgreen"
                        : "text-dark hover:bg-lightgreen"
                    }`}
                  >
                    {menuItem.path ? (
                      <Link
                        onClick={handleCloseNavbar}
                        href={menuItem.path}
                        className={`flex py-2 px-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-3 `}
                      >
                        <div>{menuItem.title}</div>
                      </Link>
                    ) : (
                      <>
                        <p
                          onClick={() => {
                            handleSubmenu(menuItem.id);
                          }}
                          className=" px-2 flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:bg-lightgreen lg:mr-0 lg:inline-flex lg:px-0 lg:py-3"
                        >
                          {menuItem.title}
                          <IoMdArrowDropdown size={20}/>
                        </p>
                        <div
                          className={`submenu relative left-0 top-full lg:ml-0 pl-4 rounded-sm transition-[top] duration-300 lg:absolute lg:top-[102%] lg:w-[250px] lg:p-4 bg-lightblue lg:shadow-lg ${
                            openIndex == menuItem.id ? "block" : "hidden"
                          }`}
                        >
                          {menuItem.submenu.map((submenuItem, index) => (
                            <div
                              key={index}
                              className="group text-left relative bg-lightblue grid"
                            >
                              {submenuItem.path ? (
                                <Link
                                  onClick={handleCloseNavbar}
                                  href={submenuItem.path}
                                  key={index}
                                  className={`block rounded py-2 text-sm text-dark hover:bg-lightgreen lg:px-3`}
                                >
                                  {submenuItem.title}
                                </Link>
                              ) : (
                                <>
                                  <p
                                    onMouseEnter={() => {
                                      handleSubSubmenu(submenuItem.id);
                                    }}
                                    onClick={() => {
                                      handleSubSubmenu(submenuItem.id);
                                    }}
                                    className="rounded py-2 text-sm lg:px-3 flex cursor-pointer justify-between text-dark hover:bg-lightgreen"
                                  >
                                    {submenuItem.title}
                                    <IoMdArrowDropdown size={20}/>
                                  </p>
                                  <div
                                    className={`lg:ml-[225px] rounded-sm bg-lightblue lg:px-3 lg:py-2 lg:-mt-6 ml-4 transition-[top] duration-300 lg:absolute lg:w-[250px] lg:shadow-lg ${
                                      openSubIndex === submenuItem.id
                                        ? "block"
                                        : "hidden"
                                    }`}
                                  >
                                    {submenuItem.submenu.map(
                                      (subsubmenuItem, index) => (
                                        <Link
                                          onClick={handleCloseNavbar}
                                          href={subsubmenuItem.path}
                                          key={index}
                                          className="bg-lightblue block rounded py-2.5 text-sm text-dark hover:bg-lightgreen lg:px-3"
                                        >
                                          {subsubmenuItem.title}
                                        </Link>
                                      )
                                    )}
                                  </div>
                                </>
                              )}
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
