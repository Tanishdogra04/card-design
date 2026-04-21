import { FileCheck, ShieldCheck, Globe, Scale, ExternalLink } from "lucide-react";

export default function InstitutionalCompliance({ property }) {
  const certifications = [
    { title: "Zoning Permission", authority: "Local Urban Body", status: "Verified" },
    { title: "Environmental Clearance", authority: "State Pollution Board", status: "Active" },
    { title: "Fire Safety (NOC)", authority: "Fire Department", status: "Certified" },
    { title: "Sstructural Audit", authority: "Empanelled Engineers", status: "Secure" }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      
      {/* BACKGROUND DECO */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 -skew-x-12 translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div>
            <p className="text-blue-700 text-[10px] font-black uppercase tracking-[4px] mb-4">Clearance Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-8 leading-tight">
               Verified <span className="text-blue-700">Governance</span> & Compliance.
            </h2>
            <p className="text-lg text-slate-500 font-medium mb-12">
               Institutional assets require rigorous validation. We maintain a transparent repository of all necessary legal and environmental clearances for {property.name}.
            </p>

            <div className="space-y-4">
               {certifications.map((cert, i) => (
                  <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 flex items-center justify-between group hover:border-blue-500 transition-all cursor-default">
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                           <FileCheck size={24} />
                        </div>
                        <div>
                           <h4 className="font-black text-slate-800 tracking-tight">{cert.title}</h4>
                           <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{cert.authority}</p>
                        </div>
                     </div>
                     <span className="text-[10px] font-black uppercase tracking-widest text-green-600 bg-green-50 px-3 py-1 rounded-full border border-green-100 italic">
                        {cert.status}
                     </span>
                  </div>
               ))}
            </div>

            <div className="mt-12 flex items-center gap-6">
                <button className="flex items-center gap-2 text-blue-700 font-black uppercase tracking-widest text-xs hover:gap-3 transition-all">
                   View Documentation <ExternalLink size={16} />
                </button>
                <div className="w-px h-6 bg-slate-200"></div>
                <div className="flex items-center gap-2">
                   <ShieldCheck size={20} className="text-blue-700" />
                   <span className="text-sm text-slate-400 font-bold uppercase tracking-widest leading-none">Legal Secured</span>
                </div>
            </div>
          </div>

          <div className="relative">
             <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-slate-100 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-blue-700/10 flex items-center justify-center text-blue-700 mb-8 border border-blue-100 shadow-inner">
                   <Scale size={48} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tighter">Regulatory Authority Registration</h3>
                <p className="text-slate-500 font-medium mb-8">This property is registered under the relevant statutory authority with the following unique identifier.</p>
                
                <div className="w-full bg-slate-50 p-6 rounded-2xl border border-dashed border-slate-200">
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Registration ID</p>
                   <p className="text-2xl font-black text-blue-700 tracking-[8px] uppercase">{property.rera || "AWAITED"}</p>
                </div>

                <div className="mt-10 flex gap-4 w-full">
                   <div className="flex-1 p-4 bg-slate-50 rounded-2xl text-center">
                      <Globe size={20} className="mx-auto mb-2 text-blue-600" />
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Public Domain</p>
                   </div>
                   <div className="flex-1 p-4 bg-blue-700 rounded-2xl text-center text-white">
                      <ShieldCheck size={20} className="mx-auto mb-2 text-white/50" />
                      <p className="text-[10px] font-black uppercase tracking-widest">Certified</p>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
