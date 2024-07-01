import React, { useState, useEffect } from "react";
import Line_nimation from "../components/Line_nimation";
import { fetch_alumni_idea } from "../components/strapi";

function Idea_info_panal() {
  const [ideas, setideas] = useState();

  useEffect(() => {
    const postdata = async () => {
      try {
        const response = await fetch_alumni_idea();

        setideas(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.log(error.message);
      }
    };
    postdata();
  }, []);

  return (
    <div>
      <Line_nimation name="Alumni_Idea's" />
      <div className="bg-white w-full  shadow mt-3 overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Idea Information
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Details and informations about Idea.
          </p>
        </div>
        {ideas.map((data) => (
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Full name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {data.attributes.firstName} {data.attributes.firstName}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Email</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {data.attributes.email}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Idea Name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {data.attributes.ideaName}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Phone No</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {data.attributes.phone}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Company Name
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {data.attributes.company}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">About</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {data.attributes.message}
                </dd>
              </div>
            </dl>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Idea_info_panal;
