import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Leaderboard from "./pages/Leaderboard";

import { Routes, Route } from "react-router-dom";

function App() {

  return (

    <div>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/leaderboard" element={<Leaderboard />} />

      </Routes>

    </div>

  );

}

export default App;
