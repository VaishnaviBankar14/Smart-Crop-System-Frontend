import Navbar from "../components/Navbar";
import "./CropInfo.css";

function CropInfo() {
  // 🔹 SAFETY: trim to avoid space issues
  const crop = localStorage.getItem("selectedCrop")?.trim();

  const cropDetails = {
    Rice: {
      season: "Kharif",
      soil: "Clayey",
      water: "High",
      description: "Rice is a staple food crop grown in warm climates."
    },
    Wheat: {
      season: "Rabi",
      soil: "Loamy",
      water: "Moderate",
      description: "Wheat is a major cereal crop grown in winter season."
    },
    Cotton: {
      season: "Kharif",
      soil: "Black soil",
      water: "Moderate",
      description: "Cotton is a fiber crop used in textile industries."
    },
    Maize: {
      season: "Kharif",
      soil: "Well-drained loamy",
      water: "Moderate",
      description: "Maize is a versatile cereal crop used for food, fodder, and industrial products."
    },
    Sugarcane: {
      season: "Annual",
      soil: "Deep fertile loamy",
      water: "Very High",
      description: "Sugarcane is a commercial cash crop mainly grown for sugar and by-products."
    },
    Onion: {
      season: "Rabi",
      soil: "Sandy loam",
      water: "Moderate",
      description: "Onion is an important vegetable crop widely used for culinary and medicinal purposes."
    },
    Jowar: {
      season: "Kharif",
      soil: "Well-drained loamy to medium black soil",
      water: "Low to Moderate",
      description: "Jowar (sorghum) is a drought-tolerant cereal crop grown for grain and fodder, widely cultivated in semi-arid regions due to its low water requirement and adaptability to poor soils."
    },
    Soyabean: {
      season: "Kharif",
      soil: "Well-drained loamy",
      water: "Moderate",
      description: "Soyabean is a protein-rich oilseed crop that also improves soil fertility."
    },
    Pomegranate: {
      season: "Perennial",
      soil: "Well-drained loamy",
      water: "Low to Moderate",
      description: "Pomegranate is a fruit crop grown in semi-arid regions and valued for its health benefits."
    },
    Orange: {
      season: "Perennial",
      soil: "Well-drained sandy loam",
      water: "Moderate",
      description: "Orange is a citrus fruit crop rich in vitamin C and grown in subtropical climates."
    }
  };

  // 🔹 SAFETY: case-insensitive match (NO data deleted)
  const normalizedCrop = crop
    ? Object.keys(cropDetails).find(
        key => key.toLowerCase() === crop.toLowerCase()
      )
    : null;

  const data = cropDetails[normalizedCrop];

  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      <Navbar />

      <div className="crop-info-container">
        {data ? (
          <div className="crop-info-card animate">
            <h1>🌾 {normalizedCrop || crop}</h1>

            <p><b>Season:</b> {data.season}</p>
            <p><b>Soil Type:</b> {data.soil}</p>
            <p><b>Water Requirement:</b> {data.water}</p>
            <p className="desc">{data.description}</p>

            <div className="btn-group">
              <button className="back-btn" onClick={goBack}>
                ⬅ Back
              </button>
            </div>
          </div>
        ) : (
          <p className="no-data">No information available.</p>
        )}
      </div>
    </>
  );
}

export default CropInfo;


// import Navbar from "../components/Navbar";
// import "./CropInfo.css";

// function CropInfo() {
//   const crop = localStorage.getItem("selectedCrop");

//   const cropDetails = {
//     Rice: {
//       season: "Kharif",
//       soil: "Clayey",
//       water: "High",
//       description: "Rice is a staple food crop grown in warm climates."
//     },
//     Wheat: {
//       season: "Rabi",
//       soil: "Loamy",
//       water: "Moderate",
//       description: "Wheat is a major cereal crop grown in winter season."
//     },
//     Cotton: {
//       season: "Kharif",
//       soil: "Black soil",
//       water: "Moderate",
//       description: "Cotton is a fiber crop used in textile industries."
//     },
//     Maize: {
//   season: "Kharif",
//   soil: "Well-drained loamy",
//   water: "Moderate",
//   description: "Maize is a versatile cereal crop used for food, fodder, and industrial products."
// },

// Sugarcane: {
//   season: "Annual",
//   soil: "Deep fertile loamy",
//   water: "Very High",
//   description: "Sugarcane is a commercial cash crop mainly grown for sugar and by-products."
// },

// Onion: {
//   season: "Rabi",
//   soil: "Sandy loam",
//   water: "Moderate",
//   description: "Onion is an important vegetable crop widely used for culinary and medicinal purposes."
// },

// Jowar: {
//   season: "Kharif",
//   soil: "Well-drained loamy to medium black soil",
//   water: "Low to Moderate",
//   description: "Jowar (sorghum) is a drought-tolerant cereal crop grown for grain and fodder, widely cultivated in semi-arid regions due to its low water requirement and adaptability to poor soils."
// },

// Soyabean: {
//   season: "Kharif",
//   soil: "Well-drained loamy",
//   water: "Moderate",
//   description: "Soyabean is a protein-rich oilseed crop that also improves soil fertility."
// },

// Pomegranate: {
//   season: "Perennial",
//   soil: "Well-drained loamy",
//   water: "Low to Moderate",
//   description: "Pomegranate is a fruit crop grown in semi-arid regions and valued for its health benefits."
// },

// Orange: {
//   season: "Perennial",
//   soil: "Well-drained sandy loam",
//   water: "Moderate",
//   description: "Orange is a citrus fruit crop rich in vitamin C and grown in subtropical climates."
// }

//   };

//   const data = cropDetails[crop];

//   const goBack = () => {
//     window.history.back();
//   };

//   // const predictCrop = () => {
//   //   localStorage.setItem("predictCrop", crop);
//   //   window.location.href = "/predict";
//   // };

//   return (
//     <>
//       <Navbar />

//       <div className="crop-info-container">
//         {data ? (
//           <div className="crop-info-card animate">
//             <h1>🌾 {crop}</h1>

//             <p><b>Season:</b> {data.season}</p>
//             <p><b>Soil Type:</b> {data.soil}</p>
//             <p><b>Water Requirement:</b> {data.water}</p>
//             <p className="desc">{data.description}</p>

//             <div className="btn-group">
//               <button className="back-btn" onClick={goBack}>
//                 ⬅ Back
//               </button>
//             </div>
//           </div>
//         ) : (
//           <p className="no-data">No information available.</p>
//         )}
//       </div>
//     </>
//   );
// }

// export default CropInfo;
