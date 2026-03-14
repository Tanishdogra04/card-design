import { BrowserRouter, Routes, Route } from "react-router-dom";

import Residential from "./pages/Residential";
import ResidentialSection from "./components/ResidentialSection";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home page with carousel */}
        <Route path="/" element={<ResidentialSection />} />

        {/* View All page */}
        <Route path="/residential" element={<Residential />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;