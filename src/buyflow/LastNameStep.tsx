import React, { useState } from "react";
import { ERROR_MSG, LAST_NAME } from "../constants/constants";

interface LastNameStepProps {
  cb: (field: string, value: string) => void;
}

const LastNameStep: React.FC<LastNameStepProps> = (props) => {
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const handleClick = () => {
    return lastName ? props.cb("lastName", lastName) : setError(ERROR_MSG);
  };
  return (
    <>
      <div>
        {LAST_NAME}{" "}
        <input
          type="lastName"
          onChange={({ target: { value } }) => {
            setLastName(value);
          }}
          value={lastName}
        ></input>
      </div>
      {error && <p>{error}</p>}
      <button onClick={handleClick}>Next</button>
    </>
  );
};

export default LastNameStep;
