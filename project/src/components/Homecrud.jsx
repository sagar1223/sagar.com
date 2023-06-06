import React from 'react'
import { Link } from 'react-router-dom'
import style from './home.module.css'

const Homecrud = () => {
  return (
    <div id={style.nav}>
        <Link to="/create">Createusers</Link>
        <Link to="/user">Users</Link>
    </div>
  )
}

export default Homecrud