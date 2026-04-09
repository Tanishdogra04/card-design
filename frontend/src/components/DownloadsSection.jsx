import React from "react";
import {
  FileText,
  FileSpreadsheet,
  CreditCard,
  Map,
} from "lucide-react";

const downloads = [
  {
    title: "Brochure",
    icon: <FileText size={40} />,
  },
  {
    title: "Cost Sheet",
    icon: <FileSpreadsheet size={40} />,
  },
  {
    title: "Payment Plan",
    icon: <CreditCard size={40} />,
  },
  {
    title: "Site Plan",
    icon: <Map size={40} />,
  },
];

const DownloadsSection = ({ property }) => {
  return (
    <section id="downloads" className="bg-black text-white py-24">

      {/* HEADING */}
      <div className="text-center mb-16 px-6">
          <p className="text-blue-400 text-xs font-black uppercase tracking-[4px] mb-3">Resource Center</p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Downloads</span></h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-700 to-blue-500 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* CARDS */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">

        {downloads.map((item, index) => (
          <div key={index} className="group">

            {/* CARD */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-3xl shadow-xl p-8 flex flex-col items-center justify-center gap-4 h-[180px] group-hover:bg-white group-hover:text-black transition-all duration-500">

              <div className="text-blue-500 group-hover:text-blue-700 transition-colors">
                {item.icon}
              </div>

              <h3 className="text-lg font-bold tracking-tight">
                {item.title}
              </h3>
            </div>

            {/* BUTTON */}
           <button
             onClick={(e) => {
               e.stopPropagation(); 
               window.scrollTo({ top: 0, behavior: "smooth" });
             }}
             className="w-full mt-4 py-4 rounded-2xl text-white font-black text-xs uppercase tracking-widest bg-gradient-to-r from-blue-700 to-blue-900 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-blue-900/40"
           >
             Get {item.title}
           </button>

          </div>
        ))}

      </div>

      {/* FOOT TEXT */}
      <div className="max-w-5xl mx-auto text-center mt-20 px-6 text-sm text-gray-400 leading-relaxed">

        <p className="mb-6 max-w-3xl mx-auto">
          <strong className="text-white">{property?.name || "This project"}</strong> offers you the perfect blend of comfort, luxury, and strategic location in <strong className="text-blue-400">{property?.location || "prime area"}</strong>.
          Contact us now for pricing, availability, and exclusive offers.
        </p>

        <p className="font-black text-blue-400 mb-6 tracking-widest uppercase">
          buildsmore66@gmail.com
        </p>

        <p className="text-[10px] text-gray-600 uppercase font-bold tracking-widest">
          Disclaimer : This website is for informational purposes only. Project details, pricing,
          and specifications are subject to change without prior notice. Images and layouts are artistic impressions.
        </p>

      </div>

    </section>
  );
};

export default DownloadsSection;