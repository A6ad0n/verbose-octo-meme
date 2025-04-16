import './App.css'
import './index.css'
import './language/i18n'
import { useTranslation } from 'react-i18next'
import Footer from '@components/Footer/Footer'

const App = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1 className="text-3xl">
        {t('helloWorld')}
      </h1>
      <Footer />
    </>
  )
}

export default App;
