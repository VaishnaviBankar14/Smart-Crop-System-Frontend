import Navbar from "../components/Navbar";
import "./About.css";

function About() {
  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      <Navbar />

      <div className="about-page">
        <div className="about-card animate-about">

          <h2>🌾 About Smart Crop System</h2>

          <p>
            Smart Crop System is an intelligent web-based platform designed to
            assist farmers in making data-driven agricultural decisions.
            The system provides crop recommendations, yield prediction,
            and weather-based insights to improve farming productivity.
          </p>

          <h4>🌱 Key Features</h4>
          <ul>
            <li>🌾 Crop recommendation based on soil, season, and rainfall</li>
            <li>☁️ Weather-based yield prediction</li>
            <li>🤖 AI-powered chatbot with multi-language support</li>
            <li>📜 Personalized history for farmers</li>
            <li>📊 Admin dashboard for crop management</li>
          </ul>

          <h4>🎯 Objectives</h4>
          <p>
            The main objective of this system is to reduce farming risks,
            increase productivity, and promote smart agriculture using
            modern digital technologies.
          </p>

          <h4>🛠️ Technologies Used</h4>
          <p>
            React.js, Spring Boot, Java, MySQL, JWT Authentication, Weather APIs
          </p>

          <h4>👩‍💻 Team / Developer</h4>
          <div className="team-box">
            <p><b>Project Developer:</b> Vaishnavi Bankar</p>
            <p><b>Role:</b> Full Stack Developer</p>
          </div>

          <h4>🚀 Future Enhancements</h4>
          <p>
            AI-based crop prediction, voice-enabled chatbot, mobile application
            support, and market price forecasting.
          </p>

          <div className="about-footer">
            <span>📌 Version 1.0</span>
            <span>© 2025 Smart Crop System</span>
          </div>

          <div className="btn-group">
            <button className="back-btn" onClick={goBack}>
              ⬅ Back
            </button>
          </div>

        </div>
      </div>
    </>
  );
}

export default About;
