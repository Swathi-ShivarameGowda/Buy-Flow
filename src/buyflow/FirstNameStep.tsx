import React, { useState } from "react";

interface FirstNameStepProps {
  cb: (field: string, value: string) => void;
}

const FirstNameStep: React.FC<FirstNameStepProps> = (props) => {
  const [firstName, setFirstName] = useState("");
  const [error, setError] = useState("");
  const handleClick = () => {
    return firstName
      ? props.cb("firstName", firstName)
      : setError("please enter the first name in the above field to continue");
  };
  return (
    <>
      <div>
        First Name:{" "}
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
