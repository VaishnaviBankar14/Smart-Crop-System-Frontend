import { useState } from "react";
import api from "../api/api";
import "./Register.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    try {
      await api.post("/api/users/register", { email, password });
      alert("Registration successful. Please login.");
      window.location.href = "/";
    } catch {
      alert("User already exists");
    }
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <h2>📝 Register</h2>

        <input
          className="form-control mb-3"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="btn btn-primary w-100"
          onClick={register}
        >
          Register
        </button>

        {/* 🔙 Back Button */}
        <button
          className="register-back-btn"
          onClick={() => window.history.back()}
        >
          ← Back
        </button>
      </div>
    </div>
  );
}

export default Register;
