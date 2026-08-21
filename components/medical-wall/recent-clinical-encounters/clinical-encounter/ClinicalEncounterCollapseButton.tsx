import React, { Dispatch, SetStateAction } from "react";

const ClinicalEncounterCollapseButton = ({
  collapse,
  setCollapse,
}: {
  collapse: boolean;
  setCollapse: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <button
      onClick={() => setCollapse(!collapse)}
      className="text-indigo-700 hover:text-indigo-900 cursor-pointer border border-[#e2e8f0] bg-[#f1f5f9] h-fit rounded-lg px-3 text-[12px] font-bold flex justify-center items-center space-x-2"
    >
      <p>{collapse ? "Expand" : "Collapse"}</p>
      <p>{collapse ? "+" : "-"}</p>
    </button>
  );
};

export default ClinicalEncounterCollapseButton;
