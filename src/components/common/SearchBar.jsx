"use client";

import React, { useState, useEffect, useRef } from "react";
import { service } from "@/data/service";
import { HealthPackage } from "@/data/packages";
import { rate } from "@/data/testrate";
import Link from "next/link";
const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [filteredServices, setFilteredServices] = useState([]);
  const [filteredPackages, setFilteredPackages] = useState([]);
  const [filteredRate, setFilteredRate] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const searchRef = useRef();
  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setQuery(searchQuery);

    if (searchQuery === "") {
      setFilteredServices([]);
      setFilteredPackages([]);
      setFilteredRate([]);
      setIsDropdownVisible(false);
      return;
    }

    const filteredRate = rate.filter((s) =>
      s.name.toLowerCase().includes(searchQuery)
    );

    const filteredServices = service.filter((s) =>
      s.name.toLowerCase().includes(searchQuery)
    );

    const filteredPackages =
      searchQuery.includes("health packages") ||
      searchQuery.includes("health") ||
      searchQuery.includes("health package")
        ? HealthPackage // Show all packages
        : HealthPackage.filter((p) => p.name.toLowerCase().includes(searchQuery)); // Normal filtering

    setFilteredServices(filteredServices);
    setFilteredPackages(filteredPackages);
    setFilteredRate(filteredRate);
    setIsDropdownVisible(true); // Show the dropdown
  };

  const handleClickOutside = (e) => {
    if (searchRef.current && !searchRef.current.contains(e.target)) {
      setQuery("");
      setFilteredServices([]);
      setFilteredPackages([]);
      setFilteredRate([]);
      setIsDropdownVisible(false); // Hide the dropdown
    }
  };

  const handleResultClick = () => {
    setQuery("");
    setFilteredServices([]);
    setFilteredPackages([]);
    setFilteredRate([]);
    setIsDropdownVisible(false); // Hide the dropdown
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="relative w-full p-2 flex items-center" ref={searchRef}>
      <input
        type="text"
        placeholder="Search for Services, Health Packages ..."
        value={query}
        onChange={handleSearch}
        className="bg-gray-50 border rounded-full border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full ps-5 p-2.5 dark:text-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:bg-white"
      />

      {isDropdownVisible && (
        <div className="absolute top-20 left-0 right-0 z-50 bg-white border shadow-lg rounded-lg p-6 max-h-[500px] overflow-y-auto">
          {filteredServices.length > 0 && (
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2"></div>
              <ul className="space-y-2">
                {filteredServices.map((doctor) => (
                  <Link
                    href={doctor.url}
                    key={doctor.id}
                    className=""
                    onClick={handleResultClick}
                  >
                    <li className="hover:bg-blue-100 col-span-5 p-2 text-gray-800 rounded-md transition-colors duration-300">
                      <div className="flex">
                        <div className="bg-blue-800 text-white px-2 py-1 rounded-md text-xs">
                          Service
                        </div>
                      </div>
                      <div className="grid grid-cols-6">
                        <div className="col-span-5">{doctor.name}</div>
                        <p className="text-lightgreen font-extrabold flex">
                          <div>₹</div> {doctor.price}
                        </p>
                      </div>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          )}
          {filteredPackages.length > 0 && (
            <div>
              {/* <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-gray-800">
                  Health Packages ({filteredPackages.length})
                </h3>
              </div> */}
              <ul className="space-y-2">
                {filteredPackages.map((p) => (
                  <Link
                    href={`/health-packages/${p.url}`}
                    key={p.id}
                    className=""
                    onClick={handleResultClick}
                  >
                    <li className="hover:bg-blue-100 col-span-5 p-2 text-gray-800 rounded-md transition-colors duration-300">
                      <div className="flex">
                        <div className="bg-blue-800 text-white px-2 py-1 rounded-md text-xs">
                          Package
                        </div>
                      </div>
                      <div className="grid grid-cols-6">
                        <div className="col-span-5">{p.name}</div>
                        <p className=" text-lightgreen font-extrabold flex">
                          <div>₹</div> {p.price}
                        </p>
                      </div>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          )}

          {filteredRate.length > 0 && (
            <div>
              <ul className="space-y-2">
                {filteredRate.map((p) => (
                  <Link
                    href={`/`}
                    key={p.id}
                    className=""
                    onClick={handleResultClick}
                  >

                    <li className="hover:bg-blue-100 col-span-5 p-2 text-gray-800 rounded-md transition-colors duration-300">
  
                     { p.category? (<div className="flex">
                        <div className="bg-blue-800 text-white px-2 py-1 rounded-md text-xs">
                          {p.category}
                        </div>
                      </div>): null}

                      
                      <div className="grid grid-cols-6">
                        <div className="col-span-5">{p.name}</div>
                        <p className=" text-lightgreen font-extrabold flex">
                          <div>₹</div> {p.price}
                        </p>
                      </div>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          )}

          {filteredServices.length === 0 &&
            filteredPackages.length === 0 &&
            filteredRate.length === 0 &&
            query !== "" && (
              <div className="text-center text-gray-600">
                <p>No results found for &quot;{query}&quot;.</p>
              </div>
            )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
