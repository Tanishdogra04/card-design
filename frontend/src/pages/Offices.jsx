import React, { useState, useRef, useEffect } from "react";
import { ArrowRight, Search, MapPin, Building2 } from "lucide-react";
import OfficeCard from "../components/OfficeCard";
import ExploreHeader from "../components/ExploreHeader";
import { Link } from "react-router-dom";
import data from "../data/newdataproperty.json";

const OFFICE_CATEGORIES = [
  { name: "Private Office", filterType: "Private Office", img: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=500&h=300&fit=crop" },
  { name: "Managed Office", filterType: "Managed Office", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=300&fit=crop" },
  { name: "IT Park", filterType: "IT Park", img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=500&h=300&fit=crop" },
  { name: "Coworking Space", filterType: "Coworking Space", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop" },
];

export default function Offices() {
  const [filters, setFilters] = useState({
    location: "",
    type: "",
    minPrice: "",
    maxPrice: "",
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

  // Filter for Office properties only
  const officeProps = data.filter(p => p.type === "Office");

  // Apply filters
  const filteredData = officeProps.filter((property) => {
    return (
      (!filters.location || property.location.includes(filters.location)) &&
      (!filters.type || property.subType?.includes(filters.type)) &&
      (!filters.minPrice || property.price >= filters.minPrice) &&
      (!filters.maxPrice || property.price <= filters.maxPrice)
    );
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HERO BANNER */}
      <section className="relative h-[240px] sm:h-[300px] md:h-[380px]">
        <ExploreHeader />
        
        <img
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=500&fit=crop"
          alt="Office Spaces"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <div className="flex items-center gap-3 mb-4 justify-center">
            <div className="h-10 w-10 bg-white/90 rounded-full flex items-center justify-center">
              <span className="text-indigo-600 font-bold text-lg">R</span>
            </div>
            <span className="text-sm font-black uppercase tracking-widest text-white/80">Premium Offices</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight mb-2">
            Office Spaces & Workspaces
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-100 max-w-2xl font-medium">
            Premium office spaces, co-working hubs, and corporate environments for your business
          </p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="px-4 sm:px-6 md:px-10 py-10 md:py-14">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight">Browse by Office Type</h2>
            <p className="text-sm text-gray-600 mt-1 font-medium">Explore various office solutions tailored to your needs</p>
          </div>
        </div>

        {/* CATEGORY CARDS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
          {OFFICE_CATEGORIES.map((item, i) => (
            <div
              key={i}
              onClick={() => {
                setFilters(prev => ({
                  ...prev, 
                  type: item.filterType,
                }));
                document.getElementById("office-list")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="relative h-[140px] md:h-[160px] rounded-2xl overflow-hidden cursor-pointer group shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />

              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition duration-300"></div>

              <h3 className="absolute bottom-3 left-3 text-white text-sm md:text-base font-black tracking-tight leading-snug group-hover:translate-x-1 transition">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* FILTER SECTION */}
      <section className="px-4 sm:px-6 md:px-10 py-8 bg-white border-y border-gray-200">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-indigo-100 rounded-lg">
            <Building2 size={20} className="text-indigo-600" />
          </div>
          <h3 className="text-lg font-black tracking-tight">Refine Your Search</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* LOCATION */}
          <div>
            <label className="text-xs font-black uppercase tracking-wider text-gray-700 block mb-2">Location</label>
            <input
              type="text"
              placeholder="Search location..."
              value={filters.location}
              onChange={(e) => setFilters({...filters, location: e.target.value})}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition text-sm"
            />
          </div>

          {/* OFFICE TYPE */}
          <div>
            <label className="text-xs font-black uppercase tracking-wider text-gray-700 block mb-2">Office Type</label>
            <select
              value={filters.type}
              onChange={(e) => setFilters({...filters, type: e.target.value})}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition text-sm"
            >
              <option value="">All Types</option>
              {OFFICE_CATEGORIES.map((cat, i) => (
                <option key={i} value={cat.filterType}>{cat.name}</option>
              ))}
            </select>
          </div>

          {/* MIN PRICE */}
          <div>
            <label className="text-xs font-black uppercase tracking-wider text-gray-700 block mb-2">Min Price</label>
            <input
              type="number"
              placeholder="Min..."
              value={filters.minPrice}
              onChange={(e) => setFilters({...filters, minPrice: e.target.value})}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition text-sm"
            />
          </div>

          {/* MAX PRICE */}
          <div>
            <label className="text-xs font-black uppercase tracking-wider text-gray-700 block mb-2">Max Price</label>
            <input
              type="number"
              placeholder="Max..."
              value={filters.maxPrice}
              onChange={(e) => setFilters({...filters, maxPrice: e.target.value})}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition text-sm"
            />
          </div>

          {/* RESET BUTTON */}
          <div className="flex items-end">
            <button
              onClick={() => setFilters({
                location: "",
                type: "",
                minPrice: "",
                maxPrice: "",
              })}
              className="w-full px-4 py-3 bg-gray-200 hover:bg-gray-300 text-gray-900 font-black rounded-lg transition text-sm uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        </div>
      </section>

      <div ref={triggerRef}></div>

      {/* OFFICE LISTING */}
      <section id="office-list" className="px-4 sm:px-6 md:px-10 py-10 md:py-14">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-1">
            Available Office Spaces
          </h2>
          <p className="text-sm text-gray-600 font-medium">
            {filteredData.length} {filteredData.length === 1 ? "space" : "spaces"} found
          </p>
        </div>

        {filteredData.length === 0 ? (
          <div className="col-span-full text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full mb-4">
              <Search size={32} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No Offices Found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your filters</p>
            <button
              onClick={() => setFilters({
                location: "",
                type: "",
                minPrice: "",
                maxPrice: "",
              })}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
            {filteredData.map((office) => (
              <div key={office.id} className="h-full">
                <OfficeCard property={office} />
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
