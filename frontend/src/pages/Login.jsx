import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await login(email, password);

      navigate("/dashboard");

    } catch (err) {

      setError(err.response?.data?.message || "Login failed");

    }

  };

  return (

    <div className="login-wrapper">

      <div className="login-container">

        <h2>Welcome Back 🌱</h2>

        <p className="subtitle">
          Login to your EcoReward account
        </p>

        {error && (
          <div className="error-box">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <div className="input-group">

            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

          </div>

          <div className="input-group">

            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

          </div>

          <button className="login-btn">

            Login

          </button>

        </form>

        <div className="signup-text">

          Don't have an account?

          <Link to="/signup"> Sign up</Link>

        </div>

      </div>

    </div>

  );

}
