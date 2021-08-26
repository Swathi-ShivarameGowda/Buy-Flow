import React, { useState } from "react";
import {
  ERROR_MSG,
  LAST_NAME,
  NAME_REGEX,
  NEXT,
  VALID_NAME_ERROR,
  PREVIOUS
} from "../constants/constants";

interface LastNameStepProps {
  cb: (field: string, value: string) => void;
  pb: (field: string) => void;
  lName: string;
}

const LastNameStep: React.FC<LastNameStepProps> = (props) => {
  const [lastName, setLastName] = useState(props.lName);
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
  const handlePreviousClick = () => {
    props.pb("firstName");
  };
  const handleChange = (value: any) => {
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
      <button onClick={handlePreviousClick}>{PREVIOUS}</button>{" "}
      <button onClick={handleClick}>{NEXT}</button>
    </>
  );
};

export default LastNameStep;
