import { Star } from "lucide-react";

import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";

function ServiceCard({ service }) {

  const navigate = useNavigate();

  return (

    <motion.div

      whileHover={{ scale: 1.03 }}

      className="
      bg-white
      rounded-3xl
      overflow-hidden
      shadow-lg
      hover:shadow-2xl
      transition
      duration-300
      "

    >

      {/* IMAGE */}
      <div className="w-full h-60 overflow-hidden">

        <img

          src={
            service.image ||

            "https://picsum.photos/400/300"
          }

          alt={
            service.title ||
            "Service Image"
          }

          onError={(e) => {

            e.target.src =
              "https://picsum.photos/400/300";

          }}

          className="
          w-full
          h-full
          object-cover
          "

        />

      </div>

      {/* CONTENT */}
      <div className="p-5">

        {/* TITLE */}
        <h2
          className="
          text-2xl
          font-bold
          text-gray-800
          "
        >

          {
            service.title ||
            "Service"
          }

        </h2>

        {/* DESCRIPTION */}
        <p
          className="
          text-gray-500
          mt-3
          text-sm
          leading-6
          "
        >

          {
            service.description ||

            "Professional service available near you."
          }

        </p>

        {/* RATING */}
        <div
          className="
          flex
          items-center
          gap-2
          mt-4
          "
        >

          <Star

            size={18}

            className="
            text-yellow-500
            fill-yellow-500
            "

          />

          <span className="font-semibold">

            {
              service.rating ||
              "4.5"
            }

          </span>

        </div>

        {/* PRICE */}
        <div className="mt-5">

          <h3
            className="
            text-3xl
            font-bold
            text-blue-600
            "
          >

            ₹ {

              service.price ||

              "999"

            }

          </h3>

        </div>

        {/* BUTTON */}
        <button

          onClick={() =>

            navigate(

              `/booking/${service.id}`

            )

          }

          className="
          w-full
          mt-6
          bg-blue-500
          hover:bg-blue-600
          text-white
          py-3
          rounded-xl
          font-semibold
          transition
          "

        >

          Book Now

        </button>

      </div>

    </motion.div>
  );
}

export default ServiceCard;