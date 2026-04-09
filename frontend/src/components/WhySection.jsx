import React from "react";

const WhySection = ({ property }) => {
  return (
    <section id="why" className="py-24 bg-white relative overflow-hidden">
      
      {/* Decorative background label */}
      <div className="absolute top-20 -right-20 text-[12rem] font-black text-gray-50 select-none -rotate-90 pointer-events-none">
        BENEFITS
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          
          <div className="md:w-1/3">
             <p className="text-blue-700 text-xs font-black uppercase tracking-[4px] mb-4">The Smart Choice</p>
             <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
               Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-600">{property?.name}?</span>
             </h2>
             <div className="w-20 h-1.5 bg-gradient-to-r from-blue-700 to-blue-500 mt-6 rounded-full"></div>
          </div>

          <div className="md:w-2/3 space-y-12">
            <p className="text-gray-600 text-xl leading-relaxed font-medium">
              At <strong className="text-gray-900">{property?.name || "this project"}</strong>, living goes beyond walls and gardens — it’s about freedom, space, comfort, and future growth. Whether you’re building your dream home or investing for long-term appreciation, this development delivers unmatched value in {property?.segment || "luxury"} living.
            </p>

            <div className="grid sm:grid-cols-2 gap-10">
              <div className="space-y-4">
                <h3 className="text-2xl font-black text-gray-900 tracking-tight flex items-center gap-3">
                   <div className="w-2 h-8 bg-blue-700 rounded-full"></div>
                   Prime Location
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Perfectly positioned in <strong className="text-gray-900">{property?.location}</strong>, providing quick access to essential hubs:
                </p>
                <ul className="space-y-3">
                   {["15 mins to major transport hubs", "Close to top-tier schools & hospitals", "Minutes away from shopping & leisure"].map((item, i) => (
                     <li key={i} className="flex items-center gap-3 text-gray-700 font-bold text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                        {item}
                     </li>
                   ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-black text-gray-900 tracking-tight flex items-center gap-3">
                   <div className="w-2 h-8 bg-blue-700 rounded-full"></div>
                   Growth Potential
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Situated in a rapidly evolving high-growth corridor, ensuring:
                </p>
                <ul className="space-y-3">
                   {["High capital appreciation", "Excellent rental yields", "Future-proof infrastructure"].map((item, i) => (
                     <li key={i} className="flex items-center gap-3 text-gray-700 font-bold text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                        {item}
                     </li>
                   ))}
                </ul>
              </div>
            </div>

            <p className="text-blue-700/60 font-black italic text-lg border-l-4 border-blue-700/20 pl-6 py-2">
              Explore a connected lifestyle where work, travel, and leisure come together effortlessly.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
};

export default WhySection;