import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "./HomePage.css";

function HomePage() {

  // 🌄 Background slideshow images
  const bgImages = [
    "https://images.wallpaperscraft.ru/image/single/pshenitsa_koloski_zlaki_142140_3840x2160.jpg",
    "https://wallpapers.com/images/hd/sunflowers-in-sunrise-desktop-4k-rbjj97z6ymkc0mka.jpg",
   "https://png.pngtree.com/background/20230612/original/pngtree-green-landscape-and-pond-in-the-sky-picture-image_3181366.jpg",
   "https://c.pxhere.com/photos/0c/99/plantation_tea_field_agriculture_rural_farm_asia_nature-683869.jpg!d",
   "https://rare-gallery.com/uploads/posts/1036749-sunlight-landscape-food-sunset-nature-grass-sky-field-green-morning-horizon-crops-wetland-cloud-leaf-flower-grassland-plant-agriculture-meadow-plain-lawn-prairie-crop-s.jpg"
  ];

  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [bgImages.length]);

  // 🔗 Redirect to login
  const goToLogin = () => {
    window.location.href = "/login";
  };

  // 🌾 NEW: open crop information
  // const openCropInfo = (cropName) => {
  //   localStorage.setItem("selectedCrop", cropName);
  //   window.location.href = "/crop-info";
  // };
  const openCropInfo = (cropName) => {
  const cropMap = {
    Jowar: "Jowar" // UI value stays same
  };

  const safeCropName = cropMap[cropName] || cropName;

  localStorage.setItem("selectedCrop", safeCropName.trim());
  window.location.href = "/crop-info";
};



  return (
    <>
      <Navbar />

      <div
        className="landing-container"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)),
            url(${bgImages[bgIndex]})
          `
        }}
      >

        <div className="hero-section">
          <h1>🌾 Smart Crop Recommendation System</h1>
          <p>AI-powered crop recommendations for smart farming</p>

          <button className="get-started-btn" onClick={goToLogin}>
            Get Started
          </button>
        </div>

        {/* 🌱 Crop Gallery 1 */}
        <div className="crop-gallery">
          <img src="https://tse3.mm.bing.net/th/id/OIP.6AurYKNP4frka_BcFcy1AQHaEo"
               alt="Rice"
               onClick={() => openCropInfo("Rice")}
               style={{ cursor: "pointer" }} />

          <img src="https://wallpapercave.com/wp/wp3115847.jpg"
               alt="Wheat"
               onClick={() => openCropInfo("Wheat")}
               style={{ cursor: "pointer" }} />

          <img src="https://cdn.britannica.com/96/129396-050-54B5568B/Cotton-crop-Africa-harvest.jpg"
               alt="Cotton"
               onClick={() => openCropInfo("Cotton")}
               style={{ cursor: "pointer" }} />

          <img src="https://th.bing.com/th/id/OIP.27iF5qGPKmSrWJ_J_o4bjwHaFj"
               alt="Maize"
               onClick={() => openCropInfo("Maize")}
               style={{ cursor: "pointer" }} />

          <img src="https://p0.pikist.com/photos/171/198/sugarcane-cane-field-raw-sugar-crop-agriculture-sugarcane-plantation-sugar-sweet-farmland.jpg"
               alt="Sugarcane"
               onClick={() => openCropInfo("Sugarcane")}
               style={{ cursor: "pointer" }} />
        </div>

        {/* 🌱 Crop Gallery 2 */}
        <div className="crop-gallery">
          <img src="https://images.tv9hindi.com/wp-content/uploads/2021/11/onion-farming-1.jpg"
               alt="Onion"
               onClick={() => openCropInfo("Onion")}
               style={{ cursor: "pointer" }} />

          <img src="https://c2.staticflickr.com/4/3061/2814651340_36680724c4_b.jpg"
               alt="Bajra"
               onClick={() => openCropInfo("Bajra")}
               style={{ cursor: "pointer" }} />

          <img src="https://kj1bcdn.b-cdn.net/media/37980/soybean-4.jpg"
               alt="Soyabean"
               onClick={() => openCropInfo("Soyabean")}
               style={{ cursor: "pointer" }} />

          <img src="https://www.epicgardening.com/wp-content/uploads/2024/04/Pomegranate-on-the-tree-920x518.jpg"
               alt="Pomegranate"
               onClick={() => openCropInfo("Pomegranate")}
               style={{ cursor: "pointer" }} />

          <img src="https://floridainsider.com/wp-content/uploads/2022/02/orangecrop.png"
               alt="Orange"
               onClick={() => openCropInfo("Orange")}
               style={{ cursor: "pointer" }} />
        </div>

      </div>
    </>
  );
}

export default HomePage;
