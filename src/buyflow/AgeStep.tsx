import React, { useState } from "react";
import { ERROR_MSG, NEXT, AGE, VALID_AGE_ERROR } from "../constants/constants";

interface AgeStepProps {
  cb: (field: string, value: number) => void;
}

const AgeStep: React.FC<AgeStepProps> = (props) => {
  const [age, setAge] = useState(0);
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
  const handleChange = (value) => {
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
      <button onClick={handleClick}>{NEXT}</button>
    </>
  );
};

export default AgeStep;
