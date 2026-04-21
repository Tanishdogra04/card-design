import { useEffect } from "react";
import { motion } from "framer-motion";
import InstitutionalInfoCard from "../components/InstitutionalInfoCard";
import PropertyEnquiryForm from "../components/PropertyEnquiryForm";
import InstitutionalOverview from "../components/InstitutionalOverview";
import InstitutionalSpecs from "../components/InstitutionalSpecs";
import InstitutionalCompliance from "../components/InstitutionalCompliance";
import GallerySection from "../components/GallerySection";
import LocationSection from "../components/LocationSection";
import DownloadsSection from "../components/DownloadsSection";
import ExploreHeader from "../components/ExploreHeader";

export default function InstitutionalPropertyView({ property }) {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [property.id]);

  return (
    <div className="bg-white selection:bg-blue-100 selection:text-blue-900">
      <ExploreHeader />

      {/* CINEMATIC HERO SECTION */}
      <section className="relative h-[90vh] md:h-[95vh] w-full overflow-hidden bg-slate-900">
        
        {/* Background Overlay & Gradient */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950 via-slate-950/20 to-transparent"></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20"></div>

        {/* HERO IMAGE */}
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={property.images[0]}
          alt={property.name}
          className="absolute inset-0 w-full h-full object-cover filter brightness-[0.75] contrast-[1.05]"
        />

        {/* HERO CONTENT CONTAINER */}
        <div className="relative z-20 max-w-7xl mx-auto h-full px-6 flex flex-col md:flex-row items-center justify-between py-20">
          
          {/* LEFT: FLOATING INFO CARD */}
          <div className="w-full md:w-auto self-end md:self-center mb-10 md:mb-0 mt-8 md:mt-0">
            <InstitutionalInfoCard property={property}/>
          </div>

          {/* RIGHT: ENQUIRY FORM */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full md:w-[420px]"
          >
            <div className="bg-white/95 backdrop-blur-2xl rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden border border-white/20">
               <div className="px-8 pt-8 text-center">
                  <h3 className="text-2xl font-black text-slate-900 tracking-tighter">Strategic Acquisition</h3>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-[2px] mt-1">Connect with our institutional advisors</p>
               </div>
               <PropertyEnquiryForm property={property} variant="light" className="!p-8 pt-6" />
            </div>
          </motion.div>

        </div>

        {/* SCROLL INDICATOR */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
        >
            <div className="text-[9px] text-white/40 font-black uppercase tracking-[5px]">Core Summary</div>
            <div className="w-px h-16 bg-gradient-to-b from-blue-500 via-blue-500/50 to-transparent"></div>
        </motion.div>
      </section>

      {/* SECTIONS */}
      <div className="relative">
        <div id="overview">
           <InstitutionalOverview property={property}/>
        </div>

        <div id="specs">
           <InstitutionalSpecs property={property} />
        </div>

        <div id="gallery" className="bg-slate-950 py-24">
           <div className="max-w-7xl mx-auto px-6 mb-16">
              <p className="text-blue-400 text-[10px] font-black uppercase tracking-[4px] mb-4 text-center">Cinematic Index</p>
              <h2 className="text-4xl md:text-5xl font-black text-white text-center tracking-tight">Institutional <span className="text-blue-500 italic">Portrait.</span></h2>
           </div>
           <GallerySection property={property}/>
        </div>

        <div id="compliance">
           <InstitutionalCompliance property={property}/>
        </div>

        <div id="location" className="bg-white">
           <LocationSection property={property}/>
        </div>
        
        <div id="downloads" className="bg-slate-900">
          <DownloadsSection property={property}/>
        </div>
      </div>

      {/* FOOTER CALL TO ACTION */}
      <section className="py-24 bg-slate-950 text-white overflow-hidden relative">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.1),transparent)] pointer-events-none"></div>
         <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 italic">Anchor your infrastructure.</h2>
            <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto font-medium">Schedule a structural inspection and regulatory review at {property.name}. Our advisors are ready to assist with your operational deployment.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
               <button className="px-12 py-5 bg-blue-700 text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-blue-600 transition-all shadow-2xl shadow-blue-900/40">
                  Request Asset Portfolio
               </button>
               <button className="px-12 py-5 bg-transparent text-white border border-white/20 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white/5 transition-all">
                  Legal Consultation
               </button>
            </div>
         </div>
      </section>
    </div>
  );
}
