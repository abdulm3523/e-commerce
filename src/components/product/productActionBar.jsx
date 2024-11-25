import { ProductSearch } from "./productSearch";
import { ProductSort } from "./productSort";
import { ProductFilter } from "./productFilter";
import { ProductCart } from "./productCart";

const ProductActionBar = () => {
  return (
    <>
      <div className="mt-10">
        <div className="flex justify-between relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="w-full">
            <ProductSort />
            <ProductFilter />
          </div>

          <div className="flex gap-2 items-center">
            <ProductSearch />
            <ProductCart />
          </div>
        </div>
      </div>
    </>
  );
};

export { ProductActionBar };
