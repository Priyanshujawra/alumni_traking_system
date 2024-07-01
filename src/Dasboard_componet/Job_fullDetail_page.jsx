import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fatch_data } from "../components/strapi";
import { Link } from "react-router-dom";

const JobDetail = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await fatch_data();
        const jobData = response.data.find((job) => job.id === parseInt(jobId));
        setJob(jobData || null);
      } catch (error) {
        console.log(error.message);
        setJob(null);
      }
    };
    fetchJob();
  }, [jobId]);

  if (!job) {
    return <div>Job not found</div>;
  }

  // Destructure attributes from job
  const {
    jobname,
    companyname,
    url,
    about,
    additional_about,
    skills,
    location,
    salary,
    lastdate,
    job_typ,
  } = job.attributes;

  return (
    <div className="job-detail">
      <div className="bg-gray-50/90 py-6 w-full">
        <div className="container flex items-center justify-center px-4 text-center md:px-6">
          <div className="space-y-3">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {jobname}
            </h1>
            <div className="inline-flex items-center gap-2 text-sm font-medium md:gap-4">
              <p className="text-gray-500">at</p>
              <img
                src={url}
                width="120"
                height="40"
                alt="Logo"
                className="aspect-[3/1] overflow-hidden rounded-lg object-contain object-center"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container grid gap-10 px-4 py-8 text-base md:gap-16 md:px-6 lg:grid-cols-4 lg:gap-12 xl:gap-20">
        <div className="space-y-4 lg:col-start-2 lg:col-span-3 xl:space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              {jobname}
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Job Type - {job_typ}
            </p>
          </div>
          <div className="space-y-4 text-lg/relaxed lg:space-y-6 xl:text-xl/relaxed">
            <div>
              <h3 className="text-xl font-semibold">Description</h3>
              <p>{about}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Description</h3>
              <p>{additional_about}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold"> Skills Requirements</h3>
              <ul className="list-disc list-inside">
                {/* Render skills dynamically */}
                {skills[0].children.map((item, index) => (
                  <li key={index}>{item.children[0].text}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-4 border rounded-lg border-gray-200 lg:col-start-1 lg:row-start-1 lg:space-y-6 dark:border-gray-800">
          <div className="p-4">
            <h3 className="text-xl font-semibold">Location</h3>
            <p className="text-sm font-normal">{location}</p>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold">Salary Range</h3>
            <p className="text-sm font-normal">{salary}</p>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold">Application Deadline</h3>
            <p className="text-sm font-normal">{lastdate}</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 min-[400px]:flex-row lg:col-start-4 lg:gap-4 justify-center">
          <Link
            to="#"
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-[#93e0f8] dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            prefetch={false}
          >
            Apply for this job
          </Link>
        </div>
      </div>

      <div className="container grid gap-10 px-4 py-8 text-base md:gap-16 md:px-6 lg:grid-cols-4 lg:gap-12 xl:gap-20">
        <div className="space-y-4 lg:col-start-1 lg:col-span-3 xl:space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              {companyname}
            </h2>
            <div className="inline-flex items-center gap-2 text-sm font-medium md:gap-4">
              <img
                src={url}
                width="120"
                height="40"
                alt="Logo"
                className="aspect-[3/1] overflow-hidden rounded-lg object-contain object-center"
              />
              <Link
                to="#"
                className="text-gray-500 underline dark:text-gray-400"
                prefetch={false}
              >
                Visit Website
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
