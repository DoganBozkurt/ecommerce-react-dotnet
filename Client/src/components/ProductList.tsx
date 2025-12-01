import { IProduct } from "../model/IProduct";
import Product from "./product";

interface Props {
  products: IProduct[];
  addProduct: () => void;
}
function ProductList({ products, addProduct }: Props) {
  return (
    <div>
      <h2>ProductList</h2>
      {products.map(
        (p: IProduct) => p.isActive && <Product key={p.id} pro={p} />
      )}
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
}

export default ProductList;
