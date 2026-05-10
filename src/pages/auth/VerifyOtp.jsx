import { useState } from "react";

import {
  useNavigate
} from "react-router-dom";

import {
  ShieldCheck,
  RefreshCcw,
} from "lucide-react";

import toast from "react-hot-toast";

import {
  verifyOtp,
  sendOtp,
} from "../../services/authService";

function VerifyOtp() {

  const navigate =
    useNavigate();

  const [otp, setOtp] =
    useState("");

  const [loading,
    setLoading] =
    useState(false);

  // VERIFY OTP
  const handleVerify =
    async (e) => {

      e.preventDefault();

      if (
        otp.length !== 6
      ) {

        toast.error(
          "Enter valid 6 digit OTP"
        );

        return;

      }

      try {

        setLoading(true);

        const email =
          localStorage.getItem(
            "otpEmail"
          );

        // VERIFY API
        await verifyOtp(
          email,
          otp
        );

        // GET TEMP USER
        const pendingUser =
          JSON.parse(

            localStorage.getItem(
              "pendingUser"
            )

          );

        // CREATE CUSTOMER
        const customer = {

          email:
            pendingUser.email,

          role:
            "CUSTOMER",

        };

        // SAVE LOGIN
        localStorage.setItem(

          "user",

          JSON.stringify(
            customer
          )

        );

        localStorage.setItem(
          "role",
          "CUSTOMER"
        );

        // REMOVE TEMP DATA
        localStorage.removeItem(
          "pendingUser"
        );

        localStorage.removeItem(
          "otpEmail"
        );

        toast.success(
          "OTP Verified Successfully"
        );

        toast.success("Signup Successful");

navigate("/");

      } catch (error) {

        console.log(error);

        toast.error(
          "Invalid OTP"
        );

      } finally {

        setLoading(false);

      }

    };

  // RESEND OTP
  const handleResend =
    async () => {

      try {

        const email =
          localStorage.getItem(
            "otpEmail"
          );

        await sendOtp(
          email
        );

        toast.success(
          "OTP Resent Successfully"
        );

      } catch (error) {

        toast.error(
          "Failed To Resend OTP"
        );

      }

    };

  return (

    <div
      className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-gradient-to-r
      from-blue-500
      to-blue-700
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
        text-center
        "
      >

        {/* ICON */}
        <div
          className="
          w-24
          h-24
          rounded-full
          bg-blue-100
          text-blue-600
          flex
          items-center
          justify-center
          mx-auto
          "
        >

          <ShieldCheck
            size={55}
          />

        </div>

        {/* HEADING */}
        <h1
          className="
          text-4xl
          font-bold
          text-gray-800
          mt-8
          "
        >
          OTP Verification
        </h1>

        {/* TEXT */}
        <p
          className="
          text-gray-500
          mt-4
          leading-7
          "
        >
          Enter the 6 digit OTP sent to your email
        </p>

        {/* FORM */}
        <form
          onSubmit={
            handleVerify
          }
          className="mt-10"
        >

          {/* INPUT */}
          <input

            type="text"

            placeholder="Enter 6 Digit OTP"

            value={otp}

            onChange={(e) =>
              setOtp(
                e.target.value
              )
            }

            maxLength={6}

            className="
            w-full
            border
            border-gray-300
            rounded-2xl
            py-5
            px-5
            text-center
            text-3xl
            tracking-[12px]
            outline-none
            focus:border-blue-500
            "

          />

          {/* BUTTON */}
          <button

            type="submit"

            disabled={loading}

            className="
            w-full
            mt-8
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

            {
              loading
                ?

                "Verifying..."

                :

                "Verify OTP"
            }

          </button>

        </form>

        {/* RESEND */}
        <button

          onClick={
            handleResend
          }

          className="
          mt-8
          text-blue-500
          font-semibold
          flex
          items-center
          justify-center
          gap-2
          mx-auto
          hover:text-blue-700
          transition
          "

        >

          <RefreshCcw
            size={18}
          />

          Resend OTP

        </button>

      </div>

    </div>
  );
}

export default VerifyOtp;