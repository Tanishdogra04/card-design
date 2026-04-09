import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { ArrowLeft, SlidersHorizontal, ChevronDown, LayoutGrid, X } from "lucide-react";
import NewPropertyCard from "../components/NewPropertyCard";
import BuilderFloorCard from "../components/BuilderFloorCard";
import FilterSection from "../components/FilterSection";
import data from "../data/newdataproperty.json";

const CATEGORY_BANNERS = {
  "Apartments": "https://images.unsplash.com/photo-1545324418-f1d3ac1ef730",
  "Villas": "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
  "Independent Houses": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
  "Plots": "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
  "Builder Floors": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
  "Senior Living": "https://images.unsplash.com/photo-1586105251261-72a756497a11",
  "Commercial": "https://images.unsplash.com/photo-1497366216548-37526070297c",
  "Default": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
};

const CategoryResults = () => {
  const [searchParams] = useSearchParams();
  
  // Initial titles and filters from URL
  const initialTitle = searchParams.get("title") || "Property Results";
  const initialType = searchParams.get("type") || "";
  const initialBhk = searchParams.get("bhk") || "";
  const initialSearch = searchParams.get("search") || "";

  const [sortBy, setSortBy] = useState("Featured");
  const [filters, setFilters] = useState({
    location: initialSearch,
    type: initialType,
    bhk: initialBhk,
    possession: "",
    furnishing: "",
    facing: "",
    minPrice: "",
    maxPrice: "",
  });



  const filteredData = data.filter((property) => {
    return (
      (!filters.location || 
        property.location.toLowerCase().includes(filters.location.toLowerCase()) ||
        property.name.toLowerCase().includes(filters.location.toLowerCase())
      ) &&
      (!filters.type || property.type === filters.type) &&
      (!filters.bhk || (property.configuration && property.configuration.includes(filters.bhk))) &&
      (!filters.minPrice || property.price >= filters.minPrice) &&
      (!filters.maxPrice || property.price <= filters.maxPrice) &&
      (!filters.furnishing || property.furnishing === filters.furnishing) &&
      (!filters.possession || property.badge === filters.possession) &&
      (!filters.facing || property.facing === filters.facing)
    );
  });

  // Sorting logic (done during render)
  if (sortBy === "Price: Low to High") {
    filteredData.sort((a, b) => a.price - b.price);
  } else if (sortBy === "Price: High to Low") {
    filteredData.sort((a, b) => b.price - a.price);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const removeFilter = (key) => {
    setFilters(prev => ({ ...prev, [key]: "" }));
  };

  const activeFilters = Object.entries(filters).filter(([key, value]) => value !== "");
  const bannerImg = CATEGORY_BANNERS[initialTitle] || CATEGORY_BANNERS["Default"];

  return (
    <div className="bg-[#f8fafc] min-h-screen font-serif">
      {/* Premium Hero Banner */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden isolate">
        <img
          src={bannerImg}
          alt={initialTitle}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10"></div>

        <div className="absolute inset-0 flex flex-col items-start justify-center z-20 max-w-7xl mx-auto px-6 md:px-12">
          <Link 
            to="/explore-types" 
            className="flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest text-white hover:bg-white hover:text-blue-700 transition-all group mb-8 shadow-2xl"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Back to Explore
          </Link>

          <div>
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-4">
              {initialTitle}
            </h1>
            <p className="mt-4 text-lg md:text-2xl text-gray-300 max-w-2xl font-medium tracking-tight leading-relaxed">
              Discover <span className="text-white font-bold italic underline decoration-blue-500 underline-offset-8">Elite Residencies</span> curated for your refined taste in <span className="text-blue-400 capitalize">{filters.location || "Prime Locations"}</span>.
            </p>
            
            <div className="mt-10 flex items-center gap-4">
               <div className="bg-blue-700 text-white px-5 py-2 rounded-2xl text-sm font-black uppercase tracking-widest shadow-xl shadow-blue-700/30">
                 {filteredData.length} Results
               </div>
               <div className="w-px h-6 bg-white/20"></div>
               <div className="flex items-center gap-2 text-white/60 text-[10px] font-bold uppercase tracking-[3px]">
                  Verified Listings
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Non-Sticky Filter Bar */}
      <div className="h-4 bg-white"></div>
      <FilterSection 
        filters={filters} 
        setFilters={setFilters} 
        isSticky={false}
      />

      {/* Active Filter Chips */}
      {activeFilters.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-wrap gap-2 pt-2">
          {activeFilters.map(([key, value]) => (
            <button
              key={key}
              onClick={() => removeFilter(key)}
              className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold border border-blue-100 hover:bg-blue-100 transition-colors"
            >
              <span className="opacity-60">{key}:</span> {typeof value === 'number' ? `₹ ${value / 100000}L` : value}
              <X size={14} />
            </button>
          ))}
          <button 
            onClick={() => setFilters({
              location: "", type: "", bhk: "", possession: "", 
              furnishing: "", facing: "", minPrice: "", maxPrice: ""
            })}
            className="text-xs font-black text-gray-400 hover:text-blue-700 uppercase tracking-widest ml-2"
          >
            Clear All
          </button>
        </div>
      )}

      {/* Results Section */}
      <section className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-gray-100 pb-8">
            <div className="space-y-1">
                <div className="inline-flex items-center gap-2 text-blue-700 font-black text-[10px] uppercase tracking-[4px]">
                   Curated for you
                </div>
                <h2 className="text-4xl font-black text-gray-900 tracking-tight">
                    Search <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600 italic">Results.</span>
                </h2>
            </div>
            
            {/* Sorting Dropdown */}
            <div className="flex items-center gap-4">
               <div className="relative group">
                  <button className="flex items-center gap-3 bg-gray-50 border border-gray-100 px-5 py-3 rounded-2xl text-sm font-bold text-gray-700 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all">
                     <SlidersHorizontal size={18} className="text-blue-700" />
                     Sort: {sortBy}
                     <ChevronDown size={18} className="text-gray-400 group-hover:rotate-180 transition-transform" />
                  </button>
                  
                  {/* Dropdown Menu */}
                  <div className="absolute top-full right-0 mt-3 w-56 bg-white rounded-2xl shadow-2xl shadow-blue-900/10 border border-blue-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 p-2">
                     {["Featured", "Price: Low to High", "Price: High to Low"].map((option) => (
                       <button
                         key={option}
                         onClick={() => setSortBy(option)}
                         className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-colors ${sortBy === option ? "bg-blue-700 text-white" : "text-gray-600 hover:bg-blue-50"}`}
                       >
                         {option}
                       </button>
                     ))}
                  </div>
               </div>
               
               <div className="hidden sm:flex items-center gap-2 p-1.5 bg-gray-50 rounded-xl border border-gray-100">
                  <button className="w-10 h-10 bg-white shadow-sm rounded-lg flex items-center justify-center text-blue-700">
                     <LayoutGrid size={20} />
                  </button>
               </div>
            </div>
        </div>

        {/* Property Grid */}
        <div className="min-h-[400px]">
          {filteredData.length === 0 ? (
            <div 
               className="py-32 flex flex-col items-center justify-center text-center space-y-6 bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-200"
            >
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center text-4xl shadow-inner">🔎</div>
              <div className="space-y-2">
                 <h3 className="text-3xl font-black text-gray-800 tracking-tight">Elegance Not Found</h3>
                 <p className="text-gray-500 max-w-sm mx-auto font-medium">We couldn't find a match for those specific criteria. Let's try refining your vision.</p>
              </div>
              <button 
                onClick={() => setFilters({
                    location: "",
                    type: "",
                    bhk: "",
                    possession: "",
                    furnishing: "",
                    facing: "",
                    minPrice: "",
                    maxPrice: "",
                })}
                className="bg-gray-900 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-blue-700 transition-all shadow-xl active:scale-95"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div 
               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-8 gap-y-12"
            >
                {filteredData.map((property) => (
                  <div 
                    key={property.id} 
                    className="h-full relative z-30"
                  >
                    {property.type === "Builder Floor" ? (
                      <BuilderFloorCard property={property} />
                    ) : (
                      <NewPropertyCard property={property} />
                    )}
                  </div>
                ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CategoryResults;
