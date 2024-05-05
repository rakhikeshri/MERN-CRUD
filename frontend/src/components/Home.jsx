import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className='home'>
      <h1 className='logo'>Daily Notes</h1>
      <Link to="login">
        <button className='toggleBtn'>"Start Noting Today."</button>
      </Link>
    </div>
  )
}

export default Home