import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  Send,
} from "lucide-react";

import { motion } from "framer-motion";

import { useState } from "react";

import toast from "react-hot-toast";

function Contact() {

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      message: "",
    });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.message
    ) {

      toast.error("Please fill all fields");

      return;

    }

    toast.success(
      "Message Sent Successfully"
    );

    setFormData({
      name: "",
      email: "",
      message: "",
    });

  };

  return (
    <>
      <Navbar />

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

          {/* Hero */}
          <motion.div

            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}

            className="
            bg-gradient-to-r
            from-blue-600
            to-indigo-700
            rounded-[40px]
            p-10
            md:p-16
            text-white
            shadow-2xl
            relative
            overflow-hidden
            "

          >

            {/* Circle */}
            <div
              className="
              absolute
              -top-24
              -right-24
              w-80
              h-80
              bg-white/10
              rounded-full
              "
            ></div>

            <div className="relative z-10">

              <h1
                className="
                text-5xl
                md:text-7xl
                font-extrabold
                leading-tight
                "
              >
                Contact Us
              </h1>

              <p
                className="
                mt-6
                text-xl
                text-blue-100
                max-w-3xl
                leading-9
                "
              >
                We are always here to help you with bookings,
                support and service related queries.
              </p>

            </div>

          </motion.div>

          {/* Content */}
          <div
            className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-10
            mt-16
            "
          >

            {/* Left */}
            <motion.div

              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}

              className="
              bg-white
              rounded-[40px]
              shadow-2xl
              p-10
              "

            >

              <h1
                className="
                text-4xl
                font-bold
                text-gray-800
                "
              >
                Get In Touch
              </h1>

              <p
                className="
                text-gray-500
                mt-4
                leading-8
                "
              >
                Feel free to contact us anytime.
                Our support team will respond quickly.
              </p>

              {/* Contact Cards */}
              <div className="space-y-6 mt-12">

                {/* Email */}
                <div
                  className="
                  flex
                  items-center
                  gap-5
                  bg-blue-50
                  p-6
                  rounded-3xl
                  "
                >

                  <div
                    className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-blue-500
                    text-white
                    flex
                    items-center
                    justify-center
                    "
                  >

                    <Mail size={32} />

                  </div>

                  <div>

                    <h2 className="text-2xl font-bold">
                      Email
                    </h2>

                    <p className="text-gray-500 mt-1">
                      support@cc96.com
                    </p>

                  </div>

                </div>

                {/* Phone */}
                <div
                  className="
                  flex
                  items-center
                  gap-5
                  bg-green-50
                  p-6
                  rounded-3xl
                  "
                >

                  <div
                    className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-green-500
                    text-white
                    flex
                    items-center
                    justify-center
                    "
                  >

                    <Phone size={32} />

                  </div>

                  <div>

                    <h2 className="text-2xl font-bold">
                      Phone
                    </h2>

                    <p className="text-gray-500 mt-1">
                      +91 9876543210
                    </p>

                  </div>

                </div>

                {/* Location */}
                <div
                  className="
                  flex
                  items-center
                  gap-5
                  bg-orange-50
                  p-6
                  rounded-3xl
                  "
                >

                  <div
                    className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-orange-500
                    text-white
                    flex
                    items-center
                    justify-center
                    "
                  >

                    <MapPin size={32} />

                  </div>

                  <div>

                    <h2 className="text-2xl font-bold">
                      Location
                    </h2>

                    <p className="text-gray-500 mt-1">
                      Kolkata, India
                    </p>

                  </div>

                </div>

                {/* Time */}
                <div
                  className="
                  flex
                  items-center
                  gap-5
                  bg-purple-50
                  p-6
                  rounded-3xl
                  "
                >

                  <div
                    className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-purple-500
                    text-white
                    flex
                    items-center
                    justify-center
                    "
                  >

                    <Clock3 size={32} />

                  </div>

                  <div>

                    <h2 className="text-2xl font-bold">
                      Working Hours
                    </h2>

                    <p className="text-gray-500 mt-1">
                      Mon - Sat : 9AM - 8PM
                    </p>

                  </div>

                </div>

              </div>

            </motion.div>

            {/* Right Form */}
            <motion.div

              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}

              className="
              bg-white
              rounded-[40px]
              shadow-2xl
              p-10
              "

            >

              <h1
                className="
                text-4xl
                font-bold
                text-gray-800
                "
              >
                Send Message
              </h1>

              <p
                className="
                text-gray-500
                mt-4
                "
              >
                We would love to hear from you.
              </p>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="mt-10"
              >

                {/* Name */}
                <div className="mb-6">

                  <label className="font-medium text-gray-700">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="
                    w-full
                    mt-3
                    border
                    border-gray-300
                    rounded-2xl
                    px-5
                    py-4
                    outline-none
                    focus:border-blue-500
                    "
                  />

                </div>

                {/* Email */}
                <div className="mb-6">

                  <label className="font-medium text-gray-700">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="
                    w-full
                    mt-3
                    border
                    border-gray-300
                    rounded-2xl
                    px-5
                    py-4
                    outline-none
                    focus:border-blue-500
                    "
                  />

                </div>

                {/* Message */}
                <div className="mb-8">

                  <label className="font-medium text-gray-700">
                    Message
                  </label>

                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Write your message..."
                    value={formData.message}
                    onChange={handleChange}
                    className="
                    w-full
                    mt-3
                    border
                    border-gray-300
                    rounded-2xl
                    px-5
                    py-4
                    outline-none
                    resize-none
                    focus:border-blue-500
                    "
                  />

                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="
                  w-full
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  py-4
                  rounded-2xl
                  text-lg
                  font-semibold
                  transition
                  flex
                  items-center
                  justify-center
                  gap-3
                  "
                >

                  <Send size={22} />

                  Send Message

                </button>

              </form>

            </motion.div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Contact;