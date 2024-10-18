import React from "react";
import Link from "next/link";

const Breadcrumbs = ({ bread }) => {
  return (
    <div className="flex justify-center">
      <nav
        className="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Breadcrumb"
      >
        <ol className="inline-flex items-center rtl:space-x-reverse">
          {bread.map((b) => (
            <li className="inline-flex items-center" key={b.id}>
              <Link
                href={b.url}
                className="inline-flex font-bold items-center text-sm hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
              >
                {b.name}
              </Link>
              {b.next && (
                <svg
                  className="rtl:rotate-180 h-3 mx-2 text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
