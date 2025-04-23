import React, { useContext } from 'react'
import './FoodItem.css'
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {

    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img className='food-item-img' src={image} alt="" />
                {
                    !cartItems[id] ? <i onClick={() => addToCart(id)} class="fa-solid fa-plus"></i>
                        : <div className='food-item-counter'>
                            <i onClick={() => removeFromCart(id)} class="fa-solid fa-minus"></i>
                            <p>{cartItems[id]}</p>
                            <i onClick={() => addToCart(id)} class="fa-solid fa-square-plus"></i>
                        </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    {/* <img src={rating} alt="" /> */}
                </div>
                <p className='food-item-desc'>{description}</p>
                <p className='food-item-price'>{price}</p>
            </div>
        </div>
    )
}

export default FoodItem
