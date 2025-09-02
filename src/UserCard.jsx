import React from 'react'

function UserCard({ name, email, role }) {
    return (
        <>
            <h1>1. User Profile Card</h1>
            <p>User Information</p>
            <ul>
                <li> Name = {name}</li>
                <li> Email = {email}</li>
                <li> Role = {role}</li>
            </ul>
            <hr />
        </>
    )
}

export default UserCard
