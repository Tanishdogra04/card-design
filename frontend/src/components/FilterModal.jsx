import { useState } from "react";

const defaultFilters = {
  amenities: [],
  furnishing: "",
  ownership: "",
  postedBy: ""
};

export default function FilterModal({ close, filters, setFilters }) {

  const [tab, setTab] = useState("Amenities");

  const toggleAmenity = (item) => {

    if ((filters.amenities || []).includes(item)) {
      setFilters({
        ...filters,
        amenities: filters.amenities.filter(a => a !== item)
      });
    } else {
      setFilters({
        ...filters,
        amenities: [...(filters.amenities || []), item]
      });
    }

  };

  return (

    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">

      <div className="bg-white w-full max-w-[700px] rounded-xl shadow-lg relative max-h-[90vh] flex flex-col overflow-hidden">

        {/* HEADER */}

        <div className="flex justify-between items-center p-5 border-b">

          <h2 className="text-lg font-semibold">
            More Filters
          </h2>

          <button
            onClick={close}
            className="text-gray-500 hover:text-black"
          >
            ✕
          </button>

        </div>

        <div className="flex flex-col sm:flex-row flex-1 min-h-0">

          {/* LEFT MENU */}

          <div className="w-full sm:w-1/3 border-b sm:border-b-0 sm:border-r p-4 flex sm:flex-col gap-2 overflow-x-auto sm:overflow-x-visible no-scrollbar">

            {["Amenities", "Furnishing", "Ownership", "Posted By"].map(item => (

              <div
                key={item}
                onClick={() => setTab(item)}
                className={`cursor-pointer p-2 rounded-md whitespace-nowrap sm:whitespace-normal ${
                  tab === item
                    ? "bg-blue-100 text-blue-700"
                    : "hover:bg-gray-100"
                }`}
              >
                {item}
              </div>

            ))}

          </div>

          {/* RIGHT OPTIONS */}

          <div className="flex-1 p-6 overflow-y-auto">

            {/* AMENITIES */}

            {tab === "Amenities" && (

              <div className="space-y-3">

                {[
                  "Lift",
                  "Parking",
                  "Gym",
                  "Pool",
                  "CCTV",
                  "Smart Home"
                ].map(item => (

                  <label key={item} className="flex items-center gap-3 text-sm">

                    <input
                      type="checkbox"
                      checked={(filters.amenities || []).includes(item)}
                      onChange={() => toggleAmenity(item)}
                    />

                    {item}

                  </label>

                ))}

              </div>

            )}

            {/* FURNISHING */}

            {tab === "Furnishing" && (

              <div className="space-y-3">

                {["Furnished", "Semi Furnished", "Unfurnished"].map(item => (

                  <label key={item} className="flex items-center gap-3 text-sm">

                    <input
                      type="radio"
                      name="furnishing"
                      checked={filters.furnishing === item}
                      onChange={() =>
                        setFilters({ ...filters, furnishing: item })
                      }
                    />

                    {item}

                  </label>

                ))}

              </div>

            )}

            {/* OWNERSHIP */}

            {tab === "Ownership" && (

              <div className="space-y-3">

                {["Freehold", "Leasehold", "Co-operative Society"].map(item => (

                  <label key={item} className="flex items-center gap-3 text-sm">

                    <input
                      type="radio"
                      name="ownership"
                      checked={filters.ownership === item}
                      onChange={() =>
                        setFilters({ ...filters, ownership: item })
                      }
                    />

                    {item}

                  </label>

                ))}

              </div>

            )}

            {/* POSTED BY */}

            {tab === "Posted By" && (

              <div className="space-y-3">

                {["Owner", "Builder", "Dealer"].map(item => (

                  <label key={item} className="flex items-center gap-3 text-sm">

                    <input
                      type="radio"
                      name="postedBy"
                      checked={filters.postedBy === item}
                      onChange={() =>
                        setFilters({ ...filters, postedBy: item })
                      }
                    />

                    {item}

                  </label>

                ))}

              </div>

            )}

          </div>

        </div>

        {/* FOOTER */}

        <div className="flex justify-between p-4 border-t">

          <button
            onClick={() => setFilters(defaultFilters)}
            className="text-red-500 hover:underline"
          >
            Clear
          </button>

          <button
            onClick={close}
            className="bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800"
          >
            Apply
          </button>

        </div>

      </div>

    </div>

  );
}