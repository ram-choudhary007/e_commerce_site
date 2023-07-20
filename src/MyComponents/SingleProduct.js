import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Rating from './Rating';

const SingleProduct = ({ addToCart }) => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState({});

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        setSingleProduct(response.data);
      })
      .catch(error => {
        console.error('Error fetching product data:', error);
      });
  }, [id]);

  const rate = singleProduct.rating ? singleProduct.rating.rate : 0;

  return (
    <>
      <div className="SingleProduct">
        <div><img className='singleProdImg' src={singleProduct.image} alt={singleProduct.title} /> </div>
        <div>
          <h3>{singleProduct.title}</h3>
          <p>({singleProduct.category})</p>
          <br />
          <p>{singleProduct.description}</p>
          <br />
          <p>Price: ₹{singleProduct.price}</p>
          <div>
            <Rating rate={rate} />
            {singleProduct.rating ? singleProduct.rating.rate : 0} ({singleProduct.rating ? singleProduct.rating.count : 0})
          </div>
          <button id='cart_btn' onClick={() => addToCart(singleProduct)}>Add to Cart</button>
          <button className='goToCart'>
            <Link to="/cartList">
              Go to Cart
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
