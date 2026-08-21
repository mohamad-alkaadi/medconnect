export type ClinicalEncounterType = {
  id: string;
  title: string;
  date: string;
  assessmentBy: {
    id: string;
    prefix: string;
    name: string;
    specialty: string;
  };
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
