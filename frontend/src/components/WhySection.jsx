import React from "react";

const WhySection = () => {
  return (
    <section className="py-16 bg-white">

      {/* BOXED CONTAINER */}
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADING */}
       <h2 className="text-2xl font-semibold mb-6 text-center">Why Velora Midtown Is the Smart Choice</h2>

        {/* PARAGRAPH */}
        <p className="text-black text-[15px] leading-7 mb-4">
          At <strong>Velora Midtown Mohali</strong>, living goes beyond walls and gardens — it’s about freedom, space, comfort, and future growth. Whether you’re building your dream home or investing for long-term appreciation, this township delivers unmatched value in luxury living.
        </p>

        {/* SUB HEADING */}
        <h3 className="text-2xl font-semibold mb-2">
          Prime Location
        </h3>

        {/* TEXT */}
        <p className="text-black text-[15px] mb-3">
          Perfectly positioned on{" "}
          <strong>Zirakpur-Patiala Highway (NH-7)</strong>, Velora Midtown gives you:
        </p>

        {/* LIST */}
        <ul className="list-disc pl-5 text-black text-[15px] leading-7 mb-3 space-y-1">

          <li>
            <strong>15 minutes to Chandigarh International Airport</strong>
          </li>

          <li>
            Quick access to Zirakpur, Chandigarh, Mohali and Panchkula
          </li>

          <li>
            Close proximity to schools, hospitals, shopping centres and entertainment hubs
          </li>

        </ul>

        {/* FINAL TEXT */}
        <p className="text-black text-[15px] leading-7">
          Explore a connected lifestyle where work, travel and leisure come together effortlessly.
        </p>

      </div>

    </section>
  );
};

export default WhySection;