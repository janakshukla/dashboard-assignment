import Image from "next/image";

const CustomSideBar = () => {
  const Links = [
    { id: 1, name: "Home", href: "#" },
    { id: 2, name: "Stages & Checklists", href: "#" },
    { id: 3, name: "Upload Docs", href: "#" },
    { id: 4, name: "Preferred Vendors", href: "#" },
    { id: 5, name: "Tech Stack", href: "#" },
    { id: 6, name: "Targets", href: "#" },
    { id: 7, name: "Settings", href: "#" },
    { id: 8, name: "Zee Sales Targets", href: "#" },
    { id: 9, name: "MAI Settings", href: "#" },
    { id: 10, name: "Pending Questions", href: "#", notification: 3 },
  ];

  return (
    <div className="h-screen w-1/6 p-6 bg-[#11455D]">
      <div className="h-11/12" >
        <Image src={"/Images/Logo.png"} alt="logo" width={100} height={100} />
        {/* here we can use actual link tags but for demontration we are using li */}
        <ul>
          {Links.map((link) => {
            return (
              <li
                key={link.id}
                className="text-white/60 rounded-sm cursor-pointer text-xs font-dm-sans p-2  my-2 flex justify-between items-center hover:bg-white/10 hover:text-[#5DD2DD] "
              >
                <a href={link.href}>{link.name}</a>
                {link.notification && (
                  <span className="bg-gray-50 border border-[#EAECF0] text-[#344054] rounded-full px-1.5 py-0.5 text-xs">
                    {link.notification}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <li className="text-white/60 rounded-sm cursor-pointer text-xs font-dm-sans p-2  my-2 flex justify-between items-center hover:bg-white/10 hover:text-[#5DD2DD] " >Logout</li>
    </div>
  );
};

export default CustomSideBar;
