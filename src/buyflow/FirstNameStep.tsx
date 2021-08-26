import React, { useState } from "react";
import {
  ERROR_MSG,
  FIRST_NAME,
  NAME_REGEX,
  NEXT,
  VALID_NAME_ERROR
} from "../constants/constants";

interface FirstNameStepProps {
  cb: (field: string, value: string) => void;
  fName: string;
}

const FirstNameStep: React.FC<FirstNameStepProps> = (props) => {
  const [firstName, setFirstName] = useState(props.fName);
  const [error, setError] = useState("");

  const handleClick = () => {
    if (firstName) {
      if (!NAME_REGEX.test(firstName)) {
        setError(VALID_NAME_ERROR);
      } else {
        props.cb("firstName", firstName);
      }
    } else {
      setError(ERROR_MSG);
    }
  };

  const handleChange = (value: any) => {
    setFirstName(value);
  };

  return (
    <>
      <div>
        {FIRST_NAME}{" "}
        <input
          type="firstName"
          onChange={(e) => handleChange(e.target.value)}
          value={firstName}
        ></input>
      </div>
      {error && <p>{error}</p>}
      <button onClick={handleClick}>{NEXT}</button>
    </>
  );
};

export default FirstNameStep;
