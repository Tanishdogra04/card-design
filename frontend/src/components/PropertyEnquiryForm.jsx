import { useState } from "react";
import { User, Phone, Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function PropertyEnquiryForm({ property }) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const phone = e.target.phone.value.trim();
    const email = e.target.email.value.trim();
    const projectName = property?.name || "General Property";

    if (!name || !phone) {
      showToast("Name and Phone are required! ❗", "error");
      return;
    }

    if (loading) return;
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, projectName }),
      });

      const data = await res.json();
      if (res.ok) {
        showToast(data.message || "Enquiry submitted successfully! ✅", "success");
        e.target.reset();
      } else {
        showToast(data.message || "Something went wrong ❌", "error");
      }
    } catch (err) {
      showToast("Server is waking up ⏳ Please try again...", "error");
    }
    setLoading(false);
  };

  const showToast = (msg, type) => {
    setMessage(msg);
    setStatus(type);
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <>
      {/* Premium Toast notification */}
      {message && (
        <div
          className={`fixed top-10 right-10 px-6 py-4 rounded-2xl shadow-2xl text-white z-[1000] flex items-center gap-3 backdrop-blur-xl border
          ${status === "success" 
              ? "bg-green-500/90 border-green-400" 
              : "bg-red-500/90 border-red-400"}`}
        >
          {status === "success" ? <CheckCircle2 size={24} /> : <AlertCircle size={24} />}
          <span className="font-bold tracking-tight">{message}</span>
        </div>
      )}

      <div
        className="w-[360px] bg-white/10 backdrop-blur-2xl p-8 rounded-[2rem] shadow-2xl border border-white/20 relative overflow-hidden"
      >
        {/* Abstract Background Glow */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-600/20 blur-[80px] rounded-full"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-600/20 blur-[80px] rounded-full"></div>

        {/* TITLE */}
        <div className="relative z-10 mb-8 text-center">
            <h2 className="text-white text-3xl font-black tracking-tight leading-none mb-2 uppercase italic">
              {property?.name ? "Enquire Now" : "Ready to See?"}
            </h2>
            <p className="text-blue-300 text-xs font-bold uppercase tracking-[3px]">
              {property?.name ? property.name : "Book Your Visit Now"}
            </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-5">
          <div className="relative group">
            <label className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 group-focus-within:text-blue-300 transition-colors">
              <User size={18} />
            </label>
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/5 border border-white/10 focus:border-blue-400 focus:bg-white/10 outline-none text-white text-sm font-medium transition-all placeholder:text-white/30"
            />
          </div>

          <div className="relative group">
            <label className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 group-focus-within:text-blue-300 transition-colors">
              <Phone size={18} />
            </label>
            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/5 border border-white/10 focus:border-blue-400 focus:bg-white/10 outline-none text-white text-sm font-medium transition-all placeholder:text-white/30"
            />
          </div>

          <div className="relative group">
            <label className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 group-focus-within:text-blue-300 transition-colors">
              <Mail size={18} />
            </label>
            <input
              name="email"
              type="email"
              placeholder="Email (Optional)"
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/5 border border-white/10 focus:border-blue-400 focus:bg-white/10 outline-none text-white text-sm font-medium transition-all placeholder:text-white/30"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-4 bg-white text-blue-900 py-4 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl hover:bg-blue-50 active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-2 group"
          >
            {loading ? (
                "Processing..."
            ) : (
                <>
                    {property?.name ? "Submit Enquiry" : "Book Site Visit"}
                    <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
            )}
          </button>
          <p className="text-[10px] text-center text-white/40 font-medium">
            We'll send the site visit details to your phone.
          </p>
        </form>
      </div>
    </>
  );
}