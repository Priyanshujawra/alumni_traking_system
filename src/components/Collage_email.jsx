import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { sendSignInLinkToEmail } from "firebase/auth";
import { auth } from "./firebase"; // Ensure you have Firebase initialized in this file
import { toast } from "react-toastify";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [validEmails, setValidEmails] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchValidEmails = async () => {
      try {
        const response = await fetch(
          "http://localhost:1337/api/student-emails"
        );
        const data = await response.json();

        // Extract the email addresses from the fetched data
        const emails = data.data.map((item) => item.attributes.email);
        setValidEmails(emails);
      } catch (err) {
        console.error("Error fetching valid emails: ", err);
      }
    };

    fetchValidEmails();
  }, []);

  const handleSignIn = async (event) => {
    event.preventDefault();
    setError("");

    try {
      if (validEmails.includes(email)) {
        const actionCodeSettings = {
          url: "http://localhost:5173/Alumni_das",
          handleCodeInApp: true,
        };

        await sendSignInLinkToEmail(auth, email, actionCodeSettings);

        window.localStorage.setItem("emailForSignIn", email);
        toast.success("A verification link has been sent to your email.", {
          position: "top-center",
        });

        // setError("A verification link has been sent to your email.");
      } else {
        toast.warning("You must sign in with your university email.", {
          position: "top-center",
        });

        // setError("You must sign in with your university email.");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <div className="py-16">
        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
          <div
            className="hidden lg:block lg:w-1/2 bg-cover"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80")',
            }}
          ></div>
          <div className="w-full p-8 lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-700 text-center">
              Glocal Member
            </h2>
            <p className="text-xl text-gray-600 text-center">Welcome back!</p>
            <form onSubmit={handleSignIn}>
              <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email Address
                </label>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              {error && <p className="text-red-500 text-xs mt-4">{error}</p>}
              <div className="mt-8">
                <button
                  type="submit"
                  className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
