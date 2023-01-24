import { styled, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import ProductCartItem from './ProductCartItem';


const CartList = ({ cartProducts, initialProducts, handleDeleteCartProduct }) => {

  const filteredProducts = initialProducts.filter(product => {
    return cartProducts.includes(product.id);
  });

  const ProductItems = filteredProducts.map(product => {
    return (
      <ProductCartItem 
        key={product.id}
        {...product} 
        handleDeleteCartProduct={handleDeleteCartProduct}
      />
    );
  });

  return (
    <Stack
      spacing={2}
    >
        {
          (ProductItems.length > 0)
          ? ProductItems
          : <Typography>Wow, such empty</Typography>
        }
    </Stack>
  );
}

export default CartList;