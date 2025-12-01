import { IProduct } from "../model/IProduct";

interface Props {
  pro: IProduct;
}
function Product(props: Props) {
  return (
    <div>
      <h3>{props.pro.name}</h3>
      <p>{props.pro.price}</p>
    </div>
  );
}

export default Product;
