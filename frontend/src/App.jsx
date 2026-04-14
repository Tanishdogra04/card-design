import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Residential from "./pages/Residential";
import ResidentialSection from "./components/ResidentialSection";
import PropertyDetails from "./pages/PropertyDetails";
import PropDetails from "./pages/PropDetails";
import NewPage from "./pages/NewPage";
import AllPropertyTypes from "./pages/AllPropertyTypes";
import CategoryResults from "./pages/CategoryResults";
import CommercialPage from "./pages/CommercialPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home page with carousel */}
        <Route path="/" element={<Home />} />

        {/* View All page */}
        <Route path="/residential" element={<Residential />} />
        
        {/* Commercial Properties Page */}
        <Route path="/commercial" element={<CommercialPage />} />

        {/* Property Detail Page */}
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/elysian-greens" element={<PropDetails />} />
        <Route path="/new-page" element={<NewPage />} />
        <Route path="/explore-types" element={<AllPropertyTypes />} />
        <Route path="/category-results" element={<CategoryResults />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;