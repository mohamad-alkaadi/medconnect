"use client";
import ClinicalEncounter from "../common/clinical-encounter/ClinicalEncounter";
import clinicalEncounters from "@/placeholder/patient/clinicalEncounters.json";
import { useState } from "react";

import MedicalHistoryFilter from "./MedicalHistoryFilter";
import MedicalHistorySort from "./MedicalHistorySort";

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
        <MedicalHistorySort
          sortByNewFirst={sortByNewFirst}
          setSortByNewFirst={setSortByNewFirst}
        />
      </div>
      <MedicalHistoryFilter
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        specialist={specialist}
        specialistsArray={specialistsArray}
        keywordSearch={keywordSearch}
        setSpecialist={setSpecialist}
      />
      <div className="border-l-2 border-slate-100 overflow-auto h-[60vh]">
        {clinicalEncounters.slice(0, 2).map((item, index) => (
          <ClinicalEncounter key={index} clinicalEncountersItem={item} />
        ))}
      </div>
    </div>
  );
};

export default MedicalHistory;
