import { BrowserRouter, Routes, Route } from "react-router-dom";

import Residential from "./pages/Residential";
import ResidentialSection from "./components/ResidentialSection";
import PropertyDetails from "./pages/PropertyDetails";
import PropDetails from "./pages/PropDetails";
import NewPage from "./pages/NewPage";
import AllPropertyTypes from "./pages/AllPropertyTypes";
import CategoryResults from "./pages/CategoryResults";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home page with carousel */}
        <Route path="/" element={<ResidentialSection />} />

        {/* View All page */}
        <Route path="/residential" element={<Residential />} />

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