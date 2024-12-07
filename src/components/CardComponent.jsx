import React from "react";

const CardComponent = ({ bannerImage, profileImage, name, buildingInfo, content }) => {
  return (
    <div className="w-64 h-80 mx-auto m-3 rounded-xl shadow-lg overflow-hidden bg-white">
      {/* Banner */}
      <div className="h-24 bg-red-300">
        {bannerImage && (
          <img
            src={bannerImage}
            alt="Banner"
            className="h-full w-full object-cover"
          />
        )}
      </div>

      {/* Profile Section */}
      <div className="relative -mt-12">
        {/* Profile Picture */}
        <div className="w-20 h-20 mx-auto rounded-full border-4 border-white bg-gray-100">
          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 rounded-full"></div>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="text-center p-4">
        {/* Name */}
        <h2 className="text-lg font-bold truncate">{name || "Name"}</h2>

        {/* Building Information */}
        <p className="text-gray-500 truncate">{buildingInfo || "Building XYZ"}</p>

        {/* Additional Content */}
        <p className="mt-4 text-sm text-gray-600">
          {content || "This will be the content box"}
        </p>
      </div>
    </div>
  );
};

export default CardComponent;