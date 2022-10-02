// Routing
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import Header from "./components/globalComponents/Header";

// Pages
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/aboutPage";
import OtherTemplesPage from "./pages/OtherTemplesPage";

function App() {
  return (
    <div className="font-oswald relative">
      <Router>
        <Header />
        <Routes>
          <Route path="*" element={<LandingPage />} />
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/about-us" element={<AboutPage />} />
          <Route exact path="/other-temples" element={<OtherTemplesPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
