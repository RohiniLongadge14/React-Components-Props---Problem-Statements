import React from 'react'

function Product({ productName, price, inStock }) {
    return (
        <>
            <h1>2. Product Info</h1>
            <ul>
                <li>Product Name = {productName}</li>
                <li>Price = {price}</li>
                <li>In Stock = {inStock ? "Yes" : "No"}</li>
            </ul>
            <hr />
        </>
    )
}

export default Product
