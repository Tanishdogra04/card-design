import React from "react";

const LocationSection = () => {
  return (
    <section className="py-16 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div className="bg-black text-white p-8 rounded-xl shadow-lg">

          <h2 className="text-2xl font-semibold mb-4">
            Prime Location in Mohali
          </h2>

          <p className="text-gray-300 text-[15px] leading-7 mb-4">
            Situated on <strong>NH-7 (Patiala Highway)</strong> near PR-11 in Mohali,
            <strong> Velora Midtown</strong> offers excellent connectivity and urban accessibility:
          </p>

          <ul className="list-disc pl-5 text-gray-300 text-[15px] space-y-2 mb-4">
            <li>15 minutes to Chandigarh International Airport</li>
            <li>Close to Chandigarh, Mohali & Panchkula</li>
            <li>Easy access to schools, hospitals & shopping</li>
            <li>Located on a fast-growing real estate corridor</li>
          </ul>

          <p className="text-gray-400 text-sm">
            Ideal for both living and investment growth.
          </p>

        </div>

        {/* RIGHT SIDE MAP */}
        <div className="relative w-full h-[350px] rounded-xl overflow-hidden shadow-lg">

          {/* MAP (NON-CLICKABLE) */}
          <iframe
            src="https://www.google.com/maps?q=Velora+Midtown+Mohali&output=embed"
            className="w-full h-full border-0 pointer-events-none"
            loading="lazy"
          ></iframe>

          {/* OVERLAY CLICK */}
          <a
            href="https://www.google.com/maps?q=Velora+Midtown+Mohali"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/30 transition duration-300"
          >

            {/* BUTTON */}
            <div className="bg-white text-black px-5 py-2 rounded-lg shadow font-semibold">
              View on Google Maps →
            </div>

          </a>

        </div>

      </div>

    </section>
  );
};

export default LocationSection;