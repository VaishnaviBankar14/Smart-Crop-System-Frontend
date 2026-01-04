import { useState } from "react";
import api from "../api/api";
import "./AutoRecommend.css";

function AutoRecommend() {
  const [city, setCity] = useState("");
  const [soilPh, setSoilPh] = useState("");
  const [results, setResults] = useState([]);

  const recommend = async () => {
    try {
      const res = await api.get(
        "/api/crops/auto-recommend-yield",
        {
          params: {
            city,
            soilPh
          }
        }
      );

      setResults(res.data);

      const oldHistory =
        JSON.parse(localStorage.getItem("recommendHistory")) || [];

      const newEntry = {
        city,
        soilPh,
        date: new Date().toLocaleString(),
        results: res.data
      };

      localStorage.setItem(
        "recommendHistory",
        JSON.stringify([newEntry, ...oldHistory])
      );

    } catch (err) {
      // ✅ IMPORTANT FIX: Ignore auth-related responses
      if (err.response?.status === 401) {
        console.warn("Unauthorized request ignored");
        return;
      }
      alert("Error fetching recommendation");
    }
  };

  const openHistory = () => {
    window.location.href = "/my-history";
  };

  // 🔙 Back button
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="recommend-page">
      <div className="recommend-card animate-recommend">

        <h4>🌦 Auto Crop Recommendation</h4>

        <div className="input-row">
          <input
            className="recommend-input"
            placeholder="City"
            onChange={(e) => setCity(e.target.value)}
          />

          <input
            className="recommend-input"
            placeholder="Soil pH"
            onChange={(e) => setSoilPh(e.target.value)}
          />

          <button className="recommend-btn" onClick={recommend}>
            Recommend
          </button>
        </div>

        {/* Results */}
        <ul className="result-list">
          {results.map((r, i) => (
            <li key={i} className="result-item">
              <b>{r.cropName}</b> | {r.season} | Yield: {r.expectedYield}
            </li>
          ))}
        </ul>

        {/* History */}
        <button
          className="recommend-btn history-btn"
          onClick={openHistory}
        >
          📜 View Recommendation History
        </button>

        {/* 🔙 Back Button */}
        <button className="recommend-back-btn" onClick={goBack}>
          ⬅ Back
        </button>

      </div>
    </div>
  );
}

export default AutoRecommend;
