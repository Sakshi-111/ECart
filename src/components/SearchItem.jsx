// SearchBar.jsx
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


import useGetData from './useGetData';
import Product from './Productt';

const SearchItem = ({cart, setCart}) => {
  // console.log(useParams())
  const items = useGetData()
  const {term} = useParams();
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const filteredData = () =>{
      const data = items.filter((p)=>p.title.toLowerCase().includes(term.toLowerCase()));
      // console.log(data)
      setFilterData(data)
    }

    filteredData();
    
  }, [term])
  


  return (
   <Product cart={cart} setCart={setCart} items={filterData} />
  )
}

export default SearchItem