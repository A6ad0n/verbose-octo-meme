import { ProductType } from "@app-types/types";
import data from "./data.json"
import ProductCard from "./ProductCard";

const Products = () => {
  const products: Array<ProductType> = [...data];
  return (
    <div className="w-full flex justify-center">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.5em] p-[1em] pb-[7em]">
        {products.map((item: ProductType, index: number) => (
          <ProductCard 
            key={index}
            image={item.image}
            name={item.name}
            price={item.price}
            discountedPrice={item.discountedPrice}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
