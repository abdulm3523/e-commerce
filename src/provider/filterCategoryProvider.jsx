import { useState } from "react";
import { FilterCategoryContext } from "../context";
const FilterCategoryProvider = ({ children }) => {
  const [filterCat, setFilterCat] = useState([]);
  return (
    <FilterCategoryContext.Provider value={{ filterCat, setFilterCat }}>
      {children}
    </FilterCategoryContext.Provider>
  );
};

export { FilterCategoryProvider };
