import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from '../Redux/reducers/notesSlice';

const Header = () => {
    const dispatch = useDispatch();
    const { darkMode } = useSelector((state) => state.notes);

    return (
        <div className={`header ${darkMode ? 'darkmode' : ''}`}>
            <h1>Daily Notes</h1>
            <input type="text" placeholder='Search your notes title here...' className='search' />
            <div className='user-container'>
                <button className={`toggleBtn ${darkMode ? 'darkmode' : ''}`} onClick={() => dispatch(toggleDarkMode())}>
                    {darkMode === true ? 'Light Mode' : 'Dark Mode'}
                </button>
                <div className='user'>R</div>
            </div>
        </div>
    )
}

export default Header