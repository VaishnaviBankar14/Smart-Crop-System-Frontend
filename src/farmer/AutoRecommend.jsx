import { useState } from "react";
import api from "../api/api";
import "./AutoRecommend.css";

function AutoRecommend() {
  const [city, setCity] = useState("");
  const [soilPh, setSoilPh] = useState("");
  const [result, setResult] = useState(null); // SINGLE RESULT
  const [loading, setLoading] = useState(false);

  const recommend = async () => {
    // ✅ City validation (unchanged)
    if (!city || city.trim() === "") {
      alert("Please enter city name");
      return;
    }

    // ✅ Soil pH validation (decimal allowed)
    if (soilPh === "" || isNaN(soilPh)) {
      alert("Please enter valid soil pH");
      return;
    }

    const ph = parseFloat(soilPh);

    // ✅ FINAL pH RANGE (0–9, decimal allowed)
    if (ph < 0 || ph > 9) {
      alert("Soil pH must be between 0 and 9");
      return;
    }

    try {
      setLoading(true);
      setResult(null);

      const res = await api.get("/api/crops/auto-recommend-yield", {
        params: {
          city: city.trim(),
          soilPh: ph,
        },
      });

      setResult(res.data);

      // ✅ Local history save (UNCHANGED)
      const oldHistory =
        JSON.parse(localStorage.getItem("recommendHistory")) || [];

      const newEntry = {
        city: city.trim(),
        soilPh: ph,
        date: new Date().toLocaleString(),
        result: res.data,
      };

      localStorage.setItem(
        "recommendHistory",
        JSON.stringify([newEntry, ...oldHistory])
      );
    } catch (err) {
      if (err.response?.status === 401) {
        console.warn("Unauthorized request ignored");
        return;
      }

      alert(
        err.response?.data?.message ||
          "Error fetching crop recommendation"
      );
    } finally {
      setLoading(false);
    }
  };

  // ✅ VIEW HISTORY (UNCHANGED)
  const openHistory = () => {
    window.location.href = "/my-history";
  };

  // ✅ BACK BUTTON (UNCHANGED)
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="recommend-page">
      <div className="recommend-card animate-recommend">
        <h4>🌦 Auto Crop Recommendation</h4>

        <div className="input-row">
          {/* CITY INPUT */}
          <input
            className="recommend-input"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          {/* SOIL pH INPUT (DECIMAL FRIENDLY) */}
          <input
            className="recommend-input"
            type="number"
            step="0.1"
            placeholder="Soil pH (0 - 9)"
            value={soilPh}
            onChange={(e) => setSoilPh(e.target.value)}
          />

          {/* RECOMMEND BUTTON */}
          <button
            className="recommend-btn"
            onClick={recommend}
            disabled={loading}
          >
            {loading ? "Please wait..." : "Recommend"}
          </button>
        </div>

        {/* ✅ RESULT DISPLAY (UNCHANGED) */}
        {result && (
          <div className="result-card">
            <h3>🌱 {result.cropName}</h3>
            <p>
              <b>Season:</b> {result.season}
            </p>
            <p>
              <b>Expected Yield:</b>{" "}
              {result.expectedYield.toFixed(2)}
            </p>
          </div>
        )}

        {/* ✅ DEFAULT MESSAGE */}
        {!loading && !result && (
          <p style={{ color: "#fff", marginTop: "10px" }}>
            Enter details and click Recommend
          </p>
        )}

        {/* ✅ VIEW HISTORY BUTTON */}
        <button
          className="recommend-btn history-btn"
          onClick={openHistory}
        >
          📜 View Recommendation History
        </button>

        {/* ✅ BACK BUTTON */}
        <button
          className="recommend-back-btn"
          onClick={goBack}
        >
          ⬅ Back
        </button>
      </div>
    </div>
  );
}

export default AutoRecommend;



// import { useState } from "react";
// import api from "../api/api";
// import "./AutoRecommend.css";

// function AutoRecommend() {
//   const [city, setCity] = useState("");
//   const [soilPh, setSoilPh] = useState("");
//   const [result, setResult] = useState(null); // ✅ SINGLE CROP OBJECT
//   const [loading, setLoading] = useState(false);

