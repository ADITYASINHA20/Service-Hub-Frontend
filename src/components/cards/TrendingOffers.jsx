import OfferCard from "./OfferCard";

function TrendingOffers() {

  const offers = [

    {
      id: 1,
      title: "First Booking Offer",
      description: "Get amazing discount on your first booking.",
      discount: "20% OFF",
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 2,
      title: "Weekend Special",
      description: "Book services this weekend and save more.",
      discount: "30% OFF",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 3,
      title: "Premium Vendor Deal",
      description: "Trusted vendors with exclusive pricing.",
      discount: "15% OFF",
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200&auto=format&fit=crop",
    },

  ];

  return (
    <div
      className="
      w-full
      bg-gray-100
      py-20
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
            Trending Offers
          </h1>

          <p
            className="
            text-gray-500
            mt-4
            text-lg
            "
          >
            Best deals and offers for you
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
            offers.map((offer) => (

              <OfferCard
                key={offer.id}
                offer={offer}
              />

            ))
          }

        </div>

      </div>

    </div>
  );
}

export default TrendingOffers;