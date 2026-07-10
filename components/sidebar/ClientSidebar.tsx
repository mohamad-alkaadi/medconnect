"use client";

import { sidebarItems } from "@/constants/sidebarItems";
import Sidebar from "./Sidebar";
import preferences from "@/placeholder/patient/preferences.json";

const ClientSidebar = () => {
  return (
    <Sidebar
      sidebarWidth={"260px"}
      logo={
        <div className="flex space-x-2">
          <div className="bg-[#ecfdf5] text-[#007a55] text-xl font-bold w-7.5 h-7.5 rounded-full border-[0.5px] border-[#a4f4cf] flex justify-center">
            {preferences.name[0]}
          </div>
          <div className="">
            <p className="text-[13px] font-black">MedConnect</p>
            <p className="-mt-1 text-[10px] font-medium">PATIENT PORTAL</p>
          </div>
        </div>
      }
      defaultTextColor={"text-red-400"}
      defaultActiveTextColor={"text-blue-400"}
      defaultBackgroundColor={""}
      defaultHoverBackgroundColor={""}
      sidebarNavItemsArray={sidebarItems}
    />
  );
};

export default ClientSidebar;
