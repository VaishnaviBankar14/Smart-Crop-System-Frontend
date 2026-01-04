import { useEffect, useState } from "react";
import api from "../api/api";
import "./AllHistory.css";

function AllHistory() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    api.get("/api/crops/history/all")   // ✅ ADMIN ENDPOINT
      .then((res) => setHistory(res.data))
      .catch(() => alert("Unable to fetch history"));
  }, []);
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="history-container animate">
      <h4>📊 All Recommendation History</h4>

      {history.length === 0 ? (
        <p className="no-history">No recommendation data available.</p>
      ) : (
        <table className="history-table">
          <thead>
            <tr>
              <th>User Email</th>
              <th>Crop</th>
              <th>Season</th>
              <th>Expected Yield</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
  {history.map((h) => (
    <tr key={h.id}>
      <td>{h.userEmail}</td>
      <td>{h.cropName}</td>
      <td>{h.season}</td>
      <td>{h.expectedYield}</td>
      <td>{h.createdAt ? new Date(h.createdAt).toLocaleDateString() : "N/A"}</td>
    </tr>
  ))}
</tbody>

        </table>
      )}
      <div className="btn-group">
              <button className="back-btn" onClick={goBack}>
                ⬅ Back
              </button>
            </div>
    </div>
  );
}

export default AllHistory;
