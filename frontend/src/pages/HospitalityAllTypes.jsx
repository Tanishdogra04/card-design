import React, { useEffect } from "react";
import { ArrowLeft, ArrowRight, Hotel, Waves, Home, Building2, Star, MapPin, Coffee, Utensils } from "lucide-react";
import { Link } from "react-router-dom";

const optimize = (url, w = 600) =>
  `${url}?w=${w}&auto=format&fit=crop&q=60`;

const CATEGORIES = [
  {
    title: "Hotels & Luxury Suites",
    icon: <Hotel className="text-rose-600" size={24} />,
    description: "World-class accommodations ranging from global chains to luxury boutiques.",
    items: [
      { name: "Luxury Hotels", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945" },
      { name: "Business Hotels", img: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c" },
      { name: "Boutique Stays", img: "https://images.unsplash.com/photo-1543967354-334ac5d142b3" },
      { name: "Airport Hotels", img: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9" },
    ]
  },
  {
    title: "Resorts & Wellness Retreats",
    icon: <Waves className="text-rose-600" size={24} />,
    description: "Immersive experiences designed for relaxation and rejuvenation.",
    items: [
      { name: "Beachfront Resorts", img: "https://images.unsplash.com/photo-1540541338287-41700207dee6" },
      { name: "Hillside Retreats", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4" },
      { name: "Spa Wellness Centers", img: "https://images.unsplash.com/photo-1544161515-4af6b1d462c2" },
      { name: "Eco-Adventure Lodges", img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470" },
    ]
  },
  {
    title: "Heritage & Boutique Guest Houses",
    icon: <Home className="text-rose-600" size={24} />,
    description: "Unique cultural stays and personalized hospitality experiences.",
    items: [
      { name: "Heritage Villas", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750" },
      { name: "Luxury Homestays", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688" },
      { name: "Bed & Breakfasts", img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4" },
      { name: "Glamping Sites", img: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7" },
    ]
  },
  {
    title: "Serviced & Corporate Housing",
    icon: <Building2 className="text-rose-600" size={24} />,
    description: "Extended-stay solutions with the comforts of home and hotel services.",
    items: [
      { name: "Executive Studios", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267" },
      { name: "Long-stay Suites", img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb" },
      { name: "Corporate Housing", img: "https://images.unsplash.com/photo-1554995207-c18c203602cb" },
      { name: "Coliving Spaces", img: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1" },
    ]
  }
];

const getFilterParams = (categoryTitle, itemName) => {
  let type = "Hospitality";
  let subType = "";

  const title = categoryTitle.toLowerCase();
  const name = itemName.toLowerCase();

  if (name.includes("hotel")) subType = "Hotels";
  else if (name.includes("resort") || name.includes("retreat") || name.includes("lodge")) subType = "Resorts";
  else if (name.includes("guest house") || name.includes("villa") || name.includes("homestay") || name.includes("glamping") || name.includes("breakfast")) subType = "Guest Houses";
  else if (name.includes("serviced") || name.includes("studio") || name.includes("suite") || name.includes("housing") || name.includes("coliving")) subType = "Serviced Apartments";

  return `?type=${type}&subType=${subType}&title=${encodeURIComponent(itemName)}`;
};

export default function HospitalityAllTypes() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pb-20 font-sans">

      {/* Hero Section */}
      <section className="relative min-h-[500px] sm:min-h-[600px] w-full overflow-hidden flex items-center pt-20 pb-20">
        <div className="absolute inset-0">
          <img
            src={optimize("https://images.unsplash.com/photo-1566073771259-6a8506099945", 1400)}
            alt="Hospitality Segments"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-rose-950/90 via-rose-900/60 to-transparent"></div>
        </div>

        <div className="absolute inset-0 flex items-center z-10">
          <div className="max-w-7xl mx-auto px-6 md:px-16 w-full flex flex-col justify-center">
          <Link to="/hospitality" className="flex items-center text-rose-100 hover:text-white mb-8 w-fit transition-all bg-rose-900/40 backdrop-blur-md px-5 py-2.5 rounded-full border border-rose-400/20 group">
            <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Hospitality
          </Link>

          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter drop-shadow-2xl leading-[1.1]">
            Hospitality <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-orange-300">Segments</span>
          </h1>
          <p className="text-xl md:text-2xl text-rose-50 max-w-2xl font-bold drop-shadow leading-tight mb-10">
            Explore the diversity of leisure and hospitality assets, from ultra-luxury resorts to boutique retreats.
          </p>
          
          <div className="flex flex-wrap items-center gap-6">
             <div className="flex items-center gap-3 text-white/80">
                <div className="p-2 bg-rose-500/20 rounded-lg">
                  <Star size={18} className="text-rose-300" fill="currentColor" />
                </div>
                <span className="text-[11px] font-black uppercase tracking-[2px]">Premium Assets</span>
             </div>
             <div className="flex items-center gap-3 text-white/80">
                <div className="p-2 bg-rose-500/20 rounded-lg">
                  <Coffee size={18} className="text-rose-300" />
                </div>
                <span className="text-[11px] font-black uppercase tracking-[2px]">Operational Excellence</span>
             </div>
             <div className="flex items-center gap-3 text-white/80">
                <div className="p-2 bg-rose-500/20 rounded-lg">
                  <Utensils size={18} className="text-rose-300" />
                </div>
                <span className="text-[11px] font-black uppercase tracking-[2px]">Leisure Ready</span>
             </div>
          </div>
        </div>
      </div>
    </section>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-20 relative z-20">
        <div className="space-y-16 md:space-y-24">
          {CATEGORIES.map((category, idx) => (
            <div key={idx} className="group/section">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
                <div className="flex gap-6 items-start">
                   <div className="w-16 h-16 bg-white rounded-[2rem] shadow-xl border border-rose-100 flex items-center justify-center text-rose-600 group-hover/section:scale-110 transition-transform duration-500">
                      {category.icon}
                   </div>
                   <div>
                      <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-2">{category.title}</h2>
                      <p className="text-slate-500 font-bold max-w-xl leading-relaxed">{category.description}</p>
                   </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {category.items.map((item, i) => (
                  <Link
                    key={i}
                    to={`/category-results${getFilterParams(category.title, item.name)}`}
                    className="group relative rounded-[2.5rem] overflow-hidden bg-white shadow-sm hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] transition-all duration-700 flex flex-col h-[400px] border border-gray-100"
                  >
                    {/* Image Area */}
                    <div className="absolute inset-0">
                      <img
                        src={optimize(item.img, 800)}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                    </div>

                    {/* Content Overlay */}
                    <div className="relative h-full p-8 flex flex-col justify-end text-white">
                      <div className="mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                         <div className="bg-rose-600 w-10 h-1 rounded-full mb-4"></div>
                         <h3 className="text-2xl font-black tracking-tight leading-tight mb-2">
                           {item.name}
                         </h3>
                         <p className="text-gray-300 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            Explore Assets →
                         </p>
                      </div>

                      <div className="absolute top-6 left-6">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-2xl shadow-xl">
                          <span className="text-[9px] font-black uppercase tracking-[2px]">
                            {category.title.split(' ')[0]}
                          </span>
                        </div>
                      </div>

                      <div className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                         <ArrowRight size={20} />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Section */}
      <section className="mt-32 max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
         <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
               <img src="https://images.unsplash.com/photo-1540541338287-41700207dee6" className="w-full h-full object-cover" alt="" />
            </div>
            <div className="relative z-10 max-w-2xl">
               <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">Institutional Quality Hospitality Assets</h2>
               <p className="text-slate-400 text-lg font-medium mb-10 leading-relaxed">
                  We curate only the most promising hospitality investments, ensuring regulatory compliance, operational potential, and strategic location advantages.
               </p>
               <Link to="/hospitality" className="inline-flex items-center gap-3 bg-rose-600 hover:bg-rose-700 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest transition-all hover:gap-5">
                  View Listings <ArrowRight size={20} />
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
}
