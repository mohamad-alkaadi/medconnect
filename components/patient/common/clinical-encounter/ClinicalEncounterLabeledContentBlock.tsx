import React from "react";

const ClinicalEncounterLabeledContentBlock = ({
  title,
  paragraph,
}: {
  title: string;
  paragraph: string;
}) => {
  return (
    <div>
      <h4 className="text-[10px] uppercase font-bold text-slate-400 mb-1">
        {title}
      </h4>
      <p className="text-slate-600 mb-2">{paragraph}</p>
    </div>
  );
};

export default ClinicalEncounterLabeledContentBlock;
