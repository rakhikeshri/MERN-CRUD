import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useUserActions from '../../utils/useUserActions';

const RequireAuth = (props) => {

    const navigate = useNavigate();

    const { loggedIn } = useSelector((state) => state.users);

    const { checkAuth } = useUserActions()

    useEffect(() => {
        if (loggedIn === null) checkAuth()
    }, [])

    if (loggedIn === null) return <h2 style={{ margin: '0px' }}>Loading</h2>

    if (loggedIn === false) return navigate('/login');

    return (
        <div>{props.children}</div>
    )
}

export default RequireAuth



