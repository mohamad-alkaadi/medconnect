import { IconType } from "react-icons";
export type SidebarNavItemsType = {
  itemId: number;
  itemTitle: string;
  itemLink: string;
  itemIcon?: IconType;
  itemIconColor?: string;
  itemTextColor?: string;
  itemBackgroundColor?: string;
  itemHoverBackgroundColor?: string;
}[];
