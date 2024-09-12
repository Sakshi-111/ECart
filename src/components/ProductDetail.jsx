import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Product from "./Product";
import useGetData from "./useGetData";

const ProductDetail = ({ cart, setCart }) => {
  const items = useGetData()
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (items.length > 0) {
      const filterProduct = items.filter((product) => product.id == id);
      
      if (filterProduct.length > 0) {
        setProduct(filterProduct[0]);
  
        // Now we use the found product's category for related products
        const relatedProducts = items.filter(
          (item) => item.category === filterProduct[0].category && item.id !== filterProduct[0].id
        );
        
        setRelatedProducts(relatedProducts);
      }
    }
  }, [id, items]);
  

  const addToCart = (id, price, title, description, image) => {
    const obj = {
      id,
      price,
      title,
      description,
      image,
    };
    setCart([...cart, obj]);
    console.log("Cart element = ", cart);
    toast.success("Item added on cart", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

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
      <div className="container con">
        <div className="img">
          <img src={product?.image} alt="..." />
        </div>
        <div className="text-center">
          <h1 className="card-title">{product.title}</h1>
          <p className="card-text">{product.description}</p>
          <button className="btn btn-primary mx-3">{product.price} ₹</button>
          <button
            onClick={() =>
              addToCart(
                product?.id,
                product?.price,
                product?.title,
                product?.description,
                product?.image
              )
            }
            className="btn btn-warning"
          >
            Add To Cart
          </button>
        </div>
      </div>
      <h1 className="text-center">Related Products</h1>
      <Product cart={cart} setCart={setCart} items={relatedProducts} />
    </>
  );
};

export default ProductDetail;
