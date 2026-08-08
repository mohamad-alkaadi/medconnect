import MainInfoCard from "@/components/medical-wall/main-info-card/MainInfoCard";
import PinnedHealthAlerts from "@/components/medical-wall/pinned-health-alerts/PinnedHealthAlerts";

const page = () => {
  return (
    <div className="h-screen flex justify-start items-center space-x-1.5 bg-[#eef2ff] px-3 py-1.5 rounded-lg">
      {/* <div className="flex flex-col space-y-5">
        <MainInfoCard />
        <PinnedHealthAlerts />
      </div> */}
      <div className="bg-white rounded-lg px-6 py-7 max-w-[850px]">
        <div className="border-b border-slate-100 mb-6 pb-3 flex justify-between items-center">
          <div>
            <div className="font-black text-slate-850 tracking-tight">
              Recent Clinical Encounters
            </div>
            <div className="text-xs text-slate-500">
              Your most recent checkups, logs, and diagnoses.
            </div>
          </div>
          <div className="hover:text-indigo-800 hover:underline cursor-pointer ">
            Full History →
          </div>
        </div>
        <div className="ml-3 pl-6">
          <div className="flex justify-between items-center mb-1">
            <div className="text-slate-500 text-xs font-mono font-semibold">
              2026-06-25
            </div>
            <div className="border border-amber-200 rounded-full text-xs flex justify-center items-center px-2 bg-[#fef3c6] text-amber-800 font-semibold">
              <div className="w-2 h-2 bg-amber-500 rounded-full animate-ping mr-1"></div>
              Stage 1: Initial Consultation
            </div>
          </div>
          <div className="flex justify-between mb-3">
            <div>
              <div className="font-bold  text-slate-800">
                Dermatological Assessment
              </div>
              <div className=" text-slate-500">
                Ordered / Attended by:
                <span className="text-black font-semibold">
                  Dr. Ellie Sattler
                </span>
                (Dermatology)
              </div>
            </div>
            <button className="text-indigo-700 hover:text-indigo-900 cursor-pointer border border-[#e2e8f0] bg-[#f1f5f9] h-fit rounded-lg px-3 text-[12px] font-bold flex justify-center items-center space-x-2">
              <p>Collapse</p>
              <div>-</div>
            </button>
          </div>
          <div className="border rounded-lg bg-[#f8fafc] p-4">
            <div className="text-[10px] uppercase font-bold text-slate-400 mb-1">
              Reported Symptoms
            </div>
            <div className="text-slate-600 mb-2">
              Persistent red, dry, scaly patch on upper back that is itchy and
              spreading slowly over 2 weeks.
            </div>
            <div className="text-[10px] uppercase font-bold text-slate-400 mb-1">
              Clinical Report
            </div>
            <div className="text-slate-600 mb-2">
              Erythematous plaque with silvery scale noted on left upper
              scapular region. Query plaque psoriasis versus chronic nummular
              eczema. Patient instructed to obtain histopathology sample scan
              and complete blood chemistry panel prior to initiating targeted
              steroid cream.
            </div>
            <div className="text-[10px] uppercase font-bold text-slate-400 mb-1">
              Preliminary Diagnosis
            </div>
            <div className="text-xs border bg-amber-50 text-amber-800 border-amber-200 w-fit px-2 rounded-md font-semibold mb-2">
              Query Psoriasis / Eczema
            </div>
            <div className="text-[10px] uppercase font-bold text-slate-400 border-t pt-2 mb-2">
              Required Patient Actions (Ordered Diagnostics)
            </div>
            <div className="flex justify-between">
              <div className="border rounded-xl px-3 py-4 bg-slate-100">
                <div className="flex justify-between space-x-8 mb-2">
                  <div className="text-xs leading-tight max-w-[80px] text-slate-700 font-bold">
                    Skin Biopsy Histopathology Report
                  </div>
                  <div className="bg-slate-200 rounded-md px-1 py-1 text-slate-600 h-fit uppercase text-[9px] font-extrabold px-">
                    Pending
                  </div>
                </div>
                <div className="font-bold text-xs text-emerald-800 px-3 py-1.5 border border-emerald-200 rounded-lg bg-white hover:bg-emerald-50 cursor-pointer">
                  Upload Report Now
                </div>
              </div>
              <div className="border rounded-xl px-3 py-4 bg-slate-100">
                <div className="flex justify-between space-x-8 mb-2">
                  <div className="text-xs leading-tight max-w-[80px] text-slate-700 font-bold">
                    Complete Immunology Panel
                  </div>
                  <div className="bg-slate-200 rounded-md px-1 py-1 text-slate-600 h-fit uppercase text-[9px] font-extrabold px-">
                    Pending
                  </div>
                </div>
                <div className="font-bold text-xs text-emerald-800 px-3 py-1.5 border border-emerald-200 rounded-lg bg-white hover:bg-emerald-50 cursor-pointer">
                  Upload Report Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
