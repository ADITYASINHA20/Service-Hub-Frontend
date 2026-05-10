import { useEffect, useState } from "react";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

import {
  CalendarDays,
  Clock3,
  MapPin,
} from "lucide-react";

import { getBookings }
from "../../services/bookingService";

function MyBookings() {

  // BOOKINGS STATE
  const [bookings, setBookings] =
    useState([]);

  // FETCH BOOKINGS
  useEffect(() => {

    getBookings()

      .then((res) => {

        console.log(
          "BOOKINGS FETCHED"
        );

        console.log(res.data);

        setBookings(res.data);

      })

      .catch((err) => {

        console.log(err);

      });

  }, []);

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
              My Bookings
            </h1>

            <p
              className="
              text-gray-500
              mt-4
              text-lg
              "
            >
              Track all your booked services
            </p>

          </div>

          {/* BOOKINGS */}
          <div className="mt-16 space-y-8">

            {
              bookings.length > 0 ?

              bookings.map(
                (booking) => (

                <div
                  key={booking.id}

                  className="
                  bg-white
                  rounded-3xl
                  shadow-lg
                  overflow-hidden
                  grid
                  grid-cols-1
                  lg:grid-cols-3
                  "
                >

                  {/* IMAGE */}
                  <div className="h-full">

                    <img
                      src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1200&auto=format&fit=crop"

                      alt="service"

                      className="
                      w-full
                      h-full
                      object-cover
                      "
                    />

                  </div>

                  {/* DETAILS */}
                  <div
                    className="
                    lg:col-span-2
                    p-8
                    "
                  >

                    {/* TOP */}
                    <div
                      className="
                      flex
                      flex-col
                      md:flex-row
                      md:items-center
                      md:justify-between
                      gap-5
                      "
                    >

                      {/* SERVICE */}
                      <div>

                        <h1
                          className="
                          text-3xl
                          font-bold
                          text-gray-800
                          "
                        >
                          {booking.serviceName}
                        </h1>

                        <p
                          className="
                          text-gray-500
                          mt-2
                          "
                        >
                          Customer :
                          <span className="font-semibold ml-2">

                            {booking.customerName}

                          </span>
                        </p>

                      </div>

                      {/* STATUS */}
                      <div>

                        <span
                          className={`
                          px-6
                          py-3
                          rounded-full
                          text-sm
                          font-semibold

                          ${
                            booking.status === "PENDING"

                              ? "bg-yellow-100 text-yellow-700"

                              : booking.status === "ACCEPTED"

                              ? "bg-blue-100 text-blue-700"

                              : "bg-green-100 text-green-700"
                          }
                          `}
                        >

                          {booking.status}

                        </span>

                      </div>

                    </div>

                    {/* INFO */}
                    <div
                      className="
                      grid
                      grid-cols-1
                      md:grid-cols-3
                      gap-5
                      mt-10
                      "
                    >

                      {/* DATE */}
                      <div
                        className="
                        bg-gray-100
                        rounded-2xl
                        p-5
                        "
                      >

                        <div className="flex items-center gap-3">

                          <CalendarDays className="text-blue-500" />

                          <div>

                            <p className="text-gray-500 text-sm">
                              Date
                            </p>

                            <h3 className="font-semibold">
                              12 May 2026
                            </h3>

                          </div>

                        </div>

                      </div>

                      {/* TIME */}
                      <div
                        className="
                        bg-gray-100
                        rounded-2xl
                        p-5
                        "
                      >

                        <div className="flex items-center gap-3">

                          <Clock3 className="text-blue-500" />

                          <div>

                            <p className="text-gray-500 text-sm">
                              Time
                            </p>

                            <h3 className="font-semibold">
                              10:00 AM
                            </h3>

                          </div>

                        </div>

                      </div>

                      {/* LOCATION */}
                      <div
                        className="
                        bg-gray-100
                        rounded-2xl
                        p-5
                        "
                      >

                        <div className="flex items-center gap-3">

                          <MapPin className="text-blue-500" />

                          <div>

                            <p className="text-gray-500 text-sm">
                              Location
                            </p>

                            <h3 className="font-semibold">

                              {booking.address}

                            </h3>

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              ))

              :

              <h1
                className="
                text-3xl
                font-bold
                text-center
                text-gray-500
                "
              >
                No Bookings Found
              </h1>
            }

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default MyBookings;