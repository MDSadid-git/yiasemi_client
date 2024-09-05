import React, { useEffect, useState } from "react";
import SectionTitle from "../../../ComponentShered/SectionTitile/SectionTitle";
import SheardMenu from "../../../ComponentShered/SheardMenu/SheardMenu";
import useMenu from "../../../Hooks/useMenu";

const PopluerMenu = () => {
  const [menu, PopluerMenu] = useMenu();

  // const PopluerMenu = menu.filter((item) => item.category === "popular");
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItem = data.filter((item) => item.category === "popular");
  //       setMenu(popularItem);
  //     });
  // });
  // console.log(menu)
  return (
    <section className="max-w-screen-xl mx-auto my-5 px-5">
      <SectionTitle heading="Check it Out" subHeading="From Our Menu" />
      <div className="grid md:grid-cols-2 gap-2">
        {PopluerMenu.map((item) => (
          <SheardMenu key={item._id} item={item}></SheardMenu>
        ))}
      </div>
      <div>
        <a
          href="#_"
          class="relative inline-flex my-5 items-center justify-center p-4 px-6 py-1 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-brand rounded-full shadow-md group"
        >
          <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-brand group-hover:translate-x-0 ease">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span class="absolute flex items-center justify-center w-full h-full text-brand transition-all duration-300 transform group-hover:translate-x-full ease">
            View Full Menu
          </span>
          <span class="relative invisible">View Full Menu</span>
        </a>
      </div>
    </section>
  );
};

export default PopluerMenu;
