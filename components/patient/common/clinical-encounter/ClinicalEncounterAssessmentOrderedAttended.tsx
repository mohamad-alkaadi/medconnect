import { DoctorDetailsType } from "@/types/clinicalEncounterTypes";

const ClinicalEncounterAssessmentOrderedAttended = ({
  assessment,
  ordered,
  attended,
}: {
  assessment: DoctorDetailsType;
  ordered: DoctorDetailsType;
  attended: DoctorDetailsType;
}) => {
  return (
    <div>
      <h3 className="font-bold text-slate-800">
        {`${assessment.prefix} ${assessment.name} (${assessment.specialty}) `}
        Assessment
      </h3>
      {assessment.id !== ordered.id && assessment.id !== ordered.id ? (
        <p className=" text-slate-500">
          Ordered{" "}
          {ordered.id !== attended.id && (
            <>
              <span className="text-black font-semibold">
                {` ${ordered.prefix} ${ordered.name} `}
              </span>{" "}
              ({ordered.specialty})
            </>
          )}
          / Attended by:
          <span className="text-black font-semibold">
            {` ${attended.prefix} ${attended.name} `}
          </span>
          ({attended.specialty})
        </p>
      ) : null}
    </div>
  );
};

export default ClinicalEncounterAssessmentOrderedAttended;
