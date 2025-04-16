import './App.css'
import './index.css'
import './language/i18n'
import { Routes, Route } from 'react-router-dom';
import { useNetworkStatus } from '@hooks/useNetworkStatus';
import ProductsPage from '@pages/ProductsPage';
import OfflinePage from '@pages/OfflinePage';

const App = () => {
  // const isOnline = useNetworkStatus();
  const isOnline = false;
  return (
    <>
      <Routes>
        <Route path="/" element={isOnline ? <ProductsPage /> : <OfflinePage />} />
      </Routes>
    </>
  )
}

export default App;
