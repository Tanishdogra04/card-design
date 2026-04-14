import React from "react";
import { 
  Ruler, 
  Zap, 
  Wind, 
  BarChart3, 
  ShieldCheck, 
  Clock,
  Building2,
  HardHat
} from "lucide-react";
import { motion } from "framer-motion";

const CommercialPropertySpecs = ({ property }) => {
  if (!property) return null;

  const specs = [
    { label: "Total Unit Area", value: property.area, icon: <Ruler size={20} /> },
    { label: "Configuration", value: property.configuration, icon: <Building2 size={20} /> },
    { label: "Power Backup", value: "100% Redundant", icon: <Zap size={20} /> },
    { label: "HVAC System", value: "Central Chilled Water", icon: <Wind size={20} /> },
    { label: "Parking Ratio", value: "1:1000 sq.ft", icon: <BarChart3 size={20} /> },
    { label: "Fire Safety", value: "NFPA Standards", icon: <ShieldCheck size={20} /> },
    { label: "Construction Status", value: property.badge || "Grade A", icon: <HardHat size={20} /> },
    { label: "Business Hours", value: "24/7 Access", icon: <Clock size={20} /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="specs" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <p className="text-indigo-700 text-xs font-black uppercase tracking-[4px] mb-3">Technical Deck</p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 to-indigo-600">Specifications</span></h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-700 to-indigo-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {specs.map((spec, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="p-8 rounded-[2rem] bg-white border border-slate-100 hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-50 shadow-sm flex items-center justify-center text-indigo-700 mb-6 group-hover:bg-indigo-700 group-hover:text-white transition-all">
                {spec.icon}
              </div>
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">{spec.label}</p>
              <p className="text-lg font-bold text-slate-900 leading-tight">{spec.value}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default CommercialPropertySpecs;
