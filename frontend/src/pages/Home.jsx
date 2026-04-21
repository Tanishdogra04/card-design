import ResidentialSection from "../components/ResidentialSection";
import CommercialSection from "../components/CommercialSection";
import OfficeSection from "../components/OfficeSection";
import InstitutionalSection from "../components/InstitutionalSection";
import HospitalitySection from "../components/HospitalitySection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <ResidentialSection />
      <CommercialSection />
      <OfficeSection />
      <InstitutionalSection />
      <HospitalitySection />
    </div>
  );
}
