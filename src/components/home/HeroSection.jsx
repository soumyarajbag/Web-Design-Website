import React from "react";
import ReactPlayer from "react-player";

const HeroSection = () => {
  return (
    <div className="pt-12 pb-16 flex flex-col items-center gap-5 bg-[#dddfb3]">
      <div className="flex items-center justify-center">
        <h1 className="text-red font-semibold text-2xl text-red-600">
          NO CONTRACTS | 30-DAY FREE TRIAL | JUST $497/MONTH
        </h1>
      </div>

      <ReactPlayer
        url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
        className="w-[600px] h-[400px] bg-black"
        controls
      />
      <button className="px-4 py-4 rounded-full bg-[#df1717] font-bold text-xl text-white hover:bg-white hover:text-[#215594]">Get Consultation</button>
    </div>
  );
};

export default HeroSection;
