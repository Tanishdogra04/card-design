import React from "react";
import { Building2, ShieldCheck, Ruler, Briefcase, Zap, Globe } from "lucide-react";
import { motion } from "framer-motion";

const CommercialPropertyOverview = ({ property }) => {
  return (
    <section id="overview" className="py-24 bg-white relative overflow-hidden">
      
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-2">
               Corporate Overview
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">
              {property.name} — <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 to-indigo-600">Grade A Workspace</span> for Global Leaders.
            </h2>
            
            <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
              <strong className="text-slate-900 font-extrabold">{property.name}</strong> is a benchmark in <span className="italic">commercial excellence</span>, strategically located in the prime business district of <strong className="text-indigo-700">{property.location}</strong>. 
              Designed for multinational corporations and visionary entrepreneurs, this project offers high-efficiency office suites, premium retail spaces, and world-class connectivity.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-6 py-6">
               <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-indigo-100">
                  <div className="w-12 h-12 rounded-xl bg-indigo-700 flex items-center justify-center text-white shrink-0">
                     <Building2 size={24} />
                  </div>
                  <div>
                     <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-1">Space Class</p>
                     <p className="text-sm font-black text-slate-800 tracking-tight">Grade A+</p>
                  </div>
               </div>

               <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-indigo-100">
                  <div className="w-12 h-12 rounded-xl bg-indigo-700 flex items-center justify-center text-white shrink-0">
                     <Ruler size={24} />
                  </div>
                  <div>
                     <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-1">Leasable Area</p>
                     <p className="text-sm font-black text-slate-800 tracking-tight">{property.area}</p>
                  </div>
               </div>

               <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-indigo-100">
                  <div className="w-12 h-12 rounded-xl bg-indigo-700 flex items-center justify-center text-white shrink-0">
                     <Briefcase size={24} />
                  </div>
                  <div>
                     <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-1">Usage Type</p>
                     <p className="text-sm font-black text-slate-800 tracking-tight">{property.configuration}</p>
                  </div>
               </div>

               <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-indigo-100">
                  <div className="w-12 h-12 rounded-xl bg-indigo-700 flex items-center justify-center text-white shrink-0">
                     <Globe size={24} />
                  </div>
                  <div>
                     <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-1">Connectivity</p>
                     <p className="text-sm font-black text-slate-800 tracking-tight">Prime Hub</p>
                  </div>
               </div>
            </div>

            <button className="flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-indigo-800 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all active:scale-[0.98]">
               View Technical Deck
            </button>
          </motion.div>

          {/* RIGHT SIDE: Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-indigo-700 rounded-[2.5rem] translate-x-6 translate-y-6 -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500"></div>
            <div className="overflow-hidden rounded-[2.5rem] shadow-2xl relative aspect-[4/5] lg:aspect-auto lg:h-[600px]">
              <img
                src={property.images[1] || property.images[0]}
                alt={property.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-10 left-10 text-white">
                <p className="text-xs font-black uppercase tracking-[4px] mb-2">Designed for</p>
                <h3 className="text-3xl font-black tracking-tight">Performance</h3>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CommercialPropertyOverview;
