import './App.css'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { fetchAllCategories, fetchProducts } from './app/storeApi';
import cartProductsReducer from './reducers/cartProductsReducer';

import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { Stack } from '@mui/system';
import CartDrawer from './components/CartDrawer';
import { Box, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import ProductList from './components/ProductList';

import { useState, useEffect } from 'react';
import usePersistedReducer from './customHooks/usePersistedReducer';
import useInitialProducts from './customHooks/useInitialProducts';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  }
});

const App = () => {
  const initialProducts = useInitialProducts();
  const [ products, setProducts ] = useState([]);
  const [ categories, setCategories ] = useState([]);
  const [ searchQuery, setSearchQuery ] = useState('');
  const [ selectedCategory, setSelectedCategory ] = useState('all');
  const [ selectedRating, setSelectedRating ] = useState(0);
  const [ ratingMode, setRatingMode ] = useState('max')
  const [ openCartDrawer, setOpenCartDrawer ] = useState(false);
  const [ cartProducts, dispatchCartProducts ] = usePersistedReducer(cartProductsReducer, 'cartProducts', []);

  useEffect(() => {
    let ignore = false,
        result = null;
    (async () => {
      try {
        result = await fetchProducts(selectedCategory);
      }
      catch(err) {
        console.error(err);
      }
      if(!ignore) {
        setProducts(result);
      }
    })();

    return () => {
      ignore = true;
    }
  }, [selectedCategory]);

  useEffect(() => {
    let ignore = false,
        result = null;

    (async () => {
      try {
        result = await fetchAllCategories();
      }
      catch(err) {
        console.error(err);
      }
      if(!ignore) {
        setCategories(result);
      }
    })();

    return () => { 
      ignore = true;
    }
  }, []);

  const handleChangeSearchQuery = query => {
    setSearchQuery(query);
  }

  const handleChangeSelectedCategory = category => {
    setSelectedCategory(category);
  }

  const handleChangeSelectedRating = rating => {
    setSelectedRating(rating);
  }

  const handleOpenCartDrawer = isOpen => {
    setOpenCartDrawer(isOpen);
  };

  const handleChangeRatingMode = mode => {
    setRatingMode(mode);
  }

  const handleAddCartProduct = id => {
    dispatchCartProducts({
      type: 'added',
      id
    });
  }

  const handleDeleteCartProduct = id => {
    dispatchCartProducts({
      type: 'deleted',
      id
    });
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Box minHeight='100vh'>
        <Navbar 
          handleOpenCartDrawer={handleOpenCartDrawer}
          cartProducts={cartProducts}
        />
        <Stack direction='row' spacing={2} width='100vw'>
          <Sidebar
            categories={categories}
            selectedCategory={selectedCategory}
            handleChangeSelectedCategory={handleChangeSelectedCategory}
            searchQuery={searchQuery}
            handleChangeSearchQuery={handleChangeSearchQuery}
            handleChangeSelectedRating={handleChangeSelectedRating}
            ratingMode={ratingMode}
            handleChangeRatingMode={handleChangeRatingMode}
          />
          <ProductList 
            products={products}
            cartProducts={cartProducts}
            handleAddCartProduct={handleAddCartProduct}
            handleOpenCartDrawer={handleOpenCartDrawer}
            searchQuery={searchQuery}
            selectedRating={selectedRating}
            ratingMode={ratingMode}
          />
          <CartDrawer 
            openCartDrawer={openCartDrawer}
            handleOpenCartDrawer={handleOpenCartDrawer}
            cartProducts={cartProducts}
            handleDeleteCartProduct={handleDeleteCartProduct}
            initialProducts={initialProducts}
          />
        </Stack>
      </Box>
    </ThemeProvider>
  )
}

export default App
