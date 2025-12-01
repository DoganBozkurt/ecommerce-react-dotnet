import { useEffect, useState } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */

function App() {
  return (
    <>
      <Header />
      <ProductList />
    </>
  );
}

function Header() {
  return <h1>Header</h1>;
}

function ProductList() {
  const [products, setProducts] = useState([
    { id: 0, name: "product 1", price: 10000, isActive: true },
    { id: 1, name: "product 2", price: 48548, isActive: false },
    { id: 2, name: "product 3", price: 50000, isActive: true },
  ]);

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
    <div>
      <h2>ProductList</h2>
      {products.map((p) => p.isActive && <Product key={p.id} pro={p} />)}
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
}
function Product(props: any) {
  return (
    <div>
      <h3>{props.pro.name}</h3>
      <p>{props.pro.price}</p>
    </div>
  );
}
export default App;
