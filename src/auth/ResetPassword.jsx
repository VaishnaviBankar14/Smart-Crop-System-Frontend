import { useState } from "react";
import api from "../api/api";
import "./ResetPassword.css";

function ResetPassword() {
  const [password, setPassword] = useState("");

  const token = new URLSearchParams(window.location.search).get("token");

  const reset = async () => {
    try {
      await api.post(
        `/api/users/reset-password?token=${token}&newPassword=${password}`
      );
      alert("Password reset successful");
      window.location.href = "/";
    } catch {
      alert("Invalid or expired token");
    }
  };

  return (
    <div className="reset-page">
      <div className="reset-card">

        <h3>🔐 Reset Password</h3>

        <input
          type="password"
          className="reset-input"
          placeholder="New Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="reset-btn" onClick={reset}>
          Reset Password
        </button>

      </div>
    </div>
  );
}

export default ResetPassword;
