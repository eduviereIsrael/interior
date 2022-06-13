import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Comments = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/comments')
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })

            .catch(err => {
                console.log(err)
            })
    },[])
  return (
    <div>
        <ul>
        {posts.map((post) => (
            <li key={post.id}>{post.comment}</li>
        ))}
        </ul>
    </div>
  )
}

export default Comments