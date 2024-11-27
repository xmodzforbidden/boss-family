import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Status from "../components/Status";
import Purchase from "../components/Purchase";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Status />
      <Purchase />
      <Footer />
    </div>
  );
};

export default Index;