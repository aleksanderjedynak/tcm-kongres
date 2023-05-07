import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Regulations from "./components/Regulations";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Download from "./components/Download";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/tcm-kongres" element={<Home />} />
          <Route path="/regulations" element={<Regulations />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/download" element={<Download />} />
        </Routes>
      </div>
    </Router>
  );
}
