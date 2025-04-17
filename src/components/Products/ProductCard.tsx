import ButtonWithIcon from "@components/Buttons/ButtonWithIcon";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { ProductType } from "@app-types/types";
import { useTranslation } from "react-i18next";

interface ProductCardProps {
  item: ProductType;
  setCartCount?: (count: number) => void;
  setFavCount?: (count: number) => void;
}

const ProductCard = ({ item, setCartCount, setFavCount }: ProductCardProps) => {
  const { t } = useTranslation();

  const handleAddToCart = (item: ProductType) => {
    const stored = localStorage.getItem('cart');
    const data: Array<ProductType> = stored ? JSON.parse(stored) : [];
    let isFound: boolean = false;
    for (let i = 0; i < data.length; ++i) {
      let val: ProductType = data[i];
      if (!isFound && val.name === item.name) {
        data[i] = { ...val, count: val.count! + 1}
        isFound = true;
      }
    }
    if (!isFound)
      data.push({ ...item, count: 1 });
    localStorage.setItem('cart', JSON.stringify(data));
    if (setCartCount)
      setCartCount(data.reduce((sum, item) => sum + item.count!, 0));
  }
  
  const handleAddToFav = (item: ProductType) => {
    const stored = localStorage.getItem('fav');
    const cart: Array<ProductType> = stored ? JSON.parse(stored) : [];
    const exists = cart.some(value => value.name === item.name);
    if (!exists) {
      cart.push(item);
      localStorage.setItem('fav', JSON.stringify(cart));
      if (setFavCount)
        setFavCount(cart.length);
    }
  }
  return (
    <div className="w-[350px] h-[407px] bg-white rounded-xl shadow-md flex flex-col justify-between p-[1em]">
      <img src={item.image} alt={item.name} className="w-full h-[250px] object-contain" />
      <div className="flex justify-between items-start mt-[0.5em] min-h-[60px]">
        <p className="text-base font-semibold text-black max-w-[65%]">{item.name}</p>
        <div className="text-right text-morange">
          {item.discountedPrice ? (
            <>
              <p className="text-base font-bold">{item.discountedPrice} {t("currency")}</p>
              <p className="line-through text-sm text-morange">{item.price} {t("currency")}</p>
            </>
          ) : (
            <p className="text-base font-bold">{item.price} {t("currency")}</p>
          )}
        </div>
      </div>
      <div className="flex justify-between items-center mt-[1em]">
        <div className="flex items-center gap-[0.25em] text-sm text-gray-600">
          <FaStar className="text-yellow-500" />
          {item.rating.toFixed(1)}
        </div>
        <div className="flex flex-row gap-[0.5em]">
          <ButtonWithIcon
            Icon={FaRegHeart}
            className="text-morange text-xl font-semibold"
            onClick={() => handleAddToFav(item)}
          />
          <ButtonWithIcon
            text={t("products.buy")}
            className="bg-morange text-white w-[10em] py-[0.5em] rounded-lg text-sm font-semibold"
            onClick={() => handleAddToCart(item)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
