import "./App.css";
import { MainHeader } from "./components/header/mainHeader";
import { HeroSection } from "./components/heroSection";
import { ProductSection } from "./components/product/poductSection";
import { Footer } from "./components/footer";
function App() {
  return (
    <>
      <MainHeader />
      <HeroSection />
      <ProductSection />
      <Footer />
    </>
  );
}

export default App;
