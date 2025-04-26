import React, { useContext } from 'react'
import './FoodDisplay.css'
import FoodItem from '../FoodItem/FoodItem'
import { StoreContext } from '../../context/StoreContext'

const FoodDisplay = ({ category }) => {
    const { sport_list } = useContext(StoreContext)
    return (
        <div className='food-display' id='food-display'>
            <h2>Top Items We Have</h2>
            <div className="food-display-list">
                {sport_list.map((item, index) => {
                    if (category === 'All' || category === item.category) {
                        return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                    }

                })}
            </div>
        </div>
    )
}

export default FoodDisplay
