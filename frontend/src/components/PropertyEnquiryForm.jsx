import { motion } from "framer-motion";
import { useState } from "react";

export default function PropertyEnquiryForm() {

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const phone = e.target.phone.value.trim();
    const email = e.target.email.value.trim();

    // ✅ Validation
    if (!name || !phone) {
      showToast("Name and Phone are required ❗", "error");
      return;
    }

    // 🔥 Prevent multiple clicks
    if (loading) return;

    setLoading(true);

    try {
  const res = await fetch("http://localhost:5000/api/enquiry", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, phone, email }),
  });

  const data = await res.json();

  // ✅ DEBUG HERE
  console.log("Response:", res);
  console.log("Data:", data);

  if (res.ok) {
    showToast(data.message || "Enquiry submitted successfully ✅", "success");
    e.target.reset();
  } else {
    showToast(data.message || "Something went wrong ❌", "error");
  }

} catch (err) {
  console.log("Error:", err); // also log error
  showToast("Server is waking up ⏳ Try again...", "error");
}

    setLoading(false);
  };

  // 🔥 Toast helper
  const showToast = (msg, type) => {
    setMessage(msg);
    setStatus(type);

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <>
      {/* 🔥 TOAST */}
      {message && (
        <div
          className={`fixed top-5 right-5 px-6 py-3 rounded-lg shadow-lg text-white z-50 
          transition-all duration-300
          ${status === "success" ? "bg-green-500" : "bg-red-500"}`}
        >
          {message}
        </div>
      )}

      <motion.div
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="shine-box w-[340px] bg-gradient-to-br from-pink-500 to-purple-600
        p-7 rounded-xl shadow-[0_30px_80px_rgba(0,0,0,0.7)]"
      >

        {/* TITLE */}
        <h2 className="text-white text-2xl font-semibold text-center mb-5">
          Enquire Now
        </h2>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            name="name"
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 rounded-md bg-white/90 outline-none text-sm"
          />

          <input
            name="phone"
            type="tel"
            placeholder="Phone"
            className="w-full px-4 py-2 rounded-md bg-white/90 outline-none text-sm"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded-md bg-white/90 outline-none text-sm"
          />

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="bg-black text-white py-2 rounded-md font-medium
            hover:scale-[1.03] transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send"}
          </button>

        </form>
        

      </motion.div>
    </>
  );
}