import MainInfoCard from "@/components/medical-wall/main-info-card/MainInfoCard";
import PinnedHealthAlerts from "@/components/medical-wall/pinned-health-alerts/PinnedHealthAlerts";
import RecentClinicalEncounters from "@/components/medical-wall/recent-clinical-encounters/RecentClinicalEncounters";

const page = () => {
  return (
    <div className="h-screen flex justify-start items-center space-x-1.5 bg-[#eef2ff] px-3 py-1.5 rounded-lg">
      {/* <div className="flex flex-col space-y-5">
        <MainInfoCard />
        <PinnedHealthAlerts />
      </div> */}
      <RecentClinicalEncounters />
    </div>
  );
};

export default page;
