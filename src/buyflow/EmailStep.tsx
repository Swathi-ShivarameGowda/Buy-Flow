import React, { useState } from "react";
import {
  ERROR_MSG,
  EMAIL,
  NEXT,
  EMAIL_REGEX,
  VALID_EMAIL_ERROR,
  PREVIOUS
} from "../constants/constants";

interface EmailStepProps {
  cb: (field: string, value: string) => void;
  pb: (field: string) => void;
  mail: string;
}

const EmailStep: React.FC<EmailStepProps> = (props) => {
  const [email, setEmail] = useState(props.mail);
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

  const handlePreviousClick = () => {
    props.pb("lastName");
  };

  const handleChange = (value: any) => {
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
      <button onClick={handlePreviousClick}>{PREVIOUS}</button>{" "}
      <button onClick={handleClick}>{NEXT}</button>
    </>
  );
};

export default EmailStep;
