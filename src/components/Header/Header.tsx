import ButtonWithIcon from "@components/Buttons/ButtonWithIcon";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
  return (
		<div className="fixed top-0 left-0 right-0 sm:left-0 sm:right-0 md:left-[7em] md:right-[7em] flex justify-between items-center py-[0.5em]">
			<p className="font-montserrat font-bold text-[25px]">QPICK</p>
			
			<div className="flex gap-[1em] relative">
				<div className="relative">
					<ButtonWithIcon 
						Icon={FaRegHeart}
						className="text-gray-500 w-[1.5em] h-[1.5em]"
					/>
					<span className="absolute -top-2 -right-2 bg-morange text-white text-xs rounded-full w-[1.5em] h-[1.5em] flex items-center justify-center">
						3
					</span>
				</div>
				<div className="relative">
					<ButtonWithIcon
						Icon={IoCartOutline}
						className="text-gray-500 w-[1.5em] h-[1.5em]"
					/>
					<span className="absolute -top-2 -right-2 bg-morange text-white text-xs rounded-full w-[1.5em] h-[1.5em] flex items-center justify-center">
						5
					</span>
				</div>
				</div>
		</div>
  )
}

export default Header