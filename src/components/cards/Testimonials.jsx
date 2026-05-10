import TestimonialCard from "./TestimonialCard";

function Testimonials() {

  const reviews = [

    {
      id: 1,
      name: "Rahul Sharma",
      image:
        "https://randomuser.me/api/portraits/men/32.jpg",
      message:
        "Amazing service experience. Booking process was smooth and very fast.",
    },

    {
      id: 2,
      name: "Priya Verma",
      image:
        "https://randomuser.me/api/portraits/women/44.jpg",
      message:
        "Professional vendors and affordable prices. Highly recommended.",
    },

    {
      id: 3,
      name: "Aman Gupta",
      image:
        "https://randomuser.me/api/portraits/men/76.jpg",
      message:
        "Very trusted platform with excellent customer support service.",
    },

  ];

  return (
    <div
      className="
      w-full
      bg-gray-100
      py-24
      px-5
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
            What Customers Say
          </h1>

          <p
            className="
            text-gray-500
            mt-4
            text-lg
            "
          >
            Trusted by thousands of happy customers
          </p>

        </div>

        {/* Cards */}
        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          mt-16
          "
        >

          {
            reviews.map((review) => (

              <TestimonialCard
                key={review.id}
                review={review}
              />

            ))
          }

        </div>

      </div>

    </div>
  );
}

export default Testimonials;