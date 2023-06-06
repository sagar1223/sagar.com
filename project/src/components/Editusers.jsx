import React, { useState } from 'react'
import { useEffect } from 'react'
import style from "./home.module.css"
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Editusers = () => {
  let[name,setName]=useState("")
  let[salary,setSalary]=useState("")
  let[company,setCompany]=useState("")

  let{index}=useParams()
  console.log(index);
  let navigate=useNavigate()
  useEffect(()=>{
    axios.get(`http://localhost:3000/content/${index}`)
    .then((response)=>{
      setName(response.data.name)
      setSalary(response.data.salary)
      setCompany(response.data.company)
    })
  },[])

  let formHandle=(e)=>{
    e.preventDefault()
    let payLoad={name,salary,company}
    axios.put(`http://localhost:3000/content/${index}`,payLoad)
    .then(()=>{
      console.log("DATA HAS BEEN ADDED");
    })
    navigate("/user")
  }


  return (
    <section id={style.mainform}>
        <form action="">
        <table>
            <tr>
                <th colSpan="2">Employeee</th>
            </tr>
            <tr>
                <td><label>name</label></td>
                <td>:<input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/></td>
            </tr>
            <tr>
                <td><label>Salary</label></td>
                <td>:<input type="number" value={salary} onChange={(e)=>{
                    setSalary(e.target.value)
                }}/></td>
            </tr>
            <tr>
                <td><label>Company</label></td>
                <td>:<input type="text" value={company} onChange={(e)=>{
                    setCompany(e.target.value)
                }}/></td>
            </tr>
            <tr>
                <th colSpan="2" id={style.btn} onClick={formHandle}><button>update</button></th>
            </tr>
        </table>
        </form>
        </section>
  )
}
export default Editusers