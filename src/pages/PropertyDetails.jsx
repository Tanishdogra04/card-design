import { useParams } from "react-router-dom";
import properties from "../data/properties.json";
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



export default function PropertyDetails() {

  const { id } = useParams();

  const property = properties.find(
    (p) => p.id === Number(id)
  );

  if (!property) return <div>Property not found</div>;

  return (
    <>
      <PropertyHeader />

      {/* HERO IMAGE */}
      <section className="relative h-screen w-full">

        {/* BACKGROUND IMAGE */}
        <img
          src={property.images[0]}
          alt={property.name}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* HERO CONTENT CONTAINER */}
        <div className="relative max-w-7xl mx-auto h-full flex items-center px-6">

          {/* LEFT PROPERTY CARD */}
        <div className="absolute left-0 top-0 h-full flex items-center pl-6">
  <PropertyInfoCard property={property}/>
</div>
<div className="absolute right-6 top-1/2 -translate-y-1/2">
  <PropertyEnquiryForm />
</div>

        </div>

      </section>
      <PropertyOverview property={property}/>
<PlotDetails property={property}/>
<InvestmentSection property={property}/>
<GallerySection property={property}/>
<AmenitiesSection property={property}/>

<LocationSection property={property}/>
<HighlightsSection property={property}/>
<WhySection property={property}/>
<DownloadsSection property={property}/>
    </>
  );
}