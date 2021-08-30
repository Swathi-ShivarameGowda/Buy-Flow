import React, { useState } from "react";
import {
  ERROR_MSG,
  NEXT,
  AGE,
  VALID_AGE_ERROR,
  PREVIOUS
} from "../constants/constants";

interface AgeStepProps {
  cb: (field: string, value: number) => void;
  pb: (field: string) => void;
  ag: number;
}

const AgeStep: React.FC<AgeStepProps> = (props) => {
  const [age, setAge] = useState(props.ag ? props.ag : 0);
  const [error, setError] = useState("");

  const handleClick = () => {
    if (age) {
      if (age < 1) {
        setError(VALID_AGE_ERROR);
      } else {
        props.cb("age", age);
      }
    } else {
      setError(ERROR_MSG);
    }
  };

  const handlePreviousClick = () => {
    props.pb("email");
  };

  const handleChange = (value: any) => {
    setAge(value);
  };

  return (
    <>
      <div>
        {AGE}{" "}
        <input
          type="number"
          onChange={(e) => handleChange(e.target.value)}
          value={age}
        ></input>
      </div>
      {error && <p>{error}</p>}
      <button onClick={handlePreviousClick}>{PREVIOUS}</button>{" "}
      <button onClick={handleClick}>{NEXT}</button>
    </>
  );
};

export default AgeStep;
