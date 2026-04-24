import { Link } from "react-router-dom";
import PropertyCard from "./PropertyCard";
import properties from "../data/newdataproperty.json";

import {
  ShieldCheck,
  FileCheck,
  Building2,
  BadgeDollarSign,
  ShoppingBag,
  ChevronLeft,
  ChevronRight,
  Briefcase
} from "lucide-react";

import { useRef } from "react";


export default function CommercialSection() {

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

  // Filter for Commercial properties
  const commercialProps = properties.filter(p => p.type === "Commercial");

  return (
    <>
      <section className="pt-6 pb-16 px-6 md:px-10 bg-gray-50 border-t border-gray-200">

        <div className="flex flex-col lg:flex-row gap-6 items-stretch">

          {/* LEFT CARD */}
          <div className="w-full lg:w-[300px] flex-shrink-0 bg-gradient-to-br from-blue-50 to-white rounded-xl p-5 shadow-sm border border-blue-100 flex flex-col">

            <div>

              <div className="flex gap-2 mb-3 text-blue-700">
                <Building2 size={26} />
                <Briefcase size={26} />
              </div>

              <h3 className="text-lg font-semibold text-gray-800">
                Commercial Properties
              </h3>

              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                Find premium office spaces, retail shops and commercial plots for your business.
              </p>

              <div className="mt-3 space-y-2 text-sm text-gray-700">

                <div className="flex items-center gap-2">
                  <ShieldCheck size={18} className="text-blue-700" />
                  Prime Locations
                </div>

                <div className="flex items-center gap-2">
                  <FileCheck size={18} className="text-blue-700" />
                  High ROI Projects
                </div>

                <div className="flex items-center gap-2">
                  <Building2 size={18} className="text-blue-700" />
                  Grade-A Developers
                </div>

                <div className="flex items-center gap-2">
                  <BadgeDollarSign size={18} className="text-blue-700" />
                  Flexible Payment Plans
                </div>

              </div>

            </div>

            <div className="mt-auto flex flex-col gap-2">
              <Link
                to="/commercial"
                className="w-full bg-blue-700 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-800 transition text-center"
              >
                Explore Commercial →
              </Link>

              <Link
                to="/new-page"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-lg text-sm font-medium hover:opacity-90 transition text-center"
              >
                Lease Assistance
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
              <ChevronLeft size={20} />
            </button>

            {/* SCROLL CONTAINER */}
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto scroll-smooth pb-2 no-scrollbar"
            >
              {commercialProps.map((property) => (
                <div key={property.id} className="flex-shrink-0">
                  <PropertyCard property={property} themeColor="blue" />
                </div>
              ))}
            </div>

            {/* RIGHT ARROW */}
            <button
              onClick={scrollRight}
              className="absolute right-[-12px] top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
            >
              <ChevronRight size={20} />
            </button>

          </div>

        </div>

      </section>

    </>
  );
}
