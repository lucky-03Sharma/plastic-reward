import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import "./Signup.css";

export default function Signup() {

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);

  const { signup } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await signup(name, email, password);

      navigate("/dashboard");

    } catch (err) {

      setError(
        err.response?.data?.message || "Signup failed"
      );

    }

  };

  return (

    <div className="signup-wrapper">

      <div className="signup-container">

        <h2>Create Account 🌱</h2>

        <p className="subtitle">
          Join EcoReward today
        </p>

        {error && (
          <div className="error-box">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <div className="input-group">

            <label>Name</label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              required
            />

          </div>

          <div className="input-group">

            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required
            />

          </div>

          <div className="input-group">

            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              required
            />

          </div>

          <button className="signup-btn">

            Sign Up

          </button>

        </form>

        <div className="login-text">

          Already have an account?

          <Link to="/login"> Login</Link>

        </div>

      </div>

    </div>

  );

}
