import React from 'react'
import { useState } from 'react'
import style from './home.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Createusers = () => {
    let[name,setName]=useState("")
    let[salary,setSalary]=useState("")
    let[company,setCompany]=useState("")
    let navigate=useNavigate()

    let formHandle=(e)=>{
        e.preventDefault();
        let payLoad={name,salary,company}

        axios.post("http://localhost:3000/content",payLoad)
        .then(()=>{
            console.log("Data has been Added")
        })
        .catch(()=>{
            console.log("something wrong");
        })
        navigate("/user")
    }
    
  return(
    <div>
        <section id={style.mainform}>
        <form action="">
        <table>
            <tr>
                <th colSpan="2">Employee details</th>
            </tr>
            <tr>
                <td><label>name</label></td>
                <td>:<input type="text" value={name} onChange={(e)=>{
                    setName(e.target.value)
                }}/></td>
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
                <th colSpan="2" id={style.btn} onClick={formHandle}><button>submit</button></th>
            </tr>
        </table>
        </form>
        </section>
    </div>
  )
}
export default Createusers