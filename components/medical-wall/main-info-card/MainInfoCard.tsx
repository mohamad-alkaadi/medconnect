import CardHeader from "./CardHeader";
import BodyStatus from "./BodyStatus";
import FamilyMedicalHistory from "./FamilyMedicalHistory";
import AdditionalInfoTitleAndParagraph from "./AdditionalInfoTitleAndParagraph";
const MainInfoCard = () => {
  return (
    <div className="bg-white rounded-lg">
      <CardHeader
        name={"Max Mustermann"}
        dateOfBirth={"1999-07-27"}
        gender={"male"}
        bloodType={"A-"}
      />
      <BodyStatus height={182} weight={78} />
      <AdditionalInfoTitleAndParagraph
        title={"🩺 PRIMARY GP"}
        paragraph={"Dr. Henry Wu"}
      />
      <FamilyMedicalHistory
        parentsDiseases={[
          {
            parent: "father",
            diseases: ["Type-2 Diabetes", "Chronic Hypertension"],
          },
          {
            parent: "mother",
            diseases: ["Seasonal Bronchial Asthma"],
          },
        ]}
      />
      <AdditionalInfoTitleAndParagraph
        title={"📍 Registered Address"}
        paragraph={"Friedrichstraße 100, 10117 Berlin"}
      />
      <AdditionalInfoTitleAndParagraph
        title={"🩶 Emergency Contact"}
        paragraph={"Clara Mustermann (Spouse): +49 176 1234567"}
      />
    </div>
  );
};

export default MainInfoCard;
