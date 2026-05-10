import { useState } from "react";

import { useParams } from "react-router-dom";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

import {
  CalendarDays,
  Clock3,
  MapPin,
  User,
  Phone,
} from "lucide-react";

import toast from "react-hot-toast";

import { createBooking }
from "../../services/bookingService";

function Booking() {

  const { id } = useParams();

  // SERVICES
  const services = [

    {
      id: 1,
      title: "AC Repair",
      description:
        "Professional AC repair service at affordable price.",
      price: 999,
      image:
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 2,
      title: "Home Cleaning",
      description:
        "Deep cleaning service for your home and office.",
      price: 1499,
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 3,
      title: "Electrician",
      description:
        "Instant electrician support with trusted vendors.",
      price: 799,
      image:
        "https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 4,
      title: "Plumber",
      description:
        "Professional plumbing solutions.",
      price: 699,
      image:
        "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200&auto=format&fit=crop",
    },

  ];

  // SELECTED SERVICE
  const selectedService = services.find(
    (service) => service.id === Number(id)
  );

  // FORM DATA
  const [formData, setFormData] = useState({

    name: "",

    phone: "",

    address: "",

    date: "",

    time: "",
  });

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value,

    });

  };

  // HANDLE BOOKING
  const handleBooking = async (e) => {

    e.preventDefault();

    // VALIDATION
    if (
      !formData.name ||
      !formData.phone ||
      !formData.address ||
      !formData.date ||
      !formData.time
    ) {

      toast.error(
        "Please fill all fields"
      );

      return;
    }

    // BOOKING DATA
    const bookingData = {

      customerName:
        formData.name,

      serviceName:
        selectedService?.title,

      address:
        formData.address,

    };

    try {

      // API CALL
      await createBooking(
        bookingData
      );

      console.log(
        "BOOKING CREATED"
      );

      toast.success(
        "Booking Confirmed Successfully"
      );

      // RESET FORM
      setFormData({

        name: "",

        phone: "",

        address: "",

        date: "",

        time: "",

      });

    } catch (err) {

      console.log(err);

      toast.error(
        "Booking Failed"
      );
    }
  };

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

        <div
          className="
          max-w-7xl
          mx-auto
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-10
          "
        >

          {/* LEFT FORM */}
          <div
            className="
            bg-white
            rounded-3xl
            shadow-xl
            p-8
            "
          >

            {/* HEADING */}
            <h1
              className="
              text-4xl
              font-bold
              text-gray-800
              "
            >
              Book Service
            </h1>

            <p
              className="
              text-gray-500
              mt-3
              "
            >
              Fill booking details
              to confirm service
            </p>

            {/* FORM */}
            <form
              onSubmit={handleBooking}
              className="mt-10"
            >

              {/* NAME */}
              <div className="mb-5">

                <label className="font-medium text-gray-700">
                  Full Name
                </label>

                <div
                  className="
                  flex
                  items-center
                  border
                  border-gray-300
                  rounded-xl
                  px-4
                  mt-2
                  "
                >

                  <User className="text-gray-400" />

                  <input
                    type="text"

                    name="name"

                    placeholder="Enter full name"

                    value={formData.name}

                    onChange={handleChange}

                    className="
                    w-full
                    py-4
                    px-3
                    outline-none
                    "
                  />

                </div>

              </div>

              {/* PHONE */}
              <div className="mb-5">

                <label className="font-medium text-gray-700">
                  Phone Number
                </label>

                <div
                  className="
                  flex
                  items-center
                  border
                  border-gray-300
                  rounded-xl
                  px-4
                  mt-2
                  "
                >

                  <Phone className="text-gray-400" />

                  <input
                    type="text"

                    name="phone"

                    placeholder="Enter phone number"

                    value={formData.phone}

                    onChange={handleChange}

                    className="
                    w-full
                    py-4
                    px-3
                    outline-none
                    "
                  />

                </div>

              </div>

              {/* ADDRESS */}
              <div className="mb-5">

                <label className="font-medium text-gray-700">
                  Address
                </label>

                <div
                  className="
                  flex
                  items-start
                  border
                  border-gray-300
                  rounded-xl
                  px-4
                  mt-2
                  "
                >

                  <MapPin className="text-gray-400 mt-4" />

                  <textarea
                    name="address"

                    placeholder="Enter address"

                    value={formData.address}

                    onChange={handleChange}

                    rows={4}

                    className="
                    w-full
                    py-4
                    px-3
                    outline-none
                    resize-none
                    "
                  />

                </div>

              </div>

              {/* DATE */}
              <div className="mb-5">

                <label className="font-medium text-gray-700">
                  Booking Date
                </label>

                <div
                  className="
                  flex
                  items-center
                  border
                  border-gray-300
                  rounded-xl
                  px-4
                  mt-2
                  "
                >

                  <CalendarDays className="text-gray-400" />

                  <input
                    type="date"

                    name="date"

                    value={formData.date}

                    onChange={handleChange}

                    className="
                    w-full
                    py-4
                    px-3
                    outline-none
                    "
                  />

                </div>

              </div>

              {/* TIME */}
              <div className="mb-8">

                <label className="font-medium text-gray-700">
                  Booking Time
                </label>

                <div
                  className="
                  flex
                  items-center
                  border
                  border-gray-300
                  rounded-xl
                  px-4
                  mt-2
                  "
                >

                  <Clock3 className="text-gray-400" />

                  <input
                    type="time"

                    name="time"

                    value={formData.time}

                    onChange={handleChange}

                    className="
                    w-full
                    py-4
                    px-3
                    outline-none
                    "
                  />

                </div>

              </div>

              {/* BUTTON */}
              <button
                type="submit"

                className="
                w-full
                bg-blue-500
                hover:bg-blue-600
                text-white
                py-4
                rounded-2xl
                text-lg
                font-semibold
                transition
                "
              >
                Confirm Booking
              </button>

            </form>

          </div>

          {/* RIGHT CARD */}
          <div
            className="
            bg-white
            rounded-3xl
            shadow-xl
            overflow-hidden
            h-fit
            "
          >

            {/* IMAGE */}
            <img
              src={selectedService?.image}

              alt={selectedService?.title}

              className="
              w-full
              h-80
              object-cover
              "
            />

            {/* CONTENT */}
            <div className="p-8">

              <h1
                className="
                text-4xl
                font-bold
                text-gray-800
                "
              >
                {selectedService?.title}
              </h1>

              <p
                className="
                text-gray-500
                mt-5
                leading-8
                "
              >
                {selectedService?.description}
              </p>

              {/* PRICE */}
              <div className="mt-8">

                <h2
                  className="
                  text-5xl
                  font-extrabold
                  text-blue-600
                  "
                >
                  ₹ {selectedService?.price}
                </h2>

              </div>

              {/* FEATURES */}
              <div className="mt-10 space-y-4">

                <div>
                  ✅ Verified Vendor
                </div>

                <div>
                  ✅ Fast Service
                </div>

                <div>
                  ✅ Secure Booking
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Booking;