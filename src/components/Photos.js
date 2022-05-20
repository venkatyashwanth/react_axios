import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Photos() {
    const [profiles, setProfiles] = useState([]);
    const [loading, setLoading] = useState(false);
    const getProfiles = () => {
        setLoading(true);
        const URL = "https://jsonplaceholder.typicode.com/photos";
        axios.get(URL)
            .then(res => {
                if (res) {
                    setLoading(false);
                    setProfiles(res.data);
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <>
            <div className='container'>
                <h2>User Profiles</h2>
                <input type="button" value="Get" onClick={getProfiles} />
                <div>
                    {loading ? <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                        :
                        <ul>
                            {profiles.map((data) =>
                                <li key={data.id}>
                                    <p>Tittle: {data.title}</p>
                                    <img src={data.url} width="200"></img>
                                    <hr />
                                </li>)}
                        </ul>}
                </div>
            </div>
        </>
    )
}
