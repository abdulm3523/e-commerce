import { useContext, useEffect, useState } from "react";
import { FilterCategoryContext } from "../../context";

const ProductFilter = () => {
  const [toggleShow, setToggleShow] = useState(false);
  const [catagoryFilter, setCategoryFilter] = useState([]);
  const { setFilterCat } = useContext(FilterCategoryContext);
  const [selectCat, setSelectCat] = useState("");

  // Handel Category Change
  const handelOnChange = (category) => {
    if (selectCat === category) {
      setFilterCat("");
      setSelectCat("");
    } else {
      setFilterCat(category);
      setSelectCat(category);
    }
  };
  console.log("selected", selectCat);
  // FETCHING CATEGORY LIST
  const fetchCategory = async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const data = await response.json();
    const categoryList = data;
    setCategoryFilter(categoryList);
  };
  useEffect(() => {
    fetchCategory();
  }, []);

  // console.log("hello", filterCat);
  // console.log(catagoryFilter);
  return (
    <>
      <div className="relative inline-block text-left">
        <div>
          <button
            type="button"
            className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
            id="filter-button"
            aria-expanded="false"
            aria-haspopup="true"
            onClick={() => setToggleShow(!toggleShow)}
          >
            Filter
            <svg
              className="-mr-1 h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        {toggleShow && (
          <div
            className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="filter-button"
            tabIndex="-1"
            id="filter-dropdown"
          >
            <div className="py-1" role="none">
              {catagoryFilter.length > 0 ? (
                catagoryFilter.map((category, index) => (
                  <label
                    key={index}
                    className="inline-flex w-full cursor-pointer hover:bg-gray-50 items-center px-4 py-2 text-sm text-gray-700"
                  >
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4"
                      id="filter-option-1"
                      checked={selectCat === category}
                      onChange={() => handelOnChange(category)}
                    />
                    <span className="ml-2">{category}</span>
                  </label>
                ))
              ) : (
                <p className="ml-2">No Category Available</p>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export { ProductFilter };
