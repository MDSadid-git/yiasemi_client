import React from "react";

const PageCover = ({ coverImg, menuTitle, menuDesctription }) => {
  return (
    <div>
      <div
        className="hero md:h-[600px] h[400px]"
        style={{
          backgroundImage: `url(${coverImg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="flex justify-center md:pt-36 pt-5 text-center">
          <div className="max-w-md bg-black opacity-70 text-white p-7">
            <h1 className="mb-5 text-5xl font-bold uppercase">{menuTitle}</h1>
            <p className="mb-5">{menuDesctription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageCover;
