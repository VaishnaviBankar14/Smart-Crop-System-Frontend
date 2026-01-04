import Logout from "../auth/Logout";

function Navbar({ role }) {

  // 🌾 Brand → Landing / Get Started page
  const goToHome = () => {
    window.location.href = "/";
  };

  // 📌 Dashboard text → Login page
  const goToLogin = () => {
    window.location.href = "/login";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success px-4">
      
      {/* Brand → HomePage */}
      <span
        className="navbar-brand fw-bold"
        style={{ cursor: "pointer" }}
        onClick={goToHome}
      >
        🌾 Smart Crop System
      </span>

      {/* Dashboard name → Login */}
      <span
        className="text-white ms-3"
        style={{ cursor: "pointer", textDecoration: "underline" }}
        onClick={goToLogin}
      >
        {role === "ADMIN" ? "Admin Dashboard" : "Farmer Dashboard"}
      </span>

      {/* My History link (Farmer only) */}
      {role === "USER" && (
        <a
          href="/my-history"
          className="nav-link text-white ms-4 fw-semibold"
        >
          📜 My History
        </a>
      )}

      {role === "ADMIN" && (
  <a
    href="/admin-history"
    className="nav-link text-white ms-4 fw-semibold"
  >
    📊 Recommendation History
  </a>
)}

<a href="/about" className="nav-link text-white ms-4 fw-semibold">
  ℹ️ About
</a>
<a href="/contact" className="nav-link text-white ms-3">📞 Contact</a>
<a href="/terms" className="nav-link text-white ms-3">📜 Terms</a>
      <div className="ms-auto">
        <Logout />
      </div>

    </nav>
  );
}

export default Navbar;
