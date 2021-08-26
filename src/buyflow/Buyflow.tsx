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
  return (
    <>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[props.productId]}</h4>
      {(currentStep === "firstName" && (
        <FirstNameStep cb={getStepCallback("lastName")} />
      )) ||
        (currentStep === "lastName" && (
          <LastNameStep cb={getStepCallback("email")} />
        )) ||
        (currentStep === "email" && (
          <EmailStep cb={getStepCallback("age")} />
        )) ||
        (currentStep === "age" && (
          <AgeStep cb={getStepCallback("summary")} />
        )) ||
        (currentStep === "summary" && (
          <SummaryStep collectedData={collectedData} />
        ))}
    </>
  );
};

export default Buyflow;
