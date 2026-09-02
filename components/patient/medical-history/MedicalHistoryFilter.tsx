import React, { Dispatch, SetStateAction } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { format } from "date-fns";
import { IoIosArrowDown } from "react-icons/io";

const MedicalHistoryFilter = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  specialist,
  specialistsArray,
  keywordSearch,
  setSpecialist,
}: {
  startDate: Date | undefined;
  setStartDate: Dispatch<SetStateAction<Date | undefined>>;
  endDate: Date | undefined;
  setEndDate: Dispatch<SetStateAction<Date | undefined>>;
  specialist: string;
  specialistsArray: string[];
  keywordSearch: string;
  setSpecialist: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="w-full flex flex-col space-y-1 bg-[#f8fafc] border border-slate-200 rounded-md mb-4 px-4 py-3">
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
                required={false}
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
              <Button className="border text-center rounded-md border-slate-200 bg-white hover:bg-white text-black font-normal cursor-pointer flex justify-between capitalize" />
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
          className="w-full px-4 text-[15px] text-black bg-white border border-gray-300 rounded-md hover:bg-gray-50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
        >
          Reset
        </button>
        <button
          type="button"
          className="w-full px-4 text-[15px] text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors cursor-pointer"
        >
          Filter
        </button>
      </div>
    </div>
  );
};

export default MedicalHistoryFilter;
