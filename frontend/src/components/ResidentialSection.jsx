import { Link } from "react-router-dom";
import PropertyCard from "./PropertyCard";
import properties from "../data/properties.json";

import {
  ShieldCheck,
  FileCheck,
  Building2,
  BadgeDollarSign,
  Home,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

import { useRef } from "react";


export default function ResidentialSection() {

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

  return (
    <>
    <section className="py-16 px-10 bg-gray-50">

      <div className="flex gap-6 items-start">

        {/* LEFT CARD */}
        <div className="w-[300px] flex-shrink-0 bg-gradient-to-br min-h-[400px] from-purple-50 to-white rounded-xl p-5 shadow-sm border border-purple-100 flex flex-col">

          <div>

            <div className="flex gap-2 mb-3 text-purple-600">
              <Building2 size={26}/>
              <Home size={26}/>
            </div>

            <h3 className="text-lg font-semibold text-gray-800">
              Residential Properties
            </h3>

            <p className="text-sm text-gray-500 mt-2 leading-relaxed">
              Explore apartments, villas and plots from verified developers across top locations.
            </p>

            <div className="mt-3 space-y-2 text-sm text-gray-700">

              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-purple-600"/>
                Verified Listings
              </div>

              <div className="flex items-center gap-2">
                <FileCheck size={18} className="text-purple-600"/>
                RERA Approved Projects
              </div>

              <div className="flex items-center gap-2">
                <Building2 size={18} className="text-purple-600"/>
                Trusted Developers
              </div>

              <div className="flex items-center gap-2">
                <BadgeDollarSign size={18} className="text-purple-600"/>
                Best Price Assurance
              </div>

            </div>

          </div>

          <Link
  to="/residential"
  className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition text-center"
>
  Explore Properties →
</Link>

<Link
  to="/new-page"
  className="mt-2 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg text-sm font-medium hover:opacity-90 transition text-center"
>
  New Page
</Link>
{/* <Link
  to="/properties"
  className="mt-2 w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-2 rounded-lg text-sm font-semibold hover:scale-[1.02] hover:shadow-lg transition-all duration-200 text-center"
>
  View Properties
</Link>
<Link
  to="/invest"
  className="mt-2 w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-2 rounded-lg text-sm font-semibold hover:shadow-md hover:-translate-y-[1px] transition-all text-center"
>
  Invest Now
</Link>
<Link
  to="/luxury"
  className="mt-2 w-full bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 text-white py-2 rounded-lg text-sm font-semibold hover:brightness-110 transition text-center"
>
  Luxury Homes
</Link>
<Link
  to="/contact"
  className="mt-2 w-full bg-gradient-to-r from-gray-900 to-gray-700 text-white py-2 rounded-lg text-sm font-semibold hover:shadow-xl hover:scale-[1.02] transition-all text-center"
>
  Get Consultation
</Link>
<Link
  to="/visit"
  className="mt-2 w-full bg-gradient-to-r from-rose-500 to-red-600 text-white py-2 rounded-lg text-sm font-semibold hover:shadow-md hover:opacity-95 transition text-center"
>
  Book Site Visit
</Link>
<Link
  to="/explore"
  className="mt-2 w-full bg-white/10 backdrop-blur-md border border-white/20 text-white py-2 rounded-lg text-sm font-medium hover:bg-white/20 transition text-center"
>
  Explore Listings
</Link>
<Link
  to="/find-homes"
  className="mt-2 w-full bg-gradient-to-r from-[#1f6f3e] via-[#6e8f3a] to-[#e6d96a] text-gray-900 py-2 rounded-lg text-sm font-semibold shadow-md hover:shadow-lg hover:brightness-105 transition-all text-center"
>
  Find Homes
</Link> */}

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
            {properties.slice(0,6).map((property) => (
              <div key={property.id} className="flex-shrink-0">
                <PropertyCard property={property}/>
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