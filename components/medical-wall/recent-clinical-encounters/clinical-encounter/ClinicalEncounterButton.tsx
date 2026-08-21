import React from "react";

const ClinicalEncounterButton = ({
  id,
  title,
  status,
}: {
  id: string;
  title: string;
  status: string;
}) => {
  return (
    <div className="border rounded-xl px-3 py-4 bg-slate-100 flex-1 min-w-[200px] flex flex-col justify-between">
      <div className="flex justify-between mb-2 space-x-3">
        <p className="text-xs leading-tight text-slate-700 font-bold">
          {title}
        </p>
        <p className="bg-slate-200 rounded-md px-1 py-1 text-slate-600 h-fit uppercase text-[9px] font-extrabold px-">
          {status}
        </p>
      </div>
      <button className="w-full flex justify-center font-bold text-xs text-emerald-800 px-3 py-1.5 border border-emerald-200 rounded-lg bg-white hover:bg-emerald-50 cursor-pointer">
        {status === "pending" ? "Upload file" : ""}
      </button>
    </div>
  );
};

export default ClinicalEncounterButton;
