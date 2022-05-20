import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function Users() {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true);
        const URL="https://jsonplaceholder.typicode.com/users";
        setTimeout(()=>{
            axios.get(URL)
            .then(res=>{
                if(res){
                    setLoading(false);
                    setUserData(res.data);
                }
            })
            .catch(err => console.log(err))
        },2000)
    },[])


    return (
        <>
            <div className='container'>
                <p>Users: </p>
                <div>
                    {loading?
                    <div class="spinner-grow" role="status">
                    <span class="visually-hidden">Loading...</span>
                    </div>
                    :
                    <ul>
                        {userData.map((user)=>
                        <li key={user.id}>{user.name}</li>
                        )}
                    </ul>}
                </div>
            </div>
        </>
    )
}
