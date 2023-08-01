import React from "react";
import { BsDiscord, BsGithub, BsLinkedin } from 'react-icons/bs'
const TeamCard = () => {
  return (
    <div className="bg-[#070114] w-[300px] h-[400px] flex flex-col items-center gap-6 justify-center border rounded-lg border-blue-500">
      <div className="flex flex-col items-center gap-2 justify-center">
        <img
          src="https://media.licdn.com/dms/image/D5603AQGUwT3DRYb9uA/profile-displayphoto-shrink_800_800/0/1673206773495?e=1696464000&v=beta&t=gnRSB4qBoJa3BUNJ_RCEBgGMA5Pb5QCoYPMW6K84Hwg"
          className="h-[200px] w-[200px] rounded-full"
          alt=""
        />
        <h1 className="font-bold text-2xl text-white">Aniruddha Pal</h1>
        <h1 className="text-white text-xl ">Gandu Developer</h1>
      </div>
      <div className='flex flex-row items-center gap-5'>
            <button className="px-4 py-2 rounded-full bg-[#6a45e4] font-bold text-xl text-white hover:bg-white hover:text-[#6a45e4] ">
              <BsDiscord className="h-[25px] w-[25px]" />
            </button>
            <button className="px-4 py-2 rounded-full bg-[#0c0b0f] font-bold text-xl text-white hover:bg-white hover:text-[#0c0b0f]">
              <BsGithub className="h-[25px] w-[25px]" />
            </button>
            <button className="px-4 py-2 rounded-full bg-[#215594] font-bold text-xl text-white hover:bg-white hover:text-[#215594]">
              <BsLinkedin className="h-[25px] w-[25px]" />
            </button>
       </div>

    </div>
  );
};

export default TeamCard;
