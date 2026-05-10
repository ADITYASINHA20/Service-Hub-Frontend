import Navbar from "../../components/navbar/Navbar";
import HeroSection from "../../components/hero/HeroSection";
import SearchBox from "../../components/search/SearchBox";
import PopularServices from "../../components/cards/PopularServices";
import TrendingOffers from "../../components/cards/TrendingOffers";
import WhyChooseUs from "../../components/cards/WhyChooseUs";
import Testimonials from "../../components/cards/Testimonials";
import Footer from "../../components/footer/Footer";






function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SearchBox />
      <PopularServices />
      <TrendingOffers />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;