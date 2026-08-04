import React from "react";
import FamilyMedicalParent from "./FamilyMedicalParent";

type parentsDiseasesType = {
  parent: string;
  diseases: string[];
}[];
const FamilyMedicalHistory = ({
  parentsDiseases,
}: {
  parentsDiseases: parentsDiseasesType;
}) => {
  return (
    <div className="mx-4 flex flex-col space-y-1 py-4 border-b border-slate-100">
      <p className="text-[10px] uppercase text-slate-400 font-black mb-1.5">
        🧬 Verified Family Medical History
      </p>
      {parentsDiseases &&
        parentsDiseases.map((item, index) => (
          <FamilyMedicalParent
            key={index}
            parent={item.parent}
            diseases={item.diseases}
          />
        ))}
    </div>
  );
};

export default FamilyMedicalHistory;
