import React from 'react'
import { MdOutlineFileDownloadDone } from "react-icons/md";
import { ImCross } from "react-icons/im";
const Guarantee = () => {
  return (
    <div className='bg-[#01071c] py-10'>
         <div className="flex  flex-col items-center gap-8">
          <div className=" mt-5">
            <h1 className="text-white text-2xl font-semibold">Here's What We Guarantee</h1>
          </div>
          <div className="flex flex-row items-center justify-evenly space-x-[300px]">
            <div className="flex flex-col items-center justify-center gap-5">
              <div className="text-white flex flex-row gap-5 items-center">
                <MdOutlineFileDownloadDone
                  className="bg-green-600 rounded-full"
                  size={"25"}
                />
                <h1 className="tracking-wide  text-lg">
                  Lorem ipsum dolor
                </h1>
              </div>

              <div className="text-white flex flex-row gap-5 items-center">
                <MdOutlineFileDownloadDone
                  className="bg-green-600 rounded-full"
                  size={"25"}
                />
                <h1 className="tracking-wide  text-lg">
                  Lorem ipsum dolor
                </h1>
              </div>

              <div className="text-white flex flex-row gap-5 items-center">
                <MdOutlineFileDownloadDone
                  className="bg-green-600 rounded-full"
                  size={"25"}
                />
                <h1 className="tracking-wide  text-lg">
                  Lorem ipsum dolor
                </h1>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-5">
              <div className="text-white flex flex-row gap-5 items-center">
                <ImCross className="bg-red-600 rounded-full" size={"25"} />
                <h1 className="tracking-wide  text-lg">
                  Lorem ipsum dolor
                </h1>
              </div>
              <div className="text-white flex flex-row gap-5 items-center">
                <ImCross className="bg-red-600 rounded-full" size={"25"} />
                <h1 className="tracking-wide  text-lg">
                  Lorem ipsum dolor
                </h1>
              </div>
              <div className="text-white flex flex-row gap-5 items-center">
                <ImCross className="bg-red-600 rounded-full" size={"25"} />
                <h1 className="tracking-wide  text-lg">
                  Lorem ipsum dolor
                </h1>
              </div>
            </div>
          </div>
          <button className='text-white bg-blue-500 px-4 py-2 rounded-lg'>Get Started for Free</button>
        </div>
    </div>
  )
}

export default Guarantee