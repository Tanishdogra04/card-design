import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Share2,
  MapPin,
  Download,
  Phone,
  Mail,
  Building2,
  Wifi,
  Users,
  Lock,
  Clock,
  TrendingUp,
  Zap,
  Check,
  X,
  Calendar,
  Star,
  Award,
  Shield,
  Car,
  Coffee,
  Monitor,
  Globe,
  Navigation,
  ArrowRight,
  ExternalLink,
  Layers,
  Maximize2,
  Briefcase,
  Activity,
  Box,
  ShieldCheck
} from "lucide-react";
import data from "../data/newdataproperty.json";

const professionalAmenities = {
  "Private Office": [
    { name: "Dedicated Workspace", icon: Monitor, description: "Personal office with privacy" },
    { name: "High-Speed Internet", icon: Wifi, description: "1Gbps fiber connection" },
    { name: "24/7 Access", icon: Clock, description: "Round-the-clock building access" },
    { name: "Reception Services", icon: Users, description: "Professional front desk support" },
    { name: "Meeting Rooms", icon: Building2, description: "Bookable conference facilities" },
    { name: "Parking Space", icon: Car, description: "Reserved parking included" },
    { name: "Security System", icon: Shield, description: "Advanced security infrastructure" },
    { name: "Pantry Facilities", icon: Coffee, description: "Fully equipped kitchen area" }
  ],
  "Managed Office": [
    { name: "Fully Managed", icon: Award, description: "Complete facility management" },
    { name: "IT Support", icon: Monitor, description: "Technical assistance included" },
    { name: "Cleaning Services", icon: Shield, description: "Daily professional cleaning" },
    { name: "Mail Handling", icon: Mail, description: "Mail and package management" },
    { name: "Executive Lounge", icon: Coffee, description: "Premium relaxation area" },
    { name: "Business Address", icon: MapPin, description: "Prestigious business address" },
    { name: "Utilities Included", icon: Zap, description: "Electricity and maintenance" },
    { name: "Flexible Terms", icon: Calendar, description: "Month-to-month agreements" }
  ],
  "IT Park": [
    { name: "Data Center", icon: Monitor, description: "On-site data center facilities" },
    { name: "Redundant Power", icon: Zap, description: "Backup power systems" },
    { name: "High-Speed Connectivity", icon: Globe, description: "Multiple ISP connections" },
    { name: "Server Rooms", icon: Building2, description: "Dedicated server infrastructure" },
    { name: "Climate Control", icon: Shield, description: "Advanced HVAC systems" },
    { name: "24/7 Monitoring", icon: Clock, description: "Continuous system monitoring" },
    { name: "Disaster Recovery", icon: Shield, description: "Comprehensive backup systems" },
    { name: "Scalable Infrastructure", icon: TrendingUp, description: "Expandable IT resources" }
  ],
  "Coworking Space": [
    { name: "Hot Desking", icon: Monitor, description: "Flexible workspace options" },
    { name: "Community Events", icon: Users, description: "Networking and social events" },
    { name: "Coffee & Snacks", icon: Coffee, description: "Complimentary refreshments" },
    { name: "Phone Booths", icon: Phone, description: "Private call rooms" },
    { name: "Printing Services", icon: Download, description: "Document printing facilities" },
    { name: "Storage Lockers", icon: Lock, description: "Secure personal storage" },
    { name: "High-Speed WiFi", icon: Wifi, description: "Ultra-fast internet access" },
    { name: "Community Manager", icon: Users, description: "Dedicated community support" }
  ]
};

const MotionSection = ({ children, id, title }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="py-16 md:py-24"
  >
    {title && (
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
          {title}
        </h2>
        <div className="h-[2px] flex-1 bg-gradient-to-r from-slate-200 to-transparent"></div>
      </div>
    )}
    {children}
  </motion.section>
);

