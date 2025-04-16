import LanguageChange from "./LanguageChange/LanguageChange"
import SocialNets from "./SocialNets/SocialNets"

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-[5vw] right-[5vw] px-[2vw] mxauto rounded-t-2xl bg-white">
			<table className="table-auto w-full">
				<tbody>
					<tr>
						<td className="row-span-2 align-top p-4 w-[30%] hidden sm:table-cell" rowSpan={2}>Текст слева сверху</td>
						<td className="p-4 w-[25%]">
							Избранное
						</td>
						<td className="p-4 w-[25%]">Условия сервиса</td>
						<td className="p-4 w-[20%] hidden md:table-cell" rowSpan={2}>
							<SocialNets 
								vkURL="https://vk.com/a6adon"
								tgURL="https://t.me/A6add0n"
								whURL=""
							/>
						</td>
					</tr>
					<tr>
						<td className="p-4">Корзина</td>
						<td className="p-4" rowSpan={2}>
							<LanguageChange />
						</td>
					</tr>
					<tr>
						<td className="p-4 hidden sm:table-cell">исчезнет1</td>
						<td className="p-4">Контакты</td>
						<td className="p-4 hidden md:table-cell">исчезнет2</td>
					</tr>
				</tbody>
			</table>
    </div>
  )
}

export default Footer