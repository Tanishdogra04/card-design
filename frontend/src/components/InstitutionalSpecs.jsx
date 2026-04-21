import { Cpu, Zap, Droplets, ShieldAlert, Wifi, Activity } from "lucide-react";

export default function InstitutionalSpecs({ property }) {
  const specs = [
    { icon: <Cpu />, label: "Grid Density", value: "High-Load Ready" },
    { icon: <Zap />, label: "Power Redundancy", value: "N+1 Dual Source" },
    { icon: <Droplets />, label: "Water Management", value: "Dedicated STP" },
    { icon: <ShieldAlert />, label: "Fire Security", value: "IS 15105 Compliance" },
    { icon: <Wifi />, label: "Connectivity", value: "Tier-IV Fiber Entry" },
    { icon: <Activity />, label: "Load Capacity", value: property.area }
  ];

  return (
    <section className="py-24 bg-slate-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <p className="text-blue-500 text-[10px] font-black uppercase tracking-[4px] mb-4">Technical Blueprint</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">Infrastructure <span className="text-blue-500">Logistics</span></h2>
          </div>
          <div className="max-w-md text-right md:text-left">
            <p className="text-slate-400 text-sm font-medium leading-relaxed">
              Every detail of {property.name} is engineered to meet industrial-grade benchmarks for safety, stability, and scale.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specs.map((spec, i) => (
            <div 
              key={i} 
              className="group p-8 rounded-[2.5rem] bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                {React.cloneElement(spec.icon, { size: 100 })}
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                  {spec.icon}
                </div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{spec.label}</p>
                <p className="text-xl font-black text-white tracking-tight">{spec.value}</p>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* STATS OVERLAY */}
        <div className="mt-16 p-1 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-[3rem] border border-slate-800">
           <div className="bg-slate-950 rounded-[2.9rem] flex flex-wrap justify-between p-10 md:p-14 gap-8">
              <div className="text-center">
                 <p className="text-3xl md:text-5xl font-black text-white mb-2 leading-none">100%</p>
                 <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Power Availability</p>
              </div>
              <div className="w-px bg-slate-800 hidden md:block"></div>
              <div className="text-center">
                 <p className="text-3xl md:text-5xl font-black text-white mb-2 leading-none">A+</p>
                 <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Seismic Resistance</p>
              </div>
              <div className="w-px bg-slate-800 hidden md:block"></div>
              <div className="text-center">
                 <p className="text-3xl md:text-5xl font-black text-white mb-2 leading-none">Zero</p>
                 <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Downtime Target</p>
              </div>
              <div className="w-px bg-slate-800 hidden md:block"></div>
              <div className="text-center">
                 <p className="text-3xl md:text-5xl font-black text-white mb-2 leading-none">24/7</p>
                 <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Operational Window</p>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}

import React from 'react';
