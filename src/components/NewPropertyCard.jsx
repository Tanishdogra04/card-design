import { useState } from "react";
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


export default function NewPropertyCard() {

  /* STATIC PROPERTY DATA */

  const property = {
    name: "Prestige Lakeside Habitat",
    developer: "Prestige Group",
    location: "Whitefield, Bangalore",
    rera: "PRM/KA/RERA/1251",
    price: 8500000,
    badge: "New Launch",
    type: "Apartment",
    configuration: "3 BHK",
    area: "1450 sq.ft",
    facing: "East",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae"
    ]
  };

  const [index, setIndex] = useState(0);
  const [liked, setLiked] = useState(false);

  const images = property.images;

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const shareProperty = () => {

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
    
        <div className="bg-white rounded-xl shadow-md overflow-hidden w-[320px] ml-8 hover:shadow-lg transition">

      {/* IMAGE SECTION */}
      <div className="relative h-[200px] overflow-hidden">

        <img
          src={images[index]}
          alt={property.name}
          className="w-full h-full object-cover"
        />

        {/* BADGE */}
        <div className="absolute top-3 left-3 bg-purple-600 text-white text-xs px-2 py-1 rounded-md">
          {property.badge}
        </div>

        {/* HEART + SHARE */}
        <div className="absolute top-3 right-3 flex gap-2">

          <button
            onClick={() => setLiked(!liked)}
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
     {/* CONTENT */}
<div className="p-4 space-y-3">

  {/* ROW 1 : PROJECT NAME + LOCATION */}
  <div className="flex justify-between items-start">

    <h3 className="font-semibold text-sm leading-snug">
      {property.name}
    </h3>

    <div className="flex items-center text-xs text-gray-500 gap-1">
      <MapPin size={14}/>
      {property.location.split(",")[0]}
    </div>

  </div>


  {/* ROW 2 : DEVELOPER + RERA */}
  <div className="flex justify-between items-center text-xs">

<a
  href="#"
  className="group flex items-center gap-1 text-purple-600 font-medium text-xs"
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


  {/* ROW 3 : BHK AREA TYPE */}
  <div className="grid grid-cols-3 text-xs text-gray-600 gap-3">

    <div className="flex items-center gap-1">
      <Building2 size={14}/>
      {property.configuration}
    </div>

    <div className="flex items-center gap-1">
      <Ruler size={14}/>
      {property.area}
    </div>

    <div className="flex items-center gap-1">
      <Building2 size={14}/>
      {property.type}
    </div>

  </div>


  {/* ROW 4 : FACING PARKING AMENITY */}
  <div className="grid grid-cols-3 text-xs text-gray-600 gap-3">

    <div className="flex items-center gap-1">
      <Compass size={14}/>
      {property.facing || "East"}
    </div>

    <div className="flex items-center gap-1">
      <Building2 size={14}/>
      Parking
    </div>

    <div className="flex items-center gap-1">
      <Building2 size={14}/>
      Gym
    </div>

  </div>


  {/* CTA BUTTONS */}
  <div className="flex gap-3 pt-2">

    <button className="flex items-center justify-center gap-1 border border-purple-600 text-purple-600 text-sm px-3 py-2 rounded-md flex-1 hover:bg-purple-50">
      <Download size={16}/>
      Brochure
    </button>

    <button className="flex items-center justify-center gap-1 bg-purple-600 text-white text-sm px-3 py-2 rounded-md flex-1 hover:bg-purple-700">
      <Phone size={16}/>
      Enquire
    </button>

  </div>

</div>

    </div>
  );
}