import React from "react";
import PageCover from "../PageCover/PageCover";
import SheardMenu from "../../../ComponentShered/SheardMenu/SheardMenu";

const MenuCategory = ({ allItem, img, menuDesctription, menuTitle }) => {
  return (
    <div>
      {img && (
        <PageCover
          coverImg={img}
          menuTitle={menuTitle ? menuTitle : ""}
          menuDesctription={menuDesctription ? menuDesctription : ""}
        />
      )}
      {allItem && (
        <section className="max-w-screen-xl mx-auto my-5 px-5">
          <div className="grid md:grid-cols-2 gap-2">
            {allItem.map((item) => (
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
                Order Your Foods
              </span>
              <span class="relative invisible">Order Your Foods</span>
            </a>
          </div>
        </section>
      )}
    </div>
  );
};

export default MenuCategory;
