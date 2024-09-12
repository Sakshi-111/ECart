import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { BsFillCartCheckFill } from 'react-icons/bs';
import useGetData from './useGetData';



const Navbar = ({setData,cart}) => {
  const items = useGetData()
  // console.log(useLocation())
  const location = useLocation()
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("")

  const filterByCategory = (category)=>{
    const element = items.filter((product)=>product.category === category)
    // console.log(element)
    setData(element)
  }

  const filterByPrice = (price) =>{
    const element = items.filter((product)=>product.price >=price)
    setData(element)
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    navigate(`/search/${searchTerm}`)
    setSearchTerm("")
  }


  return (
    <>
    <header className='sticky-top'>
        <div className="nav-bar">
            <Link to={'/'} className="brand">E-Cart</Link>

            <form
            // onClick={handleSubmit} 
            onSubmit={handleSubmit}
             className="search-bar">
                <input 
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
                type="text"
                 placeholder='Search Products'
                  />
            </form>


            <Link to={'/cart'} className="cart">
            <button type="button" className="btn btn-primary position-relative">
  <BsFillCartCheckFill style={{fontSize:'1.5rem'}} />
      {/* CART ICON   */}
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cart.length}
    <span className="visually-hidden">unread messages</span>
  </span>
</button>
            </Link>
        </div>

        {
          location.pathname == '/' && (
            <div className="nav-bar-wrapper">
            <div className="items">Filter by {"->"}</div>
            <div 
            onClick={()=>setData(items)}
            className="items">No Filter</div>
            <div 
            onClick={()=>filterByCategory("men's clothing")}
             className="items">Men's</div>
            <div
            onClick={()=>filterByCategory("jewelery")}
    
             className="items">Jewelery</div>
            <div
            onClick={()=>filterByCategory("electronics")}
    
             className="items">Electronics</div>
           <div
            onClick={()=>filterByCategory("women's clothing")}
    
             className="items">Women's</div>
          
            </div>
          )
        }

      
    </header>
    </>
  )
}

export default Navbar