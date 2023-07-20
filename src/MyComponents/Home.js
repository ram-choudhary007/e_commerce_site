import React from 'react';
import Carousel from './Carousel'
import Category from './Category'
import ProductList from './ProductList'
import SingleProduct from './SingleProduct'

export default function Home({products, addToCart, cart, setCart, setCartCount}) {

  return (
    <div>

      <Carousel  />
      <Category  />
      <div className='eletro'>Product List</div>
      <ProductList products={products} Component={SingleProduct} addToCart={addToCart} cart={cart} setCart={setCart} setCartCount={setCartCount} />

    </div>
  )
}
