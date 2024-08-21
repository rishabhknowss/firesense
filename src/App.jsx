import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { Products } from "./pages/Products";
import { Map } from "./pages/Map";
import { Dashboard } from "./pages/Dashboard";
import { AmcTab } from "./pages/AmcTab";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/map" element={<Map />} />
        {/* Fixing the typo in the route path */}
        <Route path="/dashboard/AMC" element={<AmcTab />} />
      </Routes>
    </BrowserRouter>
  );
}
