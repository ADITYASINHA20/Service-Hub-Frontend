import { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  User,
  Mail,
  Phone,
  Lock,
} from "lucide-react";

import toast from "react-hot-toast";

import {
  sendOtp,
} from "../../services/authService";

function Signup() {

  const navigate =
    useNavigate();

  const [loading,
    setLoading] =
    useState(false);

  const [formData,
    setFormData] =
    useState({

      name: "",

      email: "",

      phone: "",

      password: "",

    });

  const handleChange = (
    e
  ) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value,

    });

  };

  const handleSignup =
    async (e) => {

      e.preventDefault();

      if (

        !formData.name ||

        !formData.email ||

        !formData.phone ||

        !formData.password

      ) {

        toast.error(
          "Please fill all fields"
        );

        return;

      }

      try {

        setLoading(true);

        // SEND OTP API
        await sendOtp(
          formData.email
        );

        // SAVE USER TEMP
        localStorage.setItem(

          "pendingUser",

          JSON.stringify(
            formData
          )

        );

        localStorage.setItem(
          "otpEmail",
          formData.email
        );

        toast.success(
          "OTP Sent Successfully"
        );

        navigate(
          "/verify-otp"
        );

      } catch (error) {

        console.log(error);

        toast.error(
          "Failed To Send OTP"
        );

      } finally {

        setLoading(false);

      }

    };

  return (

    <div
      className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-gray-100
      px-5
      "
    >

      <div
        className="
        bg-white
        w-full
        max-w-lg
        rounded-3xl
        shadow-2xl
        p-10
        "
      >

        <h1
          className="
          text-4xl
          font-bold
          text-center
          "
        >
          Customer Signup
        </h1>

        <form
          onSubmit={
            handleSignup
          }
          className="mt-10"
        >

          {/* NAME */}
          <div className="mb-5">

            <label>
              Full Name
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

              <User
                className="
                text-gray-400
                "
              />

              <input
                type="text"

                name="name"

                placeholder="Enter full name"

                value={
                  formData.name
                }

                onChange={
                  handleChange
                }

                className="
                w-full
                py-4
                px-3
                outline-none
                "
              />

            </div>

          </div>

          {/* EMAIL */}
          <div className="mb-5">

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

              <Mail
                className="
                text-gray-400
                "
              />

              <input
                type="email"

                name="email"

                placeholder="Enter email"

                value={
                  formData.email
                }

                onChange={
                  handleChange
                }

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

            <label>
              Phone
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

              <Phone
                className="
                text-gray-400
                "
              />

              <input
                type="text"

                name="phone"

                placeholder="Enter phone"

                value={
                  formData.phone
                }

                onChange={
                  handleChange
                }

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
          <div className="mb-6">

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

              <Lock
                className="
                text-gray-400
                "
              />

              <input
                type="password"

                name="password"

                placeholder="Enter password"

                value={
                  formData.password
                }

                onChange={
                  handleChange
                }

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

            disabled={loading}

            className="
            w-full
            bg-blue-500
            hover:bg-blue-600
            text-white
            py-4
            rounded-xl
            transition
            "

          >

            {
              loading
                ?

                "Sending OTP..."

                :

                "Send OTP"
            }

          </button>

        </form>

        <p
          className="
          text-center
          mt-8
          "
        >

          Already have an account?

          <Link

            to="/login"

            className="
            text-blue-500
            ml-2
            "

          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Signup;