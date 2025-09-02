import React from 'react'

function Student({ name, rollNo, marks }) {
    return (
        <>
            <h1>5. Student Marks Component</h1>
            <ul>
                <li>Name = {name}</li>
                <li>Roll No = {rollNo}</li>
                <li>Marks = {marks >= 40 ? "Pass" : "Fail"}</li>
            </ul>
            <hr />
        </>
    )
}

export default Student
