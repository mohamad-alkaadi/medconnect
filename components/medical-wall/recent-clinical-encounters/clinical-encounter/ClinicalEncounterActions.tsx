import React from "react";
import ClinicalEncounterButton from "./ClinicalEncounterButton";

const ClinicalEncounterActions = () => {
  return (
    <div>
      <h4 className="text-[10px] uppercase font-bold text-slate-400 border-t pt-2 mb-2">
        Required Patient Actions (Ordered Diagnostics)
      </h4>
      <div className="flex justify-between space-x-2 overflow-x-auto pb-2">
        <ClinicalEncounterButton
          title={"Skin Biopsy Histopathology Report"}
          status={"pending"}
        />
        <ClinicalEncounterButton
          title={"Skin Biopsy Histopathology Report"}
          status={"pending"}
        />
      </div>
    </div>
  );
};

export default ClinicalEncounterActions;
