import React, { useState } from "react";
import { 
  Coffee, 
  Wifi, 
  ShieldCheck, 
  Zap, 
  Monitor, 
  Car, 
  Maximize2,
  X,
  Share2,
  PhoneCall
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CommercialPropertyAmenities = ({ property }) => {
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(false);

  const amenities = [
    { icon: <Monitor size={24} />, name: "High-Speed Elevators" },
    { icon: <Wifi size={24} />, name: "Fiber Optic Backbone" },
    { icon: <ShieldCheck size={24} />, name: "24/7 Multi-tier Security" },
    { icon: <Zap size={24} />, name: "100% DG Power Backup" },
    { icon: <Car size={24} />, name: "Multi-level Parking" },
    { icon: <Coffee size={24} />, name: "Executive Lounge & Cafeteria" },
    { icon: <PhoneCall size={24} />, name: "Conference & Meeting Rooms" },
    { icon: <ShieldCheck size={24} />, name: "Advanced Fire Protection" },
  ];

  const sitePlanImage = property?.images[3] || property?.images[1] || property?.images[0];

  return (
    <section id="amenities" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT SIDE: Text & Icon Grid */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-indigo-700 text-xs font-black uppercase tracking-[4px] mb-4">World Class Facilities</p>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                Corporate <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 to-indigo-600">Amenities</span>
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-700 to-indigo-500 mt-6 rounded-full"></div>
            </motion.div>

            <p className="text-slate-600 text-lg leading-relaxed">
              Designed to foster productivity and operational excellence. Our facilities ensure that your business stays connected, secure, and ahead of the curve.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {amenities.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-700 group-hover:bg-indigo-700 group-hover:text-white transition-all duration-300 shadow-sm border border-indigo-100">
                    {item.icon}
                  </div>
                  <span className="text-slate-700 font-bold group-hover:text-indigo-700 transition-colors">{item.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Site Plan / Interactive Preview */}
          <div className="relative group p-4">
             <div className="absolute inset-0 bg-slate-100 rounded-[3rem] -rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
             <div className="relative overflow-hidden rounded-[3rem] shadow-2xl aspect-square border-8 border-white bg-slate-50">
                <img
                  src={sitePlanImage}
                  alt="Site Plan Preview"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <button 
                     onClick={() => setOpen(true)}
                     className="bg-white text-indigo-700 px-6 py-3 rounded-full font-black text-sm uppercase tracking-widest shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center gap-2"
                   >
                     <Maximize2 size={18} />
                     Enlarge Blueprint
                   </button>
                </div>
             </div>
             <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-600/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
          </div>

        </div>
      </div>

      {/* LUXURY LIGHTBOX */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-6 sm:p-12 overflow-hidden"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-xl" onClick={() => setOpen(false)}></div>
            
            {/* Controls Bar */}
            <div className="absolute top-8 right-8 flex items-center gap-4 z-10">
               <button 
                  onClick={(e) => { e.stopPropagation(); setZoom(!zoom); }}
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-white text-white hover:text-indigo-700 flex items-center justify-center transition-all shadow-xl backdrop-blur-md"
               >
                  <Maximize2 size={24} />
               </button>
               <button 
                  onClick={() => setOpen(false)}
                  className="w-12 h-12 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center transition-all shadow-xl"
               >
                  <X size={24} />
               </button>
            </div>

            {/* Large Image Container */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`relative z-0 transition-transform duration-500 max-w-full max-h-full ${zoom ? "scale-150 cursor-zoom-out" : "scale-100 cursor-zoom-in"}`} 
              onClick={() => setZoom(!zoom)}
            >
               <img
                 src={sitePlanImage}
                 alt="Full Site Plan"
                 className="rounded-2xl shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/20 object-contain max-h-[85vh]"
                 onClick={(e) => e.stopPropagation()}
               />
            </motion.div>
            
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/40 text-xs font-bold uppercase tracking-[4px]">
               Master Layout Blueprint
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CommercialPropertyAmenities;
