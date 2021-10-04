import ProductsList from './components/product-list';
import { CatalogueProvider } from './providers/catalogue';
import { CartProvider } from './providers/cart';
import GlobalStyles from './styles/global';

function App() {
  return (
    <div>
      <CatalogueProvider>
        <CartProvider>
          <GlobalStyles />
          <ProductsList type="catalogue" />
          <ProductsList type="cart" />
        </CartProvider>
      </CatalogueProvider>
    </div>
  );
}

export default App;
