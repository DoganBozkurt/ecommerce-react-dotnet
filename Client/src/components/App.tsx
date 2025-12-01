import { useEffect, useState } from "react";
import { IProduct } from "../model/IProduct";
import ProductList from "./ProductList";
import Header from "./header";

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetch("http://localhost:5072/api/Products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  function addProduct() {
    setProducts([
      ...products,
      { id: 3, name: "product 4", price: 30000, isActive: true },
    ]);
  }
  return (
    <>
      <Header products={products} />
      <ProductList products={products} addProduct={addProduct} />
    </>
  );
}

export default App;
