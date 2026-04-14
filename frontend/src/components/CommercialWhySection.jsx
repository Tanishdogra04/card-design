import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Award, Users, ChevronRight } from "lucide-react";

const CommercialWhySection = ({ property }) => {
  return (
    <section id="why" className="py-24 bg-white relative overflow-hidden">
      
      {/* Decorative background label */}
      <div className="absolute top-20 -right-20 text-[12rem] font-black text-slate-50 select-none -rotate-90 pointer-events-none">
        BUSINESS
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:w-1/3"
          >
             <p className="text-indigo-700 text-xs font-black uppercase tracking-[4px] mb-4">The Strategic Advantage</p>
             <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
               Why Invest in <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 to-indigo-600">{property?.name}?</span>
             </h2>
             <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-700 to-indigo-500 mt-6 rounded-full"></div>
          </motion.div>

          <div className="md:w-2/3 space-y-12">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-slate-600 text-xl leading-relaxed font-semibold italic border-l-8 border-indigo-700/10 pl-8"
            >
              At <strong className="text-slate-900 font-black">{property?.name || "this flagship development"}</strong>, business excellence is built into the architecture. We provide more than just office space — we provide an ecosystem designed for high-velocity growth, operational stability, and significant capital appreciation in the heart of {property?.location}.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-2xl bg-indigo-700 text-white flex items-center justify-center shadow-lg shadow-indigo-500/20">
                      <TrendingUp size={24} />
                   </div>
                   <h3 className="text-2xl font-black text-slate-900 tracking-tight">Growth Catalyst</h3>
                </div>
                <p className="text-slate-600 leading-relaxed font-bold">
                  Perfectly positioned in a high-density corporate corridor, ensuring:
                </p>
                <ul className="space-y-4">
                   {[
                     "Exceptional Rental Yield Potential",
                     "Rapid Capital Asset Appreciation",
                     "Pre-leased & Self-use Opportunities"
                   ].map((item, i) => (
                     <li key={i} className="flex items-center gap-3 text-slate-800 font-black text-sm group cursor-default">
                        <div className="w-2 h-2 rounded-full bg-indigo-500 group-hover:scale-150 transition-transform"></div>
                        {item}
                     </li>
                   ))}
                </ul>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-lg">
                      <Award size={24} />
                   </div>
                   <h3 className="text-2xl font-black text-slate-900 tracking-tight">Operational Excellence</h3>
                </div>
                <p className="text-slate-600 leading-relaxed font-bold">
                   World-class infrastructure designed for zero-downtime operations:
                </p>
                <ul className="space-y-4">
                   {[
                     "Zero-Latency Power & Connectivity",
                     "Grade-A Sustainable Design",
                     "Premium Facility Management"
                   ].map((item, i) => (
                     <li key={i} className="flex items-center gap-3 text-slate-800 font-black text-sm group cursor-default">
                        <div className="w-2 h-2 rounded-full bg-slate-900 group-hover:scale-150 transition-transform"></div>
                        {item}
                     </li>
                   ))}
                </ul>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6"
            >
               <div className="flex items-center gap-4">
                  <div className="flex -space-x-4">
                     {[1,2,3].map(i => (
                        <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden shadow-sm">
                           <img src={`https://i.pravatar.cc/150?u=${i+20}`} alt="Investor" />
                        </div>
                     ))}
                     <div className="w-12 h-12 rounded-full border-4 border-white bg-indigo-700 text-white flex items-center justify-center text-[10px] font-black shadow-lg">
                        +45
                     </div>
                  </div>
                  <div className="flex flex-col">
                     <span className="text-sm font-black text-slate-950">Trusted by Industry Leaders</span>
                     <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Fortune 500 Tenants & Investors</span>
                  </div>
               </div>
               <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[2px] text-indigo-700 hover:gap-4 transition-all">
                  View Success Stories <ChevronRight size={14} />
               </button>
            </motion.div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default CommercialWhySection;
