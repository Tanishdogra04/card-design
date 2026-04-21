import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Heart,
  Share2,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Download,
  Phone,
  Eye,
  Building2,
  Ruler,
  Users
} from "lucide-react";

export default function OfficeCard({ property, themeColor = "blue" }) {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [liked, setLiked] = useState(false);

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

  const shareProperty = () => {
    const shareData = {
      title: property.name,
      text: `Check out this office: ${property.name}`,
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
  };

  const theme = themeClasses[themeColor] || themeClasses.blue;

  return (
    <div className="w-full min-w-0 bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col border border-gray-100 hover:shadow-xl transition-all duration-300">

      {/* IMAGE CAROUSEL */}
      <div className="relative group">

        <img
          src={property.images?.[current] || "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"}
          alt={property.name}
          className="h-[240px] w-full object-cover"
          loading="eager"
          fetchPriority="high"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80";
            e.target.onerror = null;
          }}
        />

        {/* PROPERTY STATUS */}
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-gray-900 text-xs font-black uppercase tracking-widest px-3 py-2 rounded-lg shadow-md">
          {property.badge || "Ready"}
        </div>

        {/* HEART & SHARE BUTTONS */}
        <div className="absolute top-4 right-4 flex gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLiked(!liked);
            }}
            className="bg-white/95 backdrop-blur-sm p-2.5 rounded-full shadow-md hover:bg-white transition-all"
          >
            <Heart
              size={18}
              className={liked ? "text-red-500 fill-red-500" : "text-gray-700"}
            />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              shareProperty();
            }}
            className="bg-white/95 backdrop-blur-sm p-2.5 rounded-full shadow-md hover:bg-white transition-all"
          >
            <Share2 size={18} className="text-gray-700" />
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

        {/* PRICE OVERLAY */}
        <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm text-white text-sm font-bold px-3 py-2 rounded-lg shadow-lg">
          {typeof property.price === 'number' ? `₹ ${(property.price / 100000).toFixed(1)} L` : property.price}
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

        {/* AMENITIES */}
        <div className="flex flex-wrap gap-2">
          {property.amenities?.slice(0, 3).map((amenity, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md font-medium"
            >
              {amenity}
            </span>
          ))}
        </div>

        {/* OFFICE SPECIFICATIONS */}
        <div className="grid grid-cols-3 text-[10px] sm:text-xs text-gray-600 gap-2 font-medium">

          <div className="flex items-center gap-1 whitespace-nowrap">
            <Building2 size={14} className={`shrink-0 ${theme.secondaryText}`} />
            <span className="truncate">{property.area}</span>
          </div>

          <div className="flex items-center gap-1 whitespace-nowrap">
            <Users size={14} className={`shrink-0 ${theme.secondaryText}`} />
            <span className="truncate">{property.capacity || "Flexible"}</span>
          </div>

          <div className="flex items-center gap-1 whitespace-nowrap">
            <Building2 size={14} className={`shrink-0 ${theme.secondaryText}`} />
            <span className="truncate">{property.subType || "Office"}</span>
          </div>

        </div>

        {/* CTA BUTTONS */}
        <div className="flex flex-col gap-2 pt-2 mt-auto">

          <div className="flex gap-2">
            <button className={`flex-1 border ${theme.border} ${theme.text} tracking-tight font-black uppercase text-[10px] py-2.5 rounded-lg ${theme.hoverBorder} transition`}>
              Brochure
            </button>

            <button className={`flex-1 ${theme.bg} text-white tracking-tight font-black uppercase text-[10px] py-2.5 rounded-lg ${theme.hoverBg} transition`}>
              Enquire
            </button>
          </div>

          <button
            onClick={() => navigate(`/office-details/${property.id}`)}
            className={`w-full ${theme.bg} text-white font-black uppercase tracking-widest text-[11px] py-3 rounded-lg ${theme.hoverBg} transition shadow-lg ${theme.shadow}`}
          >
            View Details
          </button>

        </div>

      </div>

    </div>
  );
}
