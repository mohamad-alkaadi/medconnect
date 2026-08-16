"use client";
import React, { useState } from "react";
import ClinicalEncounterBadge from "./ClinicalEncounterBadge";
type ClinicalEncounterType = {
  id: string;
  title: string;
  date: string;
  orderedBy: {
    id: string;
    prefix: string;
    name: string;
    specialty: string;
  };
  attendedBy: {
    id: string;
    prefix: string;
    name: string;
    specialty: string;
  };
  reportedSymptoms: string;
  clinicalReport: string;
  additionalSections: { sectionTitle: string; sectionParagraph: string }[];
  preliminaryDiagnosis: {
    title: string;
    color: string;
  };
  eventBadge: {
    stage: boolean;
    stageInfo: {
      stageNum: number;
    };
    title: string;
    indicator: string;
  };
  files: {
    id: string;
    date: string;
    title: string;
    status: string;
    review: string;
  }[];
};

const ClinicalEncounter = ({
  clinicalEncountersItem,
}: {
  clinicalEncountersItem: ClinicalEncounterType;
}) => {
  const [collapse, setCollapse] = useState<boolean>(false);
  return (
    <div className="ml-3 pl-6 col-span-2 mb-4">
      <div className="flex justify-between items-center mb-1">
        <p className="text-slate-500 text-xs font-mono font-semibold">
          {clinicalEncountersItem.date}
        </p>
        <ClinicalEncounterBadge
          indicator={"amber-pulse"}
          title={"Initial Consultation"}
          stageNum={
            clinicalEncountersItem.eventBadge.stage
              ? clinicalEncountersItem.eventBadge.stageInfo.stageNum
              : null
          }
        />
      </div>
      <div className="flex justify-between mb-3">
        <div>
          <h3 className="font-bold  text-slate-800">
            Dermatological Assessment
          </h3>
          <p className=" text-slate-500">
            Ordered / Attended by:
            <span className="text-black font-semibold">Dr. Ellie Sattler</span>
            (Dermatology)
          </p>
        </div>
        <button
          onClick={() => setCollapse(!collapse)}
          className="text-indigo-700 hover:text-indigo-900 cursor-pointer border border-[#e2e8f0] bg-[#f1f5f9] h-fit rounded-lg px-3 text-[12px] font-bold flex justify-center items-center space-x-2"
        >
          <p>{collapse ? "Expand" : "Collapse"}</p>
          <p>{collapse ? "+" : "-"}</p>
        </button>
      </div>
      <div
        className="border rounded-lg bg-[#f8fafc] p-4"
        style={{ display: collapse ? "none" : "block" }}
      >
        <h4 className="text-[10px] uppercase font-bold text-slate-400 mb-1">
          Reported Symptoms
        </h4>
        <p className="text-slate-600 mb-2">
          Persistent red, dry, scaly patch on upper back that is itchy and
          spreading slowly over 2 weeks.
        </p>
        <h4 className="text-[10px] uppercase font-bold text-slate-400 mb-1">
          Clinical Report
        </h4>
        <p className="text-slate-600 mb-2">
          Erythematous plaque with silvery scale noted on left upper scapular
          region. Query plaque psoriasis versus chronic nummular eczema. Patient
          instructed to obtain histopathology sample scan and complete blood
          chemistry panel prior to initiating targeted steroid cream.
        </p>
        <h4 className="text-[10px] uppercase font-bold text-slate-400 mb-1">
          Preliminary Diagnosis
        </h4>
        <p className="text-xs border bg-amber-50 text-amber-800 border-amber-200 w-fit px-2 rounded-md font-semibold mb-2">
          Query Psoriasis / Eczema
        </p>
        <h4 className="text-[10px] uppercase font-bold text-slate-400 border-t pt-2 mb-2">
          Required Patient Actions (Ordered Diagnostics)
        </h4>
        <div className="flex justify-between space-x-2">
          <div className="border rounded-xl px-3 py-4 bg-slate-100 flex-1">
            <div className="flex justify-between mb-2">
              <p className="text-xs leading-tight max-w-[80px] text-slate-700 font-bold">
                Skin Biopsy Histopathology Report
              </p>
              <p className="bg-slate-200 rounded-md px-1 py-1 text-slate-600 h-fit uppercase text-[9px] font-extrabold px-">
                Pending
              </p>
            </div>
            <button className="flex justify-center font-bold text-xs text-emerald-800 px-3 py-1.5 border border-emerald-200 rounded-lg bg-white hover:bg-emerald-50 cursor-pointer">
              Upload file
            </button>
          </div>
          <div className="border rounded-xl px-3 py-4 bg-slate-100 flex-1">
            <div className="flex justify-between mb-2">
              <p className="text-xs leading-tight max-w-[80px] text-slate-700 font-bold">
                Complete Immunology Panel
              </p>
              <p className="bg-slate-200 rounded-md px-1 py-1 text-slate-600 h-fit uppercase text-[9px] font-extrabold px-">
                Pending
              </p>
            </div>
            <button className="flex justify-center font-bold text-xs text-emerald-800 px-3 py-1.5 border border-emerald-200 rounded-lg bg-white hover:bg-emerald-50 cursor-pointer">
              Upload file
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicalEncounter;
