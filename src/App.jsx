import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewsPage from "./pages/NewsPage";
import ServicesPage from "./pages/ServicesPage";
import WorkersPage from "./pages/WorkersPage";
import VacancyPage from "./pages/VacancyPage";
import AboutPage from "./pages/About";
import { OpenCompany } from "./pages/OpenCompany";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-100">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[900px] object-contain opacity-90"
          >
            <source src="/LogoRender.mp4" type="video/mp4" />
          </video>
        </div>
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/workers" element={<WorkersPage />} />
            <Route path="/vacancy" element={<VacancyPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/opencompany" element={<OpenCompany />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
