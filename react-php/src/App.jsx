
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Form from './components/Form'
import List from './components/List'
import Room from './components/Room'
import Page404 from './components/Page404'
import Home from './components/Home'
import React, { useState, useEffect } from "react";
import axios from "axios";
import Admin from './components/Admin'


function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
      axios
          .get("http://localhost/server/room.php")
          .then(response => {
              setData(response.data);
          })
          .catch(error => {
              console.log(error);
          });
  }, []);
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/form'>Form</Link>
          </li>
          <li>
            <Link to='/list'>list</Link>
          </li>
          <li>
            <Link to='/admin'>Admin</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/form' element={<Form/>} />
        <Route path='/list' element={<List  {...data}/>} />
        <Route path='/admin' element={<Admin/>}/>
        <Route path='*' element={<Page404/>}/>
        <Route path='/list/:id' element={<Room {...data}/> } />
      </Routes>
    </div>
  )
}

export default App
