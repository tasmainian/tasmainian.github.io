import React from "react";

export default function Timeline(props) {
  return (
    <>
    <section id="timeline" className="relative py-20">
      <div className="container mx-auto px-4">
        <div className="items-center flex flex-wrap">
          <div class="border-r-2 border-gray-500 absolute h-full top-0"></div>
          <div className="flex bg-transparent hover:bg-teal-500 border border-teal-500 hover:border-transparent rounded-full h-12 w-12" />
          <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 m-2">2</div>
          <div class="flex cursor-pointer bg-teal-500 border-teal-500 hover:border-transparent rounded-full h-5 w-5"></div>
          <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">2</div>
          <div class="flex cursor-pointer bg-teal-500 border-teal-500 hover:border-transparent rounded-full h-5 w-5"></div>
          <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>
          <div class="flex cursor-pointer bg-transparent hover:bg-teal-500 border border-gray-500 hover:border-transparent rounded-full h-5 w-5"></div>
          <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>
          <div className="flex cursor-pointer bg-transparent hover:bg-teal-500 border border-teal-500 hover:border-transparent rounded-full h-12 w-12" />
        </div>
      </div>
    </section>
    </>
  );
}
