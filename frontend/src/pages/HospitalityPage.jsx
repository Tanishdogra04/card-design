import React, { useState, useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Hotel, Waves, Home, Building2, MapPin, Star } from "lucide-react";
import NewPropertyCard from "../components/NewPropertyCard";
import ExploreHeader from "../components/ExploreHeader";
import { Link } from "react-router-dom";
import data from "../data/newdataproperty.json";

const CATEGORY_CARDS = [
  { 
    name: "Hotels", 
    filterType: "Hotels", 
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    icon: <Hotel className="text-rose-600" />,
    subcategories: ["Luxury Suites", "Business Hotels", "Boutique Stays"]
  },
  { 
    name: "Resorts", 
    filterType: "Resorts", 
    img: "https://images.unsplash.com/photo-1540541338287-41700207dee6",
    icon: <Waves className="text-rose-600" />,
    subcategories: ["Beachfront Resorts", "Hillside Retreats", "Spa Wellness Centers"]
  },
  { 
    name: "Guest Houses", 
    filterType: "Guest Houses", 
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    icon: <Home className="text-rose-600" />,
    subcategories: ["Heritage Villas", "Homestays", "Bed & Breakfasts"]
  },
  { 
    name: "Serviced Apartments", 
    filterType: "Serviced Apartments", 
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    icon: <Building2 className="text-rose-600" />,
    subcategories: ["Executive Studios", "Long-stay Suites", "Corporate Housing"]
  }
];

const HospitalityPage = () => {
  const [filters, setFilters] = useState({
    location: "",
    type: "",
    minPrice: "",
    maxPrice: "",
  });

  const filteredData = data.filter((property) => {
    const isHospitality = property.type === "Hospitality";
    const matchesCategory = !filters.type || property.subType === filters.type;

    return (
      isHospitality &&
      matchesCategory &&
      (!filters.location || property.location.toLowerCase().includes(filters.location.toLowerCase())) &&
      (!filters.minPrice || property.price >= parseInt(filters.minPrice)) &&
      (!filters.maxPrice || property.price <= parseInt(filters.maxPrice))
    );
  });

  const [isSticky, setIsSticky] = useState(false);
  const triggerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      ([e]) => setIsSticky(!e.isIntersecting),
      { threshold: 0 }
    );
    if (triggerRef.current) observer.observe(triggerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Banner */}
      <section className="relative h-[240px] sm:h-[300px] md:h-[380px]">
        <ExploreHeader />
        
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945" 
          alt="Hospitality Properties"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <div className="flex items-center gap-3 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
             <Hotel size={32} className="text-rose-400" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-2 animate-in fade-in slide-in-from-bottom-6 duration-1000">
             Hospitality & Leisure
          </h1>
          <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl font-medium animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Discover extraordinary stays, from global hotel chains to boutique retreats and luxury resorts.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="px-4 sm:px-6 md:px-10 py-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-10 gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
              Curated Experiences
            </h2>
            <p className="text-gray-500 font-medium mt-1">Explore property segments across the hospitality sector</p>
          </div>
          
          <Link to="/hospitality-all-types" className="text-rose-700 font-bold flex items-center gap-2 group hover:gap-3 transition-all">
             View All Segments <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {CATEGORY_CARDS.map((item, i) => (
            <div
              key={i}
              onClick={() => {
                setFilters(prev => ({...prev, type: item.filterType}));
                document.getElementById("hospitality-list")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="relative rounded-2xl overflow-hidden cursor-pointer group flex flex-col bg-white shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-xl border border-white/30">
                   {React.cloneElement(item.icon, { size: 20, className: "text-white" })}
                </div>

                <h3 className="absolute bottom-4 left-4 text-white text-xl font-black tracking-tight">
                  {item.name}
                </h3>
              </div>
              
              <div className="p-5 flex-1 flex flex-col">
                <p className="text-[10px] font-black text-rose-700 uppercase tracking-widest mb-3">Availability</p>
                <ul className="space-y-2 mb-6">
                  {item.subcategories.map((sub, idx) => (
                    <li key={idx} className="flex items-center text-xs font-semibold text-gray-600">
                      <Star size={12} className="text-rose-500 mr-2 flex-shrink-0" fill="currentColor" />
                      <span>{sub}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex items-center text-xs font-black text-rose-700 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore Now →
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white border-y border-gray-100 py-8 px-4 sm:px-6 md:px-10 mb-12">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4 items-end">
          <div className="flex-1 min-w-[200px]">
             <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-2">Destination</label>
             <div className="relative">
                <MapPin size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Where to stay?" 
                  value={filters.location}
                  onChange={(e) => setFilters({...filters, location: e.target.value})}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-12 pr-4 py-3 text-sm focus:ring-2 focus:ring-rose-500 outline-none transition" 
                />
             </div>
          </div>
          <div className="flex-1 min-w-[200px]">
             <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-2">Min Price</label>
             <input 
               type="number" 
               placeholder="Min budget..." 
               value={filters.minPrice}
               onChange={(e) => setFilters({...filters, minPrice: e.target.value})}
               className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-rose-500 outline-none transition" 
             />
          </div>
          <div className="flex-1 min-w-[200px]">
             <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-2">Max Price</label>
             <input 
               type="number" 
               placeholder="Max budget..." 
               value={filters.maxPrice}
               onChange={(e) => setFilters({...filters, maxPrice: e.target.value})}
               className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-rose-500 outline-none transition" 
             />
          </div>
          <button 
            onClick={() => setFilters({location: "", type: "", minPrice: "", maxPrice: ""})}
            className="bg-gray-900 text-white px-8 py-3 rounded-xl text-sm font-black uppercase tracking-widest hover:bg-rose-900 transition-all shadow-lg active:scale-95"
          >
            Match My Vibe
          </button>
        </div>
      </section>

      <div ref={triggerRef}></div>
      
      {/* Property Cards */}
      <section id="hospitality-list" className="px-4 sm:px-6 md:px-10 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-2xl font-black text-gray-900">
               {filters.type ? `${filters.type} Gems` : "Featured Hospitality Stays"}
            </h2>
            <p className="text-gray-500 text-sm font-medium mt-1">{filteredData.length} accommodations found</p>
          </div>
          {filters.type && (
             <button 
               onClick={() => setFilters({...filters, type: ""})}
               className="text-rose-700 font-black text-[10px] uppercase tracking-widest hover:underline"
             >
               Clear Filters
             </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredData.length === 0 ? (
            <div className="col-span-full py-20 bg-white rounded-3xl border border-dashed border-gray-200 flex flex-col items-center">
              <div className="p-4 bg-rose-50 rounded-full mb-4">
                 <Hotel size={32} className="text-rose-200" />
              </div>
              <p className="text-gray-400 font-bold">No hospitality properties found in this destination.</p>
            </div>
          ) : (
            filteredData.map((property) => (
              <NewPropertyCard key={property.id} property={property} />
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default HospitalityPage;
