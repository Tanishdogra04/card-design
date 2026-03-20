import { useState } from "react";
import {
  Heart,
  Share2,
  MapPin,
  ChevronLeft,
  ChevronRight,
  BedDouble,
  Ruler,
  Building
} from "lucide-react";

export default function PropertyCard({ property }) {
  const [current, setCurrent] = useState(0);

  const nextImage = () => {
    setCurrent((prev) =>
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrent((prev) =>
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-w-[320px] bg-white rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 overflow-hidden">

      {/* IMAGE CAROUSEL */}
      <div className="relative group">

        <img
          src={property.images?.[current]}
          alt={property.name}
          className="h-48 w-full object-cover"
        />

        {/* BADGE */}
        <div className="absolute top-3 left-3">
          <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded-md shadow">
            {property.badge}
          </span>
        </div>

        {/* ICONS */}
        <div className="absolute top-3 right-3 flex gap-2">

          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
            <Heart size={16}/>
          </button>

          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
            <Share2 size={16}/>
          </button>

        </div>

        {/* LEFT ARROW */}
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-1 rounded-full shadow opacity-0 group-hover:opacity-100 transition"
        >
          <ChevronLeft size={18}/>
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-1 rounded-full shadow opacity-0 group-hover:opacity-100 transition"
        >
          <ChevronRight size={18}/>
        </button>

        {/* IMAGE DOTS */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
          {property.images?.map((_, index) => (
            <span
              key={index}
              className={`h-1.5 w-1.5 rounded-full ${
                index === current ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>

      </div>

      {/* DETAILS */}
      <div className="p-4 space-y-3">

        {/* ROW 1 */}
        <div className="flex justify-between items-start text-sm font-semibold">

          <span className="truncate max-w-[170px] text-gray-800">
            {property.name}
          </span>
 <div className="flex items-center gap-1">
            <MapPin size={12}/>
            {property.location}
          </div>
          

        </div>

        {/* ROW 2 */}
        <div className="flex justify-between text-xs text-gray-500">
<span className="text-gray-500 text-xs">
  By: {property.developer ? (
    <a
      href={`/developer/${property.developer}`}
      className="text-black hover:underline inline-flex items-center gap-1"
    >
      {property.developer}
      <span className="text-xs">↗</span>
    </a>
  ) : (
    "N/A"
  )}
</span>
          

          <span>RERA: {property.rera}</span>

        </div>

        {/* PRICE */}
        <p className="text-purple-600 font-semibold text-lg">
          Starting {property.price}
        </p>

        {/* CONFIGURATION */}
        <div className="flex items-center justify-between text-sm text-gray-600">

          <div className="flex items-center gap-1">
            <BedDouble size={16}/>
            {property.configuration}
          </div>

          <div className="flex items-center gap-1">
            <Ruler size={16}/>
            {property.area}
          </div>

          <div className="flex items-center gap-1">
            <Building size={16}/>
            {property.type}
          </div>

        </div>

        {/* CTA BUTTONS */}
        <div className="flex gap-2 pt-2">

          <button className="flex-1 border border-purple-600 text-purple-600 text-sm py-2 rounded-lg hover:bg-purple-50 transition">
            Brochure
          </button>

          <button className="flex-1 bg-purple-600 text-white text-sm py-2 rounded-lg hover:bg-purple-700 transition">
            Enquire
          </button>

        </div>

      </div>

    </div>
  );
}