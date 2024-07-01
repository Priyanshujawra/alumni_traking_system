import React from "react";

function Alumni_community() {
  return (
    <div>
      <section className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="max-w-[1024px] w-[90%] mx-auto flex  items-center justify-center flex-col-reverse md:flex-row gap-10">
          <div className="flex-1  text-center md:text-left">
            <p className=" text-gray-500">JOBS</p>
            <h1 className="text-4xl md:text-[60px] font-bold text-primary leading-tight uppercase shadowoftext">
              Belive In Power of Community
            </h1>
            <p className="text-sm md:text-lg text-[#7c969b]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore esse unde sunt possimus minus aut voluptas asperiores{" "}
            </p>
            <button className="flex  mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              See Jobs Community
            </button>
          </div>
          <div className="flex-1 ">
            <div className="w-full h-[50vh] md:h-screen overflow-hidden relative">
              <img
                className="w-full h-full md:h-[150vh] object-contain md:absolute md:top-[-25%]"
                src="../images/comments.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Alumni_community;
