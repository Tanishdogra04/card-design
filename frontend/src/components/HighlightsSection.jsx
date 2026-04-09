import { Route, ShieldCheck, MapPin, Sparkles } from "lucide-react";

const HighlightsSection = ({ property }) => {
  const highlights = [
    {
      title: "Premium Infrastructure",
      desc: "Wide internal roads and thoughtfully planned layouts for optimal living.",
      icon: <Route size={32} />
    },
    {
      title: property?.type === "Plot" ? "Secure Investment" : "Modern Amenities",
      desc: property?.type === "Plot" 
        ? "Excellent ROI potential in a rapidly developing sector." 
        : "State-of-the-art facilities including parks, gym, and security.",
      icon: <Sparkles size={32} />
    },
    {
      title: "Prime Location",
      desc: `Strategically located in ${property?.location || "prime area"} with excellent connectivity.`,
      icon: <MapPin size={32} />
    }
  ];

  return (
    <section id="highlights" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <p className="text-blue-700 text-xs font-black uppercase tracking-[4px] mb-3">Core Value</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            {property?.name} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-600">Highlights</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-700 to-blue-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, idx) => (
            <div key={idx} className="bg-white rounded-[2.5rem] shadow-xl p-10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 group">
              <div className="w-16 h-16 rounded-3xl bg-blue-50 flex items-center justify-center text-blue-700 mb-8 group-hover:bg-blue-700 group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-tight">
                {item.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HighlightsSection;