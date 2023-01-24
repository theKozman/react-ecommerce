import { Box, Button, Card, CardMedia, Link, Rating, Typography } from '@mui/material';
import { Stack } from '@mui/system';

import { useMemo } from 'react';

const ProductItem = ({ id, title, price, description, category, image, rating, cartProducts, handleAddCartProduct, handleOpenCartDrawer }) => {
  
  const inCart = useMemo(() => cartProducts.includes(id), [cartProducts]);

  const handleButtonClick = () => {
    handleOpenCartDrawer(true);
    handleAddCartProduct(id);
  }

  return (
    <Card
      sx={{
        display: 'flex'
      }}
    >
      <Link
        href='#'
        underline='none'
        color='inherit'
        sx={{
          display: 'flex',
          '&:hover': {
            'color': 'inherit'
          }
        }}
      >
        <Stack
          p={2}
        >
          <CardMedia
            component='img'
            height='300'
            image={image}
            title={title}
            sx={{
              objectFit: 'contain'
            }}
          />
          <Stack
            mt={2}
            alignItems='flex-start'
            justifyContent='space-between'
            flexGrow={1}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start'
              }}
            >
                <Rating
                 name='read-only'
                 readOnly 
                 value={rating.rate}
                 precision={0.1}
                />
                <Typography 
                  variant='h6'
                  align='left'
                >
                  {title}
                </Typography>
                <Typography 
                  variant='h6'
                >
                  ${price}
                </Typography>
                <Typography 
                  variant='subtitle2'
                  color='primary'
                >
                  {category}
                </Typography>
                <Typography 
                  variant='body1'
                  align='left'
                  mb={2}
                >
                  {description}
                </Typography>
            </Box>
            <Button 
              variant='contained'
              disabled={inCart}
              onClick={handleButtonClick}
            >
              {
                inCart 
                  ? 'Already in cart'
                  : 'Add to cart'
              }
            </Button>
          </Stack>

        </Stack>
      </Link>
    </Card>
    
  );
}

export default ProductItem;