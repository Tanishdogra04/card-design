import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Share2,
  MapPin,
  Building2,
  BadgeCheck,
  Download,
  Phone,
  ArrowUpRight,
  Ruler,
  Compass,
  ArrowUpDown,
  Car,
  ShieldCheck
} from "lucide-react";

export default function BuilderFloorCard({ property }) {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [liked, setLiked] = useState(false);

  const images = property.images;

  const next = (e) => {
    e.preventDefault();
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = (e) => {
    e.preventDefault();
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const shareProperty = (e) => {
    e.preventDefault();
    const shareData = {
      title: property.name,
      text: `Check out this project: ${property.name}`,
      url: window.location.href
    };

    if (navigator.share) {
      navigator.share(shareData);
    } else {
      const url = `https://wa.me/?text=${encodeURIComponent(
        shareData.text + " " + shareData.url
      )}`;
      window.open(url, "_blank");
    }
  };

  return (
    <div className="bg-white rounded-[1.5rem] shadow-xl shadow-slate-900/[0.05] overflow-hidden w-full border border-slate-200/60 flex flex-col h-full group relative z-10">

      {/* IMAGE SECTION */}
      <div className="relative h-[220px] overflow-hidden">
        <img
          src={images[index]}
          alt={property.name}
          className="w-full h-full object-cover"
          loading="eager"
          fetchpriority="high"
        />

        {/* BADGE */}
        <div className="absolute top-3 left-3 bg-blue-700 text-white text-xs px-2 py-1 rounded-md">
          {property.badge}
        </div>

        {/* HEART + SHARE */}
        <div className="absolute top-3 right-3 flex gap-2">
          <button
            onClick={(e) => {
              e.preventDefault();
              setLiked(!liked);
            }}
            className="bg-white p-1 rounded-full shadow"
          >
            <Heart
              size={18}
              className={liked ? "text-red-500 fill-red-500" : ""}
            />
          </button>

          <button
            onClick={shareProperty}
            className="bg-white p-1 rounded-full shadow"
          >
            <Share2 size={18} />
          </button>
        </div>

        {/* PRICE */}
        <div className="absolute bottom-3 right-3 bg-white px-3 py-1 rounded-md text-sm font-semibold shadow">
          ₹ {(property.price / 100000).toFixed(1)} L
        </div>

        {/* CAROUSEL ARROWS */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-1 rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronLeft size={18} />
        </button>

        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-1 rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronRight size={18} />
        </button>

        {/* INDICATORS */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
          {images.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === index ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="p-4 space-y-3 flex-1 flex flex-col">

        {/* ROW 1: PROJECT NAME & LOCATION */}
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-gray-900 text-sm sm:text-base leading-snug truncate pr-2">
            {property.name}
          </h3>
          <div className="flex items-center text-xs text-gray-500 gap-1 shrink-0">
            <MapPin size={14} />
            <span className="truncate max-w-[80px] sm:max-w-[100px]">
              {property.location.split(",")[0]}
            </span>
          </div>
        </div>

        {/* ROW 2: DEVELOPER & RERA */}
        <div className="flex justify-between items-center text-xs">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="group/dev flex items-center gap-1 text-blue-700 font-medium text-xs"
          >
            {property.developer}
            <ArrowUpRight
              size={18}
              strokeWidth={2.5}
              className="transition-transform duration-300 group-hover/dev:rotate-45"
            />
          </a>
          <div className="text-gray-500">
            RERA : {property.rera || "Awaited"}
          </div>
        </div>

        {/* AMENITIES SECTION - TWO ROWS (Row 3 and Row 4) */}
        <div className="space-y-3 pt-1 flex-1">
          
          {/* Row 3: configuration | area | floorNumber */}
          <div className="grid grid-cols-3 text-[10px] sm:text-xs text-gray-600 gap-2">
            <div className="flex items-center gap-1 whitespace-nowrap overflow-hidden">
              <Building2 size={14} className="shrink-0" />
              <span className="truncate">{property.configuration}</span>
            </div>

            <div className="flex items-center gap-1 text-gray-700 font-medium whitespace-nowrap overflow-hidden">
              <Ruler size={14} className="shrink-0" />
              <span className="truncate">{property.carpetArea || property.area}</span>
            </div>

            <div className="flex items-center gap-1 whitespace-nowrap overflow-hidden">
              <ArrowUpDown size={14} className="shrink-0" />
              <span className="truncate">{property.floorNumber || "1st"} Floor</span>
            </div>
          </div>

          {/* Row 4: parking | ownership | furnishing (or facing) */}
          <div className="grid grid-cols-3 text-[10px] sm:text-xs text-gray-600 gap-2">
            <div className="flex items-center gap-1 whitespace-nowrap overflow-hidden">
              <Car size={14} className="shrink-0" />
              <span className="truncate">{property.parking || "Parking"}</span>
            </div>

            <div className="flex items-center gap-1 whitespace-nowrap overflow-hidden">
              <ShieldCheck size={14} className="shrink-0" />
              <span className="truncate">{property.ownership || "Freehold"}</span>
            </div>

            <div className="flex items-center gap-1 whitespace-nowrap overflow-hidden">
              <Building2 size={14} className="shrink-0" />
              <span className="truncate">{property.type || "Builder Floor"}</span>
            </div>
          </div>

        </div>

        {/* CTA BUTTONS */}
        <div className="flex flex-col gap-3 pt-2 mt-auto">
          <div className="flex gap-3">
            <button
              onClick={(e) => e.preventDefault()}
              className="flex items-center justify-center gap-1 border border-blue-700 text-blue-700 text-sm px-3 py-2 rounded-md flex-1 hover:bg-blue-50 transition"
            >
              <Download size={16} />
              Brochure
            </button>
            <button
              onClick={(e) => e.preventDefault()}
              className="flex items-center justify-center gap-1 bg-blue-700 text-white text-sm px-3 py-2 rounded-md flex-1 hover:bg-blue-800 transition"
            >
              <Phone size={16} />
              Enquire
            </button>
          </div>
          <button
            onClick={() => navigate(`/property/${property.id}`)}
            className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition font-medium"
          >
            View Details
          </button>
        </div>

      </div>
    </div>
  );
}