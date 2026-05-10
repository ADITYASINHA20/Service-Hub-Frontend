import { motion } from "framer-motion";

function OfferCard({ offer }) {
  return (
    <motion.div

      whileHover={{ scale: 1.03 }}

      className="
      rounded-3xl
      overflow-hidden
      relative
      h-72
      shadow-xl
      "

    >

      {/* Background Image */}
      <img
        src={offer.image}
        alt={offer.title}
        className="
        w-full
        h-full
        object-cover
        "
      />

      {/* Overlay */}
      <div
        className="
        absolute
        inset-0
        bg-black/50
        "
      ></div>

      {/* Content */}
      <div
        className="
        absolute
        inset-0
        p-6
        flex
        flex-col
        justify-end
        "
      >

        {/* Discount */}
        <h2
          className="
          text-yellow-400
          text-4xl
          font-extrabold
          "
        >
          {offer.discount}
        </h2>

        {/* Title */}
        <h3
          className="
          text-white
          text-2xl
          font-bold
          mt-2
          "
        >
          {offer.title}
        </h3>

        {/* Description */}
        <p
          className="
          text-gray-200
          mt-3
          text-sm
          "
        >
          {offer.description}
        </p>

        {/* Button */}
        <button
          className="
          mt-5
          w-fit
          px-6
          py-3
          bg-blue-500
          hover:bg-blue-600
          text-white
          rounded-xl
          transition
          "
        >
          Explore Offer
        </button>

      </div>

    </motion.div>
  );
}

export default OfferCard;