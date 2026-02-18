import { useState } from "react";
import axios from "axios";
import "./Dashboard.css";

export default function Dashboard() {
  const [weight, setWeight] = useState("");
  const [type, setType] = useState("recycle");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitWaste = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setMessage("Please login first");
      setIsError(true);
      return;
    }

    if (!weight || Number(weight) <= 0) {
      setMessage("Please enter a valid weight");
      setIsError(true);
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      await axios.post(
        "http://localhost:5000/api/waste/deposit",
        {
          type,
          weightKg: Number(weight)
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setMessage("Waste submitted successfully! 🎉");
      setIsError(false);
      setWeight("");
    } catch (error) {
      setMessage(
        error.response?.data?.error || error.response?.data?.message || "Failed to submit waste. Please try again."
      );
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <h1>♻️ Deposit Waste</h1>
        
        <div className="dashboard-form">
          <div className="form-group">
            <label htmlFor="waste-type">Waste Type</label>
            <select 
              id="waste-type"
              value={type} 
              onChange={(e) => setType(e.target.value)}
            >
              <option value="recycle">♻️ Recycle</option>
              <option value="reuse">♻️ Reuse</option>
              <option value="reduce">♻️ Reduce</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="weight">Weight (kg)</label>
            <input
              id="weight"
              type="number"
              placeholder="Enter weight in kg"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              min="0"
              step="0.1"
            />
          </div>

          <button 
            className="submit-btn" 
            onClick={submitWaste}
            disabled={loading}
          >
            {loading ? "Submitting..." : "🌱 Deposit Waste"}
          </button>

          {message && (
            <div className={isError ? "error-message" : "success-message"}>
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
