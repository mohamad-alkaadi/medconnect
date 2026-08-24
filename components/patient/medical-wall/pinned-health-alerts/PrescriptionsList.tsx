import PrescriptionsListItem from "./PrescriptionsListItem";

const PrescriptionsList = ({
  prescriptions,
}: {
  prescriptions: { title: string; dosage: string; frequency: string }[];
}) => {
  return (
    <div>
      <div className="text-slate-400 font-black text-[10px] uppercase mb-1">
        Current Active Prescriptions
      </div>
      {prescriptions.map((item, index) => (
        <PrescriptionsListItem
          key={index}
          itemTitle={item.title}
          itemDosage={item.dosage}
          itemFrequency={item.frequency}
        />
      ))}
    </div>
  );
};

export default PrescriptionsList;
