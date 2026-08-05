import React from "react";
import { FiAlertTriangle } from "react-icons/fi";

const PinnedHealthAlerts = () => {
  return (
    <div className="bg-white rounded-lg px-4 py-6">
      <div className="flex justify-start items-center space-x-2 border-b border-slate-100 pb-2">
        <FiAlertTriangle className="text-red-600 text-[18px]" />
        <p className="font-bold text-[16px]">Pinned Health Alerts</p>
      </div>
      <div className="py-3">
        <div className="text-slate-400 font-black text-[10px] uppercase mb-1">
          Known Allergies
        </div>
        <div className="flex space-x-1 text-[#c70036]">
          <div className="border border-[#ffccd3] rounded-xl bg-[#fff1f2] px-3 flex justify-center items-center space-x-1">
            <div className="text-[11px]">⚠️</div>
            <p className="font-semibold text-[14px]">Penicillin</p>
          </div>
          <div className="border border-[#ffccd3] rounded-xl bg-[#fff1f2] px-3 flex justify-center items-center space-x-1">
            <div className="text-[11px]">⚠️</div>
            <p className="font-semibold text-[14px]">Peanuts</p>
          </div>
          <div className="border border-[#ffccd3] rounded-xl bg-[#fff1f2] px-3 flex justify-center items-center space-x-1">
            <div className="text-[11px]">⚠️</div>
            <p className="font-semibold text-[14px]">Latex</p>
          </div>
        </div>
      </div>
      <div className="py-3">
        <div className="text-slate-400 font-black text-[10px] uppercase mb-1">
          Chronic Conditions
        </div>
        <div className="flex space-x-1  text-[#973c00]">
          <div className="border border-[#fee685] rounded-xl bg-[#fffbeb] px-3 flex justify-center items-center space-x-1">
            <div className="text-[11px]">•</div>
            <p className="font-semibold text-[14px]">Hypertension</p>
          </div>
          <div className="border border-[#fee685] rounded-xl bg-[#fffbeb] px-3 flex justify-center items-center space-x-1">
            <div className="text-[11px]">•</div>
            <p className="font-semibold text-[14px]">Mild Asthma</p>
          </div>
        </div>
      </div>

      <div>
        <div className="text-slate-400 font-black text-[10px] uppercase mb-1">
          Current Active Prescriptions
        </div>
        <div className="flex space-x-3 border-2 border-[#e2e8f0] px-3 py-3 rounded-lg bg-[#f8fafc]">
          <div className="w-fit h-fit px-2 py-1 rounded-lg bg-[#d0fae5] text-[#006045] font-bold">
            {"Ramipril"[0]}
          </div>
          <div>
            <div className="text-[16px] font-bold text-[#314158]">Ramipril</div>
            <div className="text-[#62748e] font-[400]">
              Dosage: 5mg • Frequency: Once daily in the morning
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PinnedHealthAlerts;
