import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductCard = ({ product, onAddToCart }) => (
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col">
      <Link 
        to={`/product/${product.id}`}
        className="block w-full h-48 overflow-hidden bg-gray-200 flex items-center justify-center"
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain transition-transform duration-300 hover:scale-110"
        />
      </Link>
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold mb-2 truncate">{product.title}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
        </div>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-xl font-bold text-blue-600">₹{product.price}</span>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
);

const Product = ({ items, cart, setCart }) => {
  const addToCart = useCallback((product) => {
    setCart((prevCart) => [...prevCart, product]);
    toast.success('Item added to cart', {
      position: 'top-right',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  }, [setCart]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="container mx-auto my-8 px-4">
        <div className="flex flex-wrap -mx-4">
          {items.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
//file changed here
