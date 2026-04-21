import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import PropertyCard from "./PropertyCard";
import properties from "../data/newdataproperty.json";
import {
  TrendingUp,
  ShieldCheck,
  BadgeDollarSign,
  ChevronLeft,
  ChevronRight,
  Gem,
  ArrowUpRight
} from "lucide-react";

const InvestmentSection = () => {
  const [showImages, setShowImages] = useState(false);
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -350,
      behavior: "smooth"
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 350,
      behavior: "smooth"
    });
  };

  // Filter for properties with "Investment" badge or specific high-ROI types
  const investmentProps = properties.filter(
    (p) => p.badge === "Investment" || p.price > 10000000 || p.type === "Office"
  );

  return (
    <section className="py-16 px-6 md:px-10 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          
          {/* LEFT CARD - THE TRIGGER */}
          <div className="w-full lg:w-[300px] flex-shrink-0 bg-gradient-to-br from-emerald-50 to-white rounded-xl p-5 shadow-sm border border-emerald-100 flex flex-col min-h-[450px]">
            
            <div>
              <div className="flex gap-2 mb-3 text-emerald-700">
                <TrendingUp size={26} />
                <Gem size={26} />
              </div>

              <h3 className="text-lg font-semibold text-gray-800">
                High-Yield Investments
              </h3>

              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                Capitalize on the Tricity's rapid growth with curated properties offering high appreciation.
              </p>

              <div className="mt-3 space-y-2 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={18} className="text-emerald-700" />
                  Pre-Leased Assets
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp size={18} className="text-emerald-700" />
                  High ROI Potential
                </div>
                <div className="flex items-center gap-2">
                  <BadgeDollarSign size={18} className="text-emerald-700" />
                  Tax Optimization
                </div>
              </div>
            </div>

            <div className="mt-auto flex flex-col gap-2 pt-6">
              <button
                onClick={() => setShowImages(true)}
                className="w-full bg-emerald-700 text-white py-2 rounded-lg text-sm font-medium hover:bg-emerald-800 transition text-center flex items-center justify-center gap-2"
              >
                Explore Now
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>

          {/* CAROUSEL AREA */}
          <div className="relative flex-1 flex flex-col justify-center min-h-[480px]">
            {!showImages ? (
              <div className="flex-1 flex flex-col items-center justify-center bg-white border-2 border-dashed border-emerald-100 rounded-3xl p-10 text-center group cursor-pointer hover:border-emerald-300 transition-colors"
                   onClick={() => setShowImages(true)}>
                <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BadgeDollarSign size={40} className="text-emerald-600" />
                </div>
                <h4 className="text-2xl font-bold text-slate-800 mb-2">Unlock Exclusive Portfolios</h4>
                <p className="text-slate-500 max-w-sm mx-auto">
                  Click 'Explore Now' or here to reveal our curated list of high-ROI investment opportunities.
                </p>
              </div>
            ) : (
              <div className="relative group">
                {/* Scroll Controls */}
                <button
                  onClick={scrollLeft}
                  className="absolute -left-5 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm shadow-xl p-4 rounded-full hover:bg-white text-emerald-700 border border-emerald-100 transition-all active:scale-90"
                >
                  <ChevronLeft size={24}/>
                </button>

                {/* SCROLL CONTAINER */}
                <div
                  ref={scrollRef}
                  className="flex gap-8 overflow-x-auto scroll-smooth pb-6 pt-2 px-2 no-scrollbar"
                >
                  {investmentProps.map((property) => (
                    <div key={property.id} className="flex-shrink-0 w-[320px]">
                      <PropertyCard property={property} themeColor="emerald" />
                    </div>
                  ))}
                </div>

                <button
                  onClick={scrollRight}
                  className="absolute -right-5 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm shadow-xl p-4 rounded-full hover:bg-white text-emerald-700 border border-emerald-100 transition-all active:scale-90"
                >
                  <ChevronRight size={24}/>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;