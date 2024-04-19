//Component composition => a solution for prop drilling - but not the best one.
// Beacuse at the end we get all our componentes stacked inside the app component
// And all other components are wrapper components => so not a great idea.

// import { DUMMY_PRODUCTS } from '../dummy-products.js';
// import Product from './Product.jsx';



// export default function Shop({ onAddItemToCart }) {
export default function Shop({ children }) {
  return (
    <section id="shop">
      <h2>Elegant Clothing For Everyone</h2>

      <ul id="products">
        {/* {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} onAddToCart={onAddItemToCart} />
          </li>
        ))} */}
        {children}
      </ul>
    </section>
  );
}
