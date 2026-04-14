import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const CommercialFilterSection = ({ filters, setFilters, isSticky }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const dropdownOptions = {
    location: ["Dharamshala", "Kangra", "Chandigarh", "Delhi", "Mumbai", "Bangalore", "Pune", "Hyderabad", "Noida", "Gurgaon"],
    type: ["SCO", "Retail", "Office"],
    possession: ["Ready to Move", "Under Construction"],
    ownership: ["Freehold", "Leasehold"],
    amenities: ["Power Backup", "Parking", "Security", "Lift", "Central AC"],
    postedWithin: ["Last 7 Days", "Last 15 Days", "Last 30 Days"]
  };

  const priceOptions = [
    1000000, 2500000, 5000000, 7500000, 10000000, 15000000, 20000000, 50000000
  ];

  /* HANDLE CHANGE */
  const handleChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  /* CLEAR FILTERS */
  const handleClear = () => {
    setFilters({
      location: "",
      type: "",
      possession: "",
      ownership: "",
      amenities: "",
      postedWithin: "",
      minPrice: "",
      maxPrice: ""
    });
  };

  /* OUTSIDE CLICK CLOSE */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* NORMAL DROPDOWN */
  const renderDropdown = (key, label) => {
    // Map the filter values to more readable labels if needed
    let displayValue = filters[key];
    if (key === 'type' && filters[key]) {
        if (filters[key] === 'SCO') displayValue = 'Shopping cum Office';
        if (filters[key] === 'Retail') displayValue = 'Retail Commercial';
        if (filters[key] === 'Office') displayValue = 'Office Spaces';
    }

    return (
    <div className="relative" key={key}>
      <div
        onClick={() =>
          setOpenDropdown(openDropdown === key ? null : key)
        }
        className="flex items-center justify-between border rounded-lg px-3 py-2 cursor-pointer hover:bg-gray-50 min-w-[140px]"
      >
        <span className="text-sm text-gray-600">
          {displayValue || label}
        </span>

        <ChevronDown
          size={16}
          className={`ml-2 transition-transform ${
            openDropdown === key ? "rotate-180" : ""
          }`}
        />
      </div>

      {openDropdown === key && (
        <div className="absolute top-full left-0 mt-2 w-[180px] bg-white border rounded-lg shadow z-50">
          {dropdownOptions[key].map((item, i) => {
            // For type, we show full names but save shorter keys
            let displayItem = item;
            if (key === 'type') {
                if (item === 'SCO') displayItem = 'Shopping cum Office';
                if (item === 'Retail') displayItem = 'Retail Commercial';
                if (item === 'Office') displayItem = 'Office Spaces';
            }
            return (
            <div
              key={i}
              onClick={() => {
                handleChange(key, item);
                setOpenDropdown(null);
              }}
              className="px-3 py-2 text-sm hover:bg-blue-50 cursor-pointer"
            >
              {displayItem}
            </div>
          )})}
        </div>
      )}
    </div>
  )};

  /* 🔥 PRICE DROPDOWN */
  const renderPriceBox = () => (
    <div className="relative">

      {/* MAIN BOX */}
      <div
        onClick={() =>
          setOpenDropdown(openDropdown === "price" ? null : "price")
        }
        className="flex items-center justify-between border rounded-lg px-3 py-2 cursor-pointer hover:bg-gray-50 min-w-[160px]"
      >
        <span className="text-sm text-gray-600">
          {filters.minPrice || filters.maxPrice
            ? `₹ ${(filters.minPrice / 100000 || 0).toFixed(0)}L - ₹ ${(filters.maxPrice / 100000 || 0).toFixed(0)}L`
            : "Budget"}
        </span>

        <ChevronDown
          size={16}
          className={`ml-2 transition-transform ${
            openDropdown === "price" ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* DROPDOWN */}
      {openDropdown === "price" && (
        <div className="absolute top-full left-0 mt-2 w-[220px] bg-white border rounded-xl shadow z-50 p-3 space-y-3">

          {/* MIN */}
          <div>
            <p className="text-xs text-gray-500 mb-1">Min Budget</p>
            <select
              value={filters.minPrice}
              onChange={(e) =>
                handleChange("minPrice", Number(e.target.value))
              }
              className="w-full border rounded px-2 py-1 text-sm"
            >
              <option value="">Select</option>
              {priceOptions.map((p, i) => (
                <option key={i} value={p}>
                  ₹ {(p / 100000).toFixed(0)} L
                </option>
              ))}
            </select>
          </div>

          {/* MAX */}
          <div>
            <p className="text-xs text-gray-500 mb-1">Max Budget</p>
            <select
              value={filters.maxPrice}
              onChange={(e) =>
                handleChange("maxPrice", Number(e.target.value))
              }
              className="w-full border rounded px-2 py-1 text-sm"
            >
              <option value="">Select</option>
              {priceOptions.map((p, i) => (
                <option key={i} value={p}>
                  ₹ {(p / 100000).toFixed(0)} L
                </option>
              ))}
            </select>
          </div>

        </div>
      )}
    </div>
  );

  return (
    <section
      ref={dropdownRef}
      className="px-4 sm:px-6 md:px-10 mb-6 relative py-0 max-w-7xl mx-auto"
    >

      {/* HEADING */}
      <h2 className="text-lg font-semibold mb-3">
        Commercial Filters
      </h2>

      <div className="bg-white p-4 rounded-xl shadow flex flex-wrap items-center gap-3 border border-gray-100">

        {/* DROPDOWNS */}
        {renderDropdown("location", "Location")}
        {renderPriceBox()}
        {renderDropdown("type", "Property Type")}
        {renderDropdown("possession", "Possession")}
        {renderDropdown("ownership", "Ownership")}
        {renderDropdown("amenities", "Amenities")}
        {renderDropdown("postedWithin", "Posted Within")}

        {/* BUTTONS */}
        <button
          onClick={handleClear}
          className="ml-auto text-sm font-black text-gray-400 hover:text-indigo-700 uppercase tracking-widest transition-colors"
        >
          Reset
        </button>

      </div>
    </section>
  );
};

export default CommercialFilterSection;
