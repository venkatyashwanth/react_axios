import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function Comments() {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false);

    const getComments = () => {
        setLoading(true);
        const URL = "https://jsonplaceholder.typicode.com/comments";
        axios.get(URL)
            .then(res => {
                if (res) {
                    setLoading(false);
                    setComments(res.data);
                }
            })
            .catch(err => console.log(err))
    }


    return (
        <>
            <div className='container'>
                <h2>Comments</h2>
                <input type="button" value="Get" onClick={getComments} className="btn btn-primary"/>
                <div>
                    {loading ?
                        <div class="spinner-grow" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        :
                        <ul>
                            {comments.map((data) =>
                                <li key={data.id}>
                                    <p>PostId: {data.postId}</p>
                                    <p>Name: {data.name}</p>
                                    <p>Email: {data.email}</p>
                                    <p>Body: {data.body}</p>
                                    <hr />
                                </li>
                            )}
                        </ul>
                    }

                </div>
            </div>
        </>
    )
}
