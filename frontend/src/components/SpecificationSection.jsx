import React from "react";
import { 
  Ruler, 
  Compass, 
  Home, 
  Car, 
  ShieldCheck, 
  Calendar,
  Building2,
  Lock
} from "lucide-react";

const SpecificationSection = ({ property }) => {
  if (!property) return null;

  const specs = [
    { label: "Plot Area", value: property.area, icon: <Ruler size={20} /> },
    { label: "Configuration", value: property.configuration, icon: <Home size={20} /> },
    { label: "Facing", value: property.facing || "East", icon: <Compass size={20} /> },
    { label: "Furnishing", value: property.furnishing || "Semi-Furnished", icon: <Building2 size={20} /> },
    { label: "Parking", value: property.parking || "Available", icon: <Car size={20} /> },
    { label: "Ownership", value: property.ownership || "Freehold", icon: <Lock size={20} /> },
    { label: "RERA Status", value: property.rera ? "Approved" : "Awaited", icon: <ShieldCheck size={20} /> },
    { label: "Possession", value: property.badge || "Coming Soon", icon: <Calendar size={20} /> },
  ];

  return (
    <section id="specs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <p className="text-blue-700 text-xs font-black uppercase tracking-[4px] mb-3">Technical Details</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">Property <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-600">Specifications</span></h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-700 to-blue-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specs.map((spec, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-700 mb-6 group-hover:bg-blue-700 group-hover:text-white transition-all">
                {spec.icon}
              </div>
              <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">{spec.label}</p>
              <p className="text-lg font-bold text-gray-900 leading-tight">{spec.value}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SpecificationSection;
