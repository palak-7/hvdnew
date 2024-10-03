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
            <form className="flex items-center">
              <label htmlFor="simple-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-50 border rounded-full border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full ps-5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search for Test & Health Checkups"
                />
              </div>
              <button
                type="submit"
                className="p-2.5 ms-2 text-sm font-medium text-white bg-lightgreen rounded-full border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </form>
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
                          <span className="pl-3 ">
                            <svg width="25" height="24" viewBox="0 0 25 24">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
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
                                    <span className="pl-3">
                                      <svg
                                        width="25"
                                        height="24"
                                        viewBox="0 0 25 24"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                          fill="currentColor"
                                        />
                                      </svg>
                                    </span>
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
