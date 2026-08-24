import { SidebarNavItemsType } from "@/types/sidebarTypes";
import { ReactElement, useState } from "react";
import SidebarItem from "./SidebarItem";
import ReportDoctor from "./ReportDoctor";
const Sidebar = ({
  sidebarWidth,
  logo,
  defaultTextColor,
  defaultActiveTextColor,
  defaultBackgroundColor,
  defaultHoverBackgroundColor,
  sidebarNavItemsArray,
}: {
  sidebarWidth: string;
  logo: ReactElement;
  defaultTextColor?: string;
  defaultActiveTextColor?: string;
  defaultBackgroundColor?: string;
  defaultHoverBackgroundColor?: string;
  sidebarNavItemsArray: SidebarNavItemsType;
}) => {
  return (
    <div className={`h-screen p-4 pt-4`} style={{ width: sidebarWidth }}>
      <div className="pb-2 mb-2 border-b border-[#f1f5f9]">{logo}</div>
      {sidebarNavItemsArray?.map((item) => (
        <SidebarItem
          key={item.itemId}
          itemId={item.itemId}
          itemTitle={item.itemTitle}
          itemLink={item.itemLink}
          itemIcon={item.itemIcon}
          itemIconColor={item.itemIconColor}
          itemTextColor={item.itemTextColor}
          itemBackgroundColor={item.itemBackgroundColor}
          itemHoverBackgroundColor={item.itemHoverBackgroundColor}
        />
      ))}
      <ReportDoctor />
    </div>
  );
};

export default Sidebar;
