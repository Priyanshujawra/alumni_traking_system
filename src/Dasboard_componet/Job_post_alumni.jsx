import React, { useEffect, useState } from "react";
import Line_animation from "../components/Line_nimation";
import { fatch_data } from "../components/strapi"; // Corrected typo
import { Link } from "react-router-dom";
function Job_post_alumni() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const postData = async () => {
      try {
        const response = await fatch_data();

        // Ensure response.data is an array, if not, set it to an empty array
        setData(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.log(error.message);
        setData([]); // Set data to an empty array on error
      }
    };
    postData();
  }, []);
  const handleNextpage = (e) => {
    console.log(e.target.id);
  };
  return (
    <div>
      <Line_animation name="Jobs " />
      {data.map((d) => (
        <div className="z-20 " key={d.id} onClick={handleNextpage}>
          <div className="m-5">
            <div className="group mx-2 mt-10 grid max-w-screen-md grid-cols-12 space-x-8 overflow-hidden rounded-lg border py-8 text-gray-700 shadow transition hover:shadow-lg sm:mx-auto">
              <a
                href="#"
                className="order-2 col-span-1 mt-4 -ml-14 text-left text-gray-600 hover:text-gray-700 sm:-order-1 sm:ml-4"
              >
                <div className="group relative h-16 w-16 overflow-hidden rounded-lg">
                  <img
                    src={d.attributes.url}
                    alt=""
                    className="h-full w-full object-cover text-gray-700"
                  />
                </div>
              </a>
              <div className="col-span-11 flex flex-col pr-8 text-left sm:pl-4">
                <h3 className="text-sm text-gray-600">
                  {d.attributes.companyname}
                </h3>
                <a
                  href="#"
                  className="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl"
                >
                  {d.attributes.jobname}
                </a>
                <p className="overflow-hidden pr-7 text-sm">
                  {d.attributes.about}
                </p>
                <div className="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
                  <div>
                    Location:
                    <span className="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900">
                      {d.attributes.location}
                    </span>
                  </div>
                  <div>
                    Experience:
                    <span className="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900">
                      {d.attributes.experienced}
                    </span>
                  </div>
                  <div>
                    Date:
                    <span className="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">
                      {d.attributes.lastdate}
                    </span>
                  </div>
                </div>
                <div className="flex cursor-pointer">
                  <Link to={`/student_dashboard/jobs_panal/${d.id}`}>
                    <button className="ml-auto flex bg-indigo-500 border-0 py-2 px-6 text-white focus:outline-none hover:bg-indigo-600 rounded">
                      More Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Job_post_alumni;
