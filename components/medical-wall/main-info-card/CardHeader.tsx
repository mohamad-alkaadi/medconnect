import { calculateAge } from "@/utils/dateFunctions";

const CardHeader = ({
  name,
  dateOfBirth,
  gender,
  bloodType,
}: {
  name: string;
  dateOfBirth: string;
  gender: string;
  bloodType: string;
}) => {
  return (
    <div className="rounded-t-lg flex justify-between bg-gradient-to-r px-4 pb-4 from-[#aff0d1] to-[#107b55] text-white">
      <div className="flex flex-col mt-6">
        <p className="font-bold text-xl">{name}</p>
        <p className="text-xs font-normal">
          Born {dateOfBirth} (Age {calculateAge(dateOfBirth)}) • {gender}
        </p>
      </div>
      <p className="mt-4 px-2 py-1 border border-white/20 rounded-full h-fit text-[12px] font-bold bg-white/20">
        Blood Type: {bloodType}
      </p>
    </div>
  );
};

export default CardHeader;
