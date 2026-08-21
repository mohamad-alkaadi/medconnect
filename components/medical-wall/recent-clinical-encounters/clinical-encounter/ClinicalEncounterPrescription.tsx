import { PrescriptionType } from "@/types/clinicalEncounterTypes";

const ClinicalEncounterPrescription = ({
  prescription,
}: {
  prescription: PrescriptionType[];
}) => {
  return (
    <div>
      <h4 className="text-[10px] uppercase font-bold text-slate-400 border-t pt-2 mb-2">
        Prescription
      </h4>
      <div className="flex justify-start space-x-1 overflow-x-auto pb-3">
        {prescription.map((item) => (
          <div key={item.id} className="flex flex-wrap gap-2 whitespace-nowrap">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">
              <span className="font-semibold text-slate-900 dark:text-slate-100">
                {item.prescriptionTitle}
              </span>
              <span className="text-slate-400">•</span>
              <span>{item.dosage}</span>
              <span className="text-slate-400">•</span>
              <span>{item.frequency}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClinicalEncounterPrescription;
