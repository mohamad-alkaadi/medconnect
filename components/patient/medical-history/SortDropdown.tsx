import React, { Dispatch, SetStateAction } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import { IoIosArrowDown } from "react-icons/io";

const SortDropdown = ({
  sortByNewFirst,
  setSortByNewFirst,
}: {
  sortByNewFirst: boolean;
  setSortByNewFirst: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex justify-center items-center space-x-1">
      <p className="text-xs text-slate-500 font-semibold">Sort: </p>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button className="text-xs border rounded-md border-slate-200 bg-slate-50 h-fit px-2 text-slate-800" />
          }
        >
          {sortByNewFirst ? "Newest First" : "Oldest First"}
          <IoIosArrowDown />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white rounded-md ring-slate-200">
          <DropdownMenuGroup>
            <DropdownMenuItem
              onClick={() => setSortByNewFirst(true)}
              disabled={sortByNewFirst}
            >
              Newest First
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setSortByNewFirst(false)}
              disabled={!sortByNewFirst}
            >
              Oldest First
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default SortDropdown;
