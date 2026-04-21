import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Share2,
  MapPin,
  Building2,
  Ruler,
  Compass,
  Download,
  Phone,
  ArrowUpRight
} from "lucide-react";

export default function NewPropertyCard({ property }) {

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
      text: `Check out this property: ${property.name}`,
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



     <div className="bg-white rounded-[1.5rem] shadow-xl shadow-slate-900/[0.05] border border-slate-200/60 overflow-hidden w-full h-full flex flex-col"
>

        {/* IMAGE SECTION */}
        <div className="relative h-[220px] overflow-hidden">

          <img
            src={images[index] || "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"}
            alt={property.name}
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80";
              e.target.onerror = null;
            }}
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

          {/* ARROWS */}
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-1 rounded-full shadow"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-1 rounded-full shadow"
          >
            <ChevronRight size={18} />
          </button>

          {/* DOT INDICATORS */}
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

        {/* CONTENT */}
        <div className="p-4 space-y-3 flex-1 flex flex-col">

          {/* ROW 1 */}
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

          {/* ROW 2 */}
          <div className="flex justify-between items-center text-xs">

            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="group flex items-center gap-1 text-blue-700 font-medium text-xs"
            >
              {property.developer}

              <ArrowUpRight
                size={18}
                strokeWidth={2.5}
                className="transition-transform duration-300 group-hover:rotate-45"
              />

            </a>

            <div className="text-gray-500">
              RERA : {property.rera || "Awaited"}
            </div>

          </div>

          <div className="grid grid-cols-3 text-[10px] sm:text-xs text-gray-600 gap-2">

            <div className="flex items-center gap-1 whitespace-nowrap">
              <Building2 size={14} className="shrink-0" />
              <span className="truncate">{property.type === "Plot" ? "Residential" : property.configuration}</span>
            </div>

            <div className="flex items-center gap-1 whitespace-nowrap">
              <Ruler size={14} className="shrink-0" />
              <span className="truncate">{property.area}</span>
            </div>

            <div className="flex items-center gap-1 whitespace-nowrap">
              <Building2 size={14} className="shrink-0" />
              <span className="truncate">{property.type}</span>
            </div>

          </div>

          {/* ROW 4 */}
          <div className="grid grid-cols-3 text-[10px] sm:text-xs text-gray-600 gap-2">

            <div className="flex items-center gap-1 whitespace-nowrap">
              <Compass size={14} className="shrink-0" />
              <span className="truncate">{property.facing || "East"}</span>
            </div>

            <div className="flex items-center gap-1 whitespace-nowrap">
              <Building2 size={14} className="shrink-0" />
              <span className="truncate">{property.type === "Plot" ? "Gated" : "Parking"}</span>
            </div>

            <div className="flex items-center gap-1 whitespace-nowrap">
              <Building2 size={14} className="shrink-0" />
              <span className="truncate">{property.type === "Plot" ? "Park" : "Gym"}</span>
            </div>

          </div>

          {/* CTA BUTTONS */}
        <div className="flex flex-col gap-3 pt-2 mt-auto">

  {/* Top Row */}
  <div className="flex gap-3">

    <button
      onClick={(e) => e.preventDefault()}
      className="flex items-center justify-center gap-1 border border-blue-700 text-blue-700 text-sm px-3 py-2 rounded-md flex-1 hover:bg-blue-50"
    >
      <Download size={16} />
      Brochure
    </button>

    <button
      onClick={(e) => e.preventDefault()}
      className="flex items-center justify-center gap-1 bg-blue-700 text-white text-sm px-3 py-2 rounded-md flex-1 hover:bg-blue-800"
    >
      <Phone size={16} />
      Enquire
    </button>

  </div>

  {/* 🔥 Bottom Full Width Button */}
  <button
    onClick={() => navigate(`/property/${property.id}`)}
    className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition"
  >
    View Details
  </button>

</div>

        </div>

      </div>



  );
}