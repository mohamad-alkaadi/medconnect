const FamilyMedicalParent = ({
  parent,
  diseases,
}: {
  parent: string;
  diseases: string[];
}) => {
  return (
    <div className="ml-4 flex items-center space-x-1 text-[11px]">
      <p className="text-slate-700 font-bold capitalize">{parent}:</p>
      <p className="text-slate-600">{diseases.join(", ")}</p>
    </div>
  );
};

export default FamilyMedicalParent;
