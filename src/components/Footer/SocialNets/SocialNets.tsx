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
  { href: vkURL, icon: <SlSocialVkontakte className="w-[1.5em] h-[1.5em]" /> },
  { href: tgURL, icon: <RiTelegramLine className="w-[1.5em] h-[1.5em]" /> },
  { href: whURL, icon: <FaWhatsapp className="w-[1.5em] h-[1.5em]" /> },
];

return (
  <div className="flex flex-row items-center justify-center bg-white gap-2 w-full max-w-full">
    {socialLinks.map(({ href, icon }, index) => (
      <a key={index} href={href} target="_blank" rel="noopener noreferrer">
        {icon}
      </a>
    ))}
  </div>
);

}

export default SocialNets