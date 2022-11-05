// import { signOut } from 'firebase/auth';
import React, { useState } from 'react';

// import { Link, NavLink } from 'react-router-dom';
// import auth from '../../../firebase.Init';
import './NavBar.css'


const NavBar = () => {
    // const handleSignOut = () => {
    //     signOut(auth)
    // }
    // active nave
    const [navBar, setNavBar] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 30) {
            setNavBar(true)
        } else {
            setNavBar(false)
        }
    }
    window.addEventListener('scroll', changeBackground);

    return (
        <div className={navBar ? 'navBar active z-50' : 'navBar z-50'}>

            <div className='ml-5 mt-3'>
                <h2 className='text-2xl font-bold text-white font-sans'>Karo Startup</h2>
            </div>

        </div>
    );
};

export default NavBar;