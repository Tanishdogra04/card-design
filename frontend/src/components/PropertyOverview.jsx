import React from "react";
import { Trees, ShieldCheck, Ruler, LayoutGrid } from "lucide-react";

const PropertyOverview = ({ property }) => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE: Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest mb-2">
               Premium Overview
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-[1.1] tracking-tight">
              {property.name} — <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-600">Luxurious Living</span> Redefined.
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              <strong className="text-gray-900 font-extrabold">{property.name}</strong> is an elite <span className="italic">50-acre master-planned township</span> located in the heart of <strong className="text-blue-700">{property.location}</strong>. 
              Designed for those who seek exclusivity, this project offers high-end residential spaces, lush greenery, and state-of-the-art infrastructure.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-6 py-6">
               <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-blue-100">
                  <div className="w-12 h-12 rounded-xl bg-blue-700 flex items-center justify-center text-white shrink-0">
                     <LayoutGrid size={24} />
                  </div>
                  <div>
                     <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-1">Type</p>
                     <p className="text-sm font-black text-gray-800 tracking-tight">{property.type}</p>
                  </div>
               </div>

               <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-blue-100">
                  <div className="w-12 h-12 rounded-xl bg-blue-700 flex items-center justify-center text-white shrink-0">
                     <Ruler size={24} />
                  </div>
                  <div>
                     <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-1">Built Area</p>
                     <p className="text-sm font-black text-gray-800 tracking-tight">{property.area}</p>
                  </div>
               </div>

               <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-blue-100">
                  <div className="w-12 h-12 rounded-xl bg-blue-700 flex items-center justify-center text-white shrink-0">
                     <Trees size={24} />
                  </div>
                  <div>
                     <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-1">Status</p>
                     <p className="text-sm font-black text-gray-800 tracking-tight">{property.badge}</p>
                  </div>
               </div>

               <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-blue-100">
                  <div className="w-12 h-12 rounded-xl bg-blue-700 flex items-center justify-center text-white shrink-0">
                     <ShieldCheck size={24} />
                  </div>
                  <div>
                     <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-1">Security</p>
                     <p className="text-sm font-black text-gray-800 tracking-tight">Gated Community</p>
                  </div>
               </div>
            </div>

            <button className="flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-blue-800 hover:shadow-2xl hover:shadow-blue-500/20 transition-all active:scale-[0.98]">
               Read More Details
            </button>
          </div>

          {/* RIGHT SIDE: Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-700 rounded-[2.5rem] translate-x-6 translate-y-6 -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500"></div>
            <div className="overflow-hidden rounded-[2.5rem] shadow-2xl relative aspect-[4/5] lg:aspect-auto lg:h-[600px]">
              <img
                src={property.images[1] || property.images[0]}
                alt={property.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PropertyOverview;