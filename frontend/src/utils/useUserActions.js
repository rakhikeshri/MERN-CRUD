import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setLoginData, setLoggedIn } from '../Redux/reducers/usersSlice.js';
import { api } from './constants.js'
import { useNavigate } from 'react-router-dom';

const useUserActions = () => {
  const dispatch = useDispatch();
  const { loginData, loggedIn } = useSelector((state) => state.users);
  const navigate = useNavigate();

  const updateLoginDataField = (e) => {
    const { name, value } = e.target;
    dispatch(setLoginData({
      ...loginData,
      [name]: value
    }));
  };

  const login = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${api}/login`, loginData, { withCredentials: true })

      dispatch(setLoggedIn(true))

      navigate('/notes');

      console.log(response)

    } catch (error) {
      console.log('err', error)
      dispatch(setLoggedIn(false))
    }
  }

  const checkAuth = async () => {
    try {
      await axios.get('/check-auth', { withCredentials: true });
      console.log('res', response)
      if (response.status === 200) {
        dispatch(setLoggedIn(true));
      } else {
        dispatch(setLoggedIn(false));
      }
    } catch (err) {
      console.error('Error checking authentication:', err);
      dispatch(setLoggedIn(false));
    }
  };

  const logout = async () => {
    await axios.get('/logout', { withCredentials: true })
    dispatch(setLoggedIn(false));
  }

  return {
    updateLoginDataField,
    login,
    checkAuth,
    logout
  };
};

export default useUserActions;
