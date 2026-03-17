import {
  Info,
  Image,
  MapPin,
  Download,
  Phone
} from "lucide-react";

import { Link } from "react-router-dom";

export default function PropertyHeader() {

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LEFT : LOGO */}
        <div className="flex items-center">
          <Link to="/">
            <h1 className="text-lg font-semibold">Company Name</h1>
          </Link>
        </div>


        {/* CENTER : NAV ITEMS (HIDDEN ON SMALL SCREENS) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">

          <a
            href="#about"
            className="flex items-center gap-2 hover:text-purple-600 transition"
          >
            <Info size={18}/>
            About
          </a>

          <a
            href="#gallery"
            className="flex items-center gap-2 hover:text-purple-600 transition"
          >
            <Image size={18}/>
            Gallery
          </a>

          <a
            href="#location"
            className="flex items-center gap-2 hover:text-purple-600 transition"
          >
            <MapPin size={18}/>
            Location
          </a>

          <button className="flex items-center gap-2 text-purple-600 hover:text-purple-700">
            <Download size={18}/>
            Download Brochure
          </button>

        </nav>


     
       {/* RIGHT : PHONE CTA */}
<div>
  <a
    href="tel:9779878303"
    className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition"
  >
    <Phone size={18}/>
    <span>8278-713-791</span>
  </a>
</div>

      </div>

    </header>
  );
}