//   const recommend = async () => {
//     // ✅ Validation
//     if (!city || city.trim() === "") {
//       alert("Please enter city name");
//       return;
//     }

//     if (!soilPh || isNaN(soilPh)) {
//       alert("Please enter valid soil pH value");
//       return;
//     }

//     try {
//       setLoading(true);
//       setResult(null);

//       const res = await api.get("/api/crops/auto-recommend-yield", {
//         params: {
//           city: city.trim(),
//           soilPh: parseFloat(soilPh),
//         },
//       });

//       // ✅ Backend returns SINGLE OBJECT
//       setResult(res.data);

//       // ✅ Save to local history
//       const oldHistory =
//         JSON.parse(localStorage.getItem("recommendHistory")) || [];

//       const newEntry = {
//         city: city.trim(),
//         soilPh: parseFloat(soilPh),
//         date: new Date().toLocaleString(),
//         result: res.data,
//       };

//       localStorage.setItem(
//         "recommendHistory",
//         JSON.stringify([newEntry, ...oldHistory])
//       );
//     } catch (err) {
//       if (err.response?.status === 401) {
//         console.warn("Unauthorized request ignored");
//         return;
//       }

//       console.error("Recommendation error:", err);
//       alert(
//         err.response?.data?.message ||
//           "Error fetching crop recommendation"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   const openHistory = () => {
//     window.location.href = "/my-history";
//   };

//   const goBack = () => {
//     window.history.back();
//   };

//   return (
//     <div className="recommend-page">
//       <div className="recommend-card animate-recommend">
//         <h4>🌦 Auto Crop Recommendation</h4>

//         <div className="input-row">
//           <input
//             className="recommend-input"
//             placeholder="City"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//           />

//           <input
//             className="recommend-input"
//             type="number"
//             step="0.1"
//             placeholder="Soil pH"
//             value={soilPh}
//             onChange={(e) => setSoilPh(e.target.value)}
//           />

//           <button
//             className="recommend-btn"
//             onClick={recommend}
//             disabled={loading}
//           >
//             {loading ? "Please wait..." : "Recommend"}
//           </button>
//         </div>

//         {/* ✅ RESULT DISPLAY */}
// {result && (
//   <div className="result-card">
//     <h3>🌱 {result.cropName}</h3>
//     <p>
//       <b>Season:</b> {result.season}
//     </p>
//     <p>
//       <b>Expected Yield:</b> {result.expectedYield.toFixed(2)}
//     </p>
//   </div>
// )}


//         {/* ✅ NO RESULT MESSAGE */}
//         {!loading && !result && (
//           <p style={{ color: "#fff", marginTop: "10px" }}>
//             Enter details and click Recommend
//           </p>
//         )}

//         <button
//           className="recommend-btn history-btn"
//           onClick={openHistory}
//         >
//           📜 View Recommendation History
//         </button>

//         <button className="recommend-back-btn" onClick={goBack}>
//           ⬅ Back
//         </button>
//       </div>
//     </div>
//   );
// }

// export default AutoRecommend;


// // import { useState } from "react";
// // import api from "../api/api";
// // import "./AutoRecommend.css";

// // function AutoRecommend() {
// //   const [city, setCity] = useState("");
// //   const [soilPh, setSoilPh] = useState("");
// //   const [results, setResults] = useState([]);

// //   const recommend = async () => {
// //     // ✅ PREVENT EMPTY REQUEST
// //     if (!city || !soilPh) {
// //       alert("Please enter city and soil pH");
// //       return;
// //     }

// //     try {
// //       const res = await api.get(
// //         "/api/crops/auto-recommend-yield",
// //         {
// //           params: {
// //             city,
// //             soilPh
// //           }
// //         }
// //       );

// //       console.log("API RESPONSE:", res.data);

// //       // ✅ HANDLE BOTH ARRAY & OBJECT RESPONSES
// //       const data = Array.isArray(res.data)
// //         ? res.data
// //         : res.data.recommendations || [];

// //       setResults(data);

// //       const oldHistory =
// //         JSON.parse(localStorage.getItem("recommendHistory")) || [];

