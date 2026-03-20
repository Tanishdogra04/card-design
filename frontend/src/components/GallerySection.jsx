import React from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6",
  "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
  "https://images.unsplash.com/photo-1572120360610-d971b9d7767c",
  "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
];
const GallerySection = () => {
  return (
    <section id="Gallery" className="py-16 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-8">
  <h2 className="text-2xl font-semibold">Gallery</h2>
  <div className="w-12 h-[2px] bg-pink-600 mx-auto mt-2"></div>
</div>

        {/* SWIPER */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >

          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="overflow-hidden rounded-lg">

                <img
                  src={img}
                  alt="gallery"
                  className="w-full h-[220px] object-cover hover:scale-105 transition duration-500"
                />

              </div>
            </SwiperSlide>
          ))}

        </Swiper>

      </div>

    </section>
  );
};

export default GallerySection;