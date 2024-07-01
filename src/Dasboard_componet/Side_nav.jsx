import React from "react";

function Side_nav() {
  return (
    <div>
      <aside
        className="w-1/4 my-1 mr-1 px-6 py-4 flex flex-col bg-gray-200 dark:bg-black
	        	dark:text-gray-400 rounded-r-lg absolute overflow-y-auto"
      >
        {/* Right side NavBar */}
        <div className="flex items-center justify-between">
          {/* Info */}
          <a href="#" className="relative">
            {/* Left side */}
            <span>
              <svg
                className="h-5 w-5 hover:text-red-600 dark-hover:text-red-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
            </span>
            <div className="absolute w-2 h-2 left-0 mb-6 ml-2 bottom-0">
              <span
                className="px-2 py-1 bg-red-600 rounded-full text-white
						text-xs"
              >
                7
              </span>
            </div>
          </a>
          <div className="flex items-center">
            {/* Right side */}
            <img
              className="h-10 w-10 rounded-full object-cover"
              src="https://i.pinimg.com/originals/68/e1/e1/68e1e137959d363f172dc3cc50904669.jpg"
              alt="tempest profile"
            />
            <button className="ml-1 focus:outline-none">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 192 512">
                <path
                  d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72
							72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72
							72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0
							352c0 39.8 32.2 72 72 72s72-32.2
							72-72-32.2-72-72-72-72 32.2-72 72z"
                />
              </svg>
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Side_nav;
