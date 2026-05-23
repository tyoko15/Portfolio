import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Works from "./pages/Works";
import GameJams from "./pages/GameJams";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";
import WorkDetail from "./pages/WorkDetail";

import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/works" element={<Works />} />
        <Route path="/gamejams" element={<GameJams />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/contact" element={<Contact />} />

        {/* 動的ルート（作品詳細） */}
        <Route path="/works/:id" element={<WorkDetail />} />
      </Routes>

      <Footer />
    </>
  );
}
