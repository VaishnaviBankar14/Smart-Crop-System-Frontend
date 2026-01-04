import Navbar from "../components/Navbar";
import AutoRecommend from "./AutoRecommend";

function FarmerDashboard() {
  return (
    <>
      <Navbar role="USER" />

        <AutoRecommend />
        <hr />
    </>
  );
}

export default FarmerDashboard;
