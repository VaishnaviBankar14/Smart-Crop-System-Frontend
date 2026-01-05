import { useState } from "react";
import api from "../api/api";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const goBack = () => {
    window.history.back();
  };

  const login = async () => {
    try {
      // ✅ IMPORTANT FIX: override Authorization header
      const res = await api.post(
        "/api/users/login",
        {
          email,
          password,
        },
        {
          headers: {
            Authorization: "" // 🔥 prevents interceptor from breaking login
          }
        }
      );

      // save token
      localStorage.setItem("token", res.data);

      // redirect to homepage
      window.location.href = "/";
    } catch (err) {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card animate-login">

        <h2>🌾 Smart Crop System</h2>
        <h4>Login</h4>

        <input
          className="login-input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="login-input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="login-btn" onClick={login}>
          Login
        </button>

        <div className="login-links">
          <p>
            New user? <a href="/register">Register here</a>
          </p>
          <p>
            <a href="/forgot-password">Forgot Password?</a>
          </p>

          <div className="btn-group">
            <button className="back-btn" onClick={goBack}>
              ⬅ Back
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;
