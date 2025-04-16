import SocialNets from "./SocialNets/SocialNets"

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-[5vw] right-[5vw] mxauto rounded-t-2xl bg-white">
			<SocialNets 
        vkURL="https://vk.com/a6adon"
        tgURL="https://t.me/A6add0n"
        whURL=""
      />
    </div>
  )
}

export default Footer