import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Works from "./pages/Works";
import GameJams from "./pages/GameJams";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";
import WorkDetail from "./pages/WorkDetail";

import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />

      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/works" element={<Works />} />
          <Route path="/gamejams" element={<GameJams />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/works/:id" element={<WorkDetail />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
