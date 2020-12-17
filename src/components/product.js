import React from 'react';
import './product.css'
import {useDispatch} from "react-redux";
import {addToCart, removeFromCart} from "../redux/actions/shopActions";
import {useSelector} from "react-redux";
import Rating from "./rating";
import {Link} from "react-router-dom";

const Product = ({product}) => {
    const {selected} = useSelector(s => s)
    const dispatch = useDispatch()
    return (
        <div className="col-3">
                <div className="product">
                    <Link to={`/product/${product.id}`} className="product-link-color">
                    <img src={product.image} alt=""/>
                    <h2 className="product-title">{product.name}</h2>
                    </Link>
                    <span>{product.price}</span>
                    <Rating rating={product.rating}/>
                    <div className="cart-buttons">
                        <button className="removeFromCart" onClick={() => dispatch(removeFromCart(product.id))}>-
                        </button>
                        <span>{selected[product.id] || 0}</span>
                        <button className="addToCart" onClick={() => dispatch(addToCart(product.id))}>+</button>
                    </div>
                </div>

        </div>
    );
};

export default Product;