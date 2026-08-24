import React, { ReactNode } from "react";

const BodyStatusCard = ({
  value,
  title,
  children,
}: {
  value: number;
  title: string;
  children?: ReactNode;
}) => {
  return (
    <div className="flex flex-col justify-center items-center py-1 w-full bg-slate-50 border border-slate-150 rounded-xl">
      <p className="text-[9px] text-slate-400 uppercase font-bold">{title}</p>
      <p className="font-bold text-[14px] text-slate-700">
        {value} cm {children}
      </p>
    </div>
  );
};

export default BodyStatusCard;
