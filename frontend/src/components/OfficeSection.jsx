import { Link } from "react-router-dom";
import OfficeCard from "./OfficeCard";
import properties from "../data/newdataproperty.json";

import {
  ShieldCheck,
  FileCheck,
  Building2,
  BadgeDollarSign,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Zap,
  Users
} from "lucide-react";

import { useRef } from "react";


export default function OfficeSection() {

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

  // Filter for Office properties
  const officeProps = properties.filter(p => p.type === "Office");

  return (
    <>
    <section className="pt-6 pb-16 px-6 md:px-10 bg-white border-t border-gray-200">

      <div className="flex flex-col lg:flex-row gap-6 items-stretch">

        {/* LEFT INFO CARD */}
        <div className="w-full lg:w-[300px] flex-shrink-0 bg-gradient-to-br from-indigo-50 to-white rounded-xl p-5 shadow-sm border border-indigo-100 flex flex-col">

          <div>

            <div className="flex gap-2 mb-3 text-indigo-700">
              <Building2 size={26}/>
              <Briefcase size={26}/>
            </div>

            <h3 className="text-lg font-semibold text-gray-800">
              Office Spaces
            </h3>

            <p className="text-sm text-gray-500 mt-2 leading-relaxed">
              Premium office spaces designed for modern businesses and startups.
            </p>

            <div className="mt-3 space-y-2 text-sm text-gray-700">

              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-indigo-700"/>
                Prime Locations
              </div>

              <div className="flex items-center gap-2">
                <Zap size={18} className="text-indigo-700"/>
                High-Speed Internet
              </div>

              <div className="flex items-center gap-2">
                <Users size={18} className="text-indigo-700"/>
                Flexible Terms
              </div>

              <div className="flex items-center gap-2">
                <BadgeDollarSign size={18} className="text-indigo-700"/>
                Competitive Pricing
              </div>

            </div>

          </div>

          <div className="mt-auto flex flex-col gap-2">
            <Link
              to="/offices"
              className="w-full bg-indigo-700 text-white py-2 rounded-lg text-sm font-medium hover:bg-indigo-800 transition text-center"
            >
              Explore Offices →
            </Link>

            <Link
              to={`/office-details/${officeProps[0]?.id || 15}`}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 rounded-lg text-sm font-medium hover:opacity-90 transition text-center"
            >
              View Featured Details
            </Link>
          </div>

        </div>


        {/* CAROUSEL AREA */}
        <div className="relative flex-1 overflow-hidden">

          {/* LEFT ARROW */}
          <button
            onClick={scrollLeft}
            className="absolute left-[-12px] top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
          >
            <ChevronLeft size={20}/>
          </button>

          {/* SCROLL CONTAINER */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-2 no-scrollbar"
          >
            {officeProps.slice(0, 6).map((property) => (
              <div key={property.id} className="flex-shrink-0">
                <OfficeCard property={property} />
              </div>
            ))}
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={scrollRight}
            className="absolute right-[-12px] top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
          >
            <ChevronRight size={20}/>
          </button>

        </div>

      </div>

    </section>

    </>
  );
}
