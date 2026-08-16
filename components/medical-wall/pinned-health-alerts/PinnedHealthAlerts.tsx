import { FiAlertTriangle } from "react-icons/fi";
import PrescriptionsList from "./PrescriptionsList";
import PinnedHealthSection from "./PinnedHealthSection";
import healthAlerts from "@/placeholder/patient/pinnedHealthAlerts.json";
const PinnedHealthAlerts = () => {
  return (
    <div className="bg-white rounded-lg px-4 py-6 shadow-sm">
      <div className="flex justify-start items-center space-x-2 border-b border-slate-100 pb-2 mb-2">
        <FiAlertTriangle className="text-red-600 text-[18px]" />
        <p className="font-bold text-[16px]">Pinned Health Alerts</p>
      </div>
      <PinnedHealthSection
        title={"Known Allergies"}
        listBulletStyle={"⚠️"}
        unorderedList={healthAlerts.allergies.allergyList}
        textColor={"#c70036"}
        bgColor={"#fff1f2"}
        bColor={"#ffccd3"}
      />
      <PinnedHealthSection
        title={"Chronic Conditions"}
        listBulletStyle={"•"}
        unorderedList={healthAlerts.chronicConditions.chronicConditionsList}
        textColor={"#973c00"}
        bgColor={"#fffbeb"}
        bColor={"#fee685"}
      />
      <PrescriptionsList prescriptions={healthAlerts.prescriptions} />
    </div>
  );
};

export default PinnedHealthAlerts;
