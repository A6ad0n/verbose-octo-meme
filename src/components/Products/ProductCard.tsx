import ButtonWithIcon from "@components/Buttons/ButtonWithIcon";
import { FaStar } from "react-icons/fa";
import { ProductType } from "@app-types/types";
import { useTranslation } from "react-i18next";

const ProductCard = ({ image, name, price, discountedPrice, rating }: ProductType) => {
  const { t } = useTranslation();
  return (
    <div className="w-[350px] h-[407px] bg-white rounded-xl shadow-md flex flex-col justify-between p-[1em]">
      <img src={image} alt={name} className="w-full h-[250px] object-contain" />
      <div className="flex justify-between items-start mt-[0.5em] min-h-[60px]">
        <p className="text-base font-semibold text-black max-w-[65%]">{name}</p>
        <div className="text-right text-morange">
          {discountedPrice ? (
            <>
              <p className="text-base font-bold">{discountedPrice} {t("currency")}</p>
              <p className="line-through text-sm text-morange">{price} {t("currency")}</p>
            </>
          ) : (
            <p className="text-base font-bold">{price} {t("currency")}</p>
          )}
        </div>
      </div>
      <div className="flex justify-between items-center mt-[1em]">
        <div className="flex items-center gap-[0.25em] text-sm text-gray-600">
          <FaStar className="text-yellow-500" />
          {rating.toFixed(1)}
        </div>
        <ButtonWithIcon
          text={t("products.buy")}
					className="bg-morange text-white w-[10em] py-[0.5em] rounded-lg text-sm font-semibold"
				/>
      </div>
    </div>
  );
};

export default ProductCard;
