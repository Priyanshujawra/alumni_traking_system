import React from "react";
import "../css/inovation_head.css";
import { Link } from "react-router-dom";
function Inovation_idea() {
  return (
    <div>
      <div className="svg-wrapper">
        <svg>
          <text x="50%" y="50%" dy=".35em" textAnchor="middle">
            Having A Startup IDEA IN MIND
          </text>
        </svg>
      </div>
      <section className="text-gray-600 body-font ">
        <div className="container mx-auto flex px-5 py-4 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded w-full"
              alt="hero"
              src="https://i.pinimg.com/originals/ba/e7/68/bae7685f239ebf3c9a29747073c922d2.gif"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <p>IDEATION</p>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Ideate And Create
              <br className="hidden lg:inline-block" />
              Inovation
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div className="flex justify-center">
              <Link to="/InovForm">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Submit Your Idea
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Inovation_idea;
