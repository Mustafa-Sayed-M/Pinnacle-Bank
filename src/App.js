import React from "react";
import { Route, Routes } from "react-router-dom";

// Components:
import Navbar from "./Components/Global_C/Navbar/Navbar";
import Footer from "./Components/Global_C/Footer/Footer";

// Pages:
import Home from "./Pages/Home/Home";
import Careers from "./Pages/Careers/Careers";
import About from "./Pages/About/About";
import Security from "./Pages/Security/Security";

function App() {
  return (
    <div className="App bg-body-color text-white min-h-screen">
      {/* Navbar */}
      <Navbar />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/about" element={<About />} />
        <Route path="/security" element={<Security />} />
      </Routes>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
