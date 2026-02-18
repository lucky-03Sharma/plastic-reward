import { useState, useEffect } from "react";
import axios from "axios";
import "./Leaderboard.css";

export default function Leaderboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/leaderboard");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  const getRankClass = (rank) => {
    if (rank === 1) return "rank-1";
    if (rank === 2) return "rank-2";
    if (rank === 3) return "rank-3";
    return "";
  };

  if (loading) {
    return (
      <div className="leaderboard">
        <div className="leaderboard-container">
          <div className="loading">Loading leaderboard... 🏆</div>
        </div>
      </div>
    );
  }

  return (
    <div className="leaderboard">
      <div className="leaderboard-container">
        <h1>🏆 Leaderboard</h1>
        
        {users.length === 0 ? (
          <div className="empty-state">
            <p>No users found yet.</p>
            <p>Be the first to deposit waste and earn coins! 🌱</p>
          </div>
        ) : (
          <table className="leaderboard-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Coins</th>
                <th>Total Waste (kg)</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => {
                const rank = index + 1;
                return (
                  <tr key={index}>
                    <td className={`rank-cell ${getRankClass(rank)}`}>
                      {rank === 1 && "🥇"}
                      {rank === 2 && "🥈"}
                      {rank === 3 && "🥉"}
                      {rank > 3 && rank}
                    </td>
                    <td>{user.name || "Anonymous"}</td>
                    <td className="coins-cell">💰 {user.coins || 0}</td>
                    <td>{user.totalWaste || 0} kg</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
