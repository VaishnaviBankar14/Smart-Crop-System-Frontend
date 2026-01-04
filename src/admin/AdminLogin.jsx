import { useState } from "react";
import api from "../api/api";
import "./AdminLogin.css";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginAdmin = async () => {
    try {
      const res = await api.post("/api/admin/login", {
        email,
        password
      });

      // 🚨 Ensure role is ADMIN
      if (res.data.role !== "ADMIN") {
        alert("Access denied: Admins only");
        return;
      }

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", "ADMIN");

      window.location.href = "/admin-dashboard";

    } catch {
      alert("Invalid admin credentials");
    }
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-card">
        <h3>🔐 Admin Login</h3>

        <input
          placeholder="Admin Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={loginAdmin}>Login</button>
      </div>
    </div>
  );
}

export default AdminLogin;
