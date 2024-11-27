import "./App.css";
import { MainHeader } from "./components/header/mainHeader";
import { HeroSection } from "./components/heroSection";
import { ProductSection } from "./components/product/poductSection";
import { Footer } from "./components/footer";
import { ProductProvider } from "./provider/productProvider";
import { AddToCartProvider } from "./provider/addToCartProvider";
function App() {
  return (
    <>
      <ProductProvider>
        <AddToCartProvider>
          <MainHeader />
          <HeroSection />
          <ProductSection />
          <Footer />
        </AddToCartProvider>
      </ProductProvider>
    </>
  );
}

export default App;
