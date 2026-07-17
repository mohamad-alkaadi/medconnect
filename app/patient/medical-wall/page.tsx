const page = () => {
  return (
    <div className="h-screen flex justify-start items-center space-x-1.5 bg-[#eef2ff] pl-3 py-1.5 rounded-lg">
      <div className="bg-white rounded-lg">
        <div className="rounded-t-lg flex bg-gradient-to-r px-4 pb-4 from-[#aff0d1] to-[#107b55] text-white">
          <div className="flex flex-col mt-6">
            <p className="font-bold text-xl">Max Mustermann</p>
            <p className="text-xs font-[400]">
              Born 1992-06-15 (Age 34) • Male
            </p>
          </div>
          <p className="mt-4 px-2 py-1 border border-white/20 rounded-full h-fit text-[12px] font-bold bg-white/20">
            Blood Type: A-
          </p>
        </div>
        <div className="flex mx-4 justify-center space-x-2 py-4 border-b border-slate-100">
          <div className="flex flex-col justify-center items-center py-1 w-full bg-slate-50 border border-slate-150 rounded-xl">
            <p className="text-[9px] text-slate-400 uppercase font-bold">
              Height
            </p>
            <p className="font-bold text-[14px] text-slate-700">182 cm</p>
          </div>
          <div className="flex flex-col justify-center items-center py-1 w-full bg-slate-50 border border-slate-150 rounded-xl">
            <p className="text-[9px] text-slate-400 uppercase font-bold">
              Weight
            </p>
            <p className="font-bold text-[14px] text-slate-700">
              78 kg{" "}
              <button className="text-blue-700 text-[10px] hover:underline cursor-pointer">
                (Edit)
              </button>
            </p>
          </div>
        </div>
        <div className="mx-4 flex flex-col space-y-1 py-4 border-b border-slate-100">
          <div className="flex justify-between items-center text-[11px]">
            <p className="text-slate-400 font-bold">ORGAN DONOR:</p>
            <p className="px-1.5 py-0.2 rounded-sm border border-indigo-200 text-blue-700 bg-indigo-50 font-bold ">
              REGISTERED (A-)
            </p>
          </div>
          <div className="flex justify-between items-center text-[11px]">
            <p className="text-slate-400 font-bold">PRIMARY GP:</p>
            <p className="font-bold text-slate-700">Dr. Henry Wu (Duty)</p>
          </div>
        </div>
        <div className="mx-4 flex flex-col space-y-1 py-4 border-b border-slate-100">
          <p className="text-[10px] uppercase text-slate-400 font-black mb-1.5">
            🧬 Verified Family Medical History
          </p>
          <div className="ml-4 flex items-center space-x-1 text-[11px]">
            <p className="text-slate-700 font-bold">Father:</p>
            <p className="text-slate-600">
              Type-2 Diabetes, Chronic Hypertension
            </p>
          </div>
          <div className="ml-4 flex items-center space-x-1 text-[11px]">
            <p className="text-slate-700 font-bold">Mother:</p>
            <p className="text-slate-600">Seasonal Bronchial Asthma</p>
          </div>
        </div>
        <div className="mx-4 flex flex-col space-y-1 py-4 border-b border-slate-100">
          <p className="text-[10px] uppercase text-slate-400 font-black mb-1.5">
            📍 Registered Address
          </p>
          <p className="ml-4 text-slate-700 font-bold text-[11px]">
            Friedrichstraße 100, 10117 Berlin
          </p>
        </div>
        <div className="mx-4 flex flex-col space-y-1 py-4 border-b border-slate-100">
          <p className="text-[10px] uppercase text-slate-400 font-black mb-1.5">
            🩶 Emergency Contact
          </p>
          <p className="ml-4 text-slate-700 font-bold text-[11px]">
            Clara Mustermann (Spouse) - +49 176 1234567
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