// //       const newEntry = {
// //         city,
// //         soilPh,
// //         date: new Date().toLocaleString(),
// //         results: data
// //       };

// //       localStorage.setItem(
// //         "recommendHistory",
// //         JSON.stringify([newEntry, ...oldHistory])
// //       );

// //     } catch (err) {
// //       if (err.response?.status === 401) {
// //         console.warn("Unauthorized request ignored");
// //         return;
// //       }
// //       alert("Error fetching recommendation");
// //       console.error(err);
// //     }
// //   };

// //   const openHistory = () => {
// //     window.location.href = "/my-history";
// //   };

// //   const goBack = () => {
// //     window.history.back();
// //   };

// //   return (
// //     <div className="recommend-page">
// //       <div className="recommend-card animate-recommend">

// //         <h4>🌦 Auto Crop Recommendation</h4>

// //         <div className="input-row">
// //           <input
// //             className="recommend-input"
// //             placeholder="City"
// //             value={city}                 // ✅ FIX
// //             onChange={(e) => setCity(e.target.value)}
// //           />

// //           <input
// //             className="recommend-input"
// //             placeholder="Soil pH"
// //             type="number"
// //             step="0.1"
// //             value={soilPh}              // ✅ FIX
// //             onChange={(e) => setSoilPh(e.target.value)}
// //           />

// //           <button className="recommend-btn" onClick={recommend}>
// //             Recommend
// //           </button>
// //         </div>

// //         {/* Results */}
// //         <ul className="result-list">
// //           {results.length === 0 && (
// //             <p style={{ color: "#fff" }}>No recommendations yet</p>
// //           )}

// //           {results.map((r, i) => (
// //             <li key={i} className="result-item">
// //               <b>{r.cropName}</b> | {r.season} | Yield: {r.expectedYield}
// //             </li>
// //           ))}
// //         </ul>

// //         <button
// //           className="recommend-btn history-btn"
// //           onClick={openHistory}
// //         >
// //           📜 View Recommendation History
// //         </button>

// //         <button className="recommend-back-btn" onClick={goBack}>
// //           ⬅ Back
// //         </button>

// //       </div>
// //     </div>
// //   );
// // }

// // export default AutoRecommend;


// // import { useState } from "react";
// // import api from "../api/api";
// // import "./AutoRecommend.css";

// // function AutoRecommend() {
// //   const [city, setCity] = useState("");
// //   const [soilPh, setSoilPh] = useState("");
// //   const [results, setResults] = useState([]);

// //   const recommend = async () => {

// //     // ✅ REQUIRED FRONTEND VALIDATION (DOES NOT CHANGE LOGIC)
// //     if (!city || city.trim() === "") {
// //       alert("Please enter city name");
// //       return;
// //     }

// //     if (!soilPh || isNaN(soilPh)) {
// //       alert("Please enter valid soil pH value");
// //       return;
// //     }

// //     try {
// //       const res = await api.get(
// //         "/api/crops/auto-recommend-yield",
// //         {
// //           params: {
// //             city: city.trim(),
// //             soilPh: parseFloat(soilPh)
// //           }
// //         }
// //       );

// //       setResults(res.data);

// //       const oldHistory =
// //         JSON.parse(localStorage.getItem("recommendHistory")) || [];

// //       const newEntry = {
// //         city: city.trim(),
// //         soilPh: parseFloat(soilPh),
// //         date: new Date().toLocaleString(),
// //         results: res.data
// //       };

// //       localStorage.setItem(
// //         "recommendHistory",
// //         JSON.stringify([newEntry, ...oldHistory])
// //       );

// //     } catch (err) {
// //       // ✅ KEEPING YOUR ORIGINAL AUTH CHECK
// //       if (err.response?.status === 401) {
// //         console.warn("Unauthorized request ignored");
// //         return;
// //       }

// //       console.error("Recommendation error:", err);
// //       alert(
// //         err.response?.data?.message ||
// //         "Error fetching recommendation"
// //       );
// //     }
// //   };

// //   const openHistory = () => {
// //     window.location.href = "/my-history";
// //   };

// //   const goBack = () => {
// //     window.history.back();
// //   };

