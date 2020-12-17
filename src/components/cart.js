import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import './cart.css'
import {addToCart, removeFromCart} from "../redux/actions/shopActions";
import Message from "./message";
import {Link} from 'react-router-dom'


const Cart = () => {
    const {catalog} = useSelector(store => store)
    const {selected} = useSelector(store => store)
    const dispatch = useDispatch()
    const cart = catalog.filter(el => Object.keys(selected).includes(el.id))
    console.log(cart)
    return (
        <>
            {
                !cart.length ?
                    <Message>
                        <Link to="/" className="alert-link">Back</Link>
                        <h1>Your Order</h1>
                        <h3>Empty</h3>
                    </Message> :
                    <React.Fragment>
                        <h2>Shopping Bag</h2>
                        <table className="cart-table">
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Quantity</th>
                            </tr>
                            {
                                cart.map((el) => (
                                    <tr>
                                        <td>
                                            <img src={el.image} className="cart-img" alt=""/>
                                        </td>
                                        <td>
                                            <h2>{el.name}</h2>
                                        </td>
                                        <td>{el.price}</td>
                                        <td>
                                            <div className="cart-buttons">
                                                <button className="removeFromCart"
                                                        onClick={() => dispatch(removeFromCart(el.id))}>-
                                                </button>
                                                <span>{selected[el.id] || 0}</span>
                                                <button className="addToCart"
                                                        onClick={() => dispatch(addToCart(el.id))}>+
                                                </button>
                                            </div>

                                        </td>
                                    </tr>
                                ))
                            }
                        </table>
                        <h2 className="total">Total:$
                            {
                                cart.reduce((acc, rec) => acc + rec.price * selected[rec.id], 0)
                            }
                        </h2>
                    </React.Fragment>
            }
        </>
    );
};

export default Cart;