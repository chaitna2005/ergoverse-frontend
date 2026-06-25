import { useState } from "react";

function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = () => {
    if (newPassword === "" || confirmPassword === "") {
      setMessage("Please fill all fields");
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    setMessage("Password reset successful");
  };

  return (
    <div>
      <h1>Reset Password</h1>

      <input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleReset}>
        Reset Password
      </button>

      <br />
      <br />

      <p>{message}</p>
    </div>
  );
}

export default ResetPassword;