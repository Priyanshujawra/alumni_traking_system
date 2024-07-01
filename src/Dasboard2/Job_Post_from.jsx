// JobForm.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { jobService } from "../components/strapi";
const JobForm = () => {
  const [formData, setFormData] = useState({
    location: "",
    companyname: "",
    jobname: "",
    additional_about: "",
    about: "",
    salary: "",
    url: "",
    lastdate: 0,
    job_typ: "Full Time",
    skills: [],
    experienced: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const dataToSend = {
        data: {
          location: formData.location,
          companyname: formData.companyname,
          jobname: formData.jobname,
          additional_about: formData.additional_about,
          about: formData.about,
          salary: formData.salary,
          url: formData.url,
          lastdate: formData.lastdate,
          job_typ: formData.job_typ,
          experienced: formData.experienced,
          skills: [
            {
              type: "list",
              format: "unordered",
              children: formData.skills.map((skill) => ({
                type: "list-item",
                children: [
                  {
                    type: "text",
                    text: skill,
                  },
                ],
              })),
            },
          ],
        },
      };
      // Log the dataToSend to the console
      const response = await fetch("http://localhost:1337/api/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });
      // const response = await jobService.postJob(dataToSend);
      if (response.ok) {
        toast.success("Job posted successfully!", { position: "top-center" });
        // Optionally, redirect or perform any other action upon successful submission
      } else {
        alert("Failed to post job.");
      }
    } catch (error) {
      console.error("Error posting job:", error);
    }
  };

  const handleSkillChange = (index, value) => {
    const newSkills = [...formData.skills];
    newSkills[index] = value;
    setFormData({ ...formData, skills: newSkills });
  };

  return (
    <div>
      <ol className="lg:flex items-center w-full space-y-4 lg:space-x-8 lg:space-y-0">
        <li className="flex-1">
          <Link
            to="/sidebar/profile_panal"
            className="border-l-2 flex flex-col border-t-0 pl-4 pt-0 border-solid border-indigo-600 font-medium lg:pt-4 lg:border-t-2 lg:border-l-0 lg:pl-0"
          >
            <span className="text-sm lg:text-base text-indigo-600">Step 1</span>
            <h4 className="text-base lg:text-lg text-gray-900">
              User Detail Account
            </h4>
          </Link>
        </li>
        <li className="flex-1">
          <a className="border-l-2 flex flex-col border-t-0 pl-4 pt-0 border-solid border-indigo-300 font-medium lg:pt-4 lg:border-t-2 lg:border-l-0 lg:pl-0">
            <span className="text-sm lg:text-base text-indigo-600">Step 2</span>
            <h4 className="text-base lg:text-lg text-gray-900">
              Post Job and internship
            </h4>
          </a>
        </li>
      </ol>
      <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
        <span className="text-xl font-bold text-white capitalize dark:text-white">
          Post a Job
        </span>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="jobName"
              >
                Job Name
              </label>
              <input
                id="jobName"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                onChange={(e) =>
                  setFormData({ ...formData, jobname: e.target.value })
                }
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="location"
              >
                Location
              </label>
              <input
                id="location"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="Company Logo"
              >
                Company Logo URL
              </label>
              <input
                id="Company Logo"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                onChange={(e) =>
                  setFormData({ ...formData, url: e.target.value })
                }
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="companyName"
              >
                Company Name
              </label>
              <input
                id="companyName"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                onChange={(e) =>
                  setFormData({ ...formData, companyname: e.target.value })
                }
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="jobDescription"
              >
                Job Description
              </label>
              <textarea
                id="jobDescription"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                onChange={(e) =>
                  setFormData({ ...formData, additional_about: e.target.value })
                }
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="jobRequirements"
              >
                Job Requirements
              </label>
              <textarea
                id="jobRequirements"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                onChange={(e) =>
                  setFormData({ ...formData, about: e.target.value })
                }
              />
            </div>
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="salary">
                Salary
              </label>
              <input
                id="salary"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                onChange={(e) =>
                  setFormData({ ...formData, salary: e.target.value })
                }
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="jobType"
              >
                Job Type
              </label>
              <select
                id="jobType"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                onChange={(e) =>
                  setFormData({ ...formData, job_typ: e.target.value })
                }
              >
                <option value="Select Job type">Select Job type</option>

                <option value="full-time">Full Time</option>

                <option value="part-time">Part Time</option>
                <option value="contract">Contract</option>
                <option value="internship">Internship</option>
              </select>
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="lastdate"
              >
                lastdate
              </label>
              <input
                id="lastdate"
                type="date"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                onChange={(e) =>
                  setFormData({ ...formData, lastdate: e.target.value })
                }
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="experienced"
              >
                Experience
              </label>
              <input
                id="experienced"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                onChange={(e) =>
                  setFormData({ ...formData, experienced: e.target.value })
                }
              />
            </div>
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="skills">
                Skills
              </label>
              {formData.skills.map((skill, index) => (
                <input
                  key={index}
                  type="text"
                  value={skill}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  onChange={(e) => handleSkillChange(index, e.target.value)}
                />
              ))}
              <button
                type="button"
                onClick={() =>
                  setFormData({ ...formData, skills: [...formData.skills, ""] })
                }
                className="px-4 py-2 mt-2 text-white bg-blue-500 rounded"
              >
                Add Skill
              </button>
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
            >
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default JobForm;
