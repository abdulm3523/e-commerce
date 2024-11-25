import { ProductActionBar } from "./productActionBar";
import { ProductList } from "./productList";
const ProductSection = () => {
  return (
    <>
      <div>
        <div className="pt-16 sm:pt-24 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center">
              New Arrivals
            </h1>
            <p className="mt-4 text-xl text-gray-500 text-center">
              Thoughtfully designed objects for the workspace, home, and travel.
            </p>
          </div>
          <ProductActionBar />

          <div>
            <div className="bg-white">
              <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                  <ProductList />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { ProductSection };
