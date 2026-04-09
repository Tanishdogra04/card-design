import React from "react";
import { MapPin, Navigation, Train, Plane, Building } from "lucide-react";

const LocationSection = ({ property }) => {
  const highlights = [
    { icon: <Plane size={20} />, text: "15 mins to International Airport" },
    { icon: <Building size={20} />, text: "Near Industrial Area Phase 8" },
    { icon: <Train size={20} />, text: "10 mins to Mohali Railway Station" },
    { icon: <Navigation size={20} />, text: "Direct Access to NH-7 Highway" },
  ];

  const mapQuery = encodeURIComponent(property?.name + " " + (property?.location || "Mohali"));

  return (
    <section id="location" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE: Content */}
          <div className="space-y-10 order-2 lg:order-1">
            <div>
              <p className="text-blue-700 text-xs font-black uppercase tracking-[4px] mb-4">Strategic Location</p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                Connectivity <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-600">Unmatched.</span>
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-blue-700 to-blue-500 mt-6 rounded-full"></div>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              Situated in the rapidly evolving corridor of <strong className="text-gray-900">{property?.location}</strong>, EliteEstates offers the perfect balance between urban accessibility and serene living.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
               {highlights.map((item, idx) => (
                 <div key={idx} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-all duration-300 border border-blue-50">
                       {item.icon}
                    </div>
                    <span className="text-sm font-bold text-gray-700">{item.text}</span>
                 </div>
               ))}
            </div>

            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-blue-700 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-blue-800 shadow-xl shadow-blue-600/20 active:scale-95 transition-all"
            >
              <MapPin size={20} />
              Open In Google Maps
            </a>
          </div>

          {/* RIGHT SIDE: Map */}
          <div className="relative group order-1 lg:order-2">
            <div className="absolute inset-0 bg-blue-700 rounded-[3rem] rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
            <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <iframe
                title="Location Map"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                className="w-full h-full border-0 grayscale-[0.3] hover:grayscale-0 transition-all duration-700 cursor-alias"
                loading="lazy"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border-[12px] border-white/50 rounded-[3rem]"></div>
            </div>
            
            {/* Quick Info Float */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-2xl border border-blue-50 max-w-[200px] hidden md:block group-hover:-translate-y-2 transition-transform">
               <p className="text-[10px] font-black text-blue-700 uppercase tracking-widest mb-1">Elite Neighborhood</p>
               <p className="text-sm font-bold text-gray-800 leading-tight">Within 5km: Schools, Hospitals & Luxury Mall</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LocationSection;