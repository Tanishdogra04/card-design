import ResidentialSection from "../components/ResidentialSection";
import CommercialSection from "../components/CommercialSection";
import OfficeSection from "../components/OfficeSection";
import InstitutionalSection from "../components/InstitutionalSection";
import HospitalitySection from "../components/HospitalitySection";
import SectionBanner from "../components/SectionBanner";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SectionBanner 
        title="Residential Properties"
        subtitle="Explore luxury apartments, villas, and independent floors in the most serene locations of Himachal Pradesh."
        ctaText="Explore Residential"
        link="/residential"
        bgImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
        gradient="from-blue-900/80 to-transparent"
      />
      <ResidentialSection />
      
      <SectionBanner 
        title="Ready to Scale Your Business?"
        subtitle="Explore premium commercial spaces designed for modern enterprises and high ROI."
        ctaText="View Commercial Assets"
        link="/commercial"
        bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c"
        gradient="from-blue-900/80 to-transparent"
      />

      <CommercialSection />

      <SectionBanner 
        title="Modern Workspaces for Modern Teams"
        subtitle="Discover premium office layouts that foster productivity and innovation."
        ctaText="Explore Office Spaces"
        link="/offices"
        bgImage="https://images.unsplash.com/photo-1497366754035-f200968a6e72"
        gradient="from-slate-900/80 to-transparent"
        reverse={true}
      />

      <OfficeSection />

      <SectionBanner 
        title="Institutional Assets"
        subtitle="Explore specialized facilities for healthcare, education, and public services from trusted providers."
        ctaText="Explore Institutional"
        link="/institutional"
        bgImage="https://images.unsplash.com/photo-1577416412292-747c6607f055"
        gradient="from-black/60 to-transparent"
      />

      <InstitutionalSection />

      <SectionBanner 
        title="Luxury Hospitality & Stays"
        subtitle="Boutique hotels, homestays, and resorts in the most scenic locations of Himachal."
        ctaText="Explore Hospitality"
        link="/hospitality"
        bgImage="https://images.unsplash.com/photo-1566073771259-6a8506099945"
        gradient="from-amber-900/80 to-transparent"
        reverse={true}
      />

      <HospitalitySection />
    </div>
  );
}
