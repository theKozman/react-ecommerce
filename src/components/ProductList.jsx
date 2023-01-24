import { CircularProgress, Grid, List, ListItem, Skeleton, styled } from '@mui/material';
import { Box, Stack } from '@mui/system';
import ProductItem from './ProductItem';

const ProductStack = styled(Stack)({
  width: '85%',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: 30,
  paddingTop: 30
});

const StyledProgress = styled(CircularProgress)({
  margin: '100px auto'
});

const filterRating = (value, threshold, mode) => {
    return (mode === 'max') ? value >= threshold : value <= threshold;
}

const filterSearchQuery = (value, query) => {
  return query.length === 0 || value.toLowerCase().includes(query.toLowerCase());
}

const ProductList = ({ products=[], cartProducts, handleAddCartProduct, handleOpenCartDrawer, searchQuery, selectedRating, ratingMode }) => {

  const filteredProducts = products.filter(product => {
    return (
      filterSearchQuery(product.title, searchQuery) &&
      filterRating(product.rating.rate, selectedRating, ratingMode)
    )
  });

  const ProductItems = filteredProducts.map(product => (
    <Box
      item
      sx={{
        display: 'flex',
        minWidth: '300px',
        maxWidth: '500px',
        marginTop: '0px'
      }}
      key={product.id}
    >
      <ProductItem
        {...product}
        cartProducts={cartProducts}
        handleAddCartProduct={handleAddCartProduct}
        handleOpenCartDrawer={handleOpenCartDrawer}
      />
    </Box>

  ));
  return (
    <ProductStack 
      container
      spacing={2}
    >
      {
        (products.length === 0) 
          ? <StyledProgress/>
          : ProductItems
      }
    </ProductStack>
  );
}

export default ProductList;