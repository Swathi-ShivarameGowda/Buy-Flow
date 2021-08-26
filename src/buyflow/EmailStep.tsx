import React, { useState } from "react";

interface EmailStepProps {
  cb: (field: string, value: string) => void;
}

const EmailStep: React.FC<EmailStepProps> = (props) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const handleClick = () => {
    return email
      ? props.cb("email", email)
      : setError("please enter the email in the above field to continue");
  };
  return (
    <>
      <div>
        Email:{" "}
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
