import React from 'react'

function Employee({ name, department, salary }) {
    return (
        <>
            <h1>6. Employee Salary Component</h1>
            <ul>
                <li>Name = {name}</li>
                <li>Department = {department}</li>
                <li>Salary = ₹ {salary}</li>
            </ul>
            <hr />
        </>
    )
}

export default Employee
