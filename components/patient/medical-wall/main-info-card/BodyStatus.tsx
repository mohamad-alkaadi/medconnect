import BodyStatusCard from "./BodyStatusCard";

const BodyStatus = ({ height, weight }: { height: number; weight: number }) => {
  return (
    <div className="flex mx-4 justify-center space-x-2 py-4 border-b border-slate-100">
      <BodyStatusCard title="height" value={height} />
      <BodyStatusCard title="weight" value={weight}>
        <button className="text-blue-700 text-[10px] hover:underline cursor-pointer">
          (Edit)
        </button>
      </BodyStatusCard>
    </div>
  );
};

export default BodyStatus;
