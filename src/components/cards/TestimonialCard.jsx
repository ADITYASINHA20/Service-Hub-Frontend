import { motion } from "framer-motion";
import { Star } from "lucide-react";

function TestimonialCard({ review }) {
  return (
    <motion.div

      whileHover={{ scale: 1.03 }}

      className="
      bg-white
      rounded-3xl
      p-8
      shadow-lg
      hover:shadow-2xl
      transition
      "

    >

      {/* Top */}
      <div className="flex items-center gap-4">

        {/* Image */}
        <img
          src={review.image}
          alt={review.name}
          className="
          w-16
          h-16
          rounded-full
          object-cover
          "
        />

        {/* Name */}
        <div>

          <h2
            className="
            text-xl
            font-bold
            text-gray-800
            "
          >
            {review.name}
          </h2>

          <p className="text-gray-500">
            Customer
          </p>

        </div>

      </div>

      {/* Rating */}
      <div
        className="
        flex
        items-center
        gap-1
        mt-5
        "
      >

        <Star className="text-yellow-500 fill-yellow-500" />
        <Star className="text-yellow-500 fill-yellow-500" />
        <Star className="text-yellow-500 fill-yellow-500" />
        <Star className="text-yellow-500 fill-yellow-500" />
        <Star className="text-yellow-500 fill-yellow-500" />

      </div>

      {/* Message */}
      <p
        className="
        text-gray-600
        mt-5
        leading-8
        "
      >
        {review.message}
      </p>

    </motion.div>
  );
}

export default TestimonialCard;