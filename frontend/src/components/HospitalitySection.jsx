import { Link } from "react-router-dom";
import PropertyCard from "./PropertyCard";
import properties from "../data/newdataproperty.json";

import {
  ShieldCheck,
  FileCheck,
  Building2,
  BadgeDollarSign,
  Hotel,
  ChevronLeft,
  ChevronRight,
  Home,
  Waves
} from "lucide-react";

import { useRef } from "react";


export default function HospitalitySection() {

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

  // Filter for Hospitality properties
  const hospitalityProps = properties.filter(p => p.type === "Hospitality");

  return (
    <>
      <section className="pt-6 pb-16 px-6 md:px-10 bg-gray-50 border-t border-gray-200">

        <div className="flex flex-col lg:flex-row gap-6 items-stretch">

          {/* LEFT CARD */}
          <div className="w-full lg:w-[300px] flex-shrink-0 bg-gradient-to-br from-blue-50 to-white rounded-xl p-5 shadow-sm border-blue-100 border flex flex-col">

            <div>

              <div className="flex gap-2 mb-3 text-blue-700">
                <Hotel size={26} />
                <Waves size={26} />
              </div>

              <h3 className="text-lg font-bold text-gray-800 tracking-tight">
                Hospitality & Leisure
              </h3>

              <p className="text-sm text-gray-500 mt-2 leading-relaxed font-medium">
                Discover hotels, resorts, and premium vacation homes in top-tier destinations.
              </p>

              <div className="mt-4 space-y-3 text-sm text-gray-700 font-medium">

                <div className="flex items-center gap-2">
                  <Hotel size={18} className="text-blue-700" />
                  Luxury Hotels
                </div>

                <div className="flex items-center gap-2">
                  <Building2 size={18} className="text-blue-700" />
                  Resort Properties
                </div>

                <div className="flex items-center gap-2">
                  <Home size={18} className="text-blue-700" />
                  Boutique Stays
                </div>

                <div className="flex items-center gap-2">
                  <ShieldCheck size={18} className="text-blue-700" />
                  Verified Hospitality Data
                </div>

              </div>

            </div>

            <div className="mt-auto pt-6 flex flex-col gap-2">
              <Link
                to="/hospitality"
                className="w-full bg-blue-700 text-white py-2.5 rounded-lg text-sm font-bold hover:bg-blue-800 transition text-center shadow-lg shadow-blue-900/10"
              >
                Explore Hospitality →
              </Link>

              <Link
                to="/new-page"
                className="w-full bg-white text-blue-900 py-2.5 rounded-lg text-sm font-bold border border-blue-200 hover:bg-blue-50 transition text-center"
              >
                Leasing Options
              </Link>
            </div>

          </div>


          {/* CAROUSEL AREA */}
          <div className="relative flex-1 overflow-hidden">

            {/* LEFT ARROW */}
            <button
              onClick={scrollLeft}
              className="absolute left-[-12px] top-1/2 -translate-y-1/2 z-10 bg-white shadow-xl p-2.5 rounded-full hover:bg-gray-50 border border-gray-100 transition-all hover:scale-110 active:scale-95"
            >
              <ChevronLeft size={20} className="text-blue-700" />
            </button>

            {/* SCROLL CONTAINER */}
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto scroll-smooth pb-4 no-scrollbar"
            >
              {hospitalityProps.length > 0 ? (
                hospitalityProps.map((property) => (
                  <div key={property.id} className="flex-shrink-0">
                    <PropertyCard property={property} themeColor="blue" />
                  </div>
                ))
              ) : (
                <div className="flex items-center justify-center w-full py-10 bg-white rounded-xl border border-dashed border-gray-200">
                  <p className="text-gray-400 font-medium italic">No hospitality properties available currently.</p>
                </div>
              )}
            </div>

            {/* RIGHT ARROW */}
            <button
              onClick={scrollRight}
              className="absolute right-[-12px] top-1/2 -translate-y-1/2 z-10 bg-white shadow-xl p-2.5 rounded-full hover:bg-gray-50 border border-gray-100 transition-all hover:scale-110 active:scale-95"
            >
              <ChevronRight size={20} className="text-blue-700" />
            </button>

          </div>

        </div>

      </section>

    </>
  );
}