export default function OfficeDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [liked, setLiked] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");
  const [showGallery, setShowGallery] = useState(false);
  
  const contentRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const office = data.find(p => p.id === parseInt(id)) ||
                 data.find(p => p.type === "Office") || {
    id: 15, // Using a real office ID as default fallback
    name: "Prestige Business Park",
    developer: "Prestige Group",
    location: "Bangalore",
    price: 50000000,
    area: "2500 sq.ft",
    configuration: "Spacious Office",
    subType: "Managed Office",
    badge: "Ready to Move",
    images: [
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop",
    ],
    rera: "PRM/RERA/2401",
    amenities: ["High-Speed WiFi", "24/7 Security", "Parking", "Meeting Rooms"]
  };

  const baseAmenities = professionalAmenities[office.subType] || professionalAmenities["Private Office"];
  const customAmenities = (office.amenities || []).filter(a => !baseAmenities.some(ba => ba.name.toLowerCase() === a.toLowerCase()));
  
  const amenities = [
    ...baseAmenities,
    ...customAmenities.map(name => ({ name, icon: Check, description: "Property feature" }))
  ];

  const images = office.images || [
    "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-100px 0px -40% 0px" }
    );

    const sections = ["overview", "specs", "amenities", "blueprints", "location"];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: office.name,
        text: `Explore this prestigious office space: ${office.name}`,
        url: window.location.href,
      });
    }
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 120,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB]">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-amber-500 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Premium Header */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-slate-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.button
              whileHover={{ x: -4 }}
              onClick={() => navigate(-1)}
              className="flex items-center gap-3 text-slate-900 group font-bold tracking-tight"
            >
              <div className="p-2 bg-slate-50 rounded-full group-hover:bg-slate-100 transition-colors">
                <ChevronLeft size={18} className="text-slate-600" />
              </div>
              <span className="hidden sm:inline">Back to Portfolio</span>
            </motion.button>

            <div className="flex items-center gap-4">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setLiked(!liked)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all border ${
                  liked 
                    ? "bg-red-50 border-red-100 text-red-500" 
                    : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
                }`}
              >
                <Heart size={18} className={liked ? "fill-current" : ""} />
                <span className="text-sm font-bold">{liked ? "Saved" : "Save"}</span>
              </motion.button>
              
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={handleShare}
                className="p-3 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200"
              >
                <Share2 size={18} />
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Immersive Gallery Section */}
      <section className="pt-24 pb-8 px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-3 h-[70vh] min-h-[500px]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-3xl cursor-zoom-in"
            onClick={() => setShowGallery(true)}
          >
            <img src={images[0]} alt="Hero" className="w-full h-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-6 left-6">
              <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-slate-900 shadow-xl">
                {office.badge || "Exclusive Listing"}
              </span>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-1 md:row-span-1 border relative group overflow-hidden rounded-3xl"
          >
            <img src={images[1]} alt="Interior" className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-3xl"
          >
            <img src={images[2]} alt="Meeting" className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 md:row-span-1 relative group overflow-hidden rounded-3xl cursor-pointer"
            onClick={() => setShowGallery(true)}
          >
            <img src={images[3]} alt="Lounge" className="w-full h-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="flex items-center gap-2 text-white font-black text-lg">
                <Maximize2 size={24} />
                View All {images.length} Photos
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating Info Strip */}
      <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-xl border-y border-slate-100 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 text-amber-600 mb-1">
                <MapPin size={14} className="fill-amber-500/20" />
                <span className="text-xs font-black uppercase tracking-widest">{office.location}</span>
                <div className="w-1 h-1 bg-slate-300 rounded-full" />
                <span className="text-xs font-black uppercase tracking-widest text-slate-500">{office.developer}</span>
              </div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl md:text-3xl font-black text-slate-900">{office.name}</h1>
                <div className="px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-lg hidden sm:flex items-center gap-2">
                   <ShieldCheck className="text-emerald-500" size={14} />
                   <span className="text-[10px] font-black text-emerald-700 uppercase tracking-widest">RERA: {office.rera}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-8 pr-4 border-r border-slate-200 hidden md:flex">
                <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Space</p>
                    <p className="text-lg font-black text-slate-900">{office.area}</p>
                </div>
                <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Monthly Rent</p>
                    <p className="text-lg font-black text-slate-900">₹{(office.price * 0.0008).toLocaleString()}</p>
                </div>
                <div>
                    <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-1">ROI Potential</p>
                    <p className="text-lg font-black text-emerald-600">12.5% p.a.</p>
                </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-bold text-slate-400">Capital Value</p>
                <p className="text-2xl font-black text-slate-900">₹{(office.price / 10000000).toFixed(1)}<span className="text-lg text-slate-500 ml-1">Cr</span></p>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection("contact-form")}
                className="bg-amber-500 text-white font-black px-6 py-3 rounded-2xl shadow-lg shadow-amber-200 hover:bg-amber-600 transition-all flex items-center gap-2"
              >
                Inquire Now
                <ArrowRight size={18} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-12">
          
          {/* Main Column */}
          <div className="lg:col-span-8">
            
            {/* Custom Section Navigation */}
            <div className="sticky top-[148px] z-30 bg-[#FDFCFB]/90 backdrop-blur-md py-4 mb-4 border-b border-slate-100 hidden md:block">
              <div className="flex gap-8 overflow-x-auto no-scrollbar">
                {[
                  { id: "overview", label: "Executive Overview" },
                  { id: "specs", label: "Technical Specs" },
                  { id: "amenities", label: "Amenities" },
                  { id: "blueprints", label: "Space Planning" },
                  { id: "location", label: "Business District" }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`whitespace-nowrap text-sm font-black uppercase tracking-widest transition-all relative py-2 ${
                      activeSection === item.id ? "text-slate-900" : "text-slate-400 hover:text-slate-600"
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <motion.div 
                        layoutId="activeSection"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500"
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-4">
              
              <MotionSection id="overview" title="Executive Overview">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                   <div className="p-8 bg-slate-900 text-white rounded-[2rem] shadow-2xl relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700" />
                      <div className="relative z-10">
                        <TrendingUp className="text-amber-500 mb-4" size={32} />
                        <h3 className="text-xl font-black mb-2 tracking-tight">Investment Grade</h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                          High-yield commercial asset with established blue-chip tenants and 4.5 year weighted average lease expiry.
                        </p>
                        <div className="flex items-center gap-3 text-amber-500 font-black">
                          <Activity size={20} />
                          <span>Market Average Outperform +2.4%</span>
                        </div>
                      </div>
                   </div>
                   
                   <div className="p-8 bg-white border border-slate-200 rounded-[2rem] relative overflow-hidden group">
                      <Briefcase className="text-slate-900 mb-4" size={32} />
                      <h3 className="text-xl font-black mb-2 tracking-tight text-slate-900">Workplace Strategy</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        Optimized for modern collaboration with an efficiency ratio of 84.5%. Designed to hybrid-work standards with LEED certification.
                      </p>
                   </div>
                </div>

                <div className="prose prose-slate max-w-none">
                  <p className="text-lg text-slate-600 leading-relaxed font-medium mb-6">
                    This premium corporate suite at <span className="text-slate-900 font-bold">{office.name}</span> defines a new standard in prime commercial real estate. Developed by <span className="text-slate-900 font-bold">{office.developer}</span> and strategically anchored in {office.location}'s most sought-after business corridor, it offers the perfect synergy of prestige and performance.
                  </p>
                  
                  {/* Executive Factsheet */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 mb-8">
                     <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Asset Status</p>
                        <p className="text-sm font-black text-slate-900">{office.status || "Ready to Move"}</p>
                     </div>
                     <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Ownership</p>
                        <p className="text-sm font-black text-slate-900">{office.ownership || "Freehold"}</p>
                     </div>
                     <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Furnishing</p>
                        <p className="text-sm font-black text-slate-900">{office.furnishing || "Warm Shell"}</p>
                     </div>
                     <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Configuration</p>
                        <p className="text-sm font-black text-slate-900">{office.subType}</p>
                     </div>
                  </div>

                  <p className="text-slate-500 leading-relaxed italic border-l-4 border-amber-500 pl-6 py-2 mb-8 bg-white/50 rounded-r-xl">
                    "A transformative workspace designed for legacy-building enterprises and forward-thinking corporate leaders."
                  </p>
                </div>
              </MotionSection>

              <MotionSection id="specs" title="Technical Specifications">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-1 px-1 bg-slate-100 rounded-3xl overflow-hidden">
                  {[
                    { label: "Floor to Ceiling", value: office.subType === "IT Park" ? "3.8 Meters" : "3.2 Meters", icon: Layers },
                    { label: "HVAC System", value: office.status === "Ready to Move" ? "Central VRV" : "Provisional", icon: Zap },
                    { label: "Power Redundancy", value: "100% (2N+1)", icon: Activity },
                    { label: "Slab Loading", value: "5.0 kN/sq.m", icon: Box },
                    { label: "Comm. Infrastructure", value: "OFC Enabled", icon: Globe },
                    { label: "Safety Compliance", value: "NFPA Certified", icon: Shield }
                  ].map((spec, i) => (
                    <div key={i} className="bg-white p-6 hover:bg-slate-50 transition-all group">
                      <spec.icon className="text-slate-400 mb-3 group-hover:text-amber-500 transition-colors" size={20} />
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{spec.label}</p>
                      <p className="text-sm font-black text-slate-900">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </MotionSection>

              <MotionSection id="amenities" title="Corporate Amenities">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {amenities.map((amenity, index) => (
                    <motion.div 
                      key={index} 
                      whileHover={{ scale: 1.02 }}
                      className="p-6 bg-white border border-slate-100 rounded-3xl flex gap-5 group hover:border-amber-200 transition-all shadow-sm hover:shadow-amber-100/20"
                    >
                      <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:border-amber-500 transition-all duration-300">
                        <amenity.icon className="text-slate-700 group-hover:text-white transition-colors" size={24} />
                      </div>
                      <div>
                        <h4 className="font-black text-slate-900 mb-1">{amenity.name}</h4>
                        <p className="text-xs text-slate-500 leading-relaxed font-medium">{amenity.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </MotionSection>

              <MotionSection id="blueprints" title="Space Planning">
                <div className="bg-slate-900 rounded-[3rem] p-12 text-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-10" />
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-amber-500/20 border border-amber-500/30 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                      <Maximize2 className="text-amber-500" size={32} />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-4">Precision Blueprints</h3>
                    <p className="text-slate-400 max-w-md mx-auto mb-8 font-medium">
                      Detailed CAD layouts and modular seating plans are available for verified business entities.
                    </p>
                    <button className="px-8 py-4 bg-white text-slate-900 font-black rounded-2xl flex items-center gap-3 mx-auto hover:bg-amber-500 hover:text-white transition-all">
                      <Download size={20} />
                      Request Technical Brochure
                    </button>
                  </div>
                </div>
              </MotionSection>

              <MotionSection id="location" title="Business District">
                <div className="bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden">
                  <div className="aspect-video w-full bg-slate-100 relative group">
                     {/* Dynamic Location Placeholder */}
                     <img 
                        src="https://images.unsplash.com/photo-1570126128898-41c01a238a58?w=1200" 
                        alt="Location Map" 
                        className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                      />
                     <div className="absolute inset-0 flex items-center justify-center bg-slate-900/40 group-hover:bg-transparent transition-all">
                        <div className="p-4 bg-white rounded-2xl shadow-2xl flex items-center gap-3">
                           <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                              <MapPin className="text-white" size={20} />
                           </div>
                           <div>
                              <p className="font-black text-slate-900 leading-tight">Elite Business Zone</p>
                              <p className="text-xs font-bold text-slate-500 tracking-tighter uppercase">{office.location}</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-slate-100">
                    {[
                      { l: "Transit Hub", v: "0.4 KM", s: "4 mins walking" },
                      { l: "International Airport", v: "12 KM", s: "25 mins drive" },
                      { l: "Banking District", v: "0.2 KM", s: "Immediate Access" }
                    ].map((loc, i) => (
                      <div key={i} className="p-8 border-r border-slate-100 last:border-r-0 text-center hover:bg-slate-50 transition-colors">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{loc.l}</p>
                        <p className="text-xl font-black text-slate-900 mb-1">{loc.v}</p>
                        <p className="text-xs font-bold text-slate-500">{loc.s}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </MotionSection>

            </div>
          </div>

          {/* Sidebar - Concierge Form */}
          <div className="lg:col-span-4 h-fit sticky top-44">
            <motion.div 
                id="contact-form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white border border-slate-200 shadow-2xl shadow-slate-100 p-8 rounded-[2.5rem] relative overflow-hidden"
            >
              {/* Decor */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-amber-500/5 rounded-full" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                   <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center">
                      <Briefcase size={20} className="text-amber-500" />
                   </div>
                   <h3 className="text-xl font-black text-slate-900 tracking-tight">Executive Concierge</h3>
                </div>

                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      className="w-full bg-slate-50 border-none px-5 py-4 rounded-2xl text-slate-900 placeholder:text-slate-400 font-bold focus:ring-2 focus:ring-amber-500 transition-all outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="tel"
                      placeholder="Phone"
                      className="w-full bg-slate-50 border-none px-5 py-4 rounded-2xl text-slate-900 placeholder:text-slate-400 font-bold focus:ring-2 focus:ring-amber-500 transition-all outline-none"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full bg-slate-50 border-none px-5 py-4 rounded-2xl text-slate-900 placeholder:text-slate-400 font-bold focus:ring-2 focus:ring-amber-500 transition-all outline-none"
                    />
                  </div>
                  <div>
                    <select className="w-full bg-slate-50 border-none px-5 py-4 rounded-2xl text-slate-900 font-bold focus:ring-2 focus:ring-amber-500 transition-all outline-none appearance-none">
                       <option>Select Visit Purpose</option>
                       <option>Joint Venture / Investment</option>
                       <option>Immediate Leasing</option>
                       <option>Architecture Planning</option>
                    </select>
                  </div>
                  <div>
                    <textarea
                      placeholder="Primary business requirements..."
                      rows={4}
                      className="w-full bg-slate-50 border-none px-5 py-4 rounded-2xl text-slate-900 placeholder:text-slate-400 font-bold focus:ring-2 focus:ring-amber-500 transition-all outline-none resize-none"
                    ></textarea>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-slate-900 text-white font-black py-5 rounded-2xl shadow-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-3 active:scale-95"
                  >
                    <Calendar size={20} className="text-amber-500" />
                    Request Priority Viewing
                  </motion.button>
                </form>

                <div className="mt-8 space-y-3">
                  <button className="w-full flex items-center justify-between p-4 bg-slate-50 rounded-2xl hover:bg-amber-50 transition-colors group">
                    <div className="flex items-center gap-3">
                       <Download size={18} className="text-slate-400 group-hover:text-amber-600" />
                       <span className="text-sm font-black text-slate-600 group-hover:text-slate-900">Virtual PDF Tour</span>
                    </div>
                    <ChevronRight size={16} className="text-slate-300" />
                  </button>
                  <div className="p-4 bg-amber-50 rounded-2xl flex items-start gap-3">
                    <Shield size={18} className="text-amber-600 shrink-0 mt-0.5" />
                    <p className="text-[10px] font-bold text-amber-800 leading-relaxed uppercase tracking-wide">
                      Your business data is protected under our NDAs and secure compliance protocols.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Gallery Modal Overlay */}
      <AnimatePresence>
        {showGallery && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-3xl flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
               <h2 className="text-white font-black text-2xl tracking-tighter">{office.name} Gallery</h2>
               <button 
                  onClick={() => setShowGallery(false)}
                  className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
                >
                  <X size={24} />
               </button>
            </div>
            
            <div className="flex-1 overflow-y-auto no-scrollbar grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
               {images.map((img, i) => (
                 <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="aspect-video rounded-2xl overflow-hidden group cursor-pointer"
                  >
                    <img src={img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={`Gallery ${i}`} />
                 </motion.div>
               ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
