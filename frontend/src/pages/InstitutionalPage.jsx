import React, { useState, useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Landmark, School, Hospital, GraduationCap, Building2 } from "lucide-react";
import NewPropertyCard from "../components/NewPropertyCard";
import ExploreHeader from "../components/ExploreHeader";
import { Link } from "react-router-dom";
import data from "../data/newdataproperty.json";

const CATEGORY_CARDS = [
  { 
    name: "Government", 
    filterType: "Government", 
    img: "https://images.unsplash.com/photo-1517466787919-ec0fd996a60e",
    icon: <Landmark className="text-amber-600" />,
    subcategories: ["Municipal Complexes", "Public Works", "Administrative Hubs"]
  },
  { 
    name: "Education", 
    filterType: "Education", 
    img: "https://images.unsplash.com/photo-1523050335456-c7bb0f94883d",
    icon: <GraduationCap className="text-amber-600" />,
    subcategories: ["University Campuses", "Private Schools", "Research Centers"]
  },
  { 
    name: "Healthcare", 
    filterType: "Healthcare", 
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d",
    icon: <Hospital className="text-amber-600" />,
    subcategories: ["Multi-Specialty Hospitals", "Clinics", "Diagnostic Centers"]
  },
  { 
    name: "Religious & Public", 
    filterType: "Religious & Public", 
    img: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3",
    icon: <Building2 className="text-amber-600" />,
    subcategories: ["Heritage Landmarks", "Community Centers", "Public Parks"]
  }
];

const InstitutionalPage = () => {
  const [filters, setFilters] = useState({
    location: "",
    type: "",
    status: "",
    minPrice: "",
    maxPrice: "",
  });

  const filteredData = data.filter((property) => {
    const isInstitutional = property.type === "Institutional";
    const matchesCategory = !filters.type || property.subType === filters.type;

    return (
      isInstitutional &&
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
          src="https://images.unsplash.com/photo-1577416412292-747c6607f055" 
          alt="Institutional Properties"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <div className="flex items-center gap-3 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
             <Landmark size={32} className="text-amber-400" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-2 animate-in fade-in slide-in-from-bottom-6 duration-1000">
             Institutional Assets
          </h1>
          <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl font-medium animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Specialized infrastructure for public services, global education, and state-of-the-art healthcare.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="px-4 sm:px-6 md:px-10 py-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-10 gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
              Property Segments
            </h2>
            <p className="text-gray-500 font-medium mt-1">Browse by specialized institutional category</p>
          </div>
          
          <Link to="/institutional-all-types" className="text-amber-700 font-bold flex items-center gap-2 group hover:gap-3 transition-all">
             View All Types <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {CATEGORY_CARDS.map((item, i) => (
            <div
              key={i}
              onClick={() => {
                setFilters(prev => ({...prev, type: item.filterType}));
                document.getElementById("institutional-list")?.scrollIntoView({ behavior: "smooth" });
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
                <p className="text-[10px] font-black text-amber-700 uppercase tracking-widest mb-3">Segment Focus</p>
                <ul className="space-y-2 mb-6">
                  {item.subcategories.map((sub, idx) => (
                    <li key={idx} className="flex items-center text-xs font-semibold text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2 flex-shrink-0" />
                      <span>{sub}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex items-center text-xs font-black text-amber-700 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  View Listings →
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Basic Filter Section */}
      <section className="bg-white border-y border-gray-100 py-8 px-4 sm:px-6 md:px-10 mb-12">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4 items-end">
          <div className="flex-1 min-w-[200px]">
             <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-2">Location</label>
             <input 
               type="text" 
               placeholder="Search city..." 
               value={filters.location}
               onChange={(e) => setFilters({...filters, location: e.target.value})}
               className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-amber-500 outline-none transition" 
             />
          </div>
          <div className="flex-1 min-w-[200px]">
             <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-2">Min Price</label>
             <input 
               type="number" 
               placeholder="Min budget..." 
               value={filters.minPrice}
               onChange={(e) => setFilters({...filters, minPrice: e.target.value})}
               className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-amber-500 outline-none transition" 
             />
          </div>
          <div className="flex-1 min-w-[200px]">
             <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-2">Max Price</label>
             <input 
               type="number" 
               placeholder="Max budget..." 
               value={filters.maxPrice}
               onChange={(e) => setFilters({...filters, maxPrice: e.target.value})}
               className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-amber-500 outline-none transition" 
             />
          </div>
          <button 
            onClick={() => setFilters({location: "", type: "", minPrice: "", maxPrice: ""})}
            className="bg-gray-900 text-white px-8 py-3 rounded-xl text-sm font-black uppercase tracking-widest hover:bg-black transition-all shadow-lg active:scale-95"
          >
            Reset
          </button>
        </div>
      </section>

      <div ref={triggerRef}></div>
      
      {/* Property Cards */}
      <section id="institutional-list" className="px-4 sm:px-6 md:px-10 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-2xl font-black text-gray-900">
               {filters.type ? `${filters.type} Listings` : "All Institutional Assets"}
            </h2>
            <p className="text-gray-500 text-sm font-medium mt-1">{filteredData.length} spaces found in our database</p>
          </div>
          {filters.type && (
             <button 
               onClick={() => setFilters({...filters, type: ""})}
               className="text-amber-700 font-black text-[10px] uppercase tracking-widest hover:underline"
             >
               Show All Categories
             </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredData.length === 0 ? (
            <div className="col-span-full py-20 bg-white rounded-3xl border border-dashed border-gray-200 flex flex-col items-center">
              <div className="p-4 bg-gray-50 rounded-full mb-4">
                 <Building2 size={32} className="text-gray-300" />
              </div>
              <p className="text-gray-400 font-bold">No institutional properties matching your criteria.</p>
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

export default InstitutionalPage;
