import {
  Globe,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

function Footer() {
  return (
    <footer
      className="
      bg-[#042759]
      text-white
      py-16
      px-5
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto
        grid
        grid-cols-1
        md:grid-cols-4
        gap-10
        "
      >

        {/* Brand */}
        <div>

          <h1
            className="
            text-3xl
            font-bold
            "
          >
            Service-Hub
          </h1>

          <p
            className="
            mt-5
            text-gray-300
            leading-7
            "
          >
            Trusted online platform for booking professional services quickly and securely.
          </p>

        </div>

        {/* Links */}
        <div>

          <h2 className="text-xl font-semibold">
            Quick Links
          </h2>

          <ul className="mt-5 space-y-3 text-gray-300">

            <li>Home</li>
            <li>Services</li>
            <li>Bookings</li>
            <li>Contact</li>

          </ul>

        </div>

        {/* Services */}
        <div>

          <h2 className="text-xl font-semibold">
            Services
          </h2>

          <ul className="mt-5 space-y-3 text-gray-300">

            <li>AC Repair</li>
            <li>Cleaning</li>
            <li>Plumbing</li>
            <li>Electrician</li>

          </ul>

        </div>

        {/* Contact */}
        <div>

          <h2 className="text-xl font-semibold">
            Contact
          </h2>

          <div className="flex items-center gap-4 mt-5">

            <div className="p-3 rounded-full bg-blue-500 text-white">
              <Globe />
            </div>

            <div className="p-3 rounded-full bg-green-500 text-white">
              <Phone />
            </div>

            <div className="p-3 rounded-full bg-red-500 text-white">
              <Mail />
            </div>

            <div className="p-3 rounded-full bg-orange-500 text-white">
              <MapPin />
            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div
        className="
        border-t
        border-gray-600
        mt-12
        pt-8
        text-center
        text-gray-400
        "
      >
        © 2026 Service-Hub. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;