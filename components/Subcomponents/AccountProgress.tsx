import React from "react";

const AccountProgress = () => {
  return (
    <div className="lg:w-1/3 border h-full border-[#EAECF0] rounded-xl shadow-sm shadow-[#1018280D] px-6 ">
      <div className="h-1/3 border-b flex justify-center flex-col items-center border-[#E9EFF6] ">
        <h1 className="font-inter text-black font-semibold ">
          Account Progress
        </h1>
        <div className="relative">
          <svg className="relative" width="150" height="150">
            {/* Background circle */}
            <circle
              cx="75"
              cy="75"
              r="55"
              stroke="#E9EFF6"
              strokeLinecap="round"
              strokeWidth="15"
              fill="transparent"
              strokeDasharray="314"
              strokeDashoffset="0"
            />
            {/* Progress circle (dynamic percentage) */}
            <circle
              cx="75"
              cy="75"
              r="55"
              stroke="#279DD4"
              strokeLinecap="round"
              strokeWidth="15"
              fill="transparent"
              strokeDasharray="314"
              strokeDashoffset={314 - (314 * 85) / 100}
              transform="rotate(-90 75 75)"
            />
          </svg>
          <p className="absolute inset-0 flex items-center justify-center font-semibold text-lg">
            85%
          </p>
        </div>
      </div>
      <div className="h-2/3 flex justify-center flex-col items-center p-6 gap-4 ">
        <div className="h-2/3 bg-[#F6F7FB] p-4 w-full rounded-xl ">
          <h3 className="font-inter font-semibold text-sm mb-4">
            Steps Completed{" "}
          </h3>
          <ul className="flex justify-center flex-col items-center  gap-4">
            <li className="w-full font-inter font-medium text-sm text-[#455468] flex justify-between items-center ">
              {" "}
              <p className="flex gap-2 items-center">
                <img className="size-2" src="/Images/Dot.svg" alt="dot" />
                Profile Setup
              </p>{" "}
              <img className="size-4" src="/Images/Tick.png" alt="tick" />
            </li>
            <li className="w-full font-inter font-medium text-sm text-[#455468] flex justify-between items-center ">
              {" "}
              <p className="flex gap-2 items-center">
                <img className="size-2" src="/Images/Dot.svg" alt="dot" />
                Initial Training
              </p>{" "}
              <img className="size-4" src="/Images/Tick.png" alt="tick" />
            </li>
            <li className="w-full font-inter font-medium text-sm text-[#455468] flex justify-between items-center ">
              {" "}
              <p className="flex gap-2 items-center">
                <img className="size-2" src="/Images/Dot.svg" alt="dot" />
                Legal Documents
              </p>{" "}
              <img className="size-4" src="/Images/Tick.png" alt="tick" />
            </li>
          </ul>
        </div>
        <div className="h-2/3 bg-[#F6F7FB] p-4 w-full rounded-xl ">
          <h3 className="font-inter font-semibold text-sm mb-4">
          Steps Remaining
          </h3>
          <ul className="flex justify-center flex-col items-center  gap-4">
            <li className="w-full font-inter font-medium text-sm text-[#455468] flex justify-between items-center ">
              {" "}
              <p className="flex gap-2 items-center">
                <img className="size-2" src="/Images/Dot.svg" alt="dot" />
                Financial Integration
              </p>{" "}
              <img className="size-4 opacity-40 " src="/Images/Tick.png" alt="tick" />
            </li>
            <li className="w-full font-inter font-medium text-sm text-[#455468] flex justify-between items-center ">
              {" "}
              <p className="flex gap-2 items-center">
                <img className="size-2" src="/Images/Dot.svg" alt="dot" />
                Final Review
              </p>{" "}
              <img className="size-4 opacity-40 " src="/Images/Tick.png" alt="tick" />
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AccountProgress;
