import { useEffect, useState } from "react";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

import {
  CalendarDays,
  CheckCircle,
  Clock3,
  Wallet,
  UserCircle2,
  ArrowRight,
} from "lucide-react";

import { motion } from "framer-motion";

import { getBookings }
from "../../services/bookingService";

import { useNavigate }
from "react-router-dom";

function CustomerDashboard() {

  const navigate =
    useNavigate();

  const user =
    JSON.parse(
      localStorage.getItem("user")
    );

  // BOOKINGS STATE
  const [
    recentBookings,
    setRecentBookings
  ] = useState([]);

  // FETCH BOOKINGS
  useEffect(() => {

    getBookings()

      .then((res) => {

        console.log(
          "CUSTOMER BOOKINGS"
        );

        console.log(res.data);

        setRecentBookings(
          res.data
        );

      })

      .catch((err) => {

        console.log(err);

      });

  }, []);

  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN */}
      <div
        className="
        min-h-screen
        bg-gradient-to-b
        from-[#f5f7fa]
        to-[#eef3ff]
        pt-32
        pb-20
        px-5
        "
      >

        <div className="max-w-7xl mx-auto">

          {/* HERO CARD */}
          <motion.div

            initial={{
              opacity: 0,
              y: -30
            }}

            animate={{
              opacity: 1,
              y: 0
            }}

            className="
            bg-gradient-to-r
            from-blue-600
            to-blue-800
            rounded-[40px]
            shadow-2xl
            p-10
            text-white
            relative
            overflow-hidden
            "
          >

            {/* BG CIRCLE */}
            <div
              className="
              absolute
              -top-20
              -right-20
              w-72
              h-72
              bg-white/10
              rounded-full
              "
            ></div>

            <div
              className="
              flex
              flex-col
              lg:flex-row
              lg:items-center
              lg:justify-between
              gap-10
              relative
              z-10
              "
            >

              {/* LEFT */}
              <div>

                <div
                  className="
                  flex
                  items-center
                  gap-4
                  "
                >

                  <div
                    className="
                    w-20
                    h-20
                    rounded-full
                    bg-white/20
                    flex
                    items-center
                    justify-center
                    "
                  >

                    <UserCircle2 size={45} />

                  </div>

                  <div>

                    <h1
                      className="
                      text-4xl
                      md:text-5xl
                      font-extrabold
                      "
                    >
                      Welcome Back 👋
                    </h1>

                    <p
                      className="
                      text-blue-100
                      mt-2
                      text-lg
                      "
                    >
                      {user?.email}
                    </p>

                  </div>

                </div>

                <p
                  className="
                  mt-8
                  text-lg
                  text-blue-100
                  max-w-2xl
                  leading-8
                  "
                >
                  Manage your bookings,
                  track service status
                  and explore premium
                  trusted services easily.
                </p>

              </div>

              {/* RIGHT */}
              <div
                className="
                bg-white/10
                backdrop-blur-md
                rounded-3xl
                p-8
                min-w-[280px]
                "
              >

                <h2
                  className="
                  text-2xl
                  font-bold
                  "
                >
                  Premium Customer
                </h2>

                <p className="mt-3 text-blue-100">
                  Trusted Member Since 2026
                </p>

                <button

                  onClick={() =>
                    navigate("/services")
                  }

                  className="
                  mt-6
                  bg-white
                  text-blue-700
                  px-6
                  py-3
                  rounded-2xl
                  font-semibold
                  hover:scale-105
                  transition
                  flex
                  items-center
                  gap-2
                  "
                >

                  Explore Services

                  <ArrowRight size={18} />

                </button>

              </div>

            </div>

          </motion.div>

          {/* STATS */}
          <div
            className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            gap-8
            mt-14
            "
          >

            {/* TOTAL */}
            <motion.div

              whileHover={{ y: -8 }}

              className="
              bg-white
              rounded-3xl
              p-8
              shadow-lg
              "
            >

              <div
                className="
                w-16
                h-16
                rounded-2xl
                bg-blue-100
                text-blue-600
                flex
                items-center
                justify-center
                "
              >

                <CalendarDays size={35} />

              </div>

              <h2 className="text-gray-500 mt-6">
                Total Bookings
              </h2>

              <h1
                className="
                text-5xl
                font-extrabold
                text-gray-800
                mt-3
                "
              >
                {recentBookings.length}
              </h1>

            </motion.div>

            {/* PENDING */}
            <motion.div

              whileHover={{ y: -8 }}

              className="
              bg-white
              rounded-3xl
              p-8
              shadow-lg
              "
            >

              <div
                className="
                w-16
                h-16
                rounded-2xl
                bg-yellow-100
                text-yellow-600
                flex
                items-center
                justify-center
                "
              >

                <Clock3 size={35} />

              </div>

              <h2 className="text-gray-500 mt-6">
                Pending
              </h2>

              <h1
                className="
                text-5xl
                font-extrabold
                text-gray-800
                mt-3
                "
              >
                {
                  recentBookings.filter(
                    (b) =>
                      b.status ===
                      "PENDING"
                  ).length
                }
              </h1>

            </motion.div>

            {/* COMPLETED */}
            <motion.div

              whileHover={{ y: -8 }}

              className="
              bg-white
              rounded-3xl
              p-8
              shadow-lg
              "
            >

              <div
                className="
                w-16
                h-16
                rounded-2xl
                bg-green-100
                text-green-600
                flex
                items-center
                justify-center
                "
              >

                <CheckCircle size={35} />

              </div>

              <h2 className="text-gray-500 mt-6">
                Completed
              </h2>

              <h1
                className="
                text-5xl
                font-extrabold
                text-gray-800
                mt-3
                "
              >
                {
                  recentBookings.filter(
                    (b) =>
                      b.status ===
                      "DELIVERED"
                  ).length
                }
              </h1>

            </motion.div>

            {/* SPENDING */}
            <motion.div

              whileHover={{ y: -8 }}

              className="
              bg-white
              rounded-3xl
              p-8
              shadow-lg
              "
            >

              <div
                className="
                w-16
                h-16
                rounded-2xl
                bg-purple-100
                text-purple-600
                flex
                items-center
                justify-center
                "
              >

                <Wallet size={35} />

              </div>

              <h2 className="text-gray-500 mt-6">
                Total Spending
              </h2>

              <h1
                className="
                text-5xl
                font-extrabold
                text-gray-800
                mt-3
                "
              >
                ₹
                {
                  recentBookings.length
                  * 999
                }
              </h1>

            </motion.div>

          </div>

          {/* RECENT BOOKINGS */}
          <div
            className="
            bg-white
            rounded-[40px]
            shadow-xl
            p-10
            mt-16
            "
          >

            <h1
              className="
              text-4xl
              font-bold
              text-gray-800
              "
            >
              Recent Bookings
            </h1>

            <p className="text-gray-500 mt-3">
              Track your latest booked services
            </p>

            {/* TABLE */}
            <div className="overflow-x-auto mt-10">

              <table className="w-full">

                <thead>

                  <tr className="border-b border-gray-200">

                    <th className="text-left py-5">
                      Service
                    </th>

                    <th className="text-left py-5">
                      Address
                    </th>

                    <th className="text-left py-5">
                      Status
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {
                    recentBookings.map(
                      (booking) => (

                      <tr
                        key={booking.id}

                        className="
                        border-b
                        border-gray-100
                        "
                      >

                        <td className="py-6 font-semibold">
                          {booking.serviceName}
                        </td>

                        <td className="py-6">
                          {booking.address}
                        </td>

                        <td className="py-6">

                          <span
                            className={`
                            px-5
                            py-2
                            rounded-full
                            text-sm
                            font-semibold

                            ${
                              booking.status ===
                              "PENDING"

                                ? "bg-yellow-100 text-yellow-700"

                                : booking.status ===
                                  "ACCEPTED"

                                ? "bg-blue-100 text-blue-700"

                                : "bg-green-100 text-green-700"
                            }
                            `}
                          >

                            {booking.status}

                          </span>

                        </td>

                      </tr>

                    ))
                  }

                </tbody>

              </table>

            </div>

          </div>

        </div>

      </div>

      {/* FOOTER */}
      <Footer />

    </>
  );
}

export default CustomerDashboard;