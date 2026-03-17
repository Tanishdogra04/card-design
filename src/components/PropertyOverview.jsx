import React from "react";

const PropertyOverview = ({ property }) => {
  return (
    <section id="About" className="py-16 bg-white">

      <div className="w-full grid md:grid-cols-2 items-center">

        {/* LEFT SIDE */}
      <div className="px-10 md:px-16 py-10">

  {/* TITLE */}
  <h1 className="text-[38px] font-semibold leading-tight mb-5 text-gray-900">
    {property.name} — Premium Plotted Township on {property.location}
  </h1>

  {/* DESCRIPTION */}
  <p className="text-gray-700 text-[15px] leading-7 mb-8 max-w-xl">
    <strong>{property.name}</strong> is a{" "}
    <em>50-acre luxury residential township</em> strategically located on{" "}
    <strong>{property.location}</strong> — one of the most promising real estate corridors in the Tricity region.
    This master-planned community offers thoughtfully designed residential plots,
    world-class amenities and seamless connectivity.
  </p>

  {/* GRID WRAPPER */}
  <div className="max-w-xl">

    {/* ROW 1 */}
    <div className="grid grid-cols-3 border-t border-gray-300 text-[14px]">

      <div className="py-4 pr-4 border-r border-gray-300">
        Acre Township 50
      </div>

      <div className="py-4 px-4 border-r border-gray-300">
        Residential Plotting 3
      </div>

      <div className="py-4 pl-4">
        Premium Luxury Residential Township
      </div>

    </div>

    {/* ROW 2 */}
    <div className="grid grid-cols-3 border-t border-gray-300 text-[14px]">

      <div className="py-4 pr-4 border-r border-gray-300">
        Acre Green Park 7
      </div>

      <div className="py-4 px-4 border-r border-gray-300">
        Sq.Yrd Plot Size 119.44 / 141.67
      </div>

      <div className="py-4 pl-4">
        Well Designed Gated Township
      </div>

    </div>

  </div>

</div>

        {/* RIGHT SIDE IMAGE */}
        <div className="h-full">

          <img
            src="/velora-midtown.jpg"
            alt="Velora Midtown"
            className="w-full h-full object-cover"
          />

        </div>

      </div>

    </section>
  );
};

export default PropertyOverview;