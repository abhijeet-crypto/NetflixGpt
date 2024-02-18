import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video px-20  pt-[20%] absolute  text-white">
      <h1 className="text-5xl font-bold">{title}</h1>
      <div className="py-6 text-lg w-1/4">{overview}</div>
      <div className="flex gap-4">
        <button className="bg-white text-black py-2 w-24 rounded hover:bg-opacity-80">
          Play
        </button>
        <button className="bg-gray-500 text-white py-2 w-36 rounded bg-opacity-50 hover:bg-opacity-40">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
