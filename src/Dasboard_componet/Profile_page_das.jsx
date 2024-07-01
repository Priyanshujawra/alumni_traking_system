import React, { useEffect, useState } from "react";
import { auth, db } from "../components/firebase";
import { doc, getDoc } from "firebase/firestore";
import { Navigate } from "react-router-dom";
import ProfileImageEditor from "./Selact_Profile_image";
import Loader from "../components/Loader";
function Profile_page_das() {
  const [userDetails, setUserDetails] = useState(null);
  const [aboutDetail, setdetail] = useState("Write About Yourself");
  const [showandhide, settoggle] = useState(false);
  const showinput = () => {
    settoggle(!showandhide);
  };
  const setaboutdetail = () => {
    setdetail(aboutDetail);
    settoggle(!showandhide);
    localStorage.setItem("aboutDetail", aboutDetail);
  };
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } else {
        console.log("User is not logged in");
      }
    });
  };

  useEffect(() => {
    const storedAboutDetail = localStorage.getItem("aboutDetail");
    if (storedAboutDetail) {
      setdetail(storedAboutDetail);
    }
    fetchUserData();
  }, []);
  async function handlelogout() {
    try {
      await auth.signOut();
      // Navigate("/");
      window.location.href = "/";
    } catch (error) {
      alert("user is log out sccessfully");
    }
  }
  return (
    <div className=" w-full">
      {/* <ProfileImageEditor /> */}
      {userDetails ? (
        <div className="bg-white md:mx-auto rounded shadow-xl w-full overflow-hidden">
          <div className="h-[140px] bg-gradient-to-r from-cyan-500 to-blue-500" />
          <div className="px-5 py-2 flex flex-col gap-3 pb-6">
            {/* <div className="h-[90px] shadow-md w-[90px] rounded-full border-4 overflow-hidden -mt-14 border-white"> */}
            <ProfileImageEditor />
            {/* </div> */}
            <div className="">
              <h3 className="text-xl text-slate-900 relative font-bold leading-6">
                {userDetails.fullname}
              </h3>
              <p className="text-sm text-gray-600">
                Glocal University - Saharanpur Uttar Pradesh
              </p>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                className="inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-800 transition hover:border-gray-300 active:bg-white hover:bg-gray-100 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                Send Message
              </button>
              <button
                type="button"
                onClick={handlelogout}
                className="inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded border border-gray-200 bg-blue-700 px-3 py-2 text-sm font-medium text-white transition hover:border-blue-300 hover:bg-blue-600 active:bg-blue-700 focus:blue-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                LogOut
              </button>
            </div>
            <h4 className="text-md font-medium leading-3">About</h4>
            <p className="text-sm text-stone-500">
              <div className="flex items-center ">
                <p className="mr-4 capitalize">{aboutDetail}</p>
                <button
                  className="p-3 bg-cyan-700 rounded hover:bg-cyan-950 text-white "
                  onClick={showinput}
                >
                  Add
                </button>
              </div>
              <div>
                {showandhide && (
                  <div className="flex items-center mt-5 max-w-96 ">
                    <textarea
                      type="text"
                      onChange={(e) => setdetail(e.target.value)}
                      placeholder="Enter the Text"
                      value={aboutDetail}
                      className=" border  mr-4 w-full"
                    />
                    <button
                      className="p-3 bg-cyan-700 rounded hover:bg-cyan-950 text-white "
                      onClick={setaboutdetail}
                    >
                      Select
                    </button>
                  </div>
                )}
              </div>
            </p>
            <h4 className="text-md font-medium leading-3">User Details</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 px-2 py-3 bg-white rounded border w-full ">
                <div className="leading-3">
                  <p className=" text-sm font-bold text-slate-700">Course</p>
                </div>
                <p className="text-sm text-slate-500 self-start ml-auto">
                  {userDetails.course_n}
                </p>
              </div>
              <div className="flex items-center gap-3 px-2 py-3 bg-white rounded border w-full ">
                <div className="leading-3">
                  <p className=" text-sm font-bold text-slate-700">
                    Batch Year
                  </p>
                </div>
                <p className="text-sm text-slate-500 self-start ml-auto">
                  {userDetails.year}
                </p>
              </div>
              <div className="flex items-center gap-3 px-2 py-3 bg-white rounded border w-full ">
                <div className="leading-3">
                  <p className=" text-sm font-bold text-slate-700">
                    Nationality
                  </p>
                </div>
                <p className="text-sm text-slate-500 self-start ml-auto">
                  {userDetails.country_name}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Profile_page_das;
