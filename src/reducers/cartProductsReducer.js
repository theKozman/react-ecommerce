

const cartProductsReducer  = (cartProducts, action) => {
  switch(action.type) {
    case 'added': {
      return [
        ...cartProducts,
        action.id
      ]
    }
    // case 'modified': {
    //   return cartProducts.map(productId => {
    //     if (productId === action.id) {
    //     }
    //   });
    // }
    case 'deleted': {
      return cartProducts.filter(productId => productId !== action.id);
    }
    default: {
      throw Error('No such action:', action.type);
    }
  }
}

export default cartProductsReducer;

