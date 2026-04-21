import { MapPin, Building2, ShieldCheck, Landmark, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function InstitutionalInfoCard({ property }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white/95 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3)] border border-white/20 w-full max-w-md"
    >
      <div className="flex items-center gap-2 mb-4">
        <span className="bg-blue-700 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
          {property.subType || "Core Asset"}
        </span>
        <span className="bg-slate-100 text-slate-600 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-1">
          <ShieldCheck size={12} /> Verified
        </span>
      </div>

      <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter mb-4 leading-none">
        {property.name}
      </h1>

      <div className="flex items-center gap-2 text-slate-500 mb-6 font-medium">
        <MapPin size={18} className="text-blue-600" />
        <span className="text-sm">{property.location}</span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-slate-50 p-4 rounded-3xl border border-slate-100">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Valuation</p>
          <p className="text-xl font-black text-slate-900 leading-none">
            {typeof property.price === 'number' ? `₹ ${(property.price / 10000000).toFixed(1)} Cr` : property.price}
          </p>
        </div>
        <div className="bg-slate-50 p-4 rounded-3xl border border-slate-100">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Scale</p>
          <p className="text-xl font-black text-slate-900 leading-none">{property.area}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between py-3 border-b border-slate-100">
          <span className="text-sm text-slate-500 font-semibold flex items-center gap-2">
             <Landmark size={16} className="text-blue-600" /> Ownership
          </span>
          <span className="text-sm text-slate-900 font-black">{property.developer || "Public Domain"}</span>
        </div>
        <div className="flex items-center justify-between py-3 border-b border-slate-100">
          <span className="text-sm text-slate-500 font-semibold flex items-center gap-2">
             <Building2 size={16} className="text-blue-600" /> Asset Type
          </span>
          <span className="text-sm text-slate-900 font-black">{property.type}</span>
        </div>
        <div className="flex items-center justify-between py-3">
          <span className="text-sm text-slate-500 font-semibold flex items-center gap-2">
             <CheckCircle2 size={16} className="text-green-600" /> RERA/Auth
          </span>
          <span className="text-sm text-green-700 font-black">{property.rera || "Exempted"}</span>
        </div>
      </div>

      <button className="w-full mt-8 bg-slate-950 text-white font-black uppercase tracking-widest py-5 rounded-2xl hover:bg-blue-800 transition-all shadow-xl shadow-slate-900/10">
        Review Full Portfolio
      </button>
    </motion.div>
  );
}
