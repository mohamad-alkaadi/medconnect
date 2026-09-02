"use client";
import { useState } from "react";
import SortDropdown from "./SortDropdown";
import MedicalHistoryFilter from "./MedicalHistoryFilter";
import documentsList from "@/placeholder/patient/documents.json";
import DocumentItem from "./DocumentItem";

const DocumentsGallery = () => {
  const [sortByNewFirst, setSortByNewFirst] = useState<boolean>(true);
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [keywordSearch, setKeywordSearch] = useState<string>("");
  return (
    <div className="bg-white rounded-lg px-6 py-7 lg:max-w-[850px] lg:flex-auto max-lg:w-full h-fit max-h-[90vh] shadow-sm">
      <div className="border-b border-slate-100 mb-6 pb-3 flex justify-between items-center">
        <div>
          <h2 className="font-black text-slate-850 tracking-tight">
            Documents Gallery
          </h2>
        </div>
        <SortDropdown
          sortByNewFirst={sortByNewFirst}
          setSortByNewFirst={setSortByNewFirst}
        />
      </div>
      <MedicalHistoryFilter
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        keywordSearch={keywordSearch}
      />
      <div>
        <div className="pr-1 border-slate-100 overflow-auto max-h-[30vh]">
          {documentsList.slice(0, 2).map((item) => (
            <DocumentItem key={item.id} documentItem={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DocumentsGallery;
