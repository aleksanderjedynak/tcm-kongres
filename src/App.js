import Home from "./components/Home";
import Regulations from "./components/Regulations";
import PrivacyPolicy from "./components/PrivacyPolicy";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/tcm-kongres" element={<Home />} />
          <Route path="/regulations" element={<Regulations />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          Privacy policy
        </Routes>
      </div>
    </Router>
  );
}
