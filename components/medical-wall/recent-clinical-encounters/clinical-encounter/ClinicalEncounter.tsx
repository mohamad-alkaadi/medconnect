"use client";
import { useState } from "react";
import ClinicalEncounterBadge from "./ClinicalEncounterBadge";
import { ClinicalEncounterType } from "@/types/clinicalEncounterTypes";
import ClinicalEncounterLabeledContentBlock from "./ClinicalEncounterLabeledContentBlock";
import ClinicalEncounterPreliminaryDiagnosis from "./ClinicalEncounterPreliminaryDiagnosis";
import ClinicalEncounterActions from "./ClinicalEncounterActions";
import ClinicalEncounterCollapseButton from "./ClinicalEncounterCollapseButton";
import ClinicalEncounterPrescription from "./ClinicalEncounterPrescription";
import ClinicalEncounterAssessmentOrderedAttended from "./ClinicalEncounterAssessmentOrderedAttended";

// if a patient is going for a clinic there is two mandatory sections
// Reported Symptoms and Reported Symptoms
// if a patient is going for a sugary there is two mandatory sections
// Procedure Details and Discharge Summary
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
        <ClinicalEncounterAssessmentOrderedAttended
          assessment={clinicalEncountersItem.assessmentBy}
          ordered={clinicalEncountersItem.orderedBy}
          attended={clinicalEncountersItem.attendedBy}
        />

        <ClinicalEncounterCollapseButton
          collapse={collapse}
          setCollapse={setCollapse}
        />
      </div>
      <div
        className="border rounded-lg bg-[#f8fafc] p-4"
        style={{ display: collapse ? "none" : "block" }}
      >
        <ClinicalEncounterLabeledContentBlock
          title={"Reported Symptoms"}
          paragraph={
            "Persistent red, dry, scaly patch on upper back that is itchy and spreading slowly over 2 weeks."
          }
        />
        <ClinicalEncounterLabeledContentBlock
          title={"Clinical Report"}
          paragraph={
            "Erythematous plaque with silvery scale noted on left upper scapular region. Query plaque psoriasis versus chronic nummular eczema. Patient instructed to obtain histopathology sample scan and complete blood chemistry panel prior to initiating targeted steroid cream."
          }
        />
        {clinicalEncountersItem.additionalSections.length > 0 &&
          clinicalEncountersItem.additionalSections.map((item) => (
            <ClinicalEncounterLabeledContentBlock
              key={crypto.randomUUID.toString()}
              title={item.sectionTitle}
              paragraph={item.sectionParagraph}
            />
          ))}

        <ClinicalEncounterPreliminaryDiagnosis
          diagnosis={"Query Psoriasis / Eczema"}
          color={"amber"}
        />

        {clinicalEncountersItem.prescription.length > 0 && (
          <ClinicalEncounterPrescription
            prescription={clinicalEncountersItem.prescription}
          />
        )}

        {clinicalEncountersItem.files.length > 0 && (
          <ClinicalEncounterActions files={clinicalEncountersItem.files} />
        )}
      </div>
    </div>
  );
};

export default ClinicalEncounter;
