const PrescriptionsListItem = ({
  itemTitle,
  itemDosage,
  itemFrequency,
}: {
  itemTitle: string;
  itemDosage: string;
  itemFrequency: string;
}) => {
  return (
    <div className="flex space-x-3 border-2 border-[#e2e8f0] px-3 py-3 rounded-lg bg-[#f8fafc] mb-2">
      <div className="w-fit h-fit px-2 py-1 rounded-lg bg-[#d0fae5] text-[#006045] font-bold">
        {itemTitle[0]}
      </div>
      <div>
        <div className="text-[16px] font-bold text-[#314158]">{itemTitle}</div>
        <div className="text-[#62748e] text-[12px] font-medium">
          Dosage: {itemDosage} • Frequency: {itemFrequency}
        </div>
      </div>
    </div>
  );
};

export default PrescriptionsListItem;
