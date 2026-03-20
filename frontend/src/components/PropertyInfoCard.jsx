import { motion } from "framer-motion";

export default function PropertyInfoCard({ property }) {

  return (

    <motion.div
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      whileHover={{ y: -5 }}
      className="w-[340px] bg-black text-white p-8 rounded-xl shadow-2xl flex flex-col gap-5"
    >

      {/* BADGE */}
      <div className="w-full text-center py-1 rounded-md shine-box text-sm font-medium
        bg-gradient-to-r from-pink-500 to-purple-600">

        {property.badge || "Pre Launch"}

      </div>


      {/* PROJECT NAME */}
      <h2 className="text-2xl font-bold leading-snug gradient-text">

        {property.name}

      </h2>


      {/* LOCATION */}
      <p className="text-sm gradient-text ">

        {property.location}

      </p>


      {/* PROJECT AREA */}
      <p className="text-sm font-medium gradient-text">

        50 Acre Luxury Residential Township

      </p>


      {/* PRICE BOX */}
     <div className="shine-box text-center text-sm font-semibold p-3 rounded-lg
bg-gradient-to-r from-pink-500 to-purple-600">

  Prices Starting @ ₹{property.price}

  <br />

  <span className="text-xs font-normal">
    Per Sq.Yard
  </span>

</div>


      {/* EXTRA INFO */}
      <div className="text-sm gradient-text space-y-1">

        <p>Total 50 Acre Township</p>

        <p>7 Acre Green Park</p>

      </div>


      {/* RERA */}
      <div className="shine-box text-center text-sm border border-pink-500 rounded-lg p-3">

  RERA No. ({property.rera || "Awaited"})

</div>


      {/* PAYMENT TEXT */}
      <p className="text-xs gradient-text">

        EOI <strong>Easy Payment Plan</strong> Starts At

      </p>


      {/* CTA BUTTON */}
      <button
        className="shine-box bg-gradient-to-r from-pink-500 to-purple-600
        py-3 rounded-lg text-sm font-semibold
        hover:scale-[1.02] transition">

        Download Brochure

      </button>

    </motion.div>

  );
}