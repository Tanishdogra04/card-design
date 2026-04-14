import React, { useState, useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import NewPropertyCard from "../components/NewPropertyCard";
import BuilderFloorCard from "../components/BuilderFloorCard";
import FilterSection from "../components/FilterSection";
import ExploreHeader from "../components/ExploreHeader";
import { Link } from "react-router-dom";
import data from "../data/newdataproperty.json";

const CATEGORY_CARDS = [
  { name: "Apartments", filterType: "Apartment", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267" },
  { name: "Villas", filterType: "Villa", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" },
  { name: "Independent Houses", filterType: "Independent House", img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6" },
  { name: "Builder Floors", filterType: "Builder Floor", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c" },
  { name: "Studio Apartments", filterType: "Studio", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688" },
];

const NewPage = () => {
  
  const [filters, setFilters] = useState({
    location: "",
    type: "",
    bhk: "",
    possession: "",
    furnishing: "",
    facing: "",
    minPrice: "",
    maxPrice: "",
  });
  const filteredData = data.filter((property) => {
  return (
    (!filters.location || property.location.includes(filters.location)) &&
    (!filters.type || property.type === filters.type) &&
    (!filters.bhk || property.configuration.includes(filters.bhk)) &&
    (!filters.minPrice || property.price >= filters.minPrice) &&
    (!filters.maxPrice || property.price <= filters.maxPrice) &&
    (!filters.furnishing || property.furnishing === filters.furnishing) &&
    (!filters.possession || property.badge === filters.possession) &&
    (!filters.facing || property.facing === filters.facing)
  );
});
const [isSticky, setIsSticky] = useState(false);
const triggerRef = useRef(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([e]) => setIsSticky(!e.isIntersecting),
    { threshold: 0 }
  );

  if (triggerRef.current) observer.observe(triggerRef.current);

  return () => observer.disconnect();
}, []);


  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Banner */}
      <section className="relative h-[220px] sm:h-[260px] md:h-[320px]">
        <ExploreHeader />
        
        <img
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
          alt="Residential"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-xl sm:text-3xl md:text-4xl font-bold">
            Residential Properties
          </h1>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-200 max-w-xl">
            Explore apartments, villas & more in top locations
          </p>
        </div>
      </section>

      {/* Categories */}
     <section className="px-4 sm:px-6 md:px-10 py-8 md:py-10">
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-lg md:text-xl font-semibold">
      Browse by Type
    </h2>

    <Link 
      to="/explore-types" 
      className="group flex items-center gap-2 bg-gradient-to-r from-[#1f6f3e] via-[#6e8f3a] to-[#e6d96a] text-sm font-medium border border-[#5fae4a] px-4 py-2 rounded hover:bg-purple-50 transition">
      View All
      <ArrowRight
        size={18}
        className="transition-transform duration-500 group-hover:rotate-[360deg]"
      />
    </Link>
  </div>

  {/* DATA DRIVEN CARDS */}
  <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6">

    {CATEGORY_CARDS.map((item, i) => (

   <div
  key={i}
  onClick={() => {
    setFilters(prev => ({
      ...prev, 
      type: item.filterType === "Studio" ? "" : item.filterType,
      bhk: item.filterType === "Studio" ? "Studio" : prev.bhk
    }));
    document.getElementById("property-list")?.scrollIntoView({ behavior: "smooth" });
  }}
  className="relative h-[160px] rounded-xl overflow-hidden cursor-pointer group"
>
  <img
    src={item.img}
    alt={item.name}
    className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-300"
  />

  <div className="absolute inset-0 bg-black/30"></div>

  <h3 className="absolute bottom-2 left-2 text-white text-xl font-semibold">
    {item.name}
  </h3>
</div>

  ))}


  </div>
</section>

      {/* ✅ Filter */}
      <FilterSection 
  filters={filters} 
  setFilters={setFilters} 
/>

<div ref={triggerRef}></div>
      {/* Property Cards */}
      <section id="property-list" className="px-4 sm:px-6 md:px-10 pb-10">
        <h2 className="text-lg md:text-xl font-semibold mb-6">
          Available Properties
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
         {filteredData.length === 0 ? (
  <p className="col-span-full text-center text-gray-500">
    No properties found 😔
  </p>
) : (
  filteredData.map((property) => (
    <div key={property.id} className="h-full flex">
      {property.type === "Builder Floor" ? (
        <BuilderFloorCard property={property} />
      ) : (
        <NewPropertyCard property={property} />
      )}
    </div>
  ))
)}
        </div>
      </section>

    </div>
  );
};

export default NewPage;