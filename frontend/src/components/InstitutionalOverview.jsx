import { motion } from "framer-motion";
import { Landmark, Compass, Target, ShieldCheck } from "lucide-react";

export default function InstitutionalOverview({ property }) {
  const highlights = [
    { icon: <Landmark />, title: "Strategic Zoning", desc: "Designated for institutional use with high FAR limits." },
    { icon: <Target />, title: "Mission Critical", desc: "Built to support high-intensity operational requirements." },
    { icon: <Compass />, title: "Future Ready", desc: "Modular design paths for future expansion and scaling." },
    { icon: <ShieldCheck />, title: "Secure Asset", desc: "Top-tier surveillance and perimeter security protocols." }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          <div className="flex-1">
            <p className="text-blue-700 text-[10px] font-black uppercase tracking-[4px] mb-4">Executive Brief</p>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-8 max-w-xl">
              Constructed for <span className="text-blue-700 italic">Trust</span> and Operational Excellence.
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed font-medium mb-12">
              The {property.name} represents a pinnacle of institutional infrastructure. Developed by {property.developer || "leading government partners"}, this facility in {property.location} is engineered to serve the core needs of the {property.subType || "public"} sector with unwavering reliability.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {highlights.map((h, i) => (
                <div key={i} className="flex gap-4 p-6 rounded-3xl bg-slate-50 border border-slate-100 group hover:bg-slate-950 transition-all duration-500">
                  <div className="text-blue-600 group-hover:text-blue-400 transition-colors">
                    {React.cloneElement(h.icon, { size: 28 })}
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 group-hover:text-white mb-1 tracking-tight">{h.title}</h4>
                    <p className="text-xs text-slate-500 group-hover:text-slate-400 font-medium leading-normal">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-[450px] relative">
            <div className="aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl relative z-10 border-[12px] border-slate-50">
               <img 
                 src={property.images[1] || property.images[0]} 
                 alt="Institutional Campus" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
               <div className="absolute bottom-8 left-8 text-white">
                  <p className="text-xs font-black uppercase tracking-widest mb-1">Asset footprint</p>
                  <p className="text-3xl font-black">{property.area}</p>
               </div>
            </div>
            
            {/* DECORATIVE ELEMENT */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
          </div>

        </div>
      </div>
    </section>
  );
}

import React from 'react';
