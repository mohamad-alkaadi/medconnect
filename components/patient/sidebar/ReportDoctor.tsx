import { MdOutlineReport } from "react-icons/md";
const ReportDoctor = () => {
  return (
    <div
      className={`flex justify-start items-center space-x-1.5 cursor-pointer select-none hover:bg-[#fff1f2] pl-3 py-2 mb-1 rounded-lg`}
    >
      <div className="text-[16px] text-[#ec003f]">
        <MdOutlineReport />
      </div>
      <p className="text-[12px] font-semibold text-[#ff0000]">
        Report Doctor/GP
      </p>
    </div>
  );
};

export default ReportDoctor;
