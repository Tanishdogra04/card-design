import { useEffect } from "react";
import CommercialPropertyHeader from "../components/CommercialPropertyHeader";
import CommercialInfoCard from "../components/CommercialInfoCard";
import PropertyEnquiryForm from "../components/PropertyEnquiryForm";
import CommercialPropertyOverview from "../components/CommercialPropertyOverview";
import GallerySection from "../components/GallerySection";
import CommercialPropertyAmenities from "../components/CommercialPropertyAmenities";
import CommercialLocationSection from "../components/CommercialLocationSection";
import CommercialWhySection from "../components/CommercialWhySection";
import CommercialPropertySpecs from "../components/CommercialPropertySpecs";
import HighlightsSection from "../components/HighlightsSection";
import DownloadsSection from "../components/DownloadsSection";
import { motion, AnimatePresence } from "framer-motion";

export default function CommercialPropertyView({ property }) {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [property.id]);

  return (
    <div className="bg-white selection:bg-indigo-100 selection:text-indigo-900">
      <CommercialPropertyHeader />

      {/* CINEMATIC HERO SECTION */}
      <section className="relative h-[90vh] md:h-[95vh] w-full overflow-hidden bg-slate-900">
        
        {/* Background Overlay & Gradient */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent"></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20"></div>

        {/* HERO IMAGE */}
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={property.images[0]}
          alt={property.name}
          className="absolute inset-0 w-full h-full object-cover filter brightness-[0.7] contrast-[1.1]"
        />

        {/* HERO CONTENT CONTAINER */}
        <div className="relative z-20 max-w-7xl mx-auto h-full px-6 flex flex-col md:flex-row items-center justify-between py-20">
          
          {/* LEFT: FLOATING INFO CARD */}
          <div className="w-full md:w-auto self-end md:self-center mb-10 md:mb-0 mt-8 md:mt-0">
            <CommercialInfoCard property={property}/>
          </div>

          {/* RIGHT: ENQUIRY FORM */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full md:w-[420px]"
          >
            <div className="bg-white/95 backdrop-blur-2xl rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden border border-white/20">
               <div className="px-8 pt-8">
                  <h3 className="text-2xl font-black text-slate-900 tracking-tighter">Strategic Inquiry</h3>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Connect with our corporate advisors</p>
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
            <div className="text-[9px] text-white/40 font-black uppercase tracking-[5px]">Executive Summary</div>
            <div className="w-px h-16 bg-gradient-to-b from-indigo-500 via-indigo-500/50 to-transparent"></div>
        </motion.div>
      </section>

      {/* SECTIONS */}
      <div className="relative">
        <div id="overview">
           <CommercialPropertyOverview property={property}/>
        </div>

        <div id="specs">
           <CommercialPropertySpecs property={property} />
        </div>

        <div id="gallery" className="bg-slate-950 py-24">
           <div className="max-w-7xl mx-auto px-6 mb-16">
              <p className="text-indigo-400 text-xs font-black uppercase tracking-[4px] mb-4 text-center">Visual Portfolio</p>
              <h2 className="text-4xl md:text-5xl font-black text-white text-center tracking-tight">Project <span className="text-indigo-500">Gallery</span></h2>
           </div>
           <GallerySection property={property}/>
        </div>

        <div id="amenities">
           <CommercialPropertyAmenities property={property}/>
        </div>

        <div className="bg-slate-50 border-y border-slate-200">
           <HighlightsSection property={property}/>
        </div>

        <div id="location">
           <CommercialLocationSection property={property}/>
        </div>

        <div className="bg-white">
           <CommercialWhySection property={property}/>
        </div>
        
        <div id="downloads" className="bg-slate-50">
          <DownloadsSection property={property}/>
        </div>
      </div>

      {/* FOOTER CALL TO ACTION */}
      <section className="py-24 bg-slate-950 text-white overflow-hidden relative">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.1),transparent)] pointer-events-none"></div>
         <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 italic">Ready to scale your enterprise?</h2>
            <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">Join the league of global businesses at {property.name}. Schedule a private site tour and presentation today.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
               <button className="px-10 py-5 bg-white text-slate-950 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-indigo-50 transition-all shadow-2xl shadow-white/10">
                  Request Presentation
               </button>
               <button className="px-10 py-5 bg-transparent text-white border border-white/20 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white/5 transition-all">
                  Contact Advisory
               </button>
            </div>
         </div>
      </section>
    </div>
  );
}
