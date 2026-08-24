"use client";
import Link from "next/link";
import ClinicalEncounter from "../common/clinical-encounter/ClinicalEncounter";
import clinicalEncounters from "@/placeholder/patient/clinicalEncounters.json";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoIosArrowDown } from "react-icons/io";
const MedicalHistory = () => {
  const [sortByNewFirst, setSortByNewFirst] = useState<boolean>(true);
  return (
    <div className="bg-white rounded-lg px-6 py-7 lg:max-w-[850px] lg:flex-auto max-lg:w-full h-fit max-h-[80vh] overflow-auto shadow-sm">
      <div className="border-b border-slate-100 mb-6 pb-3 flex justify-between items-center">
        <div>
          <h2 className="font-black text-slate-850 tracking-tight">
            Medical History
          </h2>
          <p className="text-xs text-slate-500">
            Your checkups, logs, and diagnoses.
          </p>
        </div>
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
      </div>
      <div className="border-l-2 border-slate-100">
        {clinicalEncounters.slice(0, 2).map((item, index) => (
          <ClinicalEncounter key={index} clinicalEncountersItem={item} />
        ))}
      </div>
    </div>
  );
};

export default MedicalHistory;
