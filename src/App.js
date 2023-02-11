import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from "./components/Menu";
import HomePage from "./pages/HomePage";
import DriftPage from "./pages/DriftPage";
import ForzaPage from "./pages/ForzaPage";
import TimeAttackPage from "./pages/TimeAttackPage";

export default function App() {
  return (

    <Router>
      <div>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/drift" element={<DriftPage />} />
            <Route path="/timeattack" element={<TimeAttackPage />} />
            <Route path="/forza" element={<ForzaPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}