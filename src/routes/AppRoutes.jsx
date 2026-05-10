import { Routes, Route }
from "react-router-dom";

import Home
from "../pages/home/Home";

import Login
from "../pages/auth/Login";

import Signup
from "../pages/auth/Signup";

import VerifyOtp
from "../pages/auth/VerifyOtp";

import VendorLogin
from "../pages/auth/VendorLogin";

import Services
from "../pages/services/Services";

import Booking
from "../pages/booking/Booking";

import MyBookings
from "../pages/booking/MyBookings";

import VendorDashboard
from "../pages/vendor/VendorDashboard";

import NotFound
from "../pages/error/NotFound";

import ProtectedRoute
from "../components/common/ProtectedRoute";

import CustomerDashboard
from "../pages/customer/CustomerDashboard";

import Contact
from "../pages/contact/Contact";

function AppRoutes() {

  return (

    <Routes>

      {/* HOME */}
      <Route
        path="/"
        element={<Home />}
      />

      {/* AUTH */}
      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/signup"
        element={<Signup />}
      />

      <Route
        path="/verify-otp"
        element={<VerifyOtp />}
      />

      <Route
        path="/vendor/login"
        element={<VendorLogin />}
      />

      {/* SERVICES */}
      <Route
        path="/services"
        element={<Services />}
      />

      {/* BOOKING */}
      <Route
        path="/booking/:id"
        element={<Booking />}
      />

      {/* CUSTOMER DASHBOARD */}
      <Route

        path="/customer/dashboard"

        element={
          <ProtectedRoute>

            <CustomerDashboard />

          </ProtectedRoute>
        }
      />

      {/* MY BOOKINGS */}
      <Route

        path="/my-bookings"

        element={
          <ProtectedRoute>

            <MyBookings />

          </ProtectedRoute>
        }
      />

      {/* VENDOR DASHBOARD */}
      <Route

        path="/vendor/dashboard"

        element={
          <ProtectedRoute>

            <VendorDashboard />

          </ProtectedRoute>
        }
      />

      {/* CONTACT */}
      <Route
        path="/contact"
        element={<Contact />}
      />

      {/* 404 */}
      <Route
        path="*"
        element={<NotFound />}
      />

    </Routes>
  );
}

export default AppRoutes;