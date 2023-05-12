import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Regulations from "./components/Regulations";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Download from "./components/Download";
import People from "./components/People";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/tcm-kongres" element={<Home />} />
          <Route path="/regulations" element={<Regulations />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/download" element={<Download />} />
          <Route path="/people" element={<People />} />S
        </Routes>
      </div>
    </Router>
  );
}
