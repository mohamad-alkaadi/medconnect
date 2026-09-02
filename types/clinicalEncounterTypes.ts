export type ClinicalEncounterType = {
  id: string;
  title: string;
  date: string;
  assessmentBy: DoctorDetailsType;
  orderedBy: DoctorDetailsType;
  attendedBy: DoctorDetailsType;
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
  prescription: PrescriptionType[];
  files: FileType[];
};

export type FileType = {
  id: string;
  date: string;
  title: string;
  status: string;
  review: string;
};
export type DoctorDetailsType = {
  id: string;
  prefix: string;
  name: string;
  specialty: string;
};

export type PrescriptionType = {
  id: string;
  prescriptionTitle: string;
  dosage: string;
  frequency: string;
};

export type DocumentType = {
  id: string;
  title: string;
  date: string;
  orderedBy: DoctorDetailsType;
  reviewedBy: DoctorDetailsType;
  review: string;
  reviewed: boolean;
  status: string;
};
