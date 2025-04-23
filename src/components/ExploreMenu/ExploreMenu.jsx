import React from 'react'
import './ExploreMenu.css'

const sport_list = [
    {
        sport_name: 'Gym',
        sport_img: "https://m.media-amazon.com/images/G/31/Sports/EnFRevmap/Build/PC/dumbells.jpg",
    },
    {
        sport_name: 'Football',
        sport_img: "https://m.media-amazon.com/images/G/31/img23/Sports/June/Coop/Vectorx/5298--Amazon-sports---Football-tile.jpg",
    },
    {
        sport_name: 'Cricket',
        sport_img: "https://sportsjam.in/media/resized/bannerslider/5/small_banner_5_320_220.png",
    },
    {
        sport_name: 'Shoes',
        sport_img: "https://sportsjam.in/media/wysiwyg/nike-court-zoom.png",
    },
    {
        sport_name: 'Badminton',
        sport_img: "https://sportsjam.in/media/catalog/product/cache/f6d88dd4f51ed5a5b4384f0ded062b0d/y/n/ynbdrcastrx100zz.jpg",
    },
    {
        sport_name: 'Basket Ball',
        sport_img: "https://www.khelmart.com/pub/media/wysiwyg/3.jpg",
    },
    {
        sport_name: 'Tennis',
        sport_img: "https://img.freepik.com/premium-photo/tennis-player-holding-racket-hitting-ball-court_641503-96580.jpg",
    },
    {
        sport_name: 'Accessories',
        sport_img: "https://assets.isu.pub/document-structure/230616123724-037fed6e5a94c4e43853143450546aa7/v1/b67a018a8919ba09c9dd845b7fdf15ea.jpeg",
    },
    {
        sport_name: 'Cycling',
        sport_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTYJiyikuC2MFI3FVl-clyNSHPyiYc0IsSWw&s",
    },
    {
        sport_name: 'Boxing',
        sport_img: "https://media.gq.com/photos/59ee10b166e2d56abcd79fd3/16:9/w_2560%2Cc_limit/gq-fitness-boxing.jpg",
    },
    {
        sport_name: 'Golf',
        sport_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBpI8UuteJCH3A4yaxSZdnazDgXacl2qAWpw&s",
    },
    {
        sport_name: 'Skating',
        sport_img: "https://m.media-amazon.com/images/G/31/img20/Sports/PSS_V2/mob/1500skatin.jpg",
    },
]

const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore Our Itmes</h1>
            <p className='explore-menu-text'>
                Explore the wide selection of professional sports equipment across exercise and fitness, hiking and many more. Buy sports, fitness and outdoor equipment at the professional sports store online at India.</p>
            <div className="explore-menu-list">
                {sport_list.map((item, index) => {
                    return (
                        <div onClick={() => setCategory(prev => prev === item.sport_name ? "All" : item.sport_name)} key={index} className='explore-menu-list-item'>
                            <img className={category === item.sport_name ? 'active' : ""} src={item.sport_img} alt="" />
                            <p>{item.sport_name}</p>
                        </div>

                    )
                })}
            </div>
            <hr />
        </div>
    )
}

export default ExploreMenu
