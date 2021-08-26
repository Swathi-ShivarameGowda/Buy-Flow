import React, { useState } from "react";
import {
  ERROR_MSG,
  EMAIL,
  NEXT,
  EMAIL_REGEX,
  VALID_EMAIL_ERROR
} from "../constants/constants";

interface EmailStepProps {
  cb: (field: string, value: string) => void;
}

const EmailStep: React.FC<EmailStepProps> = (props) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const handleClick = () => {
    if (email) {
      if (!EMAIL_REGEX.test(email)) {
        setError(VALID_EMAIL_ERROR);
      } else {
        props.cb("email", email);
      }
    } else {
      setError(ERROR_MSG);
    }
  };
  const handleChange = (value) => {
    setEmail(value);
  };

  return (
    <>
      <div>
        {EMAIL}{" "}
        <input
          type="email"
          onChange={(e) => handleChange(e.target.value)}
          value={email}
        ></input>
      </div>
      {error && <p>{error}</p>}
      <button onClick={handleClick}>{NEXT}</button>
    </>
  );
};

export default EmailStep;
