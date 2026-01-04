import Navbar from "../components/Navbar";
import AddCrop from "./AddCrops";
import "./AdminDashboard.css";

function AdminDashboard() {

  // 🔙 Back button handler
  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      <Navbar role="ADMIN" />

      <div className="admin-page">
        <div className="admin-card">
          <AddCrop />
        </div>

        {/* Back Button */}
        <div className="btn-group">
          <button className="back-btn" onClick={goBack}>
            ⬅ Back
          </button>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
