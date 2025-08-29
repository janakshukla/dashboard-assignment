import React from "react";
import Dot from "../ui/Dot";
import { TrendingUp } from "lucide-react";

const TotalOnboarding = () => {
  return (
    <div className="md:w-1/3  flex flex-col gap-4 h-full">
      <div className="h-1/2 border shadow-sm flex flex-col gap-2 shadow-[#1018280D] p-4 rounded-xl">
        <h1 className="text-black font-inter font-semibold ">
          Total Franchisees Onboard
        </h1>
        <div>
          <div className="flex justify-between p-2 items-center">
            <div className="flex gap-4 items-center ">
              <h1 className="text-3xl font-semibold font-inter "> 14 </h1>
              <p className="flex items-center border-[1.5px] border-[#079455] text-[#079455] h-4 rounded-4xl px-1 text-sm">
                <TrendingUp size={10} />
                7.4%
              </p>
            </div>
            <img src="/Images/Avatars.png" alt="Users" />
          </div>
        </div>
        <img src="/Images/Line.png" alt="line" />
        <ul className="flex justify-center flex-col items-center  gap-4">
          <li className="w-full font-inter font-medium text-sm text-[#475467] flex justify-between items-center ">
            {" "}
            <p className="flex gap-2 items-center">
              <Dot color="#1F7EAA" />
              Stage 1 (Initial Inquiry)
            </p>{" "}
          </li>
          <li className="w-full font-inter font-medium text-sm text-[#475467] flex justify-between items-center ">
            {" "}
            <p className="flex gap-2 items-center">
              <Dot color="#2FBDFF" />
              Stage 2 (Document Submission)
            </p>{" "}
          </li>
          <li className="w-full font-inter font-medium text-sm text-[#475467] flex justify-between items-center ">
            {" "}
            <p className="flex gap-2 items-center">
              <Dot color="#97DEFF" />
              Stage 3 (Training)
            </p>{" "}
          </li>
        </ul>
      </div>
      <div className="h-1/2 border shadow-sm flex flex-col gap-2  shadow-[#1018280D] p-4 rounded-xl">
        <h1 className="text-black font-inter font-semibold ">
          Financial Wellbeing
        </h1>
        <div>
          <div className="flex justify-between border-b border-[#E9EFF6] p-2 items-center">
            <div>
              <h1 className="text-3xl font-semibold font-inter "> 20 </h1>
              <p className="font-inter font-medium text-sm text-[#475467]">
                Total Franchisees
              </p>
            </div>
            <p className="flex items-center border-[1.5px] border-[#079455] text-[#079455] h-4 rounded-4xl px-1 text-sm">
              <TrendingUp size={10} />
              2.1%
            </p>
          </div>
        </div>
        <div className="flex p-2 gap-4">
          <div className="w-1/2 bg-[#F6F7FB] p-6 h-full text-center rounded-lg ">
            <h1 className="font-inter font-semibold text-sm text-[#455468] ">
              Target
            </h1>
            <p className="font-inter font-semibold text-xl text-[#1C222B] mt-2 ">
              $500,000
            </p>
          </div>
          <div className="w-1/2 bg-[#F6F7FB] p-6 h-full text-center rounded-lg ">
            <h1 className="font-inter font-semibold text-sm text-[#455468] ">
              Current
            </h1>
            <p className="font-inter font-semibold text-xl text-[#1C222B] mt-2 ">
              $450,000
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalOnboarding;
