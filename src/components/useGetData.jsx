
import { useEffect, useState } from 'react';

function useGetData() {
  const [items, setItems] = useState([]);

  const fetchedData = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setItems(data);
      console.log(data)
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchedData();
  }, []);

  return items;
}

export default useGetData;
