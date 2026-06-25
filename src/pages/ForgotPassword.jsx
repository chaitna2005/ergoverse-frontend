import { useState } from "react";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (email.trim() === "") {
      setMessage("Please enter your email");
      return;
    }

    setMessage(
      "Password reset link sent successfully"
    );
  };

  return (
    <div>
      <h1>Forgot Password</h1>

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <br />
      <br />

      <button onClick={handleSubmit}>
        Submit
      </button>

      <br />
      <br />

      <p>{message}</p>
    </div>
  );
}

export default ForgotPassword;