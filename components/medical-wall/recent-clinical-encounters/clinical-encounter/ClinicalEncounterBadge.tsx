const textToIndicator = (textIndicator: string) => {
  switch (textIndicator) {
    case "amber-pulse":
      return (
        <p className="w-2 h-2 bg-amber-500 rounded-full animate-ping mr-1"></p>
      );
    default:
      return "";
  }
};
const ClinicalEncounterBadge = ({
  indicator,
  title,
  stageNum,
}: {
  indicator: string;
  title: string;
  stageNum?: number | null;
}) => {
  // we have a badge indicator based on it we have a function that returns the emoji and; have :string; functio: string text color and border color and bg color
  return (
    <div className="border border-amber-200 rounded-full text-xs flex justify-center items-center px-2 bg-[#fef3c6] text-amber-800 font-semibold">
      {textToIndicator(indicator)}
      <p>
        {stageNum && `Stage ${stageNum}:`} {title}
      </p>
    </div>
  );
};

export default ClinicalEncounterBadge;
