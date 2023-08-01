import React from "react";
import logo from "../../assets/web.avif";
const ReviewCard = () => {
  return (
    <div className="w-[700px] h-[400px] flex justify-center items-center border p-5 text-white">
      <div className="flex flex-row items-center justify-center gap-10">
        <div className="flex flex-col gap-5 justify-center">
          <img src={logo} className="h-[300px] w-[500px]" alt="" />
          <h1 className="font-bold text-xl text-center">Review : 5 Stars</h1>
        </div>

        <div className="w-[500px] flex flex-col items-center gap-y-10">
          <h1 className="font-bold text-2xl ">Aniruddha Pal</h1>
          <p className="font-medium text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            numquam eaque iste possimus natus hic alias eius deserunt ut
            perspiciatis deleniti enim placeat quis. Aliquid impedit, obcaecati
            ipsum dolorem expedita modi reprehenderit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
