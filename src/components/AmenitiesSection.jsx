import React, { useState } from "react";

const AmenitiesSection = () => {
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(false);

  return (
    <section className="py-16 bg-white">

      <div className="w-full grid md:grid-cols-2 items-center">

        {/* LEFT SIDE (TEXT) */}
        <div className="px-10 md:px-16 py-10">

          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            World-Class Amenities
          </h2>

          <p className="text-gray-700 text-[15px] leading-7 mb-3">
            Velora Midtown Mohali is equipped with lifestyle and recreational amenities that enhance everyday living:
          </p>

          <p className="font-semibold text-gray-800 mb-3">
            Key Features & Facilities
          </p>

          <ul className="list-disc pl-7 text-gray-700 text-[15px] leading-7 space-y-1">
            <li>Clubhouse with party hall and indoor activities</li>
            <li>Splash pool and gym</li>
            <li>Jogging and fitness track</li>
            <li>Basketball & badminton courts</li>
            <li>Dedicated children’s play area</li>
            <li>
              <strong>7-acre green park</strong> with water bodies
            </li>
            <li>3-tier security and power backup</li>
            <li>Proximity to shopping, schools, and healthcare</li>
          </ul>

        </div>

        {/* RIGHT SIDE (IMAGE CLICKABLE) */}
        <div className="h-full p-6">

          <img
            src="/siteplan-1.png"
            alt="Site Plan"
            onClick={() => setOpen(true)}
            className="w-full h-full object-cover cursor-pointer rounded-lg shadow-lg hover:scale-105 transition duration-300"
          />

        </div>

      </div>

      {/* 🔥 LIGHTBOX MODAL */}
      {open && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >

          {/* TOP RIGHT CONTROLS */}
          <div className="absolute top-4 right-4 flex gap-5 text-white text-xl z-50">

            {/* ZOOM */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setZoom(!zoom);
              }}
              title="Zoom"
              className="hover:text-pink-400"
            >
              🔍
            </button>

            {/* FULLSCREEN */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                const elem = document.documentElement;
                if (elem.requestFullscreen) elem.requestFullscreen();
              }}
              title="Fullscreen"
              className="hover:text-pink-400"
            >
              ⛶
            </button>

            {/* SHARE */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigator.clipboard.writeText(window.location.href);
                alert("Link copied!");
              }}
              title="Share"
              className="hover:text-pink-400"
            >
              🔗
            </button>

            {/* CLOSE */}
            <button
              onClick={() => setOpen(false)}
              title="Close"
              className="hover:text-red-400 text-2xl"
            >
              ✕
            </button>

          </div>

          {/* IMAGE */}
          <img
            src="/siteplan-1.png"
            alt="Full View"
            onClick={(e) => e.stopPropagation()}
            className={`max-w-[90%] max-h-[90%] rounded-lg border-4 border-white transition duration-300 ${
              zoom ? "scale-150" : "scale-100"
            }`}
          />

        </div>
      )}

    </section>
  );
};

export default AmenitiesSection;