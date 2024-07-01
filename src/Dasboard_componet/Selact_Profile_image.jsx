import React, { useState } from "react";

const ProfileImageEditor = () => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [hideshow, sethide] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleToggleHideShow = () => {
    sethide(!hideshow);
  };

  return (
    <div>
      <div className=" cursor-pointer " onClick={handleToggleHideShow}>
        {imageUrl ? (
          <img
            // onClick={handleToggleHideShow}
            src={imageUrl}
            alt="Profile Image"
            className="w-48 h-48 rounded-full cursor-pointer"
          />
        ) : (
          <div className="w-48 h-48 rounded-full bg-gray-200 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0v1m-5 4h2"
              />
            </svg>
          </div>
        )}
      </div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
        id="profile-image-input"
      />
      {hideshow && (
        <label
          htmlFor="profile-image-input"
          className="absolute top-[17rem] left-52  bg-gray-100 text-white font-bold  rounded-full cursor-pointer"
        >
          <img
            className="w-12 rounded hover:shadow-sm"
            src="https://static.vecteezy.com/system/resources/previews/009/664/135/original/pencil-icon-transparent-free-png.png"
            alt="Select"
          />
        </label>
      )}
    </div>
  );
};

export default ProfileImageEditor;
