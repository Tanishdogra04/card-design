import React, { useState } from "react";
import { 
  Dumbbell, 
  Waves, 
  Trees, 
  ShieldCheck, 
  Baby, 
  Bike, 
  ShoppingBag, 
  Zap,
  Maximize2,
  X,
  Share2
} from "lucide-react";

const AmenitiesSection = ({ property }) => {
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(false);

  const amenities = [
    { icon: <Waves size={24} />, name: "Clubhouse & Splash Pool" },
    { icon: <Dumbbell size={24} />, name: "Gym & Fitness Zone" },
    { icon: <Bike size={24} />, name: "Jogging & Cycle Track" },
    { icon: <Baby size={24} />, name: "Children's Play Area" },
    { icon: <Trees size={24} />, name: "7-Acre Central Park" },
    { icon: <ShieldCheck size={24} />, name: "3-Tier Security" },
    { icon: <Zap size={24} />, name: "100% Power Backup" },
    { icon: <ShoppingBag size={24} />, name: "Proximity to Markets" },
  ];

  const sitePlanImage = property?.images[3] || property?.images[0];

  return (
    <section id="amenities" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT SIDE: Text & Icon Grid */}
          <div className="space-y-10">
            <div>
              <p className="text-blue-700 text-xs font-black uppercase tracking-[4px] mb-4">World Class</p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                Modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-600">Amenities</span>
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-blue-700 to-blue-500 mt-6 rounded-full"></div>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              Experience a lifestyle designed around your comfort and well-being. From lush green parks to state-of-the-art fitness facilities, we bring every luxury to your doorstep.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {amenities.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-all duration-300 shadow-sm border border-blue-100">
                    {item.icon}
                  </div>
                  <span className="text-gray-700 font-bold group-hover:text-blue-700 transition-colors">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Site Plan / Interactive Preview */}
          <div className="relative group p-4">
             <div className="absolute inset-0 bg-blue-100 rounded-[3rem] -rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
             <div className="relative overflow-hidden rounded-[3rem] shadow-2xl aspect-square border-8 border-white">
                <img
                  src={sitePlanImage}
                  alt="Site Plan Preview"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <button 
                     onClick={() => setOpen(true)}
                     className="bg-white text-blue-700 px-6 py-3 rounded-full font-black text-sm uppercase tracking-widest shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center gap-2"
                   >
                     <Maximize2 size={18} />
                     Enlarge Site Plan
                   </button>
                </div>
             </div>
          </div>

        </div>
      </div>

      {/* LUXURY LIGHTBOX */}
      {open && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6 sm:p-12 overflow-hidden">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={() => setOpen(false)}></div>
          
          {/* Controls Bar */}
          <div className="absolute top-8 right-8 flex items-center gap-4 z-10">
             <button 
                onClick={(e) => { e.stopPropagation(); setZoom(!zoom); }}
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white text-white hover:text-blue-700 flex items-center justify-center transition-all shadow-xl backdrop-blur-md"
             >
                <Maximize2 size={24} />
             </button>
             <button 
                onClick={(e) => {
                  e.stopPropagation();
                  navigator.clipboard.writeText(window.location.href);
                  alert("Link copied!");
                }}
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white text-white hover:text-blue-700 flex items-center justify-center transition-all shadow-xl backdrop-blur-md"
             >
                <Share2 size={24} />
             </button>
             <button 
                onClick={() => setOpen(false)}
                className="w-12 h-12 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center transition-all shadow-xl"
             >
                <X size={24} />
             </button>
          </div>

          {/* Large Image Container */}
          <div className={`relative z-0 transition-transform duration-500 max-w-full max-h-full ${zoom ? "scale-150 cursor-zoom-out" : "scale-100 cursor-zoom-in"}`} onClick={() => setZoom(!zoom)}>
             <img
               src={sitePlanImage}
               alt="Full Site Plan"
               className="rounded-2xl shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/20 object-contain max-h-[85vh]"
               onClick={(e) => e.stopPropagation()}
             />
          </div>
          
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-xs font-bold uppercase tracking-[4px]">
             Master Plan Preview
          </div>
        </div>
      )}
    </section>
  );
};

export default AmenitiesSection;