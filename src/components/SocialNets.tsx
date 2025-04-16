import { SlSocialVkontakte } from "react-icons/sl";
import { RiTelegramLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";

interface SocialNextsProps {
    vkURL: string;
    tgURL: string;
    whURL: string;
}

const SocialNets = ({ vkURL, tgURL, whURL }: SocialNextsProps) => {
 const socialLinks = [
  { href: vkURL, icon: <SlSocialVkontakte className="w-6 h-6" /> },
  { href: tgURL, icon: <RiTelegramLine className="w-6 h-6" /> },
  { href: whURL, icon: <FaWhatsapp className="w-6 h-6" /> },
];

return (
  <div className="flex flex-row items-center bg-white gap-3">
    {socialLinks.map(({ href, icon }, index) => (
      <a key={index} href={href} target="_blank" rel="noopener noreferrer">
        {icon}
      </a>
    ))}
  </div>
);

}

export default SocialNets