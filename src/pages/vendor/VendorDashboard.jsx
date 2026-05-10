import { useEffect, useState } from "react";

import {
  LayoutDashboard,
  ClipboardList,
  CheckCircle,
  Truck,
  LogOut,
} from "lucide-react";

import toast from "react-hot-toast";

import { useNavigate } from "react-router-dom";

import {
  getBookings,
  acceptBooking,
  deliverBooking,
} from "../../services/bookingService";

function VendorDashboard() {

  const navigate = useNavigate();

  // BOOKINGS STATE
  const [bookings, setBookings] =
    useState([]);

  // ACTIVE TAB
  const [activeTab, setActiveTab] =
    useState("ALL");

  // FETCH BOOKINGS
  useEffect(() => {

    fetchBookings();

  }, []);

  // FETCH FUNCTION
  const fetchBookings = () => {

    getBookings()

      .then((res) => {

        console.log(
          "VENDOR BOOKINGS"
        );

        console.log(res.data);

        setBookings(res.data);

      })

      .catch((err) => {

        console.log(err);

      });
  };

  // ACCEPT BOOKING
  const handleAccept = async (id) => {

    try {

      await acceptBooking(id);

      toast.success(
        "Booking Accepted"
      );

      fetchBookings();

    } catch (err) {

      console.log(err);

      toast.error(
        "Failed To Accept Booking"
      );
    }
  };

  // DELIVER BOOKING
  const handleDelivered = async (id) => {

    try {

      await deliverBooking(id);

      toast.success(
        "Service Marked Delivered"
      );

      fetchBookings();

    } catch (err) {

      console.log(err);

      toast.error(
        "Failed To Deliver Service"
      );
    }
  };

  // FILTER BOOKINGS
  const filteredBookings =
    activeTab === "ALL"

      ? bookings

      : activeTab === "PENDING"

      ? bookings.filter(
          (b) =>
            b.status ===
            "PENDING"
        )

      : bookings.filter(
          (b) =>
            b.status ===
            "DELIVERED"
        );

  return (
    <div
      className="
      min-h-screen
      bg-gray-100
      flex
      "
    >

      {/* SIDEBAR */}
      <div
        className="
        hidden
        lg:flex
        flex-col
        w-72
        bg-[#042759]
        text-white
        p-8
        "
      >

        {/* LOGO */}
        <h1
          className="
          text-4xl
          font-extrabold
          "
        >
          Service-Hub
        </h1>

        {/* MENU */}
        <div className="mt-16 space-y-5">

          {/* DASHBOARD */}
          <button

            onClick={() =>
              setActiveTab("ALL")
            }

            className={`
            flex
            items-center
            gap-4
            w-full
            py-4
            px-5
            rounded-2xl
            transition

            ${
              activeTab === "ALL"

                ? "bg-blue-500"

                : "hover:bg-white/10"
            }
            `}
          >

            <LayoutDashboard />

            Dashboard

          </button>

          {/* BOOKINGS */}
          <button

            onClick={() =>
              setActiveTab("PENDING")
            }

            className={`
            flex
            items-center
            gap-4
            w-full
            py-4
            px-5
            rounded-2xl
            transition

            ${
              activeTab === "PENDING"

                ? "bg-blue-500"

                : "hover:bg-white/10"
            }
            `}
          >

            <ClipboardList />

            Pending Bookings

          </button>

          {/* COMPLETED */}
          <button

            onClick={() =>
              setActiveTab(
                "DELIVERED"
              )
            }

            className={`
            flex
            items-center
            gap-4
            w-full
            py-4
            px-5
            rounded-2xl
            transition

            ${
              activeTab ===
              "DELIVERED"

                ? "bg-blue-500"

                : "hover:bg-white/10"
            }
            `}
          >

            <CheckCircle />

            Completed

          </button>

        </div>

        {/* LOGOUT */}
        <button

          onClick={() => {

            localStorage.clear();

            toast.success(
              "Logged Out"
            );

            navigate("/");

          }}

          className="
          mt-auto
          flex
          items-center
          gap-4
          bg-red-500
          hover:bg-red-600
          py-4
          px-5
          rounded-2xl
          transition
          "
        >

          <LogOut />

          Logout

        </button>

      </div>

      {/* MAIN CONTENT */}
      <div
        className="
        flex-1
        p-5
        lg:p-10
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

          <div>

            <h1
              className="
              text-4xl
              font-bold
              text-gray-800
              "
            >
              Vendor Dashboard
            </h1>

            <p
              className="
              text-gray-500
              mt-2
              "
            >
              Manage all customer bookings
            </p>

          </div>

          {/* VENDOR */}
          <div
            className="
            bg-white
            px-6
            py-4
            rounded-2xl
            shadow-md
            "
          >

            <h3 className="font-semibold">
              Welcome Vendor
            </h3>

          </div>

        </div>

        {/* STATS */}
        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-6
          mt-12
          "
        >

          {/* TOTAL */}
          <div
            className="
            bg-white
            rounded-3xl
            p-8
            shadow-lg
            "
          >

            <h2 className="text-gray-500">
              Total Bookings
            </h2>

            <h1
              className="
              text-5xl
              font-extrabold
              text-blue-600
              mt-4
              "
            >
              {bookings.length}
            </h1>

          </div>

          {/* PENDING */}
          <div
            className="
            bg-white
            rounded-3xl
            p-8
            shadow-lg
            "
          >

            <h2 className="text-gray-500">
              Pending
            </h2>

            <h1
              className="
              text-5xl
              font-extrabold
              text-yellow-500
              mt-4
              "
            >
              {
                bookings.filter(
                  (b) =>
                    b.status ===
                    "PENDING"
                ).length
              }
            </h1>

          </div>

          {/* DELIVERED */}
          <div
            className="
            bg-white
            rounded-3xl
            p-8
            shadow-lg
            "
          >

            <h2 className="text-gray-500">
              Delivered
            </h2>

            <h1
              className="
              text-5xl
              font-extrabold
              text-green-500
              mt-4
              "
            >
              {
                bookings.filter(
                  (b) =>
                    b.status ===
                    "DELIVERED"
                ).length
              }
            </h1>

          </div>

        </div>

        {/* TABLE */}
        <div
          className="
          bg-white
          rounded-3xl
          shadow-lg
          p-8
          mt-12
          overflow-x-auto
          "
        >

          {/* HEADING */}
          <div
            className="
            flex
            items-center
            justify-between
            mb-8
            "
          >

            <h1
              className="
              text-3xl
              font-bold
              text-gray-800
              "
            >
              Recent Bookings
            </h1>

          </div>

          {/* TABLE */}
          <table className="w-full">

            <thead>

              <tr className="border-b border-gray-200">

                <th className="text-left py-4">
                  Customer
                </th>

                <th className="text-left py-4">
                  Service
                </th>

                <th className="text-left py-4">
                  Location
                </th>

                <th className="text-left py-4">
                  Status
                </th>

                <th className="text-left py-4">
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              {
                filteredBookings.map(
                  (booking) => (

                  <tr
                    key={booking.id}

                    className="
                    border-b
                    border-gray-100
                    "
                  >

                    {/* CUSTOMER */}
                    <td className="py-5">
                      {booking.customerName}
                    </td>

                    {/* SERVICE */}
                    <td className="py-5">
                      {booking.serviceName}
                    </td>

                    {/* LOCATION */}
                    <td className="py-5">
                      {booking.address}
                    </td>

                    {/* STATUS */}
                    <td className="py-5">

                      <span
                        className={`
                        px-4
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

                    {/* ACTION */}
                    <td className="py-5">

                      <div className="flex gap-3">

                        {
                          booking.status ===
                          "PENDING" && (

                            <button

                              onClick={() =>
                                handleAccept(
                                  booking.id
                                )
                              }

                              className="
                              bg-blue-500
                              hover:bg-blue-600
                              text-white
                              px-5
                              py-2
                              rounded-xl
                              transition
                              "
                            >
                              Accept
                            </button>
                          )
                        }

                        {
                          booking.status ===
                          "ACCEPTED" && (

                            <button

                              onClick={() =>
                                handleDelivered(
                                  booking.id
                                )
                              }

                              className="
                              bg-green-500
                              hover:bg-green-600
                              text-white
                              px-5
                              py-2
                              rounded-xl
                              transition
                              "
                            >
                              Delivered
                            </button>
                          )
                        }

                        {
                          booking.status ===
                          "DELIVERED" && (

                            <div
                              className="
                              flex
                              items-center
                              gap-2
                              text-green-600
                              font-semibold
                              "
                            >

                              <Truck size={18} />

                              Completed

                            </div>
                          )
                        }

                      </div>

                    </td>

                  </tr>

                ))
              }

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default VendorDashboard;