import { ProductCard } from "./productCard";
import { ProductLoadingIndicator } from "./productLoadingIndicator";
const ProductList = () => {
  return (
    <>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductLoadingIndicator />
      <ProductLoadingIndicator />
    </>
  );
};

export { ProductList };
