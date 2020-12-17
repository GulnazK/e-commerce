import React from 'react';
import {Link, useParams} from 'react-router-dom'
import {useSelector,useDispatch} from "react-redux";
import {addToCart, removeFromCart} from "../redux/actions/shopActions";
import Rating from "./rating";


const ProductDetails = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const {selected} = useSelector(store => store)
    const {catalog} = useSelector(s => s)
    const product = catalog.find(el => el.id === id)
    if(!product) return null
    return (
        <div className="row">
           <div className="col-5">
               <img src={product.image} alt="" className="cart-image-details"/>
           </div>
          <div className="col-7">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <h3>Price:{product.price}</h3>
              <h4>Brand:{product.brand}</h4>
              <h4>Category:{product.category}</h4>
              <Rating rating={product.rating}/>
              <div className="cart-buttons cart-btn-details">
                  <button className="removeFromCart" onClick={() => dispatch(removeFromCart(product.id))}>-
                  </button>
                  <span>{selected[product.id] || 0}</span>
                  <button className="addToCart" onClick={() => dispatch(addToCart(product.id))}>+</button>
              </div>
          </div>
            <Link to="/"><button className="alert-link">Back</button></Link>
        </div>
    );
};

export default ProductDetails;