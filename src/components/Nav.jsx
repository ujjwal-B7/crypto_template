import React from "react";

const Nav = () => {
  return (
    <nav>
      <section className="section-container flex-between text-white md:h-28 h-24 px-4 text-[14px] nav-links">
        <div className="flex-between gap-10">
          <div className="lg:border-r-2 lg:border-[#53516c] lg:pr-7">
            <img
              src="https://assets-global.website-files.com/5f8f28722b0eae892596eb35/5fac14536bfe49d6412e1990_logo-crypto-template.svg"
              alt=""
            />
          </div>
          <div>
            <ul className="lg:flex justify-between items-center hidden  gap-5  cursor-pointer">
              <li>HOME</li>
              <li>ABOUT</li>
              <li>PRICING</li>
              <li>TOKENS</li>
              <li>BLOG</li>
              <li>PAGES</li>
            </ul>
          </div>
        </div>
        <div className="flex-between md:gap-7 gap-3">
          <ul>
            <li>CART (0)</li>
          </ul>
          <button className="btn px-4 py-2 md:block hidden">
            DOWNLOAD APP
          </button>
          <div className="lg:hidden p-1 bg-[#6639e4]">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-9 h-9"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                />
              </svg>
            </span>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Nav;
