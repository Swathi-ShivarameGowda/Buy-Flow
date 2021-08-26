import React from "react";
import { Link } from "react-router-dom";
import {
  AGE,
  EMAIL,
  FIRST_NAME,
  LAST_NAME,
  PURCHASE
} from "../constants/constants";

interface SummaryStepProps {
  collectedData: {
    firstName: string;
    lastName: string;
    email: string;
    age: number;
  };
}

const SummaryStep: React.FC<SummaryStepProps> = (props) => {
  return (
    <>
      <div>
        {FIRST_NAME} {props.collectedData.firstName}
      </div>

      <div>
        {LAST_NAME} {props.collectedData.lastName}
      </div>
      <div>
        {EMAIL} {props.collectedData.email}
      </div>
      <div>
        {AGE} {props.collectedData.age}
      </div>
      <div>
        <Link to="/purchased=dev_ins">{PURCHASE}</Link>
      </div>
    </>
  );
};

export default SummaryStep;
