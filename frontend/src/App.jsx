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
import Offices from "./pages/Offices";
import OfficeDetails from "./pages/OfficeDetails";
import InstitutionalPage from "./pages/InstitutionalPage";
import InstitutionalAllTypes from "./pages/InstitutionalAllTypes";
import HospitalityPage from "./pages/HospitalityPage";
import HospitalityAllTypes from "./pages/HospitalityAllTypes";

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

        {/* Office Spaces Pages */}
        <Route path="/offices" element={<Offices />} />
        <Route path="/office-details/:id" element={<OfficeDetails />} />

        {/* Property Detail Page */}
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/elysian-greens" element={<PropDetails />} />
        <Route path="/new-page" element={<NewPage />} />
        <Route path="/explore-types" element={<AllPropertyTypes />} />
        <Route path="/category-results" element={<CategoryResults />} />
        <Route path="/institutional" element={<InstitutionalPage />} />
        <Route path="/institutional-all-types" element={<InstitutionalAllTypes />} />
        <Route path="/hospitality" element={<HospitalityPage />} />
        <Route path="/hospitality-all-types" element={<HospitalityAllTypes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;