import React from 'react'

function Movie({ title, director }) {
    return (
        <>
            <h1>7. Movie Component with Nested Props</h1>
            <ul>
                <li>Title = {title}</li>
                <li>Director Name = {director.name}</li>
                <li>Director Age = {director.age}</li>
            </ul>
            <hr />
        </>
    )
}

export default Movie
