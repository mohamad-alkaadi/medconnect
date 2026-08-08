import React from "react";
import ClinicalEncounter from "./clinical-encounter/ClinicalEncounter";
import Link from "next/link";
import clinicalEncounters from "@/placeholder/patient/clinicalEncounters.json";
const RecentClinicalEncounters = () => {
  return (
    <div className="bg-white rounded-lg px-6 py-7 max-w-[850px]">
      <div className="border-b border-slate-100 mb-6 pb-3 flex justify-between items-center">
        <div>
          <h2 className="font-black text-slate-850 tracking-tight">
            Recent Clinical Encounters
          </h2>
          <p className="text-xs text-slate-500">
            Your most recent checkups, logs, and diagnoses.
          </p>
        </div>
        <Link
          href="/patient/history"
          className="hover:text-indigo-800 hover:underline cursor-pointer "
        >
          Full History →
        </Link>
      </div>
      {clinicalEncounters.slice(0, 2).map((item, index) => (
        <ClinicalEncounter key={index} clinicalEncountersItem={item} />
      ))}
    </div>
  );
};

export default RecentClinicalEncounters;
