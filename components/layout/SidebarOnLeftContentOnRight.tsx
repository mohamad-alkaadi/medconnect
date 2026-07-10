import { ReactElement, ReactNode } from "react";
import Sidebar from "../sidebar/Sidebar";
import { SidebarNavItemsType } from "@/types/sidebarTypes";

const SidebarOnLeftContentOnRight = ({
  children,
  sidebarWidth,
  logo,
  defaultTextColor,
  defaultActiveTextColor,
  defaultBackgroundColor,
  defaultHoverBackgroundColor,
  sidebarNavItemsArray,
}: {
  children: ReactNode;
  sidebarWidth: string;
  logo: ReactElement;
  defaultTextColor: string;
  defaultActiveTextColor: string;
  defaultBackgroundColor: string;
  defaultHoverBackgroundColor: string;
  sidebarNavItemsArray: SidebarNavItemsType;
}) => {
  return (
    <div className="flex">
      <Sidebar
        sidebarWidth={sidebarWidth}
        logo={logo}
        defaultTextColor={defaultTextColor}
        defaultActiveTextColor={defaultActiveTextColor}
        defaultBackgroundColor={defaultBackgroundColor}
        defaultHoverBackgroundColor={defaultHoverBackgroundColor}
        sidebarNavItemsArray={sidebarNavItemsArray}
      />
      <div className="bg-[#f4f7fa] w-full">{children}</div>
    </div>
  );
};

export default SidebarOnLeftContentOnRight;
