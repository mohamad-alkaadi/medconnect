import CardHeader from "./CardHeader";
import BodyStatus from "./BodyStatus";
import FamilyMedicalHistory from "./FamilyMedicalHistory";
import AdditionalInfoTitleAndParagraph from "./AdditionalInfoTitleAndParagraph";
import info from "@/placeholder/patient/mainInfoCard.json";
const MainInfoCard = () => {
  return (
    <div className="bg-white rounded-lg w-full shadow-sm">
      <CardHeader
        name={info.name}
        dateOfBirth={info.birthDate}
        gender={info.sex}
        bloodType={info.bloodType}
      />
      <BodyStatus height={info.height} weight={info.weight} />
      <AdditionalInfoTitleAndParagraph
        title={"🩺 PRIMARY GP"}
        paragraph={`Dr. ${info.primaryGeneralPractitioner}`}
      />
      <FamilyMedicalHistory parentsDiseases={info.familyHistory} />
      <AdditionalInfoTitleAndParagraph
        title={"📍 Registered Address"}
        paragraph={info.address}
      />
      <AdditionalInfoTitleAndParagraph
        title={"🩶 Emergency Contact"}
        paragraph={`${info.emergencyContract.name} (${info.emergencyContract.relation}): ${info.emergencyContract.phone}`}
      />
    </div>
  );
};

export default MainInfoCard;
