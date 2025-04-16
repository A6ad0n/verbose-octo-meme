import ButtonWithIcon from "@components/Buttons/ButtonWithIcon";
import LanguageChange from "./LanguageChange/LanguageChange"
import SocialNets from "./SocialNets/SocialNets"
import { useTranslation } from "react-i18next"
import { useNavigate } from 'react-router-dom'

const Footer = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
  return (
    <div className="fixed bottom-0 left-0 sm:left-0 sm:right-0 md:left-[10em] md:right-[10em] px-[0.5em] md:px-[0.5em] pt-[0.5em] rounded-t-2xl bg-white">
			<table className="relative table-auto w-full bt-[0.5em] bl-[0.5em] br-[0.5em] text-left">
				<tbody>
					<tr>
						<td className="row-span-2 align-top p-4 w-[30%] hidden md:table-cell" rowSpan={2}>
						<ButtonWithIcon
							text="QPICK"
							className="font-montserrat font-bold text-[25px]"
							onClick={() => navigate('/')}
						/>
						</td>
						<td className="w-[20%]">
							<ButtonWithIcon
								text={t("footer.favourite")}
								onClick={() => navigate('/fav')}
							/>
						</td>
						<td className="w-[20%] text-center">
							<ButtonWithIcon
								text={t("footer.terms")}
								onClick={() => navigate('/terms')}
							/>
						</td>
						<td className="w-[30%] hidden lg:table-cell" rowSpan={2}>
							<div className="absolute top-0 right-0 p-[0.5em]">
								<SocialNets 
									vkURL="https://vk.com/a6adon"
									tgURL="https://t.me/A6add0n"
									whURL=""
								/>
							</div>
						</td>
					</tr>
					<tr>
						<td className="">
							<ButtonWithIcon
								text={t("footer.cart")}
								onClick={() => navigate('/cart')}
							/>
						</td>
						<td className="align-top" rowSpan={2}>
							<div className="flex justify-start items-start">
								<LanguageChange />
							</div>
						</td>
					</tr>
					<tr>
						<td className="hidden md:table-cell"></td>
						<td className="">
							<ButtonWithIcon
								text={t("footer.contacts")}
								onClick={() => navigate('/contacts')}
							/>
						</td>
						<td className=" hidden lg:table-cell"></td>
					</tr>
				</tbody>
			</table>
    </div>
  )
}

export default Footer