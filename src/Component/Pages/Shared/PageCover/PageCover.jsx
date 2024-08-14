import React from "react";

const PageCover = ({ coverImg }) => {
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
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageCover;
