import React from "react";
import logo from "../../assets/web.avif";

const Features = () => {
  return (
    <div className="pt-10 bg-[#01071c] flex flex-col items-center gap-10">
      <div className="mt-5">
        <h1 className="text-blue-300 font-bold text-3xl text-center tracking-wider">
          We-Design
        </h1>
      </div>
      <div className="flex flex-col items-center justify-evenly ">
        <div className="flex flex-row items-center justify-between gap-20">
          <div className="flex flex-col items-center gap-4">
            <div className="text-blue-200 font-semibold text-xl">
              Kolkata's New But Best Designing Company
            </div>
            <div className="w-[400px] text-white ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
              autem consequatur fugiat excepturi repudiandae saepe sint cum
              explicabo non porro illo enim, tempore cupiditate distinctio
              beatae possimus unde rem odit. Ea deserunt in neque ut modi iusto,
              accusamus velit. Odit officiis, totam facilis ea sequi quod qui
              harum debitis eius nisi sit repudiandae nobis, aut aliquid. Sunt
              voluptatem, at quam fugiat a numquam cum.
            </div>
          </div>
          <div className="">
            <img src={logo} alt="" className="h-[400px] w-[600px]" />
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default Features;
