import { useState } from "react";
import api from "../api/api";
import "./ForgotPassword.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const submit = async () => {
    try {
      await api.post(`/api/users/forgot-password?email=${email}`);
      alert("Reset link sent (check backend console)");
    } catch {
      alert("Email not registered");
    }
  };

  return (
    <div className="forgot-page">
      <div className="forgot-card">
        <h3>🔑 Forgot Password</h3>

        <input
          className="form-control mb-3"
          placeholder="Registered Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          className="btn btn-warning w-100"
          onClick={submit}
        >
          Send Reset Link
        </button>
      </div>
    </div>
  );
}

export default ForgotPassword;
