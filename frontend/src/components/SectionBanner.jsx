import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const SectionBanner = ({ 
  title, 
  subtitle, 
  ctaText = "Explore Now", 
  link = "#", 
  bgImage = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab", 
  gradient = "from-black/60 to-transparent",
  reverse = false
}) => {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden group">
      {/* Background Image with Parallax-like effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      
      {/* Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-r ${reverse ? 'flex-row-reverse ' + gradient.replace('r', 'l') : gradient}`} />

      {/* Content */}
      <div className={`relative h-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col justify-center ${reverse ? 'items-end text-right' : 'items-start text-left'}`}>
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-gray-200 font-light">
            {subtitle}
          </p>
          <Link 
            to={link}
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-black hover:text-white transition-all duration-300 group/btn"
          >
            {ctaText}
            <ArrowRight size={20} className="transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </div>
  );
};

export default SectionBanner;
