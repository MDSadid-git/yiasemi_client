import React from "react";
import BistroImage from "../../../Assets/home/featured.jpg";
import SectionTitle from "../../../ComponentShered/SectionTitile/SectionTitle";
import "./BistroBoss.css";

const BistroBoss = () => {
  return (
    <div>
      <div className="BistroItem py-10 bg-black opacity-80 bg-fixed">
        <div className="max-w-screen-xl mx-auto py-5 px-5 bg-white opacity-80">
          <SectionTitle heading="Bistro Boss" subHeading="it Out" />
          <div className=" md:flex space-x-5 justify-center items-center font-semibold">
            <div>
              <h4 className="uppercase">Where can i get some one?</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                eligendi est omnis recusandae vitae. Commodi tenetur in soluta
                ipsam consectetur expedita delectus nemo alias quos explicabo
                dolorem mollitia aliquid adipisci labore, vitae recusandae sint,
                rerum, temporibus illum ab libero doloribus. Consequuntur, esse
                alias. Sapiente blanditiis, animi aspernatur debitis amet
                numquam.
              </p>
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
                  Bistro Boss
                </span>
                <span class="relative invisible">Bistro Boss</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BistroBoss;
