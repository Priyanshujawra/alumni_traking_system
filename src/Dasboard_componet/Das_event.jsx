import React, { useEffect, useState } from "react";
import { fatch_data_event } from "../components/strapi"; // Corrected function name

function Das_event() {
  const [eventDetail, setEvent] = useState([]);

  useEffect(() => {
    const fetch_event_data = async () => {
      try {
        const response = await fatch_data_event(); // Corrected function name
        setEvent(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.log(error.message);
        setEvent([]); // Corrected state function name
      }
    };
    fetch_event_data();
  }, []);

  return (
    <div>
      {eventDetail.map((data) => (
        <React.Fragment key={data.id}>
          {/* component */}
          <div className="max-w-3xl mx-auto text-center my-16">
            <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                Collage Recent Event
              </span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500" />
            </h1>
          </div>
          <div className="mx-auto lg:w-[650px]  flex  px-8">
            <div className="flex flex-col w-full bg-white rounded shadow-lg ">
              <div
                className="w-full  bg-top bg-cover rounded-t"
                style={
                  {
                    // backgroundImage: `url(${data.attributes.imageurl})`,
                  }
                }
              >
                <img
                  src={data.attributes.imageurl}
                  alt=""
                  className=" h-96 w-full"
                />
              </div>
              <div className="flex flex-col w-full md:flex-row">
                <div className="flex flex-row justify-around p-4 font-bold leading-none text-gray-800 uppercase bg-gray-400 rounded md:flex-col md:items-center md:justify-center md:w-1/4">
                  <div className="md:text-3xl">{data.attributes.date}</div>
                </div>
                <div className="p-4 font-normal text-gray-800 md:w-3/4">
                  <h1 className="mb-4 text-4xl cursor-pointer font-bold leading-none tracking-tight text-gray-800">
                    {data.attributes.title}
                  </h1>
                  <p className="leading-normal">{data.attributes.about}</p>
                  <div className="flex flex-row items-center mt-4 text-gray-700">
                    <div className="w-1/2">{data.attributes.place}</div>
                    <div className="w-1/2 flex justify-end">
                      <img
                        src="https://collegefootballplayoff.com/images/section_logo.png"
                        alt=""
                        className="w-8"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Das_event;
