import React, { useEffect } from "react";
import { ArrowLeft, ArrowRight, Landmark, School, Hospital, Building2, ShieldCheck, FileCheck, Landmark as GovtIcon } from "lucide-react";
import { Link } from "react-router-dom";

const optimize = (url, w = 600) =>
  `${url}?w=${w}&auto=format&fit=crop&q=60`;

const CATEGORIES = [
  {
    title: "Government Infrastructure",
    icon: <GovtIcon className="text-blue-600" size={24} />,
    description: "Authoritative administrative hubs and civic service complexes.",
    items: [
      { name: "Municipal Complexes", img: "https://images.unsplash.com/photo-1541829070764-84a7d30dee7a" },
      { name: "Administrative Hubs", img: "https://images.unsplash.com/photo-1517466787919-ec0fd996a60e" },
      { name: "Public Works Offices", img: "https://images.unsplash.com/photo-1577416412292-747c6607f055" },
      { name: "Civic Research Labs", img: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad" },
    ]
  },
  {
    title: "Educational Institutions",
    icon: <School className="text-blue-600" size={24} />,
    description: "Premium campuses designed for academic excellence and research.",
    items: [
      { name: "University Campuses", img: "https://images.unsplash.com/photo-1523050335456-c7bb0f94883d" },
      { name: "Private K-12 Schools", img: "https://images.unsplash.com/photo-1562774053-701939374585" },
      { name: "Technical Academies", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3" },
      { name: "Medical Colleges", img: "https://images.unsplash.com/photo-1576091160550-217359f4812a" },
    ]
  },
  {
    title: "Healthcare Facilities",
    icon: <Hospital className="text-blue-600" size={24} />,
    description: "Critical infrastructure for healthcare and medical diagnostics.",
    items: [
      { name: "Multi-Specialty Hospitals", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d" },
      { name: "Diagnostic Hubs", img: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c" },
      { name: "Specialized Clinics", img: "https://images.unsplash.com/photo-1586773860418-d3b97978c6d6" },
      { name: "Research Hospitals", img: "https://images.unsplash.com/photo-1538108197020-03875323719b" },
    ]
  },
  {
    title: "Religious & Public Spaces",
    icon: <Building2 className="text-blue-600" size={24} />,
    description: "Heritage landmarks and community-centric public spaces.",
    items: [
      { name: "Community Hubs", img: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3" },
      { name: "Heritage Landmarks", img: "https://images.unsplash.com/photo-1548013146-72479768bbaa" },
      { name: "Public Libraries", img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36" },
      { name: "Corporate HQs", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab" },
    ]
  }
];

const getFilterParams = (categoryTitle, itemName) => {
  let type = "Institutional";
  let subType = "";

  const title = categoryTitle.toLowerCase();
  
  if (title.includes("government")) subType = "Government";
  else if (title.includes("education")) subType = "Education";
  else if (title.includes("healthcare")) subType = "Healthcare";
  else if (title.includes("religious")) subType = "Religious & Public";

  return `?type=${type}&subType=${subType}&title=${encodeURIComponent(itemName)}`;
};

export default function InstitutionalAllTypes() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">

      {/* Hero Section */}
      <section className="relative h-[300px] sm:h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={optimize("https://images.unsplash.com/photo-1577416412292-747c6607f055", 1400)}
            alt="Institutional Assets"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/60 to-transparent"></div>
        </div>

        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 z-10 max-w-7xl mx-auto">
          <Link to="/institutional" className="flex items-center text-blue-200 hover:text-white mb-6 w-fit transition-colors bg-blue-900/40 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-400/20">
            <ArrowLeft size={18} className="mr-2" />
            Back to Institutional
          </Link>

          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter drop-shadow-2xl">
            Asset <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">Segments</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl font-bold drop-shadow leading-tight">
            Comprehensive index of specialized infrastructure, public services, and large-scale educational facilities.
          </p>
          
          <div className="flex items-center gap-6 mt-8">
             <div className="flex items-center gap-2 text-white/60">
                <ShieldCheck size={20} className="text-blue-400" />
                <span className="text-[10px] font-black uppercase tracking-widest">Verified Assets</span>
             </div>
             <div className="flex items-center gap-2 text-white/60">
                <FileCheck size={20} className="text-blue-400" />
                <span className="text-[10px] font-black uppercase tracking-widest">Regulatory Cleared</span>
             </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 -mt-10 relative z-20">
        <div className="space-y-12 md:space-y-16">
          {CATEGORIES.map((category, idx) => (
            <div key={idx} className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-blue-50 overflow-hidden">

              <div className="p-8 md:p-10 border-b border-gray-50 bg-gradient-to-r from-blue-50/50 to-white flex flex-col md:flex-row md:items-center gap-6">
                <div className="w-16 h-16 bg-white rounded-3xl shadow-sm border border-blue-100/50 flex items-center justify-center text-blue-700">
                  {category.icon}
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">{category.title}</h2>
                  <p className="text-sm md:text-base text-slate-500 font-bold mt-1">{category.description}</p>
                </div>
              </div>

              <div className="p-8 md:p-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

                  {category.items.map((item, i) => (
                    <Link
                      key={i}
                      to={`/category-results${getFilterParams(category.title, item.name)}`}
                      className="group relative rounded-[2rem] overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-gray-100"
                    >
                      {/* Image Area with Zoom */}
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={optimize(item.img)}
                          alt={item.name}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                          <span className="text-white text-[10px] font-black uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            Explore Assets →
                          </span>
                        </div>

                        <div className="absolute top-4 left-4">
                          <div className="bg-white/90 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full shadow-sm text-[9px] font-black text-blue-800 uppercase tracking-[2px]">
                            {category.title.split(' ')[0]}
                          </div>
                        </div>
                      </div>

                      {/* Info Area */}
                      <div className="p-6 flex flex-col flex-grow bg-white">
                        <h3 className="text-slate-900 font-black text-xl leading-none mb-3 group-hover:text-blue-700 transition-colors duration-300 tracking-tight">
                          {item.name}
                        </h3>

                        <p className="text-slate-500 text-[11px] font-bold leading-relaxed mb-6 uppercase tracking-wider">
                          Strategic infrastructure for {item.name.toLowerCase()}.
                        </p>

                        <div className="mt-auto pt-5 border-t border-gray-50 flex items-center justify-between">
                          <div className="flex items-center gap-2 text-blue-700 font-black uppercase tracking-widest text-[11px] transition-all duration-300 group-hover:gap-3">
                            View Portfolio
                            <ArrowRight size={14} />
                          </div>

                          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-all duration-300">
                            {React.cloneElement(category.icon, { size: 18 })}
                          </div>
                        </div>
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
