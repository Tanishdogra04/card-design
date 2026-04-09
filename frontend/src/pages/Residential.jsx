import { useState } from "react";
import PropertyCard from "../components/PropertyCard";
import FilterBar from "../components/FilterBar";
import properties from "../data/properties.json";
import FilterModal from "../components/FilterModal";

export default function Residential() {

  const [filters, setFilters] = useState({
    location: "",
    propertyType: "",
    bhk: "",
    minPrice: "",
    maxPrice: "",
    minArea: "",
    maxArea: "",
    possession: "",
    facing: ""
  });

  const [showModal, setShowModal] = useState(false);

  const filteredProperties = properties.filter((p) => {

    return (

      (!filters.propertyType || p.type === filters.propertyType) &&

      (!filters.bhk || p.configuration === filters.bhk) &&

      (!filters.location || p.location.toLowerCase().includes(filters.location.toLowerCase())) &&

      (!filters.minPrice || p.price >= filters.minPrice) &&
      (!filters.maxPrice || p.price <= filters.maxPrice) &&

      (!filters.minArea || p.area >= filters.minArea) &&
      (!filters.maxArea || p.area <= filters.maxArea) &&

     (!filters.possession || p.badge === filters.possession) &&

      (!filters.facing || p.facing === filters.facing)

    );

  });

  return (

    <div className="py-16 px-10">

      <h1 className="text-3xl font-bold mb-6">
        Residential Properties
      </h1>

      <FilterBar
        filters={filters}
        setFilters={setFilters}
        openAdvanced={() => setShowModal(true)}
      />

      {showModal && (
        <FilterModal
          filters={filters}
          setFilters={setFilters}
          close={() => setShowModal(false)}
        />
      )}

      <div className="grid md:grid-cols-3 gap-6 items-stretch">
        {filteredProperties.map((property) => (
          <div key={property.id} className="h-full flex">
            <PropertyCard property={property}/>
          </div>
        ))}
      </div>

    </div>
  );
}