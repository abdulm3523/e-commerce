import { useContext, useEffect, useState } from "react";
import { FilterCategoryContext } from "../context";

const useProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const { filterCat } = useContext(FilterCategoryContext);
  console.log("ppp", filterCat);

  const isCatAvailable = filterCat.length > 0;
  const fetchProducts = async () => {
    if (isCatAvailable) {
      try {
        setLoading(true);

        const response = await fetch(
          `https://fakestoreapi.com/products/category/${filterCat}`
        );
        // if the response is not ok then throw error
        if (!response.ok) {
          throw new Error(`Fetch Error ${response.status}`);
        }

        // Fetch products
        const productsData = await response.json();

        setProducts(...products, productsData);
      } catch (error) {
        setErr(error);
      } finally {
        setLoading(false);
      }
    } else {
      try {
        setLoading(true);

        const response = await fetch("https://fakestoreapi.com/products");
        // if the response is not ok then throw error
        if (!response.ok) {
          throw new Error(`Fetch Error ${response.status}`);
        }

        // Fetch products
        const productsData = await response.json();

        setProducts(...products, productsData);
      } catch (error) {
        setErr(error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchProducts();
  }, []);

  return { products, setProducts, loading, err };
};

export default useProduct;
