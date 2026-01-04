import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-left">
          🌾 <b>Smart Crop System</b>
          <p>Empowering farmers with smart technology</p>
        </div>

        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/terms">Terms</a>
        </div>

        <div className="footer-right">
          © 2025 Smart Crop System
        </div>
      </div>
    </footer>
  );
}

export default Footer;
