import Signup from "./components/Signup";

import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { useEffect } from "react";

function App() {
  return (
    <div>
      <Router>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
