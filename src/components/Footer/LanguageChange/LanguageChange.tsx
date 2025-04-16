import { useState } from 'react'
import '@language/i18n'
import languages from '@language/languages.json'
import { useTranslation } from 'react-i18next'
import { LngProps } from '@app-types/types'
import ButtonWithIcon from '@components/Buttons/ButtonWithIcon'
import { setCookie } from '@utils/cookies'
import { MdOutlineLanguage } from "react-icons/md";

const LanguageChange = () => {
    const { i18n } = useTranslation();
    const [lng, setLng] = useState<string>(i18n.language);
    const languageArray: Array<LngProps> = [...languages];
    return (
      <div className="flex flex-row items-center justify-center gap-2 p-2 w-full max-w-full">
				<MdOutlineLanguage className="w-[1.2em] h-[1.2em] text-gray-600"/>
        {languageArray.map(({code, name}: any) => {
          const isActive: boolean = lng === code;
          return (
            <ButtonWithIcon 
							key={code}
              onClick={() =>  {
                i18n.changeLanguage(code); 
                setLng(code);
								setCookie('cur_lng', code);
              }} 
              text={name}
              disabled={isActive} 
              className={`text-[1em] px-[0.5em] py-[0.3em] font-medium ${isActive ? 'text-morange' : 'text-black'}`}
            />
          )
        })}
      </div>
    )
}

export default LanguageChange