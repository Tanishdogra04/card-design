import React from "react";
import { MapPin, Navigation, Train, Plane, Building, Globe, Zap } from "lucide-react";
import { motion } from "framer-motion";

const CommercialLocationSection = ({ property }) => {
  const highlights = [
    { icon: <Plane size={20} />, text: "Major International Airport — 20 mins" },
    { icon: <Building size={20} />, text: "Central Business District Hub" },
    { icon: <Train size={20} />, text: "Dedicated Metro/Rail Access" },
    { icon: <Navigation size={20} />, text: "Expressway Connectivity" },
    { icon: <Globe size={20} />, text: "Prime Global Enterprise Zone" },
    { icon: <Zap size={20} />, text: "Future-Ready Infrastructure" },
  ];

  const mapQuery = encodeURIComponent(property?.name + " " + (property?.location || "India"));

  return (
    <section id="location" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT SIDE: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10 order-2 lg:order-1"
          >
            <div>
              <p className="text-indigo-700 text-xs font-black uppercase tracking-[4px] mb-4">Strategic Logistics</p>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                Nexus of <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 to-indigo-600">Enterprise.</span>
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-700 to-indigo-500 mt-6 rounded-full"></div>
            </div>

            <p className="text-slate-600 text-lg leading-relaxed">
              Located at the intersection of commerce and connectivity, <strong className="text-slate-900">{property?.name}</strong> provides a competitive edge with rapid access to key financial districts, transportation hubs, and a high-caliber talent pool in <strong className="text-indigo-700">{property?.location}</strong>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
               {highlights.map((item, idx) => (
                 <motion.div 
                   key={idx} 
                   initial={{ opacity: 0, y: 10 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: idx * 0.1 }}
                   className="flex items-center gap-4 group"
                 >
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 shadow-sm flex items-center justify-center text-indigo-700 group-hover:bg-indigo-700 group-hover:text-white transition-all duration-300 border border-indigo-100">
                       {item.icon}
                    </div>
                    <span className="text-sm font-bold text-slate-700">{item.text}</span>
                 </motion.div>
               ))}
            </div>

            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-indigo-700 shadow-2xl shadow-indigo-600/20 active:scale-95 transition-all"
            >
              <MapPin size={20} />
              Open Logistic Map
            </a>
          </motion.div>

          {/* RIGHT SIDE: Map */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group order-1 lg:order-2"
          >
            <div className="absolute inset-0 bg-indigo-700 rounded-[3rem] rotate-3 group-hover:rotate-0 transition-transform duration-500 opacity-20"></div>
            <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-8 border-white bg-slate-50">
              <iframe
                title="Location Map"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                className="w-full h-full border-0 grayscale-[0.8] contrast-[1.1] hover:grayscale-0 transition-all duration-1000 cursor-alias"
                loading="lazy"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-slate-900/10 rounded-[3rem]"></div>
            </div>
            
            {/* Quick Info Float */}
            <div className="absolute -bottom-8 -left-8 bg-slate-900 text-white p-8 rounded-[2rem] shadow-2xl border border-white/10 max-w-[240px] hidden md:block group-hover:-translate-y-4 transition-transform duration-500">
               <p className="text-[10px] font-black text-indigo-400 uppercase tracking-[3px] mb-2">Corporate Reach</p>
               <p className="text-sm font-bold leading-tight">Within 10km radius: 50+ Fortune 500 headquarters</p>
               <div className="mt-4 pt-4 border-t border-white/10">
                  <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest">Global connectivity index: 9.8</span>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CommercialLocationSection;
