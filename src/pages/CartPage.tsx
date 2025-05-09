import Footer from '@components/Footer/Footer'
import Header from '@components/Header/Header'
import { useAppCounts } from '../AppCountsContext'
import { ProductType } from '@app-types/types'
import CartProducts from '@components/Cart/CartProducts'
import { useTranslation } from 'react-i18next'
import ButtonWithIcon from '@components/Buttons/ButtonWithIcon'
import { parseNumber } from '@utils/priceFix'
import { useNavigate } from 'react-router-dom'

//*TODO remake findsum loadcartitems  logic!!
//*TODO remake css styling IT's AWFUL NOW
// *Youshould make understablae containers idk I've messed up with it<it's hard to maintain. It's my fault...

const CartPage = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const { favCount, cartCount, setCartCount } = useAppCounts();

	const loadCartItems = () => {
		const stored = localStorage.getItem('cart');
		const cart: Array<ProductType> = stored ? JSON.parse(stored) : [];
		return cart;
	}
	const cart: Array<ProductType> = loadCartItems();

	const findSum = (arr: Array<ProductType>): number => {
		return arr.reduce((sum, item) => 
			sum + item.count! * (item.discountedPrice ? 
				parseNumber(item.discountedPrice) : 
				parseNumber(item.price)), 
		0);
	}
  return (
		<>
			<Header 
				cartCount={cartCount}
				favCount={favCount}
			/>
			<div className="absolute top-[0em] left-[1em]">
				<div className="relative w-full pt-[5em] pb-[7em] px-4 sm:px-4 md:px-[7em]">
					<div className="grid grid-cols-1 xl:grid-cols-[1fr_370px] gap-[2em] justify-between items-start">
						<div className="min-w-0 justify-self-start w-full">
							<h2 className="text-left text-xl font-semibold mb-[0.5em]">
								{t("cartPage.title")}
							</h2>

							<div className="flex flex-col xl:flex-row w-full">
								<div className="w-full overflow-x-hidden">
									<CartProducts
										defaultItems={cart}
										setCartCount={setCartCount}
									/>
								</div>
								{cart.length !== 0 && 
								<div className="xl:absolute xl:right-0 w-full xl:w-[350px] h-fit mt-6 xl:mt-0 xl:ml-6">
									<div className="w-full h-[8em] bg-white flex justify-between items-start p-[1.25em] rounded-xl shadow-lg relative hover-scale-div">
										<div className="flex justify-between w-full">
											<span className="text-lg font-semibold">{t("cartPage.total")}</span>
											<span className="text-lg font-semibold">{t("currency")} {findSum(cart)}</span>
										</div>
										<ButtonWithIcon
											className="absolute bottom-0 left-0 w-full bg-black text-white font-semibold py-[1.25em] rounded-xl hover-scale-button"
											text={t("cartPage.orderBtn")}
											onClick={() => navigate('/order')}
										/>
									</div>
								</div>}
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
  )
}

export default CartPage