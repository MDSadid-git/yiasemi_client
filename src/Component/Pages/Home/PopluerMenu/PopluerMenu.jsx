import React, { useEffect, useState } from "react";
import SectionTitle from "../../../ComponentShered/SectionTitile/SectionTitle";
import SheardMenu from "../../../ComponentShered/SheardMenu/SheardMenu";
import useMenu from "../../../Hooks/useMenu";

const PopluerMenu = () => {
  const { menu, PopluerMenu } = useMenu();

  return (
    <section className="max-w-screen-xl mx-auto my-5 px-5">
      <SectionTitle heading="Check it Out" subHeading="From Our Menu" />
      <div className="grid md:grid-cols-2 gap-2">
        {PopluerMenu?.map((item) => (
          <SheardMenu key={item._id} item={item}></SheardMenu>
        ))}
      </div>
      <div>
        <a
          href="#_"
          className="relative inline-flex my-5 items-center justify-center p-4 px-6 py-1 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-brand rounded-full shadow-md group"
        >
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-brand group-hover:translate-x-0 ease">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-brand transition-all duration-300 transform group-hover:translate-x-full ease">
            View Full Menu
          </span>
          <span className="relative invisible">View Full Menu</span>
        </a>
      </div>
    </section>
  );
};

export default PopluerMenu;
