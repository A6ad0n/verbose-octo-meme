import Footer from '@components/Footer/Footer'
import Products from '@components/Products/Products'
import Header from '@components/Header/Header'
import { useAppCounts } from '../AppCountsContext'

const ProductsPage = () => {
	const { favCount, setFavCount, cartCount, setCartCount } = useAppCounts();
  return (
		<>
			<Header 
				cartCount={cartCount}
				favCount={favCount}
			/>
			<Products 
				setCartCount={setCartCount}
				setFavCount={setFavCount}
			/>
			<Footer />
		</>
  )
}

export default ProductsPage