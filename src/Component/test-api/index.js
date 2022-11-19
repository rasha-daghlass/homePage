import React from 'react'
import axios from 'axios'
import { useState , useEffect } from 'react'
const Test = () => {
    const [posts, setPosts]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res=> {
        console.log(res)
        setPosts(res.data)
     })
    } ,[])
  return (

    <div>
        <ul>
            {posts.map((item,id)=>
            <li key={id}> {item.body}</li>
            
            )}

        </ul>

    </div>
  )
}

export default Test