import React from "react";

const InvestmentSection = () => {
  return (
    <section className="py-16 bg-white">

      {/* BOXED CONTAINER (IMPORTANT) */}
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          Ideal for Investment
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-700 text-[15px] leading-7 mb-3">
          The Tricity region continues to attract strong real estate demand, and Velora Midtown Mohali’s location and amenities make it a{" "}
          <strong>promising investment option</strong>:
        </p>

        {/* BULLET LIST (DEFAULT STYLE LIKE TEMPLATE) */}
        <ul className="list-disc pl-7 text-gray-700 text-[15px] leading-7 mb-3 space-y-1">
  <li className="ml-1">Strategic location on a major highway</li>
  <li className="ml-1">Growing residential appeal in Mohali</li>
  <li className="ml-1">Strong connectivity to commercial and social infrastructure</li>
  <li className="ml-1">Potential for future property value growth</li>
</ul>

        {/* FINAL TEXT */}
        <p className="text-gray-600 text-[15px] leading-7">
          Whether you’re investing or choosing a place to call home, Velora Midtown offers good long-term prospects.
        </p>

      </div>

    </section>
  );
};

export default InvestmentSection;