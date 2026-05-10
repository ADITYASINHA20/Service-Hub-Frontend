import { useState, useEffect } from "react";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ServiceCard from "../../components/cards/ServiceCard";

import {
  Search,
  SlidersHorizontal,
} from "lucide-react";

import { getServices } from "../../services/servicesApi";

function Services() {

  // SERVICES STATE
  const [allServices, setAllServices] =
    useState([]);

  // SEARCH STATE
  const [search, setSearch] =
    useState("");

  // CATEGORY STATE
  const [
    selectedCategory,
    setSelectedCategory
  ] = useState("All");

  // LOADING
  const [loading, setLoading] =
    useState(true);

  // FETCH SERVICES
  useEffect(() => {

    console.log(
      "SERVICES PAGE LOADED"
    );

    getServices()

      .then((res) => {

        console.log(
          "BACKEND CONNECTED"
        );

        console.log(res.data);

        setAllServices(res.data);

      })

      .catch((err) => {

        console.log(
          "API ERROR"
        );

        console.log(err);

      })

      .finally(() => {

        setLoading(false);

      });

  }, []);

  // CATEGORY LIST
  const categories = [

    "All",

    "Repair",

    "Cleaning",

    "Painting",

    "Electrician",

    "Plumbing",

  ];

  // FILTER SERVICES
  const filteredServices =
    allServices.filter((service) => {

      // SEARCH FILTER
      const matchSearch =

        service.title
          ?.toLowerCase()
          .includes(
            search.toLowerCase()
          );

      // CATEGORY FILTER
      const matchCategory =

        selectedCategory === "All" ||

        service.category
          ?.toLowerCase()
          .includes(
            selectedCategory
              .toLowerCase()
          );

      return (
        matchSearch &&
        matchCategory
      );

    });

  return (
    <>
      <Navbar />

      <div
        className="
        min-h-screen
        bg-gray-100
        pt-32
        pb-20
        px-5
        "
      >

        <div className="max-w-7xl mx-auto">

          {/* HEADING */}
          <div className="text-center">

            <h1
              className="
              text-5xl
              font-bold
              text-gray-800
              "
            >
              Explore Services
            </h1>

            <p
              className="
              text-gray-500
              mt-4
              text-lg
              "
            >
              Find trusted services near you
            </p>

          </div>

          {/* SEARCH + FILTER */}
          <div
            className="
            bg-white
            rounded-3xl
            shadow-lg
            p-6
            mt-12
            flex
            flex-col
            lg:flex-row
            gap-5
            items-center
            justify-between
            "
          >

            {/* SEARCH */}
            <div
              className="
              flex
              items-center
              border
              border-gray-300
              rounded-2xl
              px-4
              w-full
              lg:w-1/2
              "
            >

              <Search className="text-gray-400" />

              <input
                type="text"

                placeholder="Search services..."

                value={search}

                onChange={(e) =>
                  setSearch(
                    e.target.value
                  )
                }

                className="
                w-full
                py-4
                px-3
                outline-none
                "
              />

            </div>

            {/* FILTER BUTTONS */}
            <div
              className="
              flex
              flex-wrap
              gap-3
              "
            >

              {
                categories.map(
                  (category) => (

                  <button

                    key={category}

                    onClick={() =>
                      setSelectedCategory(
                        category
                      )
                    }

                    className={`
                    px-5
                    py-3
                    rounded-xl
                    font-medium
                    transition

                    ${
                      selectedCategory ===
                      category

                        ? "bg-blue-500 text-white"

                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }
                    `}
                  >

                    <div className="flex items-center gap-2">

                      <SlidersHorizontal size={16} />

                      {category}

                    </div>

                  </button>

                ))
              }

            </div>

          </div>

          {/* SERVICES */}
          <div
            className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-8
            mt-16
            "
          >

            {
              loading ?

              <h1
                className="
                text-2xl
                font-semibold
                text-gray-500
                "
              >
                Loading Services...
              </h1>

              :

              filteredServices.length > 0 ?

              filteredServices.map(
                (service) => (

                <ServiceCard
                  key={service.id}
                  service={service}
                />

              ))

              :

              <h1
                className="
                text-2xl
                font-semibold
                text-gray-500
                "
              >
                No Services Found
              </h1>
            }

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Services;