// //   return (
// //     <div className="recommend-page">
// //       <div className="recommend-card animate-recommend">

// //         <h4>🌦 Auto Crop Recommendation</h4>

// //         <div className="input-row">
// //           <input
// //             className="recommend-input"
// //             placeholder="City"
// //             value={city}
// //             onChange={(e) => setCity(e.target.value)}
// //           />

// //           <input
// //             className="recommend-input"
// //             type="number"
// //             step="0.1"
// //             placeholder="Soil pH"
// //             value={soilPh}
// //             onChange={(e) => setSoilPh(e.target.value)}
// //           />

// //           <button className="recommend-btn" onClick={recommend}>
// //             Recommend
// //           </button>
// //         </div>

// //         {/* Results */}
// //         <ul className="result-list">
// //           {results.map((r, i) => (
// //             <li key={i} className="result-item">
// //               <b>{r.cropName}</b> | {r.season} | Yield: {r.expectedYield}
// //             </li>
// //           ))}
// //         </ul>

// //         {/* History */}
// //         <button
// //           className="recommend-btn history-btn"
// //           onClick={openHistory}
// //         >
// //           📜 View Recommendation History
// //         </button>

// //         {/* Back Button */}
// //         <button className="recommend-back-btn" onClick={goBack}>
// //           ⬅ Back
// //         </button>

// //       </div>
// //     </div>
// //   );
// // }

// // export default AutoRecommend;


// // import { useState } from "react";
// // import api from "../api/api";
// // import "./AutoRecommend.css";

// // function AutoRecommend() {
// //   const [city, setCity] = useState("");
// //   const [soilPh, setSoilPh] = useState("");
// //   const [results, setResults] = useState([]);

// //   const recommend = async () => {
// //     try {
// //       const res = await api.get(
// //         "/api/crops/auto-recommend-yield",
// //         {
// //           params: {
// //             city,
// //             soilPh
// //           }
// //         }
// //       );

// //       setResults(res.data);

// //       const oldHistory =
// //         JSON.parse(localStorage.getItem("recommendHistory")) || [];

// //       const newEntry = {
// //         city,
// //         soilPh,
// //         date: new Date().toLocaleString(),
// //         results: res.data
// //       };

// //       localStorage.setItem(
// //         "recommendHistory",
// //         JSON.stringify([newEntry, ...oldHistory])
// //       );

// //     } catch (err) {
// //       // ✅ IMPORTANT FIX: Ignore auth-related responses
// //       if (err.response?.status === 401) {
// //         console.warn("Unauthorized request ignored");
// //         return;
// //       }
// //       alert("Error fetching recommendation");
// //     }
// //   };

// //   const openHistory = () => {
// //     window.location.href = "/my-history";
// //   };

// //   // 🔙 Back button
// //   const goBack = () => {
// //     window.history.back();
// //   };

// //   return (
// //     <div className="recommend-page">
// //       <div className="recommend-card animate-recommend">

// //         <h4>🌦 Auto Crop Recommendation</h4>

// //         <div className="input-row">
// //           <input
// //             className="recommend-input"
// //             placeholder="City"
// //             onChange={(e) => setCity(e.target.value)}
// //           />

// //           <input
// //             className="recommend-input"
// //             placeholder="Soil pH"
// //             onChange={(e) => setSoilPh(e.target.value)}
// //           />

// //           <button className="recommend-btn" onClick={recommend}>
// //             Recommend
// //           </button>
// //         </div>

// //         {/* Results */}
// //         <ul className="result-list">
// //           {results.map((r, i) => (
// //             <li key={i} className="result-item">
// //               <b>{r.cropName}</b> | {r.season} | Yield: {r.expectedYield}
// //             </li>
// //           ))}
// //         </ul>

// //         {/* History */}
// //         <button
// //           className="recommend-btn history-btn"
// //           onClick={openHistory}
// //         >
// //           📜 View Recommendation History
// //         </button>

// //         {/* 🔙 Back Button */}
// //         <button className="recommend-back-btn" onClick={goBack}>
// //           ⬅ Back
// //         </button>

// //       </div>
// //     </div>
// //   );
// // }

// // export default AutoRecommend;
