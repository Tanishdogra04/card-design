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

const DownloadsSection = () => {
  return (
    <section className="bg-black text-white py-16">

      {/* HEADING */}
      <h2 className="text-3xl font-semibold text-center mb-12">
        Downloads
      </h2>

      {/* CARDS */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6">

        {downloads.map((item, index) => (
          <div key={index}>

            {/* CARD */}
            <div className="bg-white text-black rounded-md shadow-md p-8 flex flex-col items-center justify-center gap-4 h-[160px]">

              <div className="text-gray-700">
                {item.icon}
              </div>

              <h3 className="text-lg font-medium">
                {item.title}
              </h3>
            </div>

            {/* BUTTON */}
           <button
  onClick={(e) => {
    e.stopPropagation(); // 🔥 prevent unwanted parent/map click
    window.scrollTo({ top: 0, behavior: "smooth" });
  }}
  className="w-full mt-3 py-3 rounded-md text-white font-semibold 
  bg-gradient-to-r from-pink-600 to-purple-700 
  hover:opacity-90 transition"
>
  DOWNLOAD
</button>

          </div>
        ))}

      </div>

      {/* FOOT TEXT */}
      <div className="max-w-5xl mx-auto text-center mt-12 px-6 text-sm text-gray-300 leading-6">

        <p className="mb-4">
          Velora Midtown Mohali offers you the perfect blend of comfort, luxury, and strategic location.
          Secure your dream address on the Zirakpur-Patiala Highway. Contact us now for pricing,
          plot availability and exclusive offers.
        </p>

        <p className="font-semibold mb-4">
          buildsmore66@gmail.com
        </p>

        <p className="text-xs text-gray-500">
          Disclaimer : This website is for informational purposes only. Project details, pricing,
          and specifications are subject to change without prior notice. Images and layouts are artistic impressions.
        </p>

      </div>

    </section>
  );
};

export default DownloadsSection;