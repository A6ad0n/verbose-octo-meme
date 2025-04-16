import Footer from '@components/Footer/Footer'
import Products from '@components/Products/Products'
import Header from '@components/Header/Header'
import { useAppCounts } from '../AppCountsContext'

const CartPage = () => {
	const { favCount, setFavCount, cartCount, setCartCount } = useAppCounts();
  return (
		<>
			<Header 
				cartCount={cartCount}
				favCount={favCount}
			/>
			<h1>
				HelloWorld
			</h1>
			<Footer />
		</>
  )
}

export default CartPage