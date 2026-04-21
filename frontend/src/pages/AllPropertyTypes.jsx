import React, { useEffect } from "react";
import { ArrowLeft, ArrowRight, Home, Building, Trees, HeartPulse, Building2, Landmark, School, Hospital, Hotel } from "lucide-react";
import { Link } from "react-router-dom";

const optimize = (url, w = 600) =>
  `${url}?w=${w}&auto=format&fit=crop&q=60`;

const CATEGORIES = [
  {
    title: "Builder / Independent Floors",
    icon: <Building2 className="text-blue-500" size={24} />,
    description: "Spacious independent floors designed for modern living.",
    items: [
      { name: "Stilt + 3 Floors", img: "https://images.unsplash.com/photo-1515263487990-61b07816b324" },
      { name: "Stilt + 4 Floors", img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3" },
      { name: "Ground + 2 Floors", img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914" },
    ]
  },
  {
    title: "Flats & Apartments",
    icon: <Building className="text-indigo-500" size={24} />,
    description: "From cozy 1 BHKs to ultra-luxurious Penthouses.",
    items: [
      { name: "1 BHK Flats", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2" },
      { name: "2 BHK Flats", img: "https://images.unsplash.com/photo-1554995207-c18c203602cb" },
      { name: "3 BHK Flats", img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd" },
      { name: "4 BHK Flats", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c" },
      { name: "Penthouses", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750" },
      { name: "Skyvillas", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9" },
      { name: "Studio Apartments", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688" },
    ]
  },
  {
    title: "Independent Houses / Villas",
    icon: <Home className="text-blue-400" size={24} />,
    description: "Experience premium independence and luxury.",
    items: [
      { name: "Row / Town Houses", img: "https://images.unsplash.com/photo-1600585152220-90363fe7e115" },
      { name: "Duplex Villas", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" },
      { name: "Triplex Villas", img: "https://images.unsplash.com/photo-1613977257363-707ba9348227" },
      { name: "Mansions", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0" },
      { name: "Palaces", img: "https://images.unsplash.com/photo-1590059132718-50266070297c" },
      { name: "Estate Homes", img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6" },
    ]
  },
  {
    title: "Residential Land & Plots",
    icon: <Trees className="text-blue-400" size={24} />,
    description: "Invest in land and build your dream future.",
    items: [
      { name: "Plots (75-100 sq yds)", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef" },
      { name: "Plots (150-250 sq yds)", img: "https://images.unsplash.com/photo-1577495508048-b635879837f1" },
      { name: "Plots (250-500 sq yds)", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef" },
      { name: "Farm Houses", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef" },
      { name: "Eco Plots", img: "https://images.unsplash.com/photo-1464822759844-d150f39a7e80" },
    ]
  },
  {
    title: "Senior Living",
    icon: <HeartPulse className="text-blue-400" size={24} />,
    description: "Carefully designed communities for a peaceful retirement.",
    items: [
      { name: "Independent Senior Living", img: "https://images.unsplash.com/photo-1586105251261-72a756497a11" },
      { name: "Memory Care Housing", img: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5" },
    ]
  },
  {
    title: "Government Infrastructure",
    icon: <Landmark className="text-blue-600" size={24} />,
    description: "Verified institutional plots and administrative hubs.",
    items: [
      { name: "Municipal Complexes", img: "https://images.unsplash.com/photo-1541829070764-84a7d30dee7a" },
      { name: "Administrative Hubs", img: "https://images.unsplash.com/photo-1517466787919-ec0fd996a60e" },
      { name: "Public Works Offices", img: "https://images.unsplash.com/photo-1577416412292-747c6607f055" },
    ]
  },
  {
    title: "Educational Institutions",
    icon: <School className="text-blue-600" size={24} />,
    description: "Premium campuses for schools, colleges, and research.",
    items: [
      { name: "University Campuses", img: "https://images.unsplash.com/photo-1523050335456-c7bb0f94883d" },
      { name: "Private K-12 Schools", img: "https://images.unsplash.com/photo-1562774053-701939374585" },
      { name: "Research Centers", img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d" },
    ]
  },
  {
    title: "Healthcare Facilities",
    icon: <Hospital className="text-blue-600" size={24} />,
    description: "State-of-the-art hospitals and diagnostic centers.",
    items: [
      { name: "Multi-Specialty Hospitals", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d" },
      { name: "Specialized Clinics", img: "https://images.unsplash.com/photo-1586773860418-d3b97978c6d6" },
      { name: "Diagnostic Centers", img: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c" },
    ]
  },
  {
    title: "Hospitality & Leisure",
    icon: <Hotel className="text-blue-600" size={24} />,
    description: "Premium stays from luxury hotels to boutique resorts.",
    items: [
      { name: "Luxury Hotels", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945" },
      { name: "Vacation Resorts", img: "https://images.unsplash.com/photo-1540541338287-41700207dee6" },
      { name: "Heritage Guest Houses", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750" },
      { name: "Serviced Apartments", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267" },
    ]
  }
];

const getFilterParams = (categoryTitle, itemName) => {
  let type = "";
  let bhk = "";
  let subType = "";

  const title = categoryTitle.toLowerCase();
  const name = itemName.toLowerCase();

  if (title.includes("flats") || title.includes("apartments")) {
    type = "Apartment";
    if (name.includes("1 bhk")) bhk = "1 BHK";
    else if (name.includes("2 bhk")) bhk = "2 BHK";
    else if (name.includes("3 bhk")) bhk = "3 BHK";
    else if (name.includes("4 bhk")) bhk = "4 BHK";
    else if (name.includes("studio")) bhk = "Studio";
  } else if (title.includes("villas") || title.includes("independent houses")) {
    type = "Villa";
  } else if (title.includes("builder") || title.includes("floors")) {
    type = "Builder Floor";
  } else if (title.includes("land") || title.includes("plots")) {
    type = "Plot";
  } else if (title.includes("senior") || title.includes("retirement")) {
    type = "Senior Living";
  } else if (title.includes("government") || title.includes("education") || title.includes("healthcare") || title.includes("religious")) {
    type = "Institutional";
    if (title.includes("government")) subType = "Government";
    else if (title.includes("education")) subType = "Education";
    else if (title.includes("healthcare")) subType = "Healthcare";
    else if (title.includes("religious")) subType = "Religious & Public";
  } else if (title.includes("hospitality")) {
    type = "Hospitality";
    if (name.includes("hotel")) subType = "Hotels";
    else if (name.includes("resort")) subType = "Resorts";
    else if (name.includes("guest house")) subType = "Guest Houses";
    else if (name.includes("serviced")) subType = "Serviced Apartments";
  }


  return `?type=${type}&bhk=${bhk}&subType=${subType}&title=${encodeURIComponent(itemName)}`;
};

export default function AllPropertyTypes() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">

      {/* Hero Section */}
      <section className="relative h-[300px] sm:h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={optimize("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9", 1400)}
            alt="Hero Background"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </div>

        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 z-10 max-w-7xl mx-auto">
          <Link to="/new-page" className="flex items-center text-gray-300 hover:text-white mb-6 w-fit transition-colors bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
            <ArrowLeft size={18} className="mr-2" />
            Back to Properties
          </Link>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight drop-shadow-md">
            Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">All Types</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl font-medium drop-shadow">
            Discover the perfect property that matches your lifestyle.
          </p>
        </div>
      </section>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 -mt-10 relative z-20">
        <div className="space-y-12 md:space-y-16">
          {CATEGORIES.map((category, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden">

              <div className="p-6 md:p-8 border-b border-gray-100 bg-gray-50 flex flex-col md:flex-row md:items-center gap-4">
                <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100/50 inline-flex w-fit">
                  {category.icon}
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800">{category.title}</h2>
                  <p className="text-sm md:text-base text-gray-500 mt-1">{category.description}</p>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                  {category.items.map((item, i) => (
                    <Link
                      key={i}
                      to={`/category-results${getFilterParams(category.title, item.name)}`}
                      className="group relative rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-gray-100"
                    >
                      {/* Image Area with Zoom */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={optimize(item.img)}
                          alt={item.name}
                          loading="lazy"
                          decoding="async"
                          width="600"
                          height="450"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                          <span className="text-white text-xs font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            Browse all listings →
                          </span>
                        </div>

                        {/* Premium Label Badge */}
                        <div className="absolute top-4 left-4">
                          <div className="bg-white/90 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full shadow-sm text-[10px] font-bold text-gray-800 uppercase tracking-widest">
                            {category.title.split(' ')[0]}
                          </div>
                        </div>
                      </div>

                      {/* Info Area */}
                      <div className="p-5 flex flex-col flex-grow bg-white relative">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-gray-900 font-extrabold text-lg leading-tight group-hover:text-blue-700 transition-colors duration-300">
                            {item.name}
                          </h3>
                        </div>

                        <p className="text-gray-500 text-xs leading-relaxed mb-6">
                          Experience the best of {item.name.toLowerCase()} with handpicked listings and verified details.
                        </p>

                        {/* Footer Section */}
                        <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                          <div className="flex items-center gap-2 text-blue-700 font-bold text-sm tracking-tight transition-all duration-300 group-hover:gap-3">
                            Explore Now
                            <ArrowRight size={16} />
                          </div>

                          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-all duration-300 shadow-sm border border-blue-100/50">
                            {React.cloneElement(category.icon, { size: 18 })}
                          </div>
                        </div>

                        {/* Hover Border Glow */}
                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/20 rounded-b-2xl pointer-events-none transition-colors duration-500"></div>
                      </div>
                    </Link>
                  ))}

                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}