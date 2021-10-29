import React from 'react'
import "./category.css"

const Category = ({ image, name, newPrice, oldPrice }) => {
    return (
        <div className="category">
            <div className="category__top"><img src={image} alt="" /></div>
            <div className="category__bottom">
                <p>{name}</p>
                <div className="category__bottom--prices">
                    <p className="price newPrice">${newPrice}</p>
                    <p className="price oldPrice">${oldPrice}</p>
                </div>
            </div>
        </div>
    )
}

export default Category
