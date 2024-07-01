import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../css/Recant_Event.scss";
import Event_Data from "../Data/Event_Data";

const Recant_Event = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={2}
      pagination={true}
      loop={true}
      className="mySwiper"
    >
      {Event_Data.map((data, i) => (
        <SwiperSlide key={i}>
          <section
            className="text-gray-600 body-font overflow-hidden"
            id="Recent_event_set"
          >
            <div className="container px-5 py-24 mx-auto">
              <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                  <h2 className="text-sm title-font text-gray-500 tracking-widest">
                    EVENT NAME
                  </h2>
                  <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                    {data.Event_name}
                  </h1>
                  <div className="flex mb-4">
                    <a
                      className={`flex-grow text-indigo-500 cursor-pointer border-b-2 hover:border-indigo-500 py-2 text-lg px-1 ${
                        activeTab === 0 ? "border-indigo-500" : ""
                      }`}
                      onClick={() => handleTabChange(0)}
                    >
                      Description
                    </a>
                    <a
                      className={`flex-grow border-b-2 cursor-pointer hover:text-indigo-500 hover:border-indigo-500 border-gray-300 py-2 text-lg px-1 ${
                        activeTab === 1 ? "border-indigo-500" : ""
                      }`}
                      onClick={() => handleTabChange(1)}
                    >
                      Reviews
                    </a>
                    <a
                      className={`flex-grow border-b-2 cursor-pointer hover:text-indigo-500 hover:border-indigo-500 border-gray-300 py-2 text-lg px-1 ${
                        activeTab === 2 ? "border-indigo-500" : ""
                      }`}
                      onClick={() => handleTabChange(2)}
                    >
                      Details
                    </a>
                  </div>
                  {activeTab === 0 && (
                    <div>
                      <p className="leading-relaxed mb-4">{data.Description}</p>
                      <div className="flex border-t border-gray-200 py-2">
                        <span className="text-gray-500">Date</span>
                        <span className="ml-auto text-gray-900">
                          {data.Date}
                        </span>
                      </div>
                      <div className="flex border-t border-gray-200 py-2">
                        <span className="text-gray-500">Event Planner</span>
                        <span className="ml-auto text-gray-900">
                          {data.Event_plan}
                        </span>
                      </div>
                      <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                        <span className="text-gray-500">Collage</span>
                        <span className="ml-auto text-gray-900">
                          {data.collage}
                        </span>
                      </div>
                      <div className="flex">
                        <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                          More Details
                        </button>
                      </div>
                    </div>
                  )}
                  {activeTab === 1 && (
                    <div>
                      <p>hi my name is priyanshu</p>
                    </div>
                  )}
                  {activeTab === 2 && (
                    <div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reprehenderitexpedita tempora voluptatibus velit id
                        alias, dicta maiores temporibus in placeat amet mollitia
                        soluta? Laboriosam, cum assumenda veniam illum natus
                        rerum?
                      </p>
                    </div>
                  )}
                </div>
                <img
                  alt="ecommerce"
                  className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                  src={data.image}
                />
              </div>
            </div>
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Recant_Event;
