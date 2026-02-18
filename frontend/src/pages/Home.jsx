import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero">
        <h1>Turn Waste Into Rewards ♻️</h1>
        <p>
          Deposit recyclable waste, earn eco coins, and compete with others
          to save the planet.
        </p>
        <Link to="/dashboard">
          <button className="cta-btn">
            Start Depositing Waste
          </button>
        </Link>
      </div>

      {/* Features */}
      <div className="features">
        <div className="card">
          <h3>♻️ Deposit Waste</h3>
          <p>Submit waste and earn eco coins instantly.</p>
        </div>

        <div className="card">
          <h3>🏆 Leaderboard</h3>
          <p>Compete with eco warriors and rank higher.</p>
        </div>

        <div className="card">
          <h3>🌍 Save Planet</h3>
          <p>Every deposit contributes to a greener future.</p>
        </div>
      </div>
    </div>
  );
}
