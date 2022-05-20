import React, { useState } from 'react'

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const getPosts = () => {
        const URL = "https://jsonplaceholder.typicode.com/posts";
        fetch(URL)
            .then(res => res.json())
            .then(data => setPosts(data))
            .catch(err => console.log(err))
    }
    return (
        <>
            <section className='container'>
                <p>Latest Posts</p>
                <input type="button" value="Get" onClick={getPosts} />
                <div>
                    {posts.map((post) =>
                        <div key={post.id}>
                            <h4>{post.title}</h4>
                            <article> {post.body}</article>
                            <hr />
                        </div>)}
                </div>
            </section>
        </>
    )
}
