import { useEffect } from "react";
import { useParams } from "react-router-dom";
import properties from "../data/properties.json";
import newData from "../data/newdataproperty.json";
import PropertyHeader from "../components/PropertyHeader";
import PropertyInfoCard from "../components/PropertyInfoCard";
import PropertyEnquiryForm from "../components/PropertyEnquiryForm";
import PropertyOverview from "../components/PropertyOverview";
import PlotDetails from "../components/PlotDetails";
import InvestmentSection from "../components/InvestmentSection";
import GallerySection from "../components/GallerySection";
import AmenitiesSection from "../components/AmenitiesSection";
import LocationSection from "../components/LocationSection";
import HighlightsSection from "../components/HighlightsSection";
import WhySection from "../components/WhySection";
import DownloadsSection from "../components/DownloadsSection";
import SpecificationSection from "../components/SpecificationSection";
import FloorPlanSection from "../components/FloorPlanSection";

export default function PropertyDetails() {
  const { id } = useParams();
  
  // Combine datasets to find the property
  const allProperties = [...properties, ...newData];
  const property = allProperties.find((p) => String(p.id) === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!property) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 uppercase tracking-widest font-bold text-gray-400">
      Property not found
    </div>
  );

  const isPlot = property.type === "Plot" || property.category === "Plots";
  const isResidential = ["Apartment", "Villa", "Builder Floor", "Independent House"].includes(property.type);

  return (
    <div className="bg-white">
      <PropertyHeader />

      {/* CINEMATIC HERO SECTION */}
      <section className="relative h-[85vh] md:h-[95vh] w-full overflow-hidden">
        
        {/* Background Overlay & Gradient */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 via-black/20 to-transparent"></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 to-transparent"></div>

        {/* HERO IMAGE */}
        <img
          src={property.images[0]}
          alt={property.name}
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />

        {/* HERO CONTENT CONTAINER */}
        <div className="relative z-20 max-w-7xl mx-auto h-full px-6 flex flex-col md:flex-row items-center justify-between py-20">
          
          {/* LEFT: FLOATING INFO CARD */}
          <div className="w-full md:w-auto self-end md:self-center mb-10 md:mb-0">
            <PropertyInfoCard property={property}/>
          </div>

          {/* RIGHT: ENQUIRY FORM */}
          <div className="w-full md:w-auto">
            <PropertyEnquiryForm property={property} />
          </div>

        </div>

        {/* SCROLL INDICATOR */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
            <div className="text-[10px] text-white/50 font-bold uppercase tracking-[4px]">Discover</div>
            <div className="w-px h-12 bg-gradient-to-b from-blue-500 to-transparent"></div>
        </div>
      </section>

      {/* SECTIONS */}
      <div className="relative">
        <div id="about">
           <PropertyOverview property={property}/>
        </div>

        <SpecificationSection property={property} />

        {isResidential && <FloorPlanSection property={property} />}
        
        {isPlot && <PlotDetails property={property}/>}

        <div id="gallery">
          <GallerySection property={property}/>
        </div>

        <div id="amenities">
           <AmenitiesSection property={property}/>
        </div>

        {property.type === "Investment" && <InvestmentSection property={property}/>}

        <HighlightsSection property={property}/>

        <div id="location">
           <LocationSection property={property}/>
        </div>

        <WhySection property={property}/>
        
        <div id="downloads">
          <DownloadsSection property={property}/>
        </div>
      </div>
    </div>
  );
}