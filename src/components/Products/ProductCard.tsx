import ButtonWithIcon from "@components/Buttons/ButtonWithIcon";
import { FaStar } from "react-icons/fa";
import { ProductType } from "@app-types/types";

const ProductCard = ({ image, name, price, discountedPrice, rating }: ProductType) => {
  return (
    <div className="w-[350px] h-[407px] bg-white rounded-xl shadow-md flex flex-col justify-between p-4">
      <img src={image} alt={name} className="w-full h-[250px] object-contain" />
      <div className="flex justify-between items-start mt-2 min-h-[60px]">
        <p className="text-base font-semibold text-black max-w-[65%]">{name}</p>
        <div className="text-right text-morange">
          {discountedPrice ? (
            <>
              <p className="text-base font-bold">{discountedPrice}</p>
              <p className="line-through text-sm text-morange">{price}</p>
            </>
          ) : (
            <p className="text-base font-bold">{price}</p>
          )}
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center gap-1 text-sm text-gray-600">
          <FaStar className="text-yellow-500" />
          {rating.toFixed(1)}
        </div>
        <ButtonWithIcon
          text="Купить"
					className="bg-morange text-white px-4 py-2 rounded-lg text-sm font-semibold"
				/>
      </div>
    </div>
  );
};

export default ProductCard;
