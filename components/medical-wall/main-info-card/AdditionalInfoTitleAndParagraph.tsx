import React from "react";

const AdditionalInfoTitleAndParagraph = ({
  title,
  paragraph,
}: {
  title: string;
  paragraph: string;
}) => {
  return (
    <div className="mx-4 flex flex-col space-y-1 py-4 border-b border-slate-100">
      <p className="text-[10px] uppercase text-slate-400 font-black mb-1.5">
        {title}
      </p>
      <p className="ml-4 text-slate-700 font-bold text-[11px]">{paragraph}</p>
    </div>
  );
};

export default AdditionalInfoTitleAndParagraph;
