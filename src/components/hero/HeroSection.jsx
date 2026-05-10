import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function HeroSection() {

  const navigate = useNavigate();

  return (
    <div
      className="
      w-full
      min-h-screen
      bg-cover
      bg-center
      relative
      flex
      items-center
      justify-center
      "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1920&auto=format&fit=crop')",
      }}
    >

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div
        className="
        relative
        z-10
        text-center
        px-5
        max-w-5xl
        "
      >

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
          text-white
          text-4xl
          md:text-7xl
          font-extrabold
          leading-tight
          "
        >
          Book Trusted Services
          <br />
          At Best Price
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="
          text-gray-200
          text-lg
          md:text-2xl
          mt-6
          "
        >
          Fast • Secure • Verified Vendors
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-10"
        >

          <button
            onClick={() => navigate("/services")}
            className="
            px-8
            py-4
            bg-blue-500
            hover:bg-blue-600
            text-white
            text-lg
            rounded-xl
            shadow-lg
            transition
            "
          >
            Explore Services
          </button>

        </motion.div>

      </div>
    </div>
  );
}

export default HeroSection;