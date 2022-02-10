import "./App.css";
//1 import packages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//2 je vais creer ma page Home

// j'ai commenté Article juste en dessous pour regler un warning
// import Article from "./components/Article";

//3 import de ma page Home
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Header from "./components/Header";
import Signup from "./pages/Signup";

// je crée ma premiere route Home
// maintenaznt la deuxieme : Offer avec sa page correspondante
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
