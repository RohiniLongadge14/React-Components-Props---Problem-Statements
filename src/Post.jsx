import React from 'react'
import './Post.css'

function Post({ title, author, content }) {
    return (
        <>
            <h1 className='post-card'>4. Blog Post Component</h1>
            <ul >
                <li className='post-title'>Title = {title}</li>
                <li className='post-author'>Author = {author}</li>
                <li className='post-content'> Content = {content}</li>
            </ul>
            <hr />
        </>
    )
}

export default Post
