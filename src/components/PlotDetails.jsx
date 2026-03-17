import React from "react";

const PlotDetails = () => {
  return (
   <section className="py-16 bg-gray-50">

  <div className="w-full grid md:grid-cols-2 items-center">

    {/* LEFT IMAGE */}
    <div className="h-full">

      <img
        src="/veloralocation.jpg"
        alt="Residential Plots"
        className="w-full h-full object-cover"
      />

    </div>

    {/* RIGHT CONTENT */}
    <div className="px-10 md:px-16 py-10">

      {/* HEADING */}
      <h2 className="text-3xl font-bold mb-6">
        Thoughtfully Planned Residential Plots
      </h2>

      {/* PARAGRAPH */}
      <p className="text-gray-700 mb-6 leading-relaxed">
        Velora Midtown Mohali provides premium{" "}
        <strong>144 sq. yd plotted development</strong> designed for modern living.
        The township layout emphasizes open space, sunlight, greenery,
        and a community-centric lifestyle.
      </p>

      {/* SUB HEADING */}
      <h4 className="font-semibold mb-3">Plot Highlights</h4>

      {/* LIST */}
      <ul className="space-y-2 text-gray-700 mb-6">
        <li>*Well-planned 144 sq. yd residential plots</li>
        <li>*Wide <strong>60 ft and 40 ft internal roads</strong></li>
        <li>*Spacious plots ideal for independent homes</li>
        <li>*Suitable for families and investment purposes</li>
      </ul>

      {/* FINAL TEXT */}
      <p className="text-gray-600 mb-6">
        Whether you’re building your dream home or investing for future gains,
        Velora Midtown offers a balanced residential environment.
      </p>

      {/* BUTTON */}
      <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition flex items-center gap-2">
        ✉ Enquire Now
      </button>

    </div>

  </div>

</section>
  );
};

export default PlotDetails;