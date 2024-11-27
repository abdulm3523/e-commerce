import { useContext, useEffect, useState } from "react";
import { FilterCategoryContext } from "../context";

const useProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const { filterCat } = useContext(FilterCategoryContext);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const fetchUrl = filterCat
        ? `https://fakestoreapi.com/products/category/${filterCat}`
        : `https://fakestoreapi.com/products`;
      const response = await fetch(fetchUrl);
      // if the response is not ok then throw error
      if (!response.ok) {
        throw new Error(`Fetch Error ${response.status}`);
      }

      // Fetch products
      const productsData = await response.json();

      setProducts(productsData);
    } catch (error) {
      setErr(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchProducts();
  }, [filterCat]);
  console.log("Current filterCat:", filterCat);

  return { products, setProducts, loading, err };
};

export default useProduct;
