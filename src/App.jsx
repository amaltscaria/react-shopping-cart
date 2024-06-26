import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';
import Product from './components/Product.jsx';
import CartContextProvider, {CartContext} from './store/shopping-cart-context.jsx';

function App() {
  return (
    <CartContextProvider >
      <Header
        // cart={shoppingCart}
        // onUpdateCartItemQuantity={handleUpdateCartItemQuantity}
      />
      <Shop >
      {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            {/* <Product {...product} onAddToCart={handleAddItemToCart} /> => Component compostition */ }
            <Product {...product} ></Product>
          </li>
        ))}
      </Shop>
      </CartContextProvider>
  );
}

export default App;

