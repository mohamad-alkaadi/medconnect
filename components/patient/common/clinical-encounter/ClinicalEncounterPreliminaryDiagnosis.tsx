import React from "react";

const ClinicalEncounterPreliminaryDiagnosis = ({
  diagnosis,
  color,
}: {
  diagnosis: string;
  color: string;
}) => {
  return (
    <div>
      <h4 className="text-[10px] uppercase font-bold text-slate-400 mb-1">
        Preliminary Diagnosis
      </h4>
      <p className="text-xs border bg-amber-50 text-amber-800 border-amber-200 w-fit px-2 rounded-md font-semibold mb-2">
        {diagnosis}
      </p>
    </div>
  );
};

export default ClinicalEncounterPreliminaryDiagnosis;
