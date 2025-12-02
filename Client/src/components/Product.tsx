import { AddShoppingCart } from "@mui/icons-material";
import { IProduct } from "../model/IProduct";
import SearchIcon from "@mui/icons-material/Search";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
interface Props {
  pro: IProduct;
}
function Product({ pro }: Props) {
  return (
    <Card>
      <CardMedia
        sx={{ height: 160, backgroundSize: "contain" }}
        image={`http://localhost:5072/images/${pro.imageUrl}`}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="h2"
          color="text.secondary"
        >
          {pro.name}
        </Typography>
        <Typography variant="body2" color="secondary">
          {pro.price.toFixed(2)} ₤
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          size="small"
          startIcon={<AddShoppingCart />}
          color="success"
        >
          Add to cart
        </Button>
        <Button
          variant="outlined"
          size="small"
          startIcon={<SearchIcon></SearchIcon>}
          color="primary"
        >
          View
        </Button>
      </CardActions>
    </Card>
  );
}

export default Product;
