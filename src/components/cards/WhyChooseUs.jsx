import {
  ShieldCheck,
  Clock3,
  BadgeCheck,
  Headphones,
} from "lucide-react";

import { motion } from "framer-motion";

function WhyChooseUs() {

  const features = [

    {
      id: 1,
      title: "Verified Vendors",
      description:
        "All vendors are verified and trusted for better service quality.",
      icon: <ShieldCheck size={45} />,
    },

    {
      id: 2,
      title: "Fast Booking",
      description:
        "Book any service instantly with quick confirmation process.",
      icon: <Clock3 size={45} />,
    },

    {
      id: 3,
      title: "Best Quality",
      description:
        "Professional and experienced vendors at affordable prices.",
      icon: <BadgeCheck size={45} />,
    },

    {
      id: 4,
      title: "24x7 Support",
      description:
        "Customer support available anytime for your booking help.",
      icon: <Headphones size={45} />,
    },

  ];

  return (
    <div
      className="
      w-full
      py-24
      px-5
      bg-white
      "
    >

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center">

          <h1
            className="
            text-4xl
            md:text-5xl
            font-bold
            text-gray-800
            "
          >
            Why Choose Us
          </h1>

          <p
            className="
            text-gray-500
            mt-4
            text-lg
            "
          >
            Trusted platform with premium service experience
          </p>

        </div>

        {/* Cards */}
        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-8
          mt-16
          "
        >

          {
            features.map((feature) => (

              <motion.div

                key={feature.id}

                whileHover={{ y: -10 }}

                className="
                bg-gray-50
                rounded-3xl
                p-8
                shadow-md
                hover:shadow-2xl
                transition
                text-center
                "

              >

                {/* Icon */}
                <div
                  className="
                  w-20
                  h-20
                  mx-auto
                  rounded-full
                  bg-blue-100
                  text-blue-600
                  flex
                  items-center
                  justify-center
                  "
                >
                  {feature.icon}
                </div>

                {/* Title */}
                <h2
                  className="
                  text-2xl
                  font-bold
                  text-gray-800
                  mt-6
                  "
                >
                  {feature.title}
                </h2>

                {/* Description */}
                <p
                  className="
                  text-gray-500
                  mt-4
                  leading-7
                  "
                >
                  {feature.description}
                </p>

              </motion.div>

            ))
          }

        </div>

      </div>

    </div>
  );
}

export default WhyChooseUs;