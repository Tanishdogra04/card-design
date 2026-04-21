import React, { useState, useRef, useEffect } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import NewPropertyCard from "../components/NewPropertyCard";
import CommercialFilterSection from "../components/CommercialFilterSection";
import ExploreHeader from "../components/ExploreHeader";
import { Link } from "react-router-dom";
import data from "../data/newdataproperty.json";

const CATEGORY_CARDS = [
  { 
    name: "Shopping cum Office", 
    filterType: "SCO", 
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    subcategories: ["Upper Floor Office Units", "Basement Retail/Storage", "Corner SCO Units", "Anchor Store Units"]
  },
  { 
    name: "Retail Commercial", 
    filterType: "Retail", 
    img: "https://images.unsplash.com/photo-1555421689-491a97ff2040",
    subcategories: ["Kiosks", "Food Court Space", "High Street Shops"]
  }
];

const CommercialPage = () => {
  const [filters, setFilters] = useState({
    location: "",
    type: "",
    possession: "",
    ownership: "",
    amenities: "",
    postedWithin: "",
    minPrice: "",
    maxPrice: "",
  });

  const filteredData = data.filter((property) => {
    // Basic filter to ensure we only look at commercial properties
    const isCommercial = property.type === "Commercial";
    
    // In our dummy data, we might have basic subtypes. To simulate this working nicely:
    const matchesCommercialCategory = !filters.type || 
            (filters.type === "SCO" && ["Retail Shop", "Showroom", "Corner SCO Units", "Anchor Store Units", "Basement Retail/Storage"].includes(property.configuration)) ||
            (filters.type === "Retail" && ["Retail Shop", "Showroom", "Kiosks", "Food Court Space", "High Street Shops"].includes(property.configuration));

    // Note: Dummy data doesn't currently contain ownership, amenities, or postedWithin, 
    // so we don't strictly filter them out here to prevent hiding all results,
    // but the UI behaves correctly for demonstrations.
    return (
      isCommercial &&
      matchesCommercialCategory &&
      (!filters.location || property.location.includes(filters.location)) &&
      (!filters.minPrice || property.price >= filters.minPrice) &&
      (!filters.maxPrice || property.price <= filters.maxPrice) &&
      (!filters.possession || property.badge === filters.possession)
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
        
        {/* Using a premium commercial building image */}
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab" 
          alt="Commercial Properties"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-indigo-200">
            Commercial Properties
          </h1>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-300 max-w-xl font-light">
            Premium office spaces, cutting-edge corporate towers, and high-street retail zones.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="px-4 sm:px-6 md:px-10 py-8 md:py-10 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 border-l-4 border-indigo-600 pl-3">
            Explore Commercial Segments
          </h2>
        </div>

        {/* Commercial Categories Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {CATEGORY_CARDS.map((item, i) => (
            <div
              key={i}
              onClick={() => {
                setFilters(prev => ({...prev, type: item.filterType}));
                document.getElementById("commercial-list")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="relative rounded-2xl overflow-hidden cursor-pointer group flex flex-col bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold tracking-wide">
                  {item.name}
                </h3>
              </div>
              
              {/* Subcategories List */}
              <div className="p-5 flex-1 flex flex-col bg-indigo-50/30">
                <p className="text-xs font-semibold text-indigo-700 uppercase tracking-wider mb-3">Includes</p>
                <ul className="space-y-2 flex-1">
                  {item.subcategories.map((sub, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600">
                      <CheckCircle2 size={16} className="text-indigo-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>{sub}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex items-center text-sm font-medium text-indigo-600 group-hover:text-indigo-800 transition-colors">
                  View Properties <ArrowRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Filter Section */}
      <CommercialFilterSection 
        filters={filters} 
        setFilters={setFilters} 
      />

      <div ref={triggerRef}></div>
      
      {/* Property Cards */}
      <section id="commercial-list" className="px-4 sm:px-6 md:px-10 pb-16 pt-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">
              {filters.type ? `${CATEGORY_CARDS.find(c => c.filterType === filters.type)?.name} Properties` : "All Commercial Properties"}
            </h2>
            <p className="text-sm text-gray-500 mt-1">Discover places that drive your business forward</p>
          </div>
          {filters.type && (
            <button 
              onClick={() => setFilters(prev => ({...prev, type: ""}))}
              className="text-sm text-indigo-600 hover:text-indigo-800 font-medium underline underline-offset-2"
            >
              Clear Category Filter
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredData.length === 0 ? (
            <div className="col-span-full py-12 flex flex-col items-center justify-center text-gray-500 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <p className="text-lg font-medium">No properties found</p>
              <p className="text-sm mt-1">Try adjusting your filters or category selection.</p>
            </div>
          ) : (
            filteredData.map((property) => (
              <div key={property.id} className="h-full flex">
                <NewPropertyCard property={property} />
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default CommercialPage;
