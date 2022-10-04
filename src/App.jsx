// Routing
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

// Components
import Header from "./components/globalComponents/Header";

// Pages
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import OtherTemplesPage from "./pages/OtherTemplesPage";
import TempleHistory from "./pages/TempleHistory";
import { useEffect, useState } from "react";
import Footer from "./components/globalComponents/Footer";

function App() {
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    onTop();
  }, [routePath]);

  return (
    <div className="font-oswald relative cursor-default">
      <Header />
      <Routes>
        <Route path="*" element={<LandingPage />} />
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/about-us" element={<AboutPage />} />
        <Route exact path="/other-temples" element={<OtherTemplesPage />} />
        <Route exact path="/temple-history" element={<TempleHistory />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
