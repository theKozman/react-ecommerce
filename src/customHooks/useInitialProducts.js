import { useEffect, useState } from 'react';
import { fetchProducts } from '../app/storeApi';


const useInitialProducts = () => {
  const [ state, setState ] = useState();

  useEffect(() => {
    let ignore = false,
    result = null;

    (async () => {
      try {
        result = await fetchProducts('all');
      }
      catch(err) {
        console.error(err);
      }
      if(!ignore) {
        setState(result);
      }
    })();

    return () => { 
      ignore = true;
    }
  }, []);

  return state;
}

export default useInitialProducts;