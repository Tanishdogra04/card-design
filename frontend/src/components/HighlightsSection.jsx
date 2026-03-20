import React from "react";
import { MapPin, ParkingCircle, Route } from "lucide-react";

const HighlightsSection = () => {
  return (
    <section className="py-16 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* HEADING */}
        <h2 className="text-3xl font-semibold mb-10">
          Velora Midtown Patiala Highway
        </h2>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition">

  <div className="flex justify-center mb-4 text-pink-600 text-3xl">
    <i className="fas fa-road"></i>
  </div>

  <h3 className="text-lg font-semibold mb-2">
    60Ft-40Ft Internal Roads
  </h3>

  <p className="text-gray-600 text-sm leading-6">
    Enjoy Living in a premium Township with wide Roads, Green Spaces,
    Ample Sun, Breeze and Sky.
  </p>

</div>

          {/* CARD 2 */}
          <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition">

  <div className="flex justify-center mb-4 text-pink-600 text-4xl">
    <i className="fas fa-parking"></i>
  </div>

  <h3 className="text-lg font-semibold mb-2">
    7 Acre Green Park
  </h3>

  <p className="text-gray-600 text-sm leading-6">
    7 Acre Green Spaces with Fitness, Activity, Sports Arena and Elderly Park
  </p>

</div>

          {/* CARD 3 */}
          <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition">

  <div className="flex justify-center mb-4 text-pink-600 text-4xl">
    <i className="fas fa-map-marker-alt"></i>
  </div>

  <h3 className="text-lg font-semibold mb-2">
    Premium Location
  </h3>

  <p className="text-gray-600 text-sm leading-6">
    Prime located on Zirakpur Patiala Highway and just 15 mins to
    International Airport Chandigarh
  </p>

</div>

        </div>

      </div>

    </section>
  );
};

export default HighlightsSection;