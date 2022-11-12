import "./App.css";
import ResponsiveAppBar from "./components/AppBar";
import Home from "./views/Home/Home";
import Kontakt from "./views/Kontakt/Kontakt";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      Hello World
      <ResponsiveAppBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/sortiment" element={<Home />} />
        <Route path="/leistungen" element={<Home />} />
        <Route path="/galerie" element={<Home />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
