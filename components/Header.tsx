import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="w-full h-16 bg-white border-b border-[#EAECF0] flex items-center justify-end-safe px-4 ">
      <Image
        className="mr-4 p-0.5 cursor-pointer"
        width={20}
        height={20}
        src={"/Images/Gear.png"}
        alt="avatar"
      />
      <Image width={25} height={25} src={"/Images/Avatar.png"} alt="avatar" />
    </div>
  );
};

export default Header;
