import { useState }
from "react";

import { useNavigate, Link }
from "react-router-dom";

import {
  Mail,
  Lock,
  ShieldCheck,
} from "lucide-react";

import toast
from "react-hot-toast";

function VendorLogin() {

  const navigate =
    useNavigate();

  const [formData, setFormData] =
    useState({

      email: "",
      password: "",

    });

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
      e.target.value,

    });

  };

  const handleLogin = (e) => {

    e.preventDefault();

    if (

      !formData.email ||
      !formData.password

    ) {

      toast.error(
        "Please fill all fields"
      );

      return;
    }

    // VENDOR OBJECT
    const vendor = {

      email:
      formData.email,

      role:
      "VENDOR",

    };

    // SAVE USER
    localStorage.setItem(

      "user",

      JSON.stringify(vendor)

    );

    localStorage.setItem(
      "role",
      "VENDOR"
    );

    toast.success(
      "Vendor Login Successful"
    );

    navigate(
      "/vendor/dashboard"
    );

  };

  return (

    <div
      className="
      min-h-screen
      grid
      grid-cols-1
      lg:grid-cols-2
      "
    >

      {/* LEFT */}
      <div
        className="
        hidden
        lg:flex
        items-center
        justify-center
        bg-cover
        bg-center
        relative
        "
        style={{
          backgroundImage:
          "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1920&auto=format&fit=crop')",
        }}
      >

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 text-center px-10">

          <div
            className="
            w-24
            h-24
            rounded-full
            bg-blue-500
            flex
            items-center
            justify-center
            mx-auto
            "
          >

            <ShieldCheck
              size={55}
              className="text-white"
            />

          </div>

          <h1
            className="
            text-white
            text-6xl
            font-extrabold
            mt-8
            "
          >
            Vendor Portal
          </h1>

          <p
            className="
            text-gray-200
            text-xl
            mt-6
            "
          >
            Manage bookings and grow your business
          </p>

        </div>

      </div>

      {/* RIGHT */}
      <div
        className="
        flex
        items-center
        justify-center
        bg-white
        px-5
        "
      >

        <div
          className="
          w-full
          max-w-md
          "
        >

          {/* HEADING */}
          <div className="text-center">

            <h1
              className="
              text-4xl
              font-bold
              text-gray-800
              "
            >
              Vendor Login
            </h1>

          </div>

          {/* FORM */}
          <form
            onSubmit={handleLogin}
            className="mt-10"
          >

            {/* EMAIL */}
            <div className="mb-6">

              <label>
                Email
              </label>

              <div
                className="
                flex
                items-center
                border
                rounded-xl
                mt-2
                px-4
                "
              >

                <Mail className="text-gray-400" />

                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={formData.email}
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

            {/* PASSWORD */}
            <div className="mb-8">

              <label>
                Password
              </label>

              <div
                className="
                flex
                items-center
                border
                rounded-xl
                mt-2
                px-4
                "
              >

                <Lock className="text-gray-400" />

                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={formData.password}
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
              bg-black
              hover:bg-gray-800
              text-white
              py-4
              rounded-2xl
              text-lg
              font-semibold
              transition
              "
            >
              Vendor Login
            </button>

          </form>

          {/* SIGNUP */}
          <p
            className="
            text-center
            mt-8
            text-gray-500
            "
          >

            Don't have an account?

            <Link
              to="/vendor/signup"
              className="
              text-blue-500
              ml-2
              font-semibold
              "
            >
              Signup
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default VendorLogin;