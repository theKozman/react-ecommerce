const origin = 'https://fakestoreapi.com';

const fetchProducts = async (category) => {
  const query = (category === 'all') ? '' : `category/${category}`;
  let result = null;
  try {
    const response = await fetch(`${origin}/products/${query}`);
    result = await response.json();
  }
  catch(err) {
    console.error(err);
  }
  return result;
}

const fetchAllCategories = async () => {
  let result = null;
  try {
    const response = await fetch(`${origin}/products/categories`);
    result = await response.json();
  }
  catch(err) {
    console.error(err);
  }
  return result;
}

export { fetchProducts, fetchAllCategories };