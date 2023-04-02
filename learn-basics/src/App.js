import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Resume from "./Pages/Resume";
import Experience from "./Pages/Experience";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default App;


