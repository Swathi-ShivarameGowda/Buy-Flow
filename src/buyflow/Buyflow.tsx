import React, { useState } from "react";
import AgeStep from "./AgeStep";
import EmailStep from "./EmailStep";
import SummaryStep from "./SummaryStep";
import FirstNameStep from "./FirstNameStep";
import LastNameStep from "./LastNameStep";
import { ProductIds, PRODUCT_IDS_TO_NAMES } from "../constants/constants";

interface BuyflowProps {
  productId: ProductIds;
}

const Buyflow: React.FC<BuyflowProps> = (props) => {
  const [currentStep, setStep] = useState("firstName");
  const [collectedData, updateData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: 0
  });
  const getStepCallback = (nextStep: string) => (field: string, value: any) => {
    updateData({ ...collectedData, [field]: value });
    setStep(nextStep);
  };
  const getPreviousStepCallback = (prevStep: string) => (field: string) => {
    setStep(prevStep);
  };

  return (
    <>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[props.productId]}</h4>
      {(currentStep === "firstName" && (
        <FirstNameStep
          cb={getStepCallback("lastName")}
          fName={collectedData?.firstName}
        />
      )) ||
        (currentStep === "lastName" && (
          <LastNameStep
            cb={getStepCallback("email")}
            pb={getPreviousStepCallback("firstName")}
            lName={collectedData?.lastName}
          />
        )) ||
        (currentStep === "email" && (
          <EmailStep
            cb={getStepCallback("age")}
            pb={getPreviousStepCallback("lastName")}
            mail={collectedData?.email}
          />
        )) ||
        (currentStep === "age" && (
          <AgeStep
            cb={getStepCallback("summary")}
            pb={getPreviousStepCallback("email")}
            ag={collectedData?.age}
          />
        )) ||
        (currentStep === "summary" && (
          <SummaryStep
            collectedData={collectedData}
            pb={getPreviousStepCallback("age")}
          />
        ))}
    </>
  );
};

export default Buyflow;
