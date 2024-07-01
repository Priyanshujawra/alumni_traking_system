import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Sign_up = () => {
  const [selectedForm, setSelectedForm] = useState("student");
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    address: "",
    city: "",
    country: "",
    state: "",
    zipcode: "",
    password: "",
    student_id: "",
    course: "",
    year: "",
    Pass_year: "",
    Staff_id: "",
    alumni_id: "",
  });

  const handleFormChange = (event) => {
    const newForm = event.target.value;
    setSelectedForm(newForm);
    setFormData((prevData) => ({
      ...prevData,
      student_id: newForm === "student" ? prevData.student_id : "",
      course:
        newForm === "student" || newForm === "alumni" ? prevData.course : "",
      year: newForm === "student" || newForm === "alumni" ? prevData.year : "",
      Pass_year:
        newForm === "student" || newForm === "alumni" ? prevData.Pass_year : "",
      Staff_id: newForm === "Staff_id" ? prevData.Staff_id : "",
      alumni_id: newForm === "alumni" ? prevData.alumni_id : "",
    }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const {
      email,
      password,
      full_name,
      address,
      city,
      country,
      state,
      course,
      student_id,
      year,
      Pass_year,
      Staff_id,
      alumni_id,
    } = formData;

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await setDoc(doc(db, "Users", user.uid), {
        emailName: user.email,
        fullname: full_name,
        addressName: address,
        cityName: city,
        country_name: country,
        State_n: state,
        course_n: course,
        student_id: student_id,
        year: year,
        Pass_year: Pass_year,
        Staff_id: Staff_id,
        alumni_id: alumni_id,
        role: selectedForm, // Add role to user document
      });

      toast.success("User Registered Successfully", { position: "top-center" });
    } catch (error) {
      toast.error(error.message, { position: "bottom-center" });
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <h2 className="font-semibold text-xl text-gray-600">Sign Up</h2>
          <p className="text-gray-500 mb-6">Enter Your Details Properly</p>
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6"
          >
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <p className="font-medium text-lg">Personal Details</p>
                <p>Please fill out all the fields.</p>
                <div className="break-inside-avoid mb-8">
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src="https://pagedone.io/asset/uploads/1688031357.jpg"
                    alt="Gallery"
                  />
                </div>
                <a
                  href="#"
                  className="flex items-center justify-center mt-8 text-white rounded-lg shadow-md hover:bg-gray-100"
                >
                  <div className="px-4 py-3">
                    <svg className="h-6 w-6" viewBox="0 0 40 40">
                      <path
                        d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                        fill="#FFC107"
                      />
                      <path
                        d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                        fill="#FF3D00"
                      />
                      <path
                        d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                        fill="#4CAF50"
                      />
                      <path
                        d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                        fill="#1976D2"
                      />
                    </svg>
                  </div>
                  <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">
                    Sign in with Google
                  </h1>
                </a>
              </div>
              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-5">
                    <label htmlFor="form_select">Select Form</label>
                    <select
                      id="form_select"
                      value={selectedForm}
                      onChange={handleFormChange}
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    >
                      <option value="student">Student</option>
                      <option value="Staff_id">Staff/Faculty</option>
                      <option value="alumni">Alumni</option>
                    </select>
                  </div>
                  <div className="md:col-span-5">
                    <label htmlFor="full_name">Full Name</label>
                    <input
                      type="text"
                      name="full_name"
                      id="full_name"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={formData.full_name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="md:col-span-5">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="md:col-span-3">
                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={formData.address}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={formData.city}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="country">Country / region</label>
                    <input
                      type="text"
                      name="country"
                      id="country"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={formData.country}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="state">State / province</label>
                    <input
                      type="text"
                      name="state"
                      id="state"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={formData.state}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="md:col-span-1">
                    <label htmlFor="zipcode">Zipcode</label>
                    <input
                      type="text"
                      name="zipcode"
                      id="zipcode"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={formData.zipcode}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="md:col-span-5">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                  </div>
                  {selectedForm === "student" && (
                    <>
                      <div className="md:col-span-2">
                        <label htmlFor="student_id">Student ID</label>
                        <input
                          type="text"
                          name="student_id"
                          id="student_id"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={formData.student_id}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="course">Course</label>
                        <input
                          type="text"
                          name="course"
                          id="course"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={formData.course}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="year">Year</label>
                        <input
                          type="text"
                          name="year"
                          id="year"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={formData.year}
                          onChange={handleInputChange}
                        />
                      </div>
                    </>
                  )}
                  {selectedForm === "alumni" && (
                    <>
                      <div className="md:col-span-2">
                        <label htmlFor="alumni_id">Alumni ID</label>
                        <input
                          type="text"
                          name="alumni_id"
                          id="alumni_id"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={formData.alumni_id}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="course">Course</label>
                        <input
                          type="text"
                          name="course"
                          id="course"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={formData.course}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="Pass_year">Passing Year</label>
                        <input
                          type="text"
                          name="Pass_year"
                          id="Pass_year"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={formData.Pass_year}
                          onChange={handleInputChange}
                        />
                      </div>
                    </>
                  )}
                  {selectedForm === "Staff_id" && (
                    <div className="md:col-span-2">
                      <label htmlFor="Staff_id">Staff/Faculty ID</label>
                      <input
                        type="text"
                        name="Staff_id"
                        id="Staff_id"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={formData.Staff_id}
                        onChange={handleInputChange}
                      />
                    </div>
                  )}
                  <div className="md:col-span-5 text-right">
                    <div className="inline-flex items-end">
                      <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-5 text-right mt-4">
                  <Link
                    to="/login_A"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Already have an account? Login here
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sign_up;
