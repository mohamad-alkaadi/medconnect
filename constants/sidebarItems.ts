import { IoCalendarOutline, IoSearchSharp } from "react-icons/io5";
import { MdOutlineReport } from "react-icons/md";
import { RiFileHistoryLine } from "react-icons/ri";
import { TbReportMedical } from "react-icons/tb";

export const sidebarItems = [
  {
    itemId: 0,
    itemLink: "/patient/medical-wall",
    itemTitle: "My Medical Wall",
    itemIcon: TbReportMedical,
    itemHoverBackgroundColor: "#f8fafc",
    itemIconColor: "#007a55",
  },
  {
    itemId: 1,
    itemLink: "/patient/history",
    itemTitle: "Medical History & Visits",
    itemIcon: RiFileHistoryLine,
    itemHoverBackgroundColor: "#f8fafc",
    itemIconColor: "#007a55",
  },
  {
    itemId: 2,
    itemLink: "/patient/find-specialist",
    itemTitle: "Find & Book Specialist",
    itemIcon: IoSearchSharp,
    itemHoverBackgroundColor: "#f8fafc",
    itemIconColor: "#007a55",
  },
  {
    itemId: 3,
    itemLink: "/patient/appointments",
    itemTitle: "My Appointments",
    itemIcon: IoCalendarOutline,
    itemHoverBackgroundColor: "#f8fafc",
    itemIconColor: "#007a55",
  },
  // {
  //   itemId: 4,
  //   itemTitle: "General Doctor Chat",
  //   itemIcon: AiOutlineMessage,
  //   itemHoverBackgroundColor: "#f8fafc",
  //   itemIconColor: "#007a55",
  // },
  // {
];
