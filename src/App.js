import ProductList from "./components/product-list";
import { CatalogueProvider } from "./providers/catalogue";
import { CartProvider } from "./providers/cart";
import { Container } from "./components/product-list/style";

function App() {
  return (
    <Container>
      <CatalogueProvider>
       <CartProvider>
        <ProductList type="catalogue" />
        <ProductList type="cart" />
      </CartProvider>
     </CatalogueProvider>
     </Container>
  );
}

export default App;