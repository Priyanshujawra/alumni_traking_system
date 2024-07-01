import React from "react";
import { Link, Outlet, Navigate } from "react-router-dom";
import Das_Home from "../Dasboard_componet/Das_Home";
import { auth } from "../components/firebase";
function Alumni_dasBoard() {
  async function handleLogout() {
    try {
      await auth.signOut();
      console.log("User logged out successfully");
      // Redirect to home or login page after logout
      // Navigate("/") will redirect to the root of your application
      // Replace it with the appropriate path if needed
      window.location.href = "/login_A";
    } catch (error) {
      console.error("Logout error:", error.message);
      // Optionally, you can show an alert or handle the error in some other way
      alert("Error logging out: " + error.message);
    }
  }
  const navdata = [
    // { id: 1 , name:"DashBoard" , path:"M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M917v2H5v-2h4M21 3h-8v6h8V3M11 3H3v10h8V3m108h-8v10h8V11m-10 4H3v6h8v-6z"},

    {
      id: 1,
      name: "Alumni Info",
      link: "alumni_panal",

      path: "https://cdn.icon-icons.com/icons2/3249/PNG/512/person_info_filled_icon_200408.png",
    },
    {
      id: 2,
      name: "Event",
      link: "event_panal",

      path: "https://w7.pngwing.com/pngs/872/540/png-transparent-computer-icons-event-management-event-miscellaneous-angle-text-thumbnail.png",
    },
    {
      id: 3,
      name: "Jobs",
      link: "jobs_panal",

      path: "https://static.vecteezy.com/system/resources/previews/007/274/800/original/search-job-illustration-on-a-background-premium-quality-symbols-icons-for-concept-and-graphic-design-vector.jpg",
    },
    {
      id: 4,
      name: "Profile",
      link: "profile_panal",

      path: "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg",
    },
    {
      id: 5,
      name: "Alumni Idea",
      link: "Idea_panal",

      path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj03yvAQGy_rwiZlryoFcfalVhfORPIi6t2Q&s",
    },
    {
      id: 6,
      name: "Manage User",
      link: "User_panal",

      path: "https://cdn-icons-png.flaticon.com/512/3524/3524761.png",
    },
    {
      id: 7,
      name: "Contect Us",
      link: "contect_panal",

      path: "https://cdn-icons-png.flaticon.com/512/7269/7269995.png",
    },
  ];
  return (
    <div>
      <>
        {/* component */}
        <div className=" w-full flex overflow-hidden  dark:bg-[#f8f9fe]">
          <nav className="w-44   h-screen lg:relative fixed z-[9999] flex-col items-center shadow-md    bg-[#f8f9fe] py-4">
            {/* Left side NavBar */}
            <div>
              {/* App Logo */}
              <svg
                className="h-8 w-8 fill-current text-blue-600 dark:text-blue-400"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3m6.82
					6L12 12.72 5.18 9 12 5.28 18.82 9M17 16l-5 2.72L7 16v-3.73L12
					15l5-2.73V16z"
                />
              </svg>
              <span>Glocal Assocition</span>
            </div>
            <hr className=" bg-black w-full h-1 my-2" />
            <ul className="mt-2 w-full text-gray-700 dark:text-black capitalize">
              {/* Links */}
              {navdata.map((data) => (
                <li
                  key={data.id}
                  className="m-3 hover:shadow p-2 text-blue-600 dark:text-gray-500 rounded-lg"
                >
                  <Link to={data.link} className=" flex flex-row items-center ">
                    <div className="">
                      <img className="fill-current h-7 w-7" src={data.path} />
                    </div>

                    <div className=" text-sm ml-3">{data.name}</div>
                  </Link>
                </li>
              ))}
              <li
                onClick={handleLogout}
                className="m-3 hover:shadow p-2 text-blue-600 dark:text-gray-500 rounded-lg"
              >
                <div className=" flex flex-row items-center ">
                  <div className="">
                    <img
                      className="fill-current h-7 w-7"
                      src="https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/logout-512.png"
                    />
                  </div>

                  <div className=" text-sm ml-3">Logout</div>
                </div>
              </li>
            </ul>
            <div
              className="mt-auto flex items-center p-2 text-blue-700 bg-purple-200
			dark:text-blue-500 rounded-full"
            >
              {/* important action */}
              <Link to="Recent_event_set">
                <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
                  <path
                    d="M12 1c-5 0-9 4-9 9v7a3 3 0 003 3h3v-8H5v-2a7 7 0 017-7
						7 7 0 017 7v2h-4v8h4v1h-7v2h6a3 3 0
						003-3V10c0-5-4.03-9-9-9z"
                  />
                </svg>
              </Link>
            </div>
          </nav>
          <main
            className="  relative flex   z-[999] overflow-hidden  my-1 pt-2 pb-2 px-10 flex-1  dark:bg-[#f8f9fe] rounded-l-lg
		transition duration-500 ease-in-out "
          >
            {/* <Das_Home /> */}
            <Outlet />
          </main>
        </div>
      </>
    </div>
  );
}

export default Alumni_dasBoard;
