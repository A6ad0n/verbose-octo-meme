import './App.css'
import './index.css'
import './language/i18n'
import { Routes, Route } from 'react-router-dom';
import { useNetworkStatus } from '@hooks/useNetworkStatus';
import ProductsPage from '@pages/ProductsPage';
import CartPage from '@pages/CartPage';
import OfflinePage from '@pages/OfflinePage';

const App = () => {
  const isOnline = useNetworkStatus();
  return (
    <>
      <Routes>
        <Route path="*" element={isOnline ? <MainRoutes /> : <OfflinePage />} />
      </Routes>
    </>
  )
}

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductsPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};

export default App;
