import React, { useState } from "react";
import {
  ERROR_MSG,
  LAST_NAME,
  NAME_REGEX,
  NEXT,
  VALID_NAME_ERROR
} from "../constants/constants";

interface LastNameStepProps {
  cb: (field: string, value: string) => void;
}

const LastNameStep: React.FC<LastNameStepProps> = (props) => {
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const handleClick = () => {
    if (lastName) {
      if (!NAME_REGEX.test(lastName)) {
        setError(VALID_NAME_ERROR);
      } else {
        props.cb("lastName", lastName);
      }
    } else {
      setError(ERROR_MSG);
    }
  };
  const handleChange = (value) => {
    setLastName(value);
  };

  return (
    <>
      <div>
        {LAST_NAME}{" "}
        <input
          type="lastName"
          onChange={(e) => handleChange(e.target.value)}
          value={lastName}
        ></input>
      </div>
      {error && <p>{error}</p>}
      <button onClick={handleClick}>{NEXT}</button>
    </>
  );
};

export default LastNameStep;
