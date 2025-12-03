import { Grid } from "@mui/material";
import { IProduct } from "../../model/IProduct";
import Product from "./Product";

interface Props {
  products: IProduct[];
}
function ProductList({ products }: Props) {
  return (
    <Grid container spacing={2}>
      {products.map((p: IProduct) => (
        <Grid size={{ xs: 6, md: 4, lg: 3 }} key={p.id}>
          <Product pro={p} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductList;
