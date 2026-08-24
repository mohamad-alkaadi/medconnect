import MedicalHistory from "@/components/patient/medical-history/MedicalHistory";

const page = () => {
  return (
    <div className="h-full py-6 w-full flex max-lg:flex-col justify-start items-start lg:space-x-4 max-lg:space-y-4 bg-[#eef2ff] px-3 py-1.5 rounded-lg overflow-auto">
      <MedicalHistory />
    </div>
  );
};

export default page;
