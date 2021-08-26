import React, { useState } from "react";
import { ERROR_MSG, EMAIL } from "../constants/constants";

interface EmailStepProps {
  cb: (field: string, value: string) => void;
}

const EmailStep: React.FC<EmailStepProps> = (props) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const handleClick = () => {
    return email ? props.cb("email", email) : setError(ERROR_MSG);
  };

  return (
    <>
      <div>
        {EMAIL}{" "}
        <input
          type="email"
          onChange={({ target: { value } }) => {
            setEmail(value);
          }}
          value={email}
        ></input>
      </div>
      {error && <p>{error}</p>}
      <button onClick={handleClick}>Next</button>
    </>
  );
};

export default EmailStep;
