import Link from "next/link";
import { usePathname } from "next/navigation";
import { CSSProperties, Dispatch, SetStateAction } from "react";
import { IconType } from "react-icons";
const SidebarItem = ({
  itemId,
  itemTitle,
  itemLink,
  itemIcon: Icon,
  itemIconColor,
  itemTextColor,
  itemBackgroundColor,
  itemHoverBackgroundColor,
  activeSidebarItem,
  setActiveSidebarItem,
}: {
  itemId: number;
  itemTitle: string;
  itemLink: string;
  itemIcon?: IconType;
  itemIconColor?: string;
  itemTextColor?: string;
  itemBackgroundColor?: string;
  itemHoverBackgroundColor?: string;
}) => {
  const currentLink = usePathname();
  return (
    <Link
      href={itemLink}
      className={`flex justify-start items-center space-x-1.5 cursor-pointer select-none ${currentLink === itemLink ? "bg-[#eef2ff] border-[0.5px] border-[#e0e7ff] text-[#2100fa]" : "hover:bg-[var(--hover-bg)]"} pl-3 py-2 mb-1 rounded-lg`}
      style={{ "--hover-bg": itemHoverBackgroundColor } as CSSProperties}
    >
      {Icon ? (
        <div
          className="text-[16px] text-[var(--icon-color)]"
          style={{ "--icon-color": itemIconColor } as CSSProperties}
        >
          <Icon />
        </div>
      ) : null}
      <p className="text-[12px] font-semibold">{itemTitle}</p>
    </Link>
  );
};

export default SidebarItem;
