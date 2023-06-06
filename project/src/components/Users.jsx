import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import style from "./home.module.css"
import { Link } from 'react-router-dom'
const Users = () => {

  let[data,setData]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:3000/content")
    .then((response)=>{
      console.log(response.data);
      setData(response.data)
    })
  },[])

  let deleteData=(index)=>{
    axios.delete(`http://localhost:3000/content/${index}`)
    window.location.assign("/user")
  }
  
  return (
    <div id={style.user}>
      {data.map((x)=>{
        return(
          <section id={style.card}>
            <table>
              <tr>
                <th colSpan="2">Employment {x.id} </th>
              </tr>
              <tr>
                <td>name</td>
                <td>{x.name}</td>
              </tr>
              <tr>
                <td>salary</td>
                <td>{x.salary}</td>
              </tr>
              <tr>
                <td>company</td>
                <td>{x.company}</td>
              </tr>
              <tr>
                <td><Link to={`/edit/${x.id}`}>edit</Link></td>
                <td><button onClick={()=>{deleteData(x.id)}}>delete</button></td>
              </tr>
            </table>
          </section>
        )
      })}
    </div>
  )
}
export default Users