import { MapPin, Download } from "lucide-react";

export default function PropertyInfoCard({ property }) {
  return (
    <div
      className="w-full md:w-[420px] bg-white/5 backdrop-blur-3xl text-white p-10 rounded-[3rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] border border-white/10 flex flex-col gap-8"
    >
      {/* BADGE */}
      <div className="flex justify-start">
        <div className="bg-blue-600/20 backdrop-blur-xl border border-blue-400/20 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[3px] text-blue-200">
          {property.badge || "Pre Launch"}
        </div>
      </div>

      {/* PROJECT NAME */}
      <div className="space-y-3">
        <h2 className="text-4xl md:text-5xl font-black leading-[1.1] tracking-tighter">
          {property.name}
        </h2>
        <div className="flex items-center gap-2 text-white/50">
          <MapPin size={18} className="text-blue-500" />
          <p className="text-sm font-bold uppercase tracking-widest">{property.location}</p>
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-white/20 via-white/5 to-transparent"></div>

      {/* PROJECT HIGHLIGHTS */}
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-1">
          <p className="text-[10px] text-white/30 font-black uppercase tracking-widest">Configuration</p>
          <p className="text-sm font-bold text-gray-200">{property.configuration} {property.type}</p>
        </div>
        <div className="space-y-1">
          <p className="text-[10px] text-white/30 font-black uppercase tracking-widest">Area</p>
          <p className="text-sm font-bold text-gray-200">{property.area} Built-up</p>
        </div>
      </div>

      {/* PRICE BOX */}
      <div className="bg-gradient-to-br from-blue-700 via-indigo-800 to-blue-900 p-8 rounded-[2rem] shadow-2xl relative overflow-hidden group">
        <div className="relative z-10">
          <p className="text-[11px] text-blue-300 font-bold uppercase tracking-[4px] mb-2">Starting From</p>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-black tracking-tighter text-white">
              {typeof property.price === 'number' ? `₹ ${(property.price / 100000).toFixed(1)}` : property.price.split(' ')[1]}
            </span>
            <span className="text-xl font-bold text-blue-200 uppercase tracking-widest">Lakhs*</span>
          </div>
          <p className="text-[10px] text-blue-400 mt-2 font-black uppercase tracking-widest opacity-60">Flexible Payment Plans Available</p>
        </div>
        
        {/* Animated Background Element */}
        <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
      </div>

      {/* RERA */}
      <div className="flex items-center gap-3 px-6 py-3 bg-black/20 border border-white/5 rounded-2xl">
        {/* <BadgeCheck size={18} className="text-blue-500" /> */}
        <span className="text-[10px] text-white/40 font-black uppercase tracking-[2px]">RERA NO. {property.rera || "AWAITED"}</span>
      </div>

      {/* CTA BUTTON */}
      <button
        className="w-full bg-white text-blue-900 py-5 rounded-[1.5rem] text-xs font-black uppercase tracking-[3px] shadow-[0_20px_40px_-10px_rgba(255,255,255,0.2)] hover:bg-blue-50 active:scale-[0.98] transition-all flex items-center justify-center gap-3 group"
      >
        <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
        Download Brochure
      </button>
    </div>
  );
}