import React, { useState } from "react";

interface AgeStepProps {
  cb: (field: string, value: number) => void;
}

const AgeStep: React.FC<AgeStepProps> = (props) => {
  const [age, setAge] = useState(0);
  const [error, setError] = useState("");
  const handleClick = () => {
    return age
      ? props.cb("age", age)
      : setError("please enter the age in the above field to continue");
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
