import Navbar from "../components/Navbar";
import "./Contact.css";

function Contact() {
  return (
    <>
      <Navbar />

      <div className="contact-page">
        <div className="contact-card animate-page">
          <h2>📞 Contact Us</h2>

          <p>
            If you have any queries, feedback, or suggestions regarding the
            Smart Crop System, feel free to contact us.
          </p>

          <div className="contact-info">
            <p>👩‍💻 <b>Developer:</b> Vaishnavi Bankar</p>

            <p>
              📧 <b>Email:</b>{" "}
              <a
                href="mailto:vaishnavibankar50@gmail.com"
                className="email-link"
              >
                vaishnavibankar50@gmail.com
              </a>
            </p>

            <p>📍 <b>Location:</b> Maharashtra, India</p>
          </div>

          <p className="note">
            This project is developed as an academic project to promote
            smart and sustainable agriculture.
          </p>

          {/* 🔙 Back Button */}
          <button
            className="contact-back-btn"
            onClick={() => window.history.back()}
          >
            ← Back
          </button>
        </div>
      </div>
    </>
  );
}

export default Contact;
