import "./App.css";
import { Footer } from "./components/footer";
import { MainHeader } from "./components/header/mainHeader";
import { HeroSection } from "./components/heroSection";
import { ProductSection } from "./components/product/poductSection";
import { AddToCartProvider } from "./provider/addToCartProvider";
import { FilterCategoryProvider } from "./provider/filterCategoryProvider";
import { ProductProvider } from "./provider/productProvider";
function App() {
  return (
    <>
      <FilterCategoryProvider>
        <ProductProvider>
          <AddToCartProvider>
            <MainHeader />
            <HeroSection />
            <ProductSection />
            <Footer />
          </AddToCartProvider>
        </ProductProvider>
      </FilterCategoryProvider>
    </>
  );
}

export default App;
