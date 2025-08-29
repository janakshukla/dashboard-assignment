import Dot from "../ui/Dot";

const FeedBack = () => {
  return (
    <div className="md:w-1/3  flex flex-col gap-4 h-full">
      <div className="flex-1 border shadow-sm flex flex-col   shadow-[#1018280D] p-4 rounded-xl">
        <h1 className="text-black font-inter text-nowrap font-semibold ">
          Key Insights & Feedback
        </h1>
        <div>
          <div className="flex justify-between border-b border-[#E9EFF6] p-2 items-center">
            <div>
              <h1 className="text-3xl font-semibold font-inter "> 10% </h1>
              <p className="font-inter font-medium text-sm text-[#475467]">
                Sales Growth
              </p>
            </div>
            <img src="/Images/TopPerfoming.png" alt="TopPerfoming" />
          </div>
        </div>
        <div className="flex p-2 gap-4">
          <div className="w-full bg-[#F6F7FB] p-4 h-full  rounded-lg ">
            <h1 className="font-inter font-semibold text-sm text-[#1C222B] ">
              Feedback
            </h1>
            <p className="font-inter flex gap-2  font-medium text-xs text-[#455468] mt-2  ">
              <Dot color="#D9D9D9" />
              <span className="-mt-1  text-nowrap ">
                {" "}
                Franchisees are requesting <br /> more detailed training materials.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 border shadow-sm flex flex-col  shadow-[#1018280D] p-4 rounded-xl ">
        <h1 className="text-black font-inter font-semibold ">Prospect Leads</h1>
        <div className="h-1/4 w-full flex items-center-safe justify-between p-2 mt-4 rounded-xl bg-[#F6F7FB] ">
          <div className="flex gap-2 items-center-safe">
            <img src="\Images\Avatar (1).png" alt="avatar" />
            <h1 className="text-sm font-medium font-inter text-[#101828]">
              Wade Warren
            </h1>
          </div>
          <p className="font-inter text-sm hidden lg:block text-[#475467] " >
            Stage:
            <span className="text-black" >Initial Inquiry</span>
          </p>
        </div>
        <div className="h-1/4 w-full flex items-center-safe justify-between p-2 mt-4 rounded-xl bg-[#F6F7FB] ">
          <div className="flex gap-2 items-center-safe">
            <img src="\Images\Avatar (1).png" alt="avatar" />
            <h1 className="text-sm font-medium font-inter text-[#101828]">
            Ava Wright
            </h1>
          </div>
          <p className="font-inter text-sm hidden lg:block text-[#475467] " >
            Stage:
            <span className="text-black" >Initial Inquiry</span>
          </p>
        </div>
        <div className="h-1/4 w-full flex items-center-safe justify-between p-2 mt-4 rounded-xl bg-[#F6F7FB] ">
          <div className="flex gap-2 items-center-safe">
            <img src="\Images\Avatar.png" alt="avatar" />
            <h1 className="text-sm font-medium font-inter text-[#101828]">
            Cody Fisher
            </h1>
          </div>
          <p className="font-inter text-sm hidden lg:block text-[#475467] " >
            Stage:
            <span className="text-black" >Initial Inquiry</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
