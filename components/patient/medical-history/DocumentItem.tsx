import { DocumentType } from "@/types/clinicalEncounterTypes";
import React from "react";

const DocumentItem = ({ documentItem }: { documentItem: DocumentType }) => {
  return (
    <div className="mb-2">
      <div className="px-3 py-4 border border-b-0 border-slate-300 rounded-t-lg bg-slate-50">
        <div className="font-bold text-[15px]">{documentItem.title}</div>
        <div className="font-medium text-[11px]">
          Ordered: <span className="font-bold">{documentItem.date}</span> by{" "}
          <span className="font-bold">
            {documentItem.orderedBy.prefix} {documentItem.orderedBy.name}
          </span>
        </div>
        {documentItem.reviewed && (
          <div className="bg-[#f4fdfa] border border-black rounded-md mt-3 px-3 py-3">
            <div className="font-bold text-[10px] text-green-800 uppercase">
              Reviewed by {documentItem.reviewedBy.name}
            </div>
            <div className="text-[11px] italic">{documentItem.review}</div>
          </div>
        )}
      </div>
      <div className="bg-slate-200 rounded-b-lg border border-slate-300 px-3 py-1 text-[12px] flex justify-between items-center">
        <div className="text-slate-600 font-thin">
          Status: <span className="uppercase">{documentItem.status}</span>
        </div>
        <button
          disabled={documentItem.status !== "completed"}
          className="cursor-pointer hover:underline text-blue-500"
        >
          {documentItem.status === "completed"
            ? "Open PDF Viewer"
            : "Upload PDF"}
        </button>
      </div>
    </div>
  );
};

export default DocumentItem;
