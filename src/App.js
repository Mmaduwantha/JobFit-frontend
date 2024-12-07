import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="font-sans bg-white-50 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
