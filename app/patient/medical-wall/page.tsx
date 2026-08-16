import MainInfoCard from "@/components/medical-wall/main-info-card/MainInfoCard";
import PinnedHealthAlerts from "@/components/medical-wall/pinned-health-alerts/PinnedHealthAlerts";
import RecentClinicalEncounters from "@/components/medical-wall/recent-clinical-encounters/RecentClinicalEncounters";

const page = () => {
  return (
    <div className="lg:h-screen py-6 w-full flex max-lg:flex-col justify-center items-start lg:space-x-4 max-lg:space-y-4 bg-[#eef2ff] px-3 py-1.5 rounded-lg overflow-auto">
      <div className="flex flex-col space-y-4 max-lg:w-full">
        <MainInfoCard />
        <PinnedHealthAlerts />
      </div>
      <RecentClinicalEncounters />
    </div>
  );
};

export default page;
