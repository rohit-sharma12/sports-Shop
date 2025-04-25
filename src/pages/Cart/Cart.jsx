import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import './Cart.css';

const Cart = () => {
    const { cartItems, sport_list, removeFromCart } = useContext(StoreContext);

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
            </div>
            {sport_list.map((item, index) => {
                if (cartItems[item._id] > 0) {
                    return (
                        <div key={index} className='cart-items cart-items-title'>
                            <p>{item.name}</p>
                        </div>
                    )
                }

            })}
        </div>
    );
};

export default Cart;
