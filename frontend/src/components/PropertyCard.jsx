import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

export default function PropertyCard({ property, themeColor = "blue" }) {
  const navigate = useNavigate();
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

  const themeClasses = {
    blue: {
      text: "text-blue-700",
      bg: "bg-blue-700",
      border: "border-blue-700",
      hoverBg: "hover:bg-blue-800",
      hoverBorder: "hover:bg-blue-50",
      shadow: "shadow-blue-700/20",
      secondaryText: "text-blue-600"
    },
    purple: {
      text: "text-purple-700",
      bg: "bg-purple-700",
      border: "border-purple-700",
      hoverBg: "hover:bg-purple-800",
      hoverBorder: "hover:bg-purple-50",
      shadow: "shadow-purple-700/20",
      secondaryText: "text-purple-600"
    }
  }[themeColor] || themeClasses.blue;

  return (
    <div className="w-full min-w-0 md:min-w-[320px] bg-white rounded-xl shadow-sm overflow-hidden h-full flex flex-col">

      {/* IMAGE CAROUSEL */}
      <div className="relative group">

        <img
          src={property.images?.[current]}
          alt={property.name}
          className="h-[220px] w-full object-cover"
          loading="eager"
          fetchpriority="high"
        />

        {/* BADGE */}
        <div className="absolute top-3 left-3">
          <span className={`${themeClasses.bg} text-white text-xs px-3 py-1 rounded-md shadow`}>
            {property.badge}
          </span>
        </div>

        {/* ICONS */}
        <div className="absolute top-3 right-3 flex gap-2">

          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
            <Heart size={16}/>
          </button>

          <button 
            onClick={(e) => {
              e.stopPropagation();
              if (navigator.share) {
                navigator.share({ title: property.name, url: window.location.href });
              }
            }}
            className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
          >
            <Share2 size={16}/>
          </button>

        </div>

        {/* LEFT ARROW */}
        <button
          onClick={(e) => { e.stopPropagation(); prevImage(); }}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-1 rounded-full shadow opacity-0 group-hover:opacity-100 transition"
        >
          <ChevronLeft size={18}/>
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={(e) => { e.stopPropagation(); nextImage(); }}
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
      <div className="p-4 space-y-3 flex-1 flex flex-col">

        {/* ROW 1 */}
        <div className="flex justify-between items-start text-sm font-semibold">

          <span className="truncate max-w-[170px] text-gray-800">
            {property.name}
          </span>
          <div className="flex items-center gap-1 shrink-0 text-xs text-gray-500 font-medium">
            <MapPin size={12}/>
            <span className="truncate max-w-[100px]">
              {property.location}
            </span>
          </div>

        </div>

        {/* ROW 2 */}
        <div className="flex justify-between text-xs text-gray-500">
          <span className="text-gray-500 text-xs">
            By: {property.developer ? (
              <span className="text-black font-semibold">
                {property.developer}
              </span>
            ) : (
              "N/A"
            )}
          </span>
          
          <span className="font-medium">RERA: {property.rera || "Awaited"}</span>
        </div>

        {/* PRICE */}
        <p className={`${themeClasses.text} font-bold text-lg`}>
          {typeof property.price === 'number' ? `₹ ${(property.price / 100000).toFixed(1)} L` : property.price}
        </p>

        {/* CONFIGURATION */}
        <div className="grid grid-cols-3 text-[10px] sm:text-xs text-gray-600 gap-2 font-medium">

          <div className="flex items-center gap-1 whitespace-nowrap">
            <BedDouble size={14} className={`shrink-0 ${themeClasses.secondaryText}`} />
            <span className="truncate">{property.configuration}</span>
          </div>

          <div className="flex items-center gap-1 whitespace-nowrap">
            <Ruler size={14} className={`shrink-0 ${themeClasses.secondaryText}`} />
            <span className="truncate">{property.area}</span>
          </div>

          <div className="flex items-center gap-1 whitespace-nowrap">
            <Building size={14} className={`shrink-0 ${themeClasses.secondaryText}`} />
            <span className="truncate">{property.type}</span>
          </div>

        </div>

        {/* CTA BUTTONS */}
        <div className="flex flex-col gap-2 pt-2 mt-auto">

          <div className="flex gap-2">
            <button className={`flex-1 border ${themeClasses.border} ${themeClasses.text} tracking-tight font-black uppercase text-[10px] py-2.5 rounded-lg ${themeClasses.hoverBorder} transition`}>
              Brochure
            </button>

            <button className={`flex-1 ${themeClasses.bg} text-white tracking-tight font-black uppercase text-[10px] py-2.5 rounded-lg ${themeClasses.hoverBg} transition`}>
              Enquire
            </button>
          </div>

          <button 
            onClick={() => navigate(`/property/${property.id}`)}
            className={`w-full ${themeClasses.bg} text-white font-black uppercase tracking-widest text-[11px] py-3 rounded-lg ${themeClasses.hoverBg} transition shadow-lg ${themeClasses.shadow}`}
          >
            View Details
          </button>

        </div>

      </div>

    </div>
  );
}