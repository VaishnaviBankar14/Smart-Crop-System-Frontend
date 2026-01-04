import Navbar from "../components/Navbar";
import "./Terms.css";

function Terms() {
  return (
    <>
      <Navbar />

      <div className="terms-page">
        <div className="terms-card animate-page">
          <h2>📜 Terms & Privacy Policy</h2>

          <p>
            Smart Crop System is an academic project intended for learning
            and demonstration purposes only.
          </p>

          <h4>🔐 Data Privacy</h4>
          <p>
            User data such as login credentials and chat history is stored
            securely and used only for system functionality.
          </p>

          <h4>⚠️ Disclaimer</h4>
          <p>
            Crop recommendations are generated based on available data and
            should not be considered as professional agricultural advice.
          </p>

          <h4>📄 Usage Policy</h4>
          <p>
            Unauthorized commercial use of this application is not permitted.
          </p>

          {/* 🔙 Back Button */}
          <button
            className="terms-back-btn"
            onClick={() => window.history.back()}
          >
            ← Back
          </button>
        </div>
      </div>
    </>
  );
}

export default Terms;
