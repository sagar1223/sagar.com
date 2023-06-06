import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Createusers from './components/Createusers'
import Editusers from './components/Editusers'
import Homecrud from './components/Homecrud'
import Users from './components/Users'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Homecrud/>
      <Routes>
        <Route path='/create' element={<Createusers/>}></Route>
        <Route path='/user' element={<Users/>}/>
        <Route path='/edit/:index' element={<Editusers/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App