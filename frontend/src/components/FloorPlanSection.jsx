import React, { useState } from "react";
import { Maximize2, Layers, Box } from "lucide-react";

const FloorPlanSection = ({ property }) => {
  const [activeTab, setActiveTab] = useState("2D Layout");
  
  // Mock floor plans since real ones aren't in data yet
  const plans = [
    { type: "2D Layout", img: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=1000" },
    { type: "3D View", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000" }
  ];

  if (property?.type === "Plot") return null;

  return (
    <section id="floor-plans" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-xl">
            <p className="text-blue-700 text-xs font-black uppercase tracking-[4px] mb-4">Space Design</p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              Detailed <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-600">Floor Plans</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-blue-700 to-blue-500 mt-6 rounded-full"></div>
          </div>

          <div className="flex p-1 bg-white rounded-2xl shadow-xl border border-gray-100">
            {plans.map((p) => (
              <button
                key={p.type}
                onClick={() => setActiveTab(p.type)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                  activeTab === p.type 
                    ? "bg-blue-700 text-white shadow-lg" 
                    : "text-gray-400 hover:text-blue-700"
                }`}
              >
                {p.type === "2D Layout" ? <Layers size={18} /> : <Box size={18} />}
                {p.type}
              </button>
            ))}
          </div>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-blue-100 rounded-[3rem] rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
          <div className="relative bg-white rounded-[3rem] shadow-2xl overflow-hidden border-8 border-white aspect-[16/9]">
            <img 
              src={plans.find(p => p.type === activeTab).img} 
              alt="Floor Plan"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <button className="bg-white text-blue-700 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center gap-3">
                <Maximize2 size={20} />
                Full Screen View
              </button>
            </div>

            <div className="absolute bottom-8 left-8 bg-blue-700/90 backdrop-blur-md p-6 rounded-3xl text-white max-w-[280px]">
              <p className="text-[10px] font-black uppercase tracking-widest mb-2 opacity-70">Active Configuration</p>
              <h4 className="text-xl font-bold mb-1">{property?.configuration} Layout</h4>
              <p className="text-sm opacity-80 leading-relaxed font-medium">Efficiently planned spaces designed for maximum natural light and ventilation.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FloorPlanSection;
