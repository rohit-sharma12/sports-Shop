import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import './Cart.css';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cartItems, sport_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
    const navigate = useNavigate();

    return (
        <div className='cart'>
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>

                </div>
                <br />
                <hr />

                {sport_list.map((item, index) => {
                    if (cartItems[item._id] > 0) {
                        return (
                            <div>
                                <div key={index} className='cart-items-item cart-items-title'>
                                    <img src={item.image} alt="" />
                                    <p>{item.name}</p>
                                    <p>${item.price}</p>
                                    <p>{cartItems[item._id]}</p>
                                    <p>${item.price * cartItems[item._id]}</p>
                                    <i onClick={() => removeFromCart(item._id)} class="fa-solid fa-trash"></i>
                                </div>
                                <hr />
                            </div >
                        )
                    }
                })}
            </div >
            <div className='cart-bottom'>
                <div className='cart-total'>
                    <h2>Cart Total</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Total</p>
                            <p>${getTotalCartAmount()===0?0: getTotalCartAmount() + 2}</p>
                        </div>
                    </div>
                    <button onClick={() => navigate('/place-order')}>Proceed To Checkout</button>
                </div>
                <div className="cart-promocode">
                    <div>
                        <p>If you have code, Enter here</p>
                        <div className='cart-promocode-input'>
                            <input type="text" placeholder='Promo code' />
                            <button>Submit</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
