import React, { useEffect, useState } from "react";
import Line_nimation from "../components/Line_nimation";
import { fatch_data_profile } from "../components/strapi";

function Alumni_porfile() {
  const [profileDetail, setprofile] = useState([]);

  useEffect(() => {
    const fetch_profile_data = async () => {
      try {
        const response = await fatch_data_profile(); // Corrected function name
        setprofile(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.log(error.message);
        setprofile([]); // Corrected state function name
      }
    };
    fetch_profile_data();
  }, []);
  return (
    <div>
      <Line_nimation name="Alumni Profile" />
      {profileDetail.map((profileData) => (
        <div className="m-10 w-[300px] capitalize" key={profileData.id}>
          <div className="rounded-lg border bg-white px-4 pt-8 pb-10 shadow-lg">
            <div className="relative mx-auto w-36 rounded-full">
              <span className="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2" />
              <img
                className="mx-auto h-auto w-full rounded-full"
                src={profileData.attributes.urlImage}
                alt=""
              />
            </div>
            <h1 className="my-1 text-center text-xl font-bold leading-8 text-gray-900">
              {profileData.attributes.name}
            </h1>
            <h3 className="font-lg text-semibold text-center leading-6 text-gray-600">
              {profileData.attributes.department}
            </h3>
            <p className="text-center ">
              {profileData.attributes.course}{" "}
              <span>{profileData.attributes.branch}</span>{" "}
            </p>
            <ul className="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
              <li className="flex items-center py-3 text-sm">
                <span>Joined On</span>
                <span className="ml-auto">
                  {profileData.attributes.joinBatch}
                </span>
              </li>
              <li className="flex items-center py-3 text-sm">
                <span>Joined On</span>
                <span className="ml-auto">
                  {profileData.attributes.PassYear}
                </span>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Alumni_porfile;
