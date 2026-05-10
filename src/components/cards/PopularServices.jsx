import ServiceCard from "./ServiceCard";

function PopularServices() {

  const services = [

    {
      id: 1,
      title: "AC Repair",
      description: "Fast and trusted AC repair service at your doorstep.",
      price: 999,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 2,
      title: "Home Cleaning",
      description: "Professional home cleaning service with experts.",
      price: 1499,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 3,
      title: "Electrician",
      description: "Quick electrician support for home and office.",
      price: 799,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 4,
      title: "Plumbing",
      description: "Expert plumbing service with instant booking.",
      price: 699,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200&auto=format&fit=crop",
    },

  ];

  return (
    <div
      className="
      w-full
      max-w-7xl
      mx-auto
      px-5
      py-20
      "
    >

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
          Popular Services
        </h1>

        <p
          className="
          text-gray-500
          mt-4
          text-lg
          "
        >
          Book trusted services with verified vendors
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
          services.map((service) => (

            <ServiceCard
              key={service.id}
              service={service}
            />

          ))
        }

      </div>

    </div>
  );
}

export default PopularServices;