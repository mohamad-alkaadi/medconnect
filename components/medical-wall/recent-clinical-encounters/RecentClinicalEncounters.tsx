import React from "react";
import ClinicalEncounter from "./clinical-encounter/ClinicalEncounter";
import Link from "next/link";
import clinicalEncounters from "@/placeholder/patient/clinicalEncounters.json";
const RecentClinicalEncounters = () => {
  return (
    <div className="bg-white rounded-lg px-6 py-7 lg:max-w-[850px] lg:flex-auto max-lg:w-full h-fit max-h-[80vh] overflow-auto shadow-sm">
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
          className="hover:text-blue-700 hover:underline cursor-pointer "
        >
          Full History →
        </Link>
      </div>
      <div className="border-l-2 border-slate-100">
        {clinicalEncounters.slice(0, 2).map((item, index) => (
          <ClinicalEncounter key={index} clinicalEncountersItem={item} />
        ))}
      </div>
    </div>
  );
};

export default RecentClinicalEncounters;
