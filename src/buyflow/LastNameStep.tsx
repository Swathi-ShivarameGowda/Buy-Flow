import React, { useState } from "react";

interface LastNameStepProps {
  cb: (field: string, value: string) => void;
}

const LastNameStep: React.FC<LastNameStepProps> = (props) => {
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const handleClick = () => {
    return lastName
      ? props.cb("lastName", lastName)
      : setError("please enter the last name in the above field to continue");
  };
  return (
    <>
      <div>
        Last Name:{" "}
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
