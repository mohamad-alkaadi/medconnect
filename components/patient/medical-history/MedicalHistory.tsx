"use client";
import ClinicalEncounter from "../common/clinical-encounter/ClinicalEncounter";
import clinicalEncounters from "@/placeholder/patient/clinicalEncounters.json";
import { useState } from "react";

import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoIosArrowDown } from "react-icons/io";
import { Input } from "@/components/ui/input";

const MedicalHistory = () => {
  const [sortByNewFirst, setSortByNewFirst] = useState<boolean>(true);
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [specialistsArray, setSpecialistArray] = useState<string[]>([
    "cardiology",
    "dermatology",
  ]);
  const [specialist, setSpecialist] = useState<string>("");
  const [keywordSearch, setKeywordSearch] = useState<string>("");

  return (
    <div className="bg-white rounded-lg px-6 py-7 lg:max-w-[850px] lg:flex-auto max-lg:w-full h-fit max-h-[90vh] shadow-sm">
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
      <div className="w-full flex flex-col space-y-1 bg-[#f8fafc] border border-slate-200 rounded-md mb-2 px-4 py-3">
        <div className="flex space-x-1">
          <Field className="">
            <Popover>
              <PopoverTrigger
                render={
                  <Button
                    variant="outline"
                    id="date-picker-simple"
                    className="justify-start font-normal rounded-md"
                  >
                    {startDate ? (
                      format(startDate, "PPP")
                    ) : (
                      <span>Start Date</span>
                    )}
                  </Button>
                }
              />
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={startDate}
                  onSelect={setStartDate}
                  defaultMonth={startDate}
                />
              </PopoverContent>
            </Popover>
          </Field>
          <Field>
            <Popover>
              <PopoverTrigger
                render={
                  <Button
                    variant="outline"
                    id="date-picker-simple"
                    className="justify-start font-normal rounded-md"
                  >
                    {endDate ? format(endDate, "PPP") : <span>End Date</span>}
                  </Button>
                }
              />
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={endDate}
                  onSelect={setEndDate}
                  defaultMonth={endDate}
                />
              </PopoverContent>
            </Popover>
          </Field>
        </div>
        <div className="grid grid-cols-2 gap-1">
          <Field>
            <Input
              id="input-field-username"
              type="text"
              placeholder="Search Keywords"
              className="placeholder:text-black bg-white rounded-md"
            />
          </Field>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button className="border rounded-md border-slate-200 bg-white hover:bg-white text-black font-normal cursor-pointer flex justify-between capitalize" />
              }
            >
              {specialist === "" ? "Select a Specialist" : specialist}
              <IoIosArrowDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white rounded-md ring-slate-200">
              <DropdownMenuGroup>
                {specialistsArray.map((item) => (
                  <DropdownMenuItem
                    key={crypto.randomUUID()}
                    onClick={() => setSpecialist(item)}
                    disabled={keywordSearch === item}
                    className="capitalize"
                  >
                    {item}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex space-x-2">
          <button
            type="button"
            className="w-full px-4 text-black bg-white border border-gray-300 rounded-md hover:bg-gray-50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Reset
          </button>
          <button
            type="button"
            className="w-full px-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors cursor-pointer"
          >
            Filter
          </button>
        </div>
      </div>
      <div className="border-l-2 border-slate-100 overflow-auto h-[60vh]">
        {clinicalEncounters.slice(0, 2).map((item, index) => (
          <ClinicalEncounter key={index} clinicalEncountersItem={item} />
        ))}
      </div>
    </div>
  );
};

export default MedicalHistory;
