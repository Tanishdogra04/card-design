import {
  Info,
  Layers,
  MapPin,
  Download,
  Phone,
  Briefcase,
  ExternalLink
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CommercialPropertyHeader() {

  return (
    <header className="sticky top-0 z-[100] w-full bg-white/70 backdrop-blur-2xl border-b border-slate-100 shadow-sm">

      <div className="max-w-7xl mx-auto px-4 md:px-10 py-3 flex items-center justify-between">

        {/* LEFT : LOGO & BACK */}
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white font-black group-hover:bg-indigo-700 transition-colors duration-500 shadow-lg">R</div>
            <div className="flex flex-col">
               <h1 className="text-xl font-black bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-indigo-700 hidden sm:block leading-none">
                 RECO
               </h1>
               <span className="text-[9px] font-black tracking-[2px] uppercase text-indigo-600 hidden sm:block">Commercial</span>
            </div>
          </Link>
        </div>


        {/* CENTER : NAV ITEMS */}
        <nav className="hidden lg:flex items-center gap-10 text-[10px] font-black uppercase tracking-[2px] text-slate-400">

          <a
            href="#overview"
            className="hover:text-slate-900 transition-colors duration-300 relative group py-2"
          >
            Overview
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#specs"
            className="hover:text-slate-900 transition-colors duration-300 relative group py-2"
          >
            Specifications
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#amenities"
            className="hover:text-slate-900 transition-colors duration-300 relative group py-2"
          >
            Amenities
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#location"
            className="hover:text-slate-900 transition-colors duration-300 relative group py-2"
          >
            Location
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
          </a>

        </nav>

        {/* RIGHT : CTA */}
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-2 text-slate-600 hover:text-slate-900 px-4 py-2 text-[10px] font-black uppercase tracking-widest transition-all">
            <Download size={14}/>
            Brochure
          </button>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="tel:8278713791"
            className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-[2px] shadow-xl shadow-slate-900/10 hover:bg-indigo-700 transition-colors"
          >
            <Briefcase size={14}/>
            <span className="hidden sm:inline">Talk to Expert</span>
          </motion.a>
        </div>

      </div>

    </header>
  );
}
