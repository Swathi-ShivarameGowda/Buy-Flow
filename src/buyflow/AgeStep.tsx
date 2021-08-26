import React, { useState } from "react";
import { ERROR_MSG } from "../constants/constants";

interface AgeStepProps {
  cb: (field: string, value: number) => void;
}

const AgeStep: React.FC<AgeStepProps> = (props) => {
  const [age, setAge] = useState(0);
  const [error, setError] = useState("");
  const handleClick = () => {
    return age ? props.cb("age", age) : setError(ERROR_MSG);
  };

  return (
    <>
      <div>
        Age:{" "}
        <input
          type="number"
          onChange={({ target: { value } }) => {
            setAge(Number(value));
          }}
          value={age}
        ></input>
      </div>
      {error && <p>{error}</p>}
      <button onClick={handleClick}>Next</button>
    </>
  );
};

export default AgeStep;
