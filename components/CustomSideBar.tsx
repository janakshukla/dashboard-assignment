"use client"
import Image from "next/image";
import { useState } from 'react';

const CustomSideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    <>
      {/* Hamburger Button - visible on small screens */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-[#11455D] text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        h-screen w-1/6 p-6 bg-[#11455D] fixed md:relative z-40
        md:translate-x-0 transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        md:w-1/6 w-64
      `}>
        <div className="h-11/12">
          <Image src={"/Images/Logo.png"} alt="logo" width={100} height={100} />
          {/* here we can use actual link tags but for demontration we are using li */}
          <ul>
            {Links.map((link) => {
              return (
                <li
                  key={link.id}
                  className="text-white/60 rounded-sm cursor-pointer text-xs font-dm-sans p-2  my-2 flex justify-between items-center hover:bg-white/10 hover:text-[#5DD2DD] "
                  onClick={() => setIsOpen(false)} // Close sidebar on mobile when item is clicked
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
        <li 
          className="text-white/60 rounded-sm cursor-pointer text-xs font-dm-sans p-2  my-2 flex justify-between items-center hover:bg-white/10 hover:text-[#5DD2DD] "
          onClick={() => setIsOpen(false)}
        >
          Logout
        </li>
      </div>
    </>
  );
};

export default CustomSideBar;
