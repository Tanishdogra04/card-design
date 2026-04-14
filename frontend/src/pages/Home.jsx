import ResidentialSection from "../components/ResidentialSection";
import CommercialSection from "../components/CommercialSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <ResidentialSection />
      <CommercialSection />
    </div>
  );
}
