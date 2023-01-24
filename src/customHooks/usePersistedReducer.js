import { useEffect, useReducer } from 'react';

const usePersistedReducer = (reducer, key, defaultValue) => {
  const persistedValue = (
    localStorage.getItem(key) &&
    localStorage.getItem(key) !== 'undefined'
   ) 
    ? JSON.parse(localStorage.getItem(key))    
    : defaultValue;

  const [state, dispatch] = useReducer(reducer, persistedValue);
  
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify[state]);
  }, [key, state]);

  return [state, dispatch];
}

export default usePersistedReducer;