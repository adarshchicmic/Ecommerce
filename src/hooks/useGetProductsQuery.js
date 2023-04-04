import { useState, useEffect } from 'react';
import { getProudct } from '../services/api';

export const useGetProductQuery = (ids = []) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    for (let i = 0; i < ids.length; i++) {
      const product = getProudct(ids[i]);
      console.log(product);
      setProducts(prevProducts => [...prevProducts, product]);
    }
  }, [ids]);

  return {
    products,
  };
};
