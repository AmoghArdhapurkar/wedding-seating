import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import SeatingPage from "./components/SeatingPage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/seating" element={<SeatingPage />} />
    </Routes>
  );
}

export default App;
