import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-gray-900 pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px", transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-900 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl text-white font-semibold">
                Let's keep in touch!
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-gray-400">
                Find me on any of these platforms.
              </h5>
              <div className="mt-6">
                <button
                  className="bg-white text-teal-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 pt-1"
                  type="button"
                >
                  <i className="fill-current fab fa-twitter fa-lg"></i>
                </button>
                <button
                  className="bg-white text-teal-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 pt-1"
                  type="button"
                >
                  <i className="fill-current fab fa-facebook fa-lg"></i>
                </button>
                <button
                  className="bg-white text-teal-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 pt-1"
                  type="button"
                >
                  <i className="fill-current fab fa-linkedin-in fa-lg"></i>
                </button>
                <button
                  className="bg-white text-teal-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 pt-1"
                  type="button"
                >
                  <i className="fill-current fab fa-github fa-lg"></i>
                </button>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-400" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-600 font-semibold py-1">
                Copyright © {new Date().getFullYear()}{" "}Tasmiha Hassan{" "}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
