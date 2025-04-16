import './App.css'
import './index.css'
import './language/i18n'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import Footer from '@components/Footer/Footer'
import Products from '@components/Products/Products'
import Header from '@components/Header/Header'

const App = () => {
  const { t } = useTranslation();
  const [favCount, setFavCount] = useState<number>(() => {
    const stored = localStorage.getItem('fav');
    return stored ? JSON.parse(stored).length : 0;
  });
  const [cartCount, setCartCount] = useState<number>(() => {
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored).length : 0;
  });  
  return (
    <>
      <Header 
        cartCount={cartCount}
        favCount={favCount}
      />
      <h1 className="text-3xl">
        {t('helloWorld')}
      </h1>
      <Products 
        setCartCount={setCartCount}
        setFavCount={setFavCount}
      />
      <Footer />
    </>
  )
}

export default App;
