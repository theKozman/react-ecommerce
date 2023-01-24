import { Drawer, styled } from '@mui/material';
import { Stack } from '@mui/system';
import { useState } from 'react';
import CartList from './CartList';

const StyledStack = styled(Stack)(({ theme }) => ({
  padding: '40px 30px'
}));

const CartDrawer = ({ openCartDrawer, handleOpenCartDrawer, cartProducts, initialProducts, handleDeleteCartProduct }) => {
  return (
    <Drawer
      open={openCartDrawer}
      onClose={e => handleOpenCartDrawer(false)}
    >
      <StyledStack>
        <CartList 
          cartProducts={cartProducts}
          initialProducts={initialProducts}
          handleDeleteCartProduct={handleDeleteCartProduct}
        />
      </StyledStack>
    </Drawer>
  );
}

export default CartDrawer;