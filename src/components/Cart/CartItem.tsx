import ButtonWithIcon from '@components/Buttons/ButtonWithIcon';
import { RiDeleteBin2Line } from "react-icons/ri";
import { ProductType } from '@app-types/types';
import { useTranslation } from 'react-i18next';
import { parseNumber } from '@utils/priceFix';

interface CartItemProps {
  product: ProductType;
  onIncrease: () => void;
  onDecrease: () => void;
  onDelete: () => void;
}

const CartItem = ({ product, onIncrease, onDecrease, onDelete }: CartItemProps) => {
	const { t } = useTranslation();
  const sumPrice: string = ((product.discountedPrice ? 
    parseNumber(product.discountedPrice!) : parseNumber(product.price)) * product.count!).toFixed(2)
  return (
    <div className="flex relative w-[633px] h-[218px] items-center p-[1em] rounded-xl bg-white">
			<div className="flex flex-col justify-center items-center">
				<div className="flex-shrink-0">
					<img
						src={product.image}
						alt={product.name}
						className="w-[146.53px] h-[136px] object-cover"
					/>
				</div>
				<div className="flex items-center space-x-2">
					<ButtonWithIcon
					  text="+"
						className="bg-morange text-white text-xs rounded-full w-[2em] h-[2em] flex items-center justify-center hover-scale-button"
						onClick={onIncrease}
					/>
					<span className="text-lg">{product.count!}</span>
					<ButtonWithIcon
						text="-"
						className="bg-morange text-white text-xs rounded-full w-[2em] h-[2em] flex items-center justify-center hover-scale-button"
						onClick={onDecrease}
					/>
				</div>
			</div>

      <div className="flex flex-col justify-start ml-[1em] text-left">
        <p className="font-semibold text-base">{product.name}</p>
        {product.discountedPrice ? (
            <>
              <p className="text-base font-bold">{product.discountedPrice} {t("currency")}</p>
              <p className="line-through text-sm text-gray">{product.price} {t("currency")}</p>
            </>
          ) : (
            <p className="text-base font-bold">{product.price} {t("currency")}</p>
          )}
      </div>

      <div className="absolute top-[1em] right-[1em]">
        <ButtonWithIcon
          Icon={RiDeleteBin2Line}
          className="text-red-500 hover-scale-button"
          onClick={onDelete}
        />
      </div>

      <div className="absolute bottom-[1em] right-[1em]">
        <p className="font-semibold">
          {sumPrice} {t("currency")}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
