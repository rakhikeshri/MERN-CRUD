import React, {useEffect} from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {

  const { loginData, loggedIn } = useSelector((state) => state.users);
  useEffect(()=> console.log(loggedIn), [loggedIn])
  
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