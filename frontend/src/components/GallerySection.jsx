import React from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const GallerySection = ({ property }) => {
  const images = property?.images || [];

  return (
    <section id="gallery" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADING */}
        <div className="text-center mb-16">
           <p className="text-blue-700 text-xs font-black uppercase tracking-[4px] mb-3">Visual Tour</p>
           <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-600">Gallery</span></h2>
           <div className="w-20 h-1.5 bg-gradient-to-r from-blue-700 to-blue-500 mx-auto mt-6 rounded-full shadow-[0_2px_10px_rgba(59,130,246,0.3)]"></div>
        </div>

        {/* SWIPER */}
        <div className="relative group px-10">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={4}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={{
               nextEl: '.swiper-button-next',
               prevEl: '.swiper-button-prev',
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="pb-20"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="overflow-hidden rounded-3xl shadow-xl aspect-[4/5] relative group/item">
                  <img
                    src={img}
                    alt={`${property.name} gallery ${index}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex items-end p-6">
                     <div className="text-white">
                        <p className="text-xs font-bold uppercase tracking-wider mb-1">Elite View</p>
                        <h4 className="text-lg font-bold">Image {index + 1}</h4>
                     </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev !text-blue-700 !w-12 !h-12 !bg-white/80 !backdrop-blur-md !rounded-full !shadow-xl !after:text-lg hover:!scale-110 transition-transform"></div>
          <div className="swiper-button-next !text-blue-700 !w-12 !h-12 !bg-white/80 !backdrop-blur-md !rounded-full !shadow-xl !after:text-lg hover:!scale-110 transition-transform"></div>
        </div>

      </div>
    </section>
  );
};

export default GallerySection;