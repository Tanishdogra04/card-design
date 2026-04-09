import {
  Info,
  Image,
  MapPin,
  Download,
  Phone
} from "lucide-react";

import { Link } from "react-router-dom";

export default function PropertyHeader() {

  return (
    <header className="sticky top-0 z-[100] w-full bg-white/80 backdrop-blur-xl border-b border-blue-100 shadow-sm">

      <div className="max-w-7xl mx-auto px-4 md:px-10 py-3 flex items-center justify-between">

        {/* LEFT : LOGO & BACK */}
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center text-white font-bold group-hover:rotate-12 transition-transform">R</div>
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600 hidden sm:block">
              RECO
            </h1>
          </Link>
        </div>


        {/* CENTER : NAV ITEMS (HIDDEN ON SMALL SCREENS) */}
        <nav className="hidden lg:flex items-center gap-8 text-[10px] font-bold uppercase tracking-widest text-gray-500">

          <a
            href="#about"
            className="hover:text-blue-700 transition-colors duration-300 relative group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#specs"
            className="hover:text-blue-700 transition-colors duration-300 relative group"
          >
            Specs
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#floor-plans"
            className="hover:text-blue-700 transition-colors duration-300 relative group"
          >
            Plans
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#gallery"
            className="hover:text-blue-700 transition-colors duration-300 relative group"
          >
            Gallery
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#amenities"
            className="hover:text-blue-700 transition-colors duration-300 relative group"
          >
            Amenities
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#location"
            className="hover:text-blue-700 transition-colors duration-300 relative group"
          >
            Location
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#downloads"
            className="hover:text-blue-700 transition-colors duration-300 relative group"
          >
            Downloads
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
          </a>

        </nav>


        {/* RIGHT : CTA */}
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-2 text-blue-700 hover:text-white hover:bg-blue-700 border border-blue-700 px-4 py-2 rounded-lg text-xs font-bold transition-all">
            <Download size={16}/>
            Brochure
          </button>
          
          <a
            href="tel:8278713791"
            className="flex items-center gap-2 bg-gradient-to-r from-blue-700 to-blue-900 text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-blue-600/20 hover:scale-[1.05] active:scale-[0.98] transition-all"
          >
            <Phone size={18}/>
            <span className="hidden sm:inline">Call Expert</span>
          </a>
        </div>

      </div>

    </header>
  );
}