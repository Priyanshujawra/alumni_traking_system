import "../css/Das_home_style.css";
import React, { useState, useEffect } from "react";
// import { IonIcon } from "ionicons";
import { TweenMax, Expo } from "gsap";
import * as THREE from "three";
import hoverEffect from "hover-effect";

function Das_Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Initialize hover effect
    new hoverEffect({
      parent: document.querySelector(".distortion"),
      intensity: 0.2,
      image1: "../images/user-36-01.jpg",
      image2: "../images/user-36-01.jpg",
      displacementImage: "../images/user-36-01.jpg",
      imagesRatio: 380 / 300,
    });

    // Animate navbar
    TweenMax.staggerFrom(
      ".navbar div",
      1.5,
      {
        delay: 1.5,
        opacity: 0,
        y: "20",
        ease: Expo.easeInOut,
      },
      0.08
    );

    // Animate media

    // Animate text

    // Animate sponsor

    // Animate overlay
    TweenMax.to(".first", 1.5, {
      delay: 0.5,
      top: "-100%",
      ease: Expo.easeInOut,
    });

    TweenMax.to(".second", 1.5, {
      delay: 0.7,
      top: "-100%",
      ease: Expo.easeInOut,
    });

    TweenMax.to(".third", 1.5, {
      delay: 0.9,
      top: "-100%",
      ease: Expo.easeInOut,
    });

    setLoaded(true);
  }, []);

  return (
    <div className="wrapper">
      {/* OVERLAY */}
      <div className="overlay first"></div>
      <div className="overlay second"></div>
      <div className="overlay third"></div>

      <div className=" flex lg:h-screen justify-around  lg:flex-row flex-col ">
        {/* NAVBAR */}
        {/* <div class="flex items-center flex-row medias_lo  "> */}
        <div className="min-h-[300px] flex flex-row ">
          <div className="flex flex-col items-start lg:w-56  rounded-r-3xl overflow-hidden">
            <ul className="flex flex-row  uppercase lg:-rotate-90 lg:absolute top-[15rem] -left-20   py-4">
              <li className=" p-6">
                <a
                  href="#"
                  className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                >
                  <span className="text-xl font-medium">facboak</span>
                </a>
              </li>
              <li className=" p-6">
                <a
                  href="#"
                  className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                >
                  <span className="text-xl font-medium">twitter</span>
                </a>
              </li>
              <li className=" p-6">
                <a
                  href="#"
                  className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                >
                  <span className="text-xl font-medium">Linkdin</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* </div> */}
        {/* TEXT */}
        <div className="text_al lg:-rotate-90 w-full   p-7">
          <h1>
            <span className="hidetext">Glocal&Alumni's</span>
          </h1>
          <h2>duality</h2>
          <h3>
            <span className="hidetext w-screen text-4xl">
              Established 2012 <br /> Private
            </span>
          </h3>
          <p>
            <span className="hidetext text-xs mt-3 w-[10rem]">
              Glocal University is a private and coeducational institution
              located in Saharanpur, Uttar Pradesh, India. It is situated in the
              foothills of Shivalik mountains
            </span>
          </p>
        </div>

        <div className="images_of_coll relative -left-[6rem]">
          <img
            src="https://glocaluniversityindia.wordpress.com/wp-content/uploads/2016/12/glocal-student-services.png?w=960"
            alt=""
          />
          <img
            className="mt-5"
            src="https://media.licdn.com/dms/image/C5122AQGf4MooEUSwoQ/feedshare-shrink_800/0/1580236619988?e=2147483647&v=beta&t=icSU6lWZxQz8EXETKUPujlXejI9h6bnhVzZR_bvfHsA"
            alt=""
          />
          {/* <img src="../images/user-36-01.jpg" alt="" /> */}
        </div>
      </div>
    </div>
  );
}

export default Das_Home;
