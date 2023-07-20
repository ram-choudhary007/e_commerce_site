import React from 'react'
import electronics from '../Images/electronics.webp'
import Clothes from '../Images/cloths.webp'
import Jewellery from '../Images/jewellery.webp'
import { Link } from 'react-router-dom'


export default function Category() {
  return (
    <div className='Category'>
      <h5 className='catName'>Category</h5>
      <div className="card-group">
      <div className="card">
        <Link to= "/electronics">
        <img src={electronics} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Electronics</h5>
        </div>
          </Link>
      </div>

      <div className="card">
        <Link to="/clothes">
        <img src= {Clothes} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Clothes</h5>
        </div>
        </Link>
      </div>

      <div className="card">
        <Link to="/jewellery">
        <img src={Jewellery} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Jewellery</h5>
        </div>
        </Link>
      </div>

    </div>
    </div>
  )
}
