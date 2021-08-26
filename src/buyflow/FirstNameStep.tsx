import React, { useState } from "react";
import { ERROR_MSG, FIRST_NAME } from "../constants/constants";

interface FirstNameStepProps {
  cb: (field: string, value: string) => void;
}

const FirstNameStep: React.FC<FirstNameStepProps> = (props) => {
  const [firstName, setFirstName] = useState("");
  const [error, setError] = useState("");
  const handleClick = () => {
    return firstName ? props.cb("firstName", firstName) : setError(ERROR_MSG);
  };
  return (
    <>
      <div>
        {FIRST_NAME}{" "}
        <input
          type="firstName"
          onChange={({ target: { value } }) => {
            setFirstName(value);
          }}
          value={firstName}
        ></input>
      </div>
      {error && <p>{error}</p>}
      <button onClick={handleClick}>Next</button>
    </>
  );
};

export default FirstNameStep;
