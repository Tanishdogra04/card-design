import { MapPin, Download, Briefcase, TrendingUp, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function CommercialInfoCard({ property }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full md:w-[450px] bg-slate-950/60 backdrop-blur-3xl text-white p-10 rounded-[3rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.8)] border border-white/10 flex flex-col gap-8"
    >
      {/* BADGE */}
      <div className="flex justify-start">
        <div className="bg-indigo-600/20 backdrop-blur-xl border border-indigo-500/30 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[3px] text-indigo-300 flex items-center gap-2">
          <BadgeCheck size={14} className="text-indigo-400" />
          {property.badge || "Premium Corporate Space"}
        </div>
      </div>

      {/* PROJECT NAME */}
      <div className="space-y-3">
        <h2 className="text-4xl md:text-5xl font-black leading-[1.05] tracking-tighter">
          {property.name}
        </h2>
        <div className="flex items-center gap-2 text-slate-400">
          <MapPin size={18} className="text-indigo-500" />
          <p className="text-sm font-bold uppercase tracking-[2px]">{property.location}</p>
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-white/20 via-white/5 to-transparent"></div>

      {/* PROJECT HIGHLIGHTS */}
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-1">
          <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest flex items-center gap-1.5 underline decoration-indigo-500/50 underline-offset-4">
            <Briefcase size={10}/> Space Type
          </p>
          <p className="text-sm font-bold text-white">{property.configuration}</p>
        </div>
        <div className="space-y-1">
          <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest flex items-center gap-1.5 underline decoration-indigo-500/50 underline-offset-4">
            Total Unit Area
          </p>
          <p className="text-sm font-bold text-white">{property.area}</p>
        </div>
      </div>

      {/* PRICE BOX */}
      <div className="bg-gradient-to-br from-indigo-700 via-indigo-900 to-slate-900 p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group border border-white/5">
        <div className="relative z-10 flex flex-col h-full">
          <p className="text-[11px] text-indigo-300/80 font-bold uppercase tracking-[4px] mb-3">
            Investment Starting From
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-black tracking-tighter text-white">
              {typeof property.price === 'number' ? `₹ ${(property.price / 10000000).toFixed(2)}` : property.price.split(' ')[1]}
            </span>
            <span className="text-xl font-bold text-indigo-300 uppercase tracking-widest">CR*</span>
          </div>
          
          <div className="mt-5 pt-5 border-t border-white/10 flex items-center justify-between">
             <div className="flex items-center gap-2">
                <TrendingUp size={16} className="text-emerald-400" />
                <p className="text-[10px] text-emerald-400 font-black uppercase tracking-widest">Expected ROI: 12%+</p>
             </div>
             <span className="text-[9px] text-white/30 font-bold">T&C APPLY</span>
          </div>
        </div>
        
        {/* Animated Background Element */}
        <div className="absolute -right-12 -bottom-12 w-40 h-40 bg-white/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000 ease-in-out opacity-20"></div>
      </div>

      {/* RERA */}
      <div className="flex items-center justify-between gap-3 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
        <span className="text-[10px] text-white/40 font-black uppercase tracking-[2px]">RERA: {property.rera || "AWAITED"}</span>
        <div className="flex items-center gap-1.5">
           <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
           <span className="text-[10px] text-indigo-300 font-black tracking-widest uppercase">Grade A+ Approved</span>
        </div>
      </div>

      {/* CTA BUTTON */}
      <button
        className="w-full bg-white text-slate-950 py-5 rounded-[1.5rem] text-xs font-black uppercase tracking-[3px] shadow-[0_20px_40px_-10px_rgba(255,255,255,0.1)] hover:bg-indigo-50 active:scale-[0.98] transition-all flex items-center justify-center gap-3 group"
      >
        <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
        Executive Brochure
      </button>
    </motion.div>
  );
}
