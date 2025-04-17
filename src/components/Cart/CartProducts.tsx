import { useState } from 'react';
import CartItem from './CartItem';
import { ProductType } from '@app-types/types';
import { useTranslation } from 'react-i18next';

interface CartProductsProps {
  defaultItems?: Array<ProductType>;
  setCartCount?: (count: number) => void;
}

const CartProducts = ({ defaultItems = [], setCartCount }: CartProductsProps) => {
  const { t } = useTranslation();
  const [cartItems, setCartItems] = useState<Array<ProductType>>(defaultItems);

  const loadCartItems = () => {
    const stored = localStorage.getItem('cart');
    const cart: Array<ProductType> = stored ? JSON.parse(stored) : [];
    setCartItems(cart);
    if (setCartCount)
      setCartCount(cart.reduce((sum, item) => sum + item.count!, 0));
  };

  const handleDeleteFromCart = (product: ProductType) => {
    const stored = localStorage.getItem('cart');
    const cart: Array<ProductType> = stored ? JSON.parse(stored) : [];
    const filteredCart: Array<ProductType> = cart.filter((item: ProductType) => item.name !== product.name);
    localStorage.setItem('cart', JSON.stringify(filteredCart));
    loadCartItems();
  };

  const changeItemCount = (product: ProductType, action: 'increase' | 'decrease') => {
    const stored = localStorage.getItem('cart');
    const cart: Array<ProductType> = stored ? JSON.parse(stored) : [];
    const filteredCart: Array<ProductType> = cart.map((item: ProductType) => 
      (item.name == product.name) ?
        { ...item, count: action === 'increase' ? item.count! + 1 : item.count! - 1 } : item
    );
    localStorage.setItem('cart', JSON.stringify(filteredCart.filter((product: ProductType) => product.count !== 0)));
    loadCartItems();
  };

  return (
    <div className="flex flex-col gap-[1.5em] overflow-y-auto max-h-[27em]">
      {cartItems.filter((p) => p.count !== 0).length > 0 ? (
        cartItems
          .filter((product: ProductType) => product.count !== 0)
          .map((product: ProductType, index: number) => (
            <CartItem
              key={index}
              product={product}
              onIncrease={() => changeItemCount(product, "increase")}
              onDecrease={() => changeItemCount(product, "decrease")}
              onDelete={() => handleDeleteFromCart(product)}
            />
          ))
      ) : (
        <p>{t("cartPage.empty")}</p>
      )}
    </div>  
  );
};

export default CartProducts;
