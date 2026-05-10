import { Link, useNavigate } from "react-router-dom";

import {
  Menu,
  X,
  UserCircle2,
  LogOut,
  LayoutDashboard,
} from "lucide-react";

import { useEffect, useRef, useState } from "react";

function Navbar() {

  const navigate = useNavigate();

  const [mobileMenu, setMobileMenu] =
    useState(false);

  const [profileMenu, setProfileMenu] =
    useState(false);

  const [roleModal, setRoleModal] =
    useState(false);

  const menuRef = useRef();

  const user =
    JSON.parse(localStorage.getItem("user"));

  // OUTSIDE CLICK CLOSE
  useEffect(() => {

    const handler = (e) => {

      if (
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {

        setProfileMenu(false);

      }

    };

    document.addEventListener(
      "mousedown",
      handler
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handler
      );

  }, []);

  // LOGOUT
  const handleLogout = () => {

    localStorage.removeItem("user");

    navigate("/");

    window.location.reload();

  };

  return (
    <>
      <nav
        className="
        w-full
        bg-white/90
        backdrop-blur-md
        shadow-md
        fixed
        top-0
        left-0
        z-50
        "
      >

        <div
          className="
          max-w-7xl
          mx-auto
          px-5
          py-3
          flex
          items-center
          justify-between
          "
        >

          {/* LOGO */}
          <div
            className="
            flex
            items-center
            gap-3
            cursor-pointer
            "
            onClick={() => navigate("/")}
          >

            <div
              className="
              w-11
              h-11
              rounded-full
              bg-blue-500
              flex
              items-center
              justify-center
              text-white
              font-bold
              text-2xl
              "
            >
              C
            </div>

            <h1
              className="
              text-3xl
              font-extrabold
              text-blue-600
              "
            >
              Service-Hub
            </h1>

          </div>

          {/* DESKTOP MENU */}
          <div
            className="
            hidden
            md:flex
            items-center
            gap-10
            "
          >

            <Link
              to="/"
              className="
              text-gray-700
              hover:text-blue-600
              font-medium
              transition
              "
            >
              Home
            </Link>

            <Link
              to="/services"
              className="
              text-gray-700
              hover:text-blue-600
              font-medium
              transition
              "
            >
              Services
            </Link>

            <Link
              to="/contact"
              className="
              text-gray-700
              hover:text-blue-600
              font-medium
              transition
              "
            >
              Contact
            </Link>

           {
  user?.role ===
  "CUSTOMER" && (

    <>
      <Link
        to="/customer/dashboard"
        className="
        text-gray-700
        hover:text-blue-600
        font-medium
        transition
        "
      >
        Dashboard
      </Link>

      <Link
        to="/my-bookings"
        className="
        text-gray-700
        hover:text-blue-600
        font-medium
        transition
        "
      >
        My Bookings
      </Link>
    </>
  )
}

{
  user?.role ===
  "VENDOR" && (

    <Link
      to="/vendor/dashboard"
      className="
      text-gray-700
      hover:text-blue-600
      font-medium
      transition
      "
    >
      Dashboard
    </Link>
  )
}

          </div>

          {/* RIGHT SECTION */}
          <div
            className="
            hidden
            md:flex
            items-center
            gap-4
            "
          >

            {/* IF USER NOT LOGIN */}
            {
              !user ? (

                <button

                  onClick={() =>
                    setRoleModal(true)
                  }

                  className="
                  px-7
                  py-3
                  rounded-2xl
                  bg-blue-500
                  text-white
                  hover:bg-blue-600
                  transition
                  font-semibold
                  "
                >

                  Get Started

                </button>

              ) : (

                <div
                  className="relative"
                  ref={menuRef}
                >

                  {/* USER PROFILE */}
                  <button

                    onClick={() =>
                      setProfileMenu(
                        !profileMenu
                      )
                    }

                    className="
                    flex
                    items-center
                    gap-3
                    bg-blue-50
                    px-4
                    py-2
                    rounded-2xl
                    hover:bg-blue-100
                    transition
                    "
                  >

                    <UserCircle2
                      size={35}
                      className="text-blue-600"
                    />

                    <div className="text-left">

                      <h3
                        className="
                        text-sm
                        font-semibold
                        text-gray-800
                        "
                      >
                        {user.role}
                      </h3>

                      <p
                        className="
                        text-xs
                        text-gray-500
                        "
                      >
                        {user.email}
                      </p>

                    </div>

                  </button>

                  {/* DROPDOWN */}
                  {
                    profileMenu && (

                      <div
                        className="
                        absolute
                        right-0
                        top-16
                        w-64
                        bg-white
                        rounded-3xl
                        shadow-2xl
                        p-5
                        border
                        border-gray-100
                        "
                      >

                        {/* DASHBOARD */}
                        <button

                          onClick={() => {

                            if (
                              user.role ===
                              "CUSTOMER"
                            ) {

                              navigate(
                                "/customer/dashboard"
                              );

                            } else {

                              navigate(
                                "/vendor/dashboard"
                              );

                            }

                            setProfileMenu(false);

                          }}

                          className="
                          w-full
                          flex
                          items-center
                          gap-3
                          px-4
                          py-3
                          rounded-2xl
                          hover:bg-gray-100
                          transition
                          "
                        >

                          <LayoutDashboard />

                          Dashboard

                        </button>

                        {/* LOGOUT */}
                        <button

                          onClick={handleLogout}

                          className="
                          w-full
                          flex
                          items-center
                          gap-3
                          mt-3
                          px-4
                          py-3
                          rounded-2xl
                          text-red-500
                          hover:bg-red-50
                          transition
                          "
                        >

                          <LogOut />

                          Logout

                        </button>

                      </div>
                    )
                  }

                </div>
              )
            }

          </div>

          {/* MOBILE MENU ICON */}
          <div className="md:hidden">

            {
              mobileMenu ? (

                <X
                  size={32}
                  className="cursor-pointer"
                  onClick={() =>
                    setMobileMenu(false)
                  }
                />

              ) : (

                <Menu
                  size={32}
                  className="cursor-pointer"
                  onClick={() =>
                    setMobileMenu(true)
                  }
                />

              )
            }

          </div>

        </div>

        {/* MOBILE MENU */}
        {
          mobileMenu && (

            <div
              className="
              md:hidden
              bg-white
              border-t
              border-gray-200
              px-5
              py-6
              flex
              flex-col
              gap-5
              "
            >

              <Link
                to="/"
                onClick={() =>
                  setMobileMenu(false)
                }
              >
                Home
              </Link>

              <Link
                to="/services"
                onClick={() =>
                  setMobileMenu(false)
                }
              >
                Services
              </Link>

              <Link
                to="/contact"
                onClick={() =>
                  setMobileMenu(false)
                }
              >
                Contact
              </Link>

              {
                !user ? (

                  <button

                    onClick={() => {

                      setRoleModal(true);
                      setMobileMenu(false);

                    }}

                    className="
                    w-full
                    py-3
                    rounded-xl
                    bg-blue-500
                    text-white
                    "
                  >

                    Get Started

                  </button>

                ) : (

                  <>
                    <button

                      onClick={() => {

                        if (
                          user.role ===
                          "CUSTOMER"
                        ) {

                          navigate(
                            "/customer/dashboard"
                          );

                        } else {

                          navigate(
                            "/vendor/dashboard"
                          );

                        }

                        setMobileMenu(false);

                      }}

                      className="
                      w-full
                      py-3
                      rounded-xl
                      bg-blue-500
                      text-white
                      "
                    >

                      Dashboard

                    </button>

                    <button

                      onClick={handleLogout}

                      className="
                      w-full
                      py-3
                      rounded-xl
                      bg-red-500
                      text-white
                      "
                    >

                      Logout

                    </button>
                  </>
                )
              }

            </div>
          )
        }

      </nav>

      {/* ROLE MODAL */}
      {
        roleModal && (

          <div
            className="
            fixed
            inset-0
            bg-black/50
            flex
            items-center
            justify-center
            z-[100]
            px-5
            "
          >

            <div
              className="
              bg-white
              w-full
              max-w-4xl
              rounded-[40px]
              p-10
              grid
              grid-cols-1
              md:grid-cols-2
              gap-8
              relative
              shadow-2xl
              "
            >

              {/* CLOSE */}
              <button

                onClick={() =>
                  setRoleModal(false)
                }

                className="
                absolute
                top-5
                right-5
                text-gray-500
                "
              >

                <X size={28} />

              </button>

              {/* CUSTOMER */}
              <div
                className="
                border
                rounded-3xl
                p-8
                hover:shadow-xl
                transition
                "
              >

                <h1
                  className="
                  text-3xl
                  font-bold
                  "
                >
                  Customer
                </h1>

                <p
                  className="
                  text-gray-500
                  mt-4
                  leading-7
                  "
                >
                  Book trusted home
                  services quickly
                  and securely.
                </p>

                <button

                  onClick={() =>
                    navigate("/signup")
                  }

                  className="
                  mt-8
                  w-full
                  bg-blue-500
                  text-white
                  py-4
                  rounded-2xl
                  font-semibold
                  "
                >

                  Continue as Customer

                </button>

              </div>

              {/* VENDOR */}
              <div
                className="
                border
                rounded-3xl
                p-8
                hover:shadow-xl
                transition
                "
              >

                <h1
                  className="
                  text-3xl
                  font-bold
                  "
                >
                  Vendor
                </h1>

                <p
                  className="
                  text-gray-500
                  mt-4
                  leading-7
                  "
                >
                  Manage bookings and
                  grow your service
                  business.
                </p>

                <button

                  onClick={() =>
                    navigate(
                      "/vendor/login"
                    )
                  }

                  className="
                  mt-8
                  w-full
                  bg-black
                  text-white
                  py-4
                  rounded-2xl
                  font-semibold
                  "
                >

                  Continue as Vendor

                </button>

              </div>

            </div>

          </div>
        )
      }

    </>
  );
}

export default Navbar;