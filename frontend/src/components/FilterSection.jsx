import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const FilterSection = ({ filters, setFilters, isSticky }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const dropdownOptions = {
    location: ["Dharamshala", "Kangra","Chandigarh", "Delhi", "Mumbai","Bangalore", "Pune", "Hyderabad","Noida", "Gurgaon"],
    type: ["Apartment", "Villa"],
    bhk: ["1", "2", "3"],
    possession: ["Ready", "Under Construction"],
    furnishing: ["Furnished", "Semi-Furnished", "Unfurnished"],
    facing: ["North", "South", "East", "West"]
  };

  const priceOptions = [
    1000000, 2500000, 5000000, 7500000, 10000000, 15000000
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
      bhk: "",
      possession: "",
      furnishing: "",
      minPrice: "",
      maxPrice: "",
      facing: "",
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
  const renderDropdown = (key, label) => (
    <div className="relative" key={key}>
      <div
        onClick={() =>
          setOpenDropdown(openDropdown === key ? null : key)
        }
        className="flex items-center justify-between border rounded-lg px-3 py-2 cursor-pointer hover:bg-gray-50 min-w-[140px]"
      >
        <span className="text-sm text-gray-600">
          {filters[key] || label}
        </span>

        <ChevronDown
          size={16}
          className={`ml-2 transition-transform ${
            openDropdown === key ? "rotate-180" : ""
          }`}
        />
      </div>

      {openDropdown === key && (
        <div className="absolute top-full left-0 mt-2 w-full bg-white border rounded-lg shadow z-50">
          {dropdownOptions[key].map((item, i) => (
            <div
              key={i}
              onClick={() => {
                handleChange(key, item);
                setOpenDropdown(null);
              }}
              className="px-3 py-2 text-sm hover:bg-purple-50 cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );

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
            : "Price"}
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
            <p className="text-xs text-gray-500 mb-1">Min Price</p>
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
            <p className="text-xs text-gray-500 mb-1">Max Price</p>
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
      className={`px-4 sm:px-6 md:px-10 mb-6 transition-all duration-300 ${
        isSticky
          ? "md:fixed md:top-0 md:left-0 md:w-full md:z-50 md:bg-white md:shadow-md"
          : "relative"
      }`}
    >

      {/* HEADING */}
      <h2 className={`text-lg font-semibold mb-3 ${
        isSticky ? "md:hidden" : ""
      }`}>
        Quick Filters
      </h2>

      <div className="bg-white p-4 rounded-xl shadow flex flex-wrap items-center gap-3">

        {/* Sticky Label */}
        {isSticky && (
          <span className="hidden md:block text-sm font-medium text-gray-700">
            Filter:
          </span>
        )}

        {/* DROPDOWNS */}
        {renderDropdown("location", "Location")}
        {renderDropdown("type", "Property Type")}
        {renderDropdown("bhk", "BHK")}
        {renderDropdown("possession", "Possession")}
        {renderDropdown("furnishing", "Furnishing")}
        {renderDropdown("facing", "Facing")}

        {/* 🔥 PRICE DROPDOWN */}
        {renderPriceBox()}

        {/* BUTTONS */}
        <button
          onClick={handleClear}
          className="border px-4 py-2 rounded hover:bg-gray-100"
        >
          Clear
        </button>

        <button
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          Apply
        </button>

      </div>
    </section>
  );
};

export default FilterSection;