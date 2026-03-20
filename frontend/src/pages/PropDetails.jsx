import React from "react";

const PropDetails = () => {
  return (
    <div className="font-serif text-gray-800">

      {/* HERO SECTION */}
      <section className="relative h-[90vh]">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-between px-20">

          {/* LEFT TEXT */}
          <div className="text-white max-w-xl">
            <h2 className="text-2xl italic mb-2">Elysian Greens</h2>
            <h1 className="text-5xl font-bold mb-3">Elysian Greens</h1>
            <p className="uppercase text-sm mb-2">
              Premium Plotted Development in Mohali
            </p>
            <p className="text-sm mb-6">
              An exclusive township spread over 50 acres
            </p>

            <div className="flex gap-4">
              <button className="bg-[#d4a75d] px-6 py-2 rounded">
                Download Brochure
              </button>
              <button className="bg-green-800 px-6 py-2 rounded">
                Enquire Now
              </button>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-[#0f3d2e] p-6 rounded-lg w-80 text-white shadow-xl">
            <h3 className="text-xl font-semibold mb-4 text-center">
              Get Early Access
            </h3>
            <input className="w-full mb-3 p-2 rounded text-black" placeholder="Name" />
            <input className="w-full mb-3 p-2 rounded text-black" placeholder="Phone" />
            <input className="w-full mb-3 p-2 rounded text-black" placeholder="Email" />
            <button className="w-full bg-[#d4a75d] py-2 rounded font-semibold">
              Book A Site Visit
            </button>
          </div>

        </div>

        {/* CURVE */}
        <div className="absolute bottom-0 w-full">
          <svg viewBox="0 0 1440 120">
            <path
              fill="#f5f5f5"
              d="M0,64L60,80C120,96,240,128,360,128C480,128,600,96,720,90.7C840,85,960,107,1080,101.3C1200,96,1320,64,1380,48L1440,32V160H0Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-[#f5f5f5] text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-2">Welcome to Elysian Greens</h2>
        <p className="italic mb-4">A Luxurious Lifestyle Awaits You</p>
        <p className="max-w-2xl mx-auto mb-10 text-sm">
          Discover an exquisite township spread across 50 Acres with meticulously planned residential plots.
        </p>

        <div className="grid md:grid-cols-4 gap-6">
          {["50 Acre Township", "Plots Starting From 150 Sq.Yds.", "Lush Green Parks", "24/7 Security"].map((item, i) => (
            <div key={i} className="bg-white p-6 shadow rounded">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-16 px-10">
        <h2 className="text-2xl text-center font-semibold mb-10">
          Project Highlights
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {["Clubhouse", "Wide Roads", "Green Parks", "Security"].map((item, i) => (
            <div key={i} className="bg-white shadow rounded overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae"
                className="h-40 w-full object-cover"
              />
              <p className="p-3 text-center">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AMENITIES */}
      <section className="bg-[#f5f5f5] py-16 px-10">
        <h2 className="text-2xl text-center font-semibold mb-10">
          World-Class Amenities
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {["Swimming Pool", "Kids Play Area", "Gym & Sports Zone", "Jogging Track"].map((item, i) => (
            <div key={i} className="bg-white shadow rounded overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1599423300746-b62533397364"
                className="h-40 w-full object-cover"
              />
              <p className="p-3 text-center">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MASTER PLAN */}
      <section className="py-16 px-10">
        <h2 className="text-2xl text-center font-semibold mb-6">Master Plan</h2>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            className="rounded-lg w-full"
          />

          <div className="absolute left-5 top-10 text-white space-y-2">
            <p>📍 5 Min Airport Road</p>
            <p>📍 10 Min Chandigarh</p>
            <p>📍 15 Min IT Hub & Schools</p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#0f3d2e] text-white py-16 text-center px-6">
        <h2 className="text-2xl font-semibold mb-2">
          Get in Touch with Us
        </h2>
        <p className="mb-6">Register Now for Best Pre-Launch Offers!</p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <input className="p-3 rounded text-black" placeholder="Your Name" />
          <input className="p-3 rounded text-black" placeholder="Phone Number" />
          <input className="p-3 rounded text-black" placeholder="Email Address" />
          <button className="bg-[#d4a75d] px-6 rounded">
            ENQUIRE NOW
          </button>
        </div>
      </section>

    </div>
  );
};

export default PropDetails;