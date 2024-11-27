import { ProductContext } from "../context";
import useProduct from "../hooks/useProduct";

export const ProductProvider = ({ children }) => {
  const { products, setProducts, loading, err } = useProduct();

  return (
    <ProductContext.Provider value={{ products, setProducts, loading, err }}>
      {children}
    </ProductContext.Provider>
  );
};
