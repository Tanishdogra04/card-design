import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function FilterBar({ filters, setFilters, openAdvanced }) {

  const [openDropdown, setOpenDropdown] = useState(null);
  const filterRef = useRef(null);

  const toggle = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  /* CLOSE ON OUTSIDE CLICK */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* CLOSE ON SCROLL */
  useEffect(() => {
    const handleScroll = () => setOpenDropdown(null);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const clearFilters = () => {
    setFilters({
      location: "",
      propertyType: "",
      bhk: "",
      minPrice: "",
      maxPrice: "",
      minArea: "",
      maxArea: "",
      possession: "",
      facing: ""
    });
  };

  return (
    <div
      ref={filterRef}
      className="bg-white border rounded-xl shadow-sm p-4 mb-8 flex flex-wrap items-center gap-2 md:gap-3"
    >

      <span className="text-xs font-semibold text-gray-500 uppercase hidden sm:inline">
        Filter :
      </span>

      {/* LOCATION */}
      <input
        type="text"
        placeholder="Search Location"
        value={filters.location || ""}
        onChange={(e) =>
          setFilters({ ...filters, location: e.target.value })
        }
        className="border rounded-full px-4 py-2 text-sm"
      />

      {/* PROPERTY TYPE */}
      <Dropdown
        label="Property Type"
        value={filters.propertyType}
        options={["Apartment","Villa","Plot","Commercial"]}
        menu="type"
        openDropdown={openDropdown}
        toggle={toggle}
        setValue={(v)=>setFilters({...filters,propertyType:v})}
      />

      {/* BHK */}
      <Dropdown
        label="BHK"
        value={filters.bhk}
        options={["1 BHK","2 BHK","3 BHK","4 BHK"]}
        menu="bhk"
        openDropdown={openDropdown}
        toggle={toggle}
        setValue={(v)=>setFilters({...filters,bhk:v})}
      />

      {/* PRICE */}
      <RangeDropdown
        label="Price"
        menu="price"
        openDropdown={openDropdown}
        toggle={toggle}
        minChange={(v)=>setFilters({...filters,minPrice:v})}
        maxChange={(v)=>setFilters({...filters,maxPrice:v})}
      />

      {/* AREA */}
      <RangeDropdown
        label="Area"
        menu="area"
        openDropdown={openDropdown}
        toggle={toggle}
        minChange={(v)=>setFilters({...filters,minArea:v})}
        maxChange={(v)=>setFilters({...filters,maxArea:v})}
      />

      {/* POSSESSION */}
      <Dropdown
        label="Possession"
        value={filters.possession}
        options={[
          "Ready To Move",
          "Under Construction",
          "Within 3 Months",
          "Within 6 Months"
        ]}
        menu="possession"
        openDropdown={openDropdown}
        toggle={toggle}
        setValue={(v)=>setFilters({...filters,possession:v})}
      />

      {/* FACING */}
      <Dropdown
        label="Facing"
        value={filters.facing}
        options={["North","South","East","West"]}
        menu="facing"
        openDropdown={openDropdown}
        toggle={toggle}
        setValue={(v)=>setFilters({...filters,facing:v})}
      />

      {/* MORE */}
      <button
        onClick={openAdvanced}
        className="border rounded-full px-4 py-2 text-sm hover:border-blue-500"
      >
        More
      </button>

      {/* CLEAR */}
      <button
        onClick={clearFilters}
        className="ml-auto text-sm text-blue-700"
      >
        Clear
      </button>

    </div>
  );
}



function Dropdown({label,value,options,menu,openDropdown,toggle,setValue}) {

  return (
    <div className="relative">

      <button
        onClick={()=>toggle(menu)}
        className="flex items-center gap-1 border rounded-full px-4 py-2 text-sm"
      >
        {value || label}
        <ChevronDown size={16}/>
      </button>

      {openDropdown===menu && (

        <div className="absolute top-12 z-[999] bg-white border shadow-md rounded-lg w-44">

          {options.map((item)=>(
            <div
              key={item}
              onClick={()=>setValue(item)}
              className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer"
            >
              {item}
            </div>
          ))}

        </div>

      )}

    </div>
  );
}

/* ================= RANGE DROPDOWN ================= */

function RangeDropdown({label,menu,openDropdown,toggle,minChange,maxChange}) {

  return (
    <div className="relative">

      <button
        onClick={()=>toggle(menu)}
        className="flex items-center gap-1 border rounded-full px-4 py-2 text-sm"
      >
        {label}
        <ChevronDown size={16}/>
      </button>

      {openDropdown===menu && (

        <div className="absolute top-12 z-[999] bg-white border shadow-md rounded-lg w-48 p-3">

          <div className="flex gap-2">

            <input
              type="number"
              placeholder="Min"
              onChange={(e)=>minChange(e.target.value)}
              className="border rounded-md p-2 text-sm w-1/2"
            />

            <input
              type="number"
              placeholder="Max"
              onChange={(e)=>maxChange(e.target.value)}
              className="border rounded-md p-2 text-sm w-1/2"
            />

          </div>

        </div>

      )}

    </div>
  );
}