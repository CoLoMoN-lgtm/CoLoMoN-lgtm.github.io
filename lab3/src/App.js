import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import MyInitiatives from "./pages/MyInitiatives";
import About from "./pages/About";
import "./App.css";

function App() {
  const [joinedInitiatives, setJoinedInitiatives] = useState([]);

  return (
    <div className="container">
      <header>
        <h1>Платформа волонтерських ініціатив</h1>
        <nav>
          <ul>
            <li><Link to="/">Доступні ініціативи</Link></li>
            <li><Link to="/my-initiatives">Мої ініціативи</Link></li>
            <li><Link to="/about">Про нас</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home joinedInitiatives={joinedInitiatives} setJoinedInitiatives={setJoinedInitiatives} />} />
          <Route path="/my-initiatives" element={<MyInitiatives joinedInitiatives={joinedInitiatives} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <footer>
        <p>&copy; 2025 Платформа волонтерських ініціатив</p>
      </footer>
    </div>
  );
}

export default App;
