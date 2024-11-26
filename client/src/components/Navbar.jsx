import React, { useState } from "react";
import { IconButton } from '@mui/material'
import { Menu, Person, Search } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import "../styles/Navbar.scss";
import variables from "../styles/variables.module.scss";
import { setLogout } from "../redux/slice/userSlice";
const Navbar = () => {
    const user = useSelector(state => state.user)
    const [dropdownMenu, setDropdownMenu] = useState(false)
    const dispatch = useDispatch()
    return (
        <div className="navbar">
            <a href="/">
                <img src='/assets/logo.png' alt="logo" />
            </a>
            <div className="navbar_search">
                <input type="text" placeholder="Search..." />
                <IconButton>
                    <Search sx={{ color: variables.pinkred }} />
                </IconButton>
            </div>
            <div className="navbar_right">
                {user ? <a href='/create-listing' >Become a host</a> : <a href="/login" className="host">Become a host</a>}
                <button className="navbar_right_account" onClick={() => setDropdownMenu(!dropdownMenu)}>
                    <Menu sx={{ color: variables.darkgrey }} />
                    {!user ? <Person sx={{ color: variables.darkgrey }} /> : <img src={`http://localhost:5000/${user.profileImagePath.replace('public', '')}`} alt="image" style={{ objectFit: 'cover', borderRadius: '50%' }} />}
                </button>
                {dropdownMenu && !user && <div className="navbar_right_accountmenu" >
                    <Link to='/login'>Log In</Link>
                    <Link to={'/register'}>Sign Up</Link>
                </div>}
                {dropdownMenu && user && <div className="navbar_right_accountmenu" >
                    <Link to='/login'>Trip List</Link>
                    <Link to={'/register'}>Wish List</Link>
                    <Link to={'/register'}>Property List</Link>
                    <Link to={'/register'}>Reservation List</Link>
                    <Link to={'/register'}>Become a host</Link>
                    <Link to={'/login'} onClick={() => dispatch(setLogout())}>Logout</Link>
                </div>}
            </div>


        </div>
    );
};

export default Navbar;
