import { useState } from "react";
import api from "../api/api";

function AddCrop() {
  const [crop, setCrop] = useState({});

  const addCrop = async () => {
    try {
      await api.post("/api/crops/add", crop);
      alert("Crop added successfully");
    } catch {
      alert("Admin access only");
    }
  };

  return (
    <div className="card shadow p-3">
      <h4>➕ Add Crop</h4>

      <div className="row">
        {[
          "name",
          "season",
          "minPh",
          "maxPh",
          "minRainfall",
          "maxRainfall",
          "yieldPerAcre"
        ].map((field) => (
          <div className="col-md-3 mt-2" key={field}>
            <input
              className="form-control"
              placeholder={field}
              onChange={(e) =>
                setCrop({ ...crop, [field]: e.target.value })
              }
            />
          </div>
        ))}
      </div>

      <button className="btn btn-success mt-3" onClick={addCrop}>
        Add Crop
      </button>
    </div>
  );
}

export default AddCrop;
