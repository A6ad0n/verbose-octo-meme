import Footer from '@components/Footer/Footer'
import Header from '@components/Header/Header'
import { useAppCounts } from '../AppCountsContext'
import { ProductType } from '@app-types/types'
import CartProducts from '@components/Cart/CartProducts'

const CartPage = () => {
	const { favCount, cartCount } = useAppCounts();
	const loadCartItems = () => {
		const stored = localStorage.getItem('cart');
		const cart: Array<ProductType> = stored ? JSON.parse(stored) : [];
		return cart;
	}
  return (
		<>
			<Header 
				cartCount={cartCount}
				favCount={favCount}
			/>
			<CartProducts
				defaultItems={loadCartItems()}
			/>
			<Footer />
		</>
  )
}

export default CartPage