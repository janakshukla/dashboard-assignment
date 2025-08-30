import { ListFilterIcon, SearchIcon } from "lucide-react";
import Table from "./Subcomponents/Table";
const LowerPage = () => {


  return (
    <div className="min-h-screen p-4 overflow-hidden ">
      <div className="border  border-[#EAECF0] h-full w-full rounded-xl shadow-sm shadow-[#1018280D] ">
        <div className="p-4 border-b border-[#EAECF0]">
          <h1 className="font-semibold font-inter text-lg text-[#101828] ">
            My Uploads
          </h1>
          <p className=" font-inter text-sm text-[#475467] ">
            Documents that are uploaded by you.
          </p>
        </div>
        <div className="flex justify-between p-2 md:p-4 ">
          <div className="relative">
            <input
              placeholder="Search here.."
              className="flex px-4 py-1 pl-5 md:pl-10 items-center gap-2 border border-[#D0D5DD] rounded-md text-sm font-inter text-[#344054] shadow-sm shadow-[#1018280D]"
              type="text"
            />
            <SearchIcon
              className="absolute left-1 md:left-3 top-1/2 transform -translate-y-1/2 text-[#667085]"
              size={16}
            />
          </div>
          <button className="flex px-1 sm:px-2 py-1 items-center gap-2 border border-[#D0D5DD] rounded-lg text-sm font-inter font-semibold text-[#344054] shadow-sm shadow-[#1018280D] ">
            {" "}
            <ListFilterIcon size={12} /> Filters
          </button>
        </div>
        <Table/>
      </div>
    </div>
  );
};

export default LowerPage;
