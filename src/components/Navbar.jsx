import Logout from "../auth/Logout";
// import "./Navbar.css"
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
        className="navbar-brand fw-bold cursor-pointer"
        onClick={goToHome}
      >
        🌾 Smart Crop System
      </span>

      {/* 🍔 HAMBURGER BUTTON */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* COLLAPSIBLE CONTENT */}
      <div className="collapse navbar-collapse" id="navbarContent">

        {/* LEFT SIDE LINKS */}
        <ul className="navbar-nav ms-3 mb-2 mb-lg-0">

          {/* Dashboard name → Login */}
          <li className="nav-item">
            <span
              className="nav-link text-white fw-semibold cursor-pointer"
              style={{ textDecoration: "underline" }}
              onClick={goToLogin}
            >
              {role === "ADMIN" ? "Admin Dashboard" : "Farmer Dashboard"}
            </span>
          </li>

          {/* Farmer History */}
          {role === "USER" && (
            <li className="nav-item">
              <a href="/my-history" className="nav-link text-white fw-semibold">
                📜 My History
              </a>
            </li>
          )}

          {/* Admin History */}
          {role === "ADMIN" && (
            <li className="nav-item">
              <a href="/admin-history" className="nav-link text-white fw-semibold">
                📊 Recommendation History
              </a>
            </li>
          )}

          <li className="nav-item">
            <a href="/about" className="nav-link text-white fw-semibold">
              ℹ️ About
            </a>
          </li>

          <li className="nav-item">
            <a href="/contact" className="nav-link text-white">
              📞 Contact
            </a>
          </li>

          <li className="nav-item">
            <a href="/terms" className="nav-link text-white">
              📜 Terms
            </a>
          </li>

        </ul>

        {/* RIGHT SIDE LOGOUT */}
        <div className="ms-auto">
          <Logout />
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
