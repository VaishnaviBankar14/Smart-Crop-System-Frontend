import { useEffect, useState } from "react";
import api from "../api/api";
import "./MyHistory.css";

function MyHistory() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    api.get("/api/crops/history/my")
      .then((res) => setHistory(res.data))
      .catch(() => alert("Unable to fetch history"));
  }, []);

  // 🔙 Back button function
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="history-page">
      <div className="history-container animate-history">

        <h3>📜 My Recommendation History</h3>

        {history.length === 0 ? (
          <p>No recommendation history found.</p>
        ) : (
          history.map((h) => (
            <div key={h.id} className="history-card">
              <p><b>Crop:</b> {h.cropName}</p>
              <p><b>Season:</b> {h.season}</p>
              <p><b>Expected Yield:</b> {h.expectedYield}</p>
            </div>
          ))
        )}

        {/* 🔙 Back Button at Bottom */}
        <button className="history-back-btn" onClick={goBack}>
          ⬅ Back
        </button>

      </div>
    </div>
  );
}

export default MyHistory;
