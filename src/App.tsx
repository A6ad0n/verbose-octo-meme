import './App.css'
import './index.css'
import './language/i18n'
import { useTranslation } from 'react-i18next'
import LanguageChange from '@components/LanguageChange/LanguageChange'
import SocialNets from '@components/SocialNets'

const App = () => {
  const { t } = useTranslation();
  return (
    <>
      <SocialNets 
        vkURL="https://vk.com/a6adon"
        tgURL="https://t.me/A6add0n"
        whURL=""
      />
      <h1 className="text-3xl">
        {t('helloWorld')}
      </h1>
      <LanguageChange />
    </>
  )
}

export default App;
