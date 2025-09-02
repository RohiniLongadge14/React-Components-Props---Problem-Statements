import React from 'react'

function CartItem({ item, quantity, price }) {
    return (
        <>
            <h1>8. Shopping Cart Item Component</h1>
            <ul>
                <li>Item Name = {item}</li>
                <li>Quantity = {quantity}</li>
                <li>Price = {price}</li>
                <li>Total Cost = {quantity * price}</li>
            </ul>
            <hr />
        </>
    )
}

export default CartItem
