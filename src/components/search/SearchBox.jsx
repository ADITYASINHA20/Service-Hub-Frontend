import { Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBox() {

  const navigate = useNavigate();

  const [service, setService] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");

  const handleSearch = () => {

    navigate("/services", {
      state: {
        service,
        location,
        date,
      },
    });

  };

  return (
    <div
      className="
      w-full
      flex
      justify-center
      px-5
      -mt-24
      relative
      z-20
      "
    >

      <div
        className="
        w-full
        max-w-6xl
        bg-white
        rounded-3xl
        shadow-2xl
        p-8
        grid
        grid-cols-1
        md:grid-cols-4
        gap-5
        "
      >

        {/* Service */}
        <div className="flex flex-col">

          <label className="text-gray-600 mb-2 font-medium">
            Service
          </label>

          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="
            border
            border-gray-300
            rounded-xl
            px-4
            py-4
            outline-none
            focus:border-blue-500
            "
          >

            <option value="">Select Service</option>

            <option value="AC Repair">
              AC Repair
            </option>

            <option value="Cleaning">
              Cleaning
            </option>

            <option value="Plumbing">
              Plumbing
            </option>

            <option value="Electrician">
              Electrician
            </option>

            <option value="Painting">
              Painting
            </option>

          </select>

        </div>

        {/* Location */}
        <div className="flex flex-col">

          <label className="text-gray-600 mb-2 font-medium">
            Location
          </label>

          <input
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="
            border
            border-gray-300
            rounded-xl
            px-4
            py-4
            outline-none
            focus:border-blue-500
            "
          />

        </div>

        {/* Date */}
        <div className="flex flex-col">

          <label className="text-gray-600 mb-2 font-medium">
            Date
          </label>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="
            border
            border-gray-300
            rounded-xl
            px-4
            py-4
            outline-none
            focus:border-blue-500
            "
          />

        </div>

        {/* Button */}
        <div className="flex items-end">

          <button
            onClick={handleSearch}
            className="
            w-full
            bg-blue-500
            hover:bg-blue-600
            text-white
            py-4
            rounded-xl
            text-lg
            font-semibold
            flex
            items-center
            justify-center
            gap-2
            transition
            "
          >

            <Search size={22} />

            Search

          </button>

        </div>

      </div>

    </div>
  );
}

export default SearchBox;