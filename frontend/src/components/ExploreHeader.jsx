import React from 'react';
import { ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function ExploreHeader() {
  const navigate = useNavigate();

  return (
    <div className="absolute top-0 left-0 w-full z-50 p-4 lg:p-8 flex items-center justify-between pointer-events-none">
      <div className="flex items-center gap-4 pointer-events-auto">
        {/* BACK BUTTON */}
        <button 
          onClick={() => navigate(-1)}
          className="w-10 h-10 bg-black/40 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-black/60 transition-all cursor-pointer shadow-xl hover:scale-105"
          title="Go Back"
        >
          <ArrowLeft size={20} />
        </button>

        {/* RECO LOGO / HOME BUTTON */}
        <Link to="/" title="Go to Home" className="flex items-center gap-2 group cursor-pointer shadow-xl bg-black/40 pr-4 pl-1.5 py-1.5 rounded-full backdrop-blur-md border border-white/20 hover:bg-black/60 transition-all hover:scale-105">
          <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
            <span className="group-hover:-rotate-12 transition-transform duration-300">R</span>
          </div>
          <h1 className="text-base font-bold text-white tracking-widest hidden sm:block">
            RECO
          </h1>
        </Link>
      </div>
    </div>
  );
}
