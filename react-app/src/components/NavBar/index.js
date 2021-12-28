import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import SignUpFormModal from '../auth/SignUpFormModal';
import LoginForm from '../auth/LoginForm';
import { logout } from '../../store/session';
import './NavBar.css'

const NavBar = () => {

  const user = useSelector((state) => state.session.user);

  const dispatch = useDispatch();
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  const guestSplash = (
    <>
      <nav>
        <div className="header"></div>
          <NavLink 
          to="/home" 
          exact={true} 
          // activeClassName="active"
          >
            <img
              alt="logo"
              className="logo"
              src="https://user-images.githubusercontent.com/33510714/146314247-7ab006df-4b72-412e-8833-4775105cb9d4.png"
            />
            <span className="logoText">Traileo</span>
            
          </NavLink>
        <NavLink
          to="/home"
          exact={true}
          // activeClassName="active"
          className="homeLink"
        >
          Home
        </NavLink>
        <SignUpFormModal />
        <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
        <label htmlFor="openSidebarMenu" className="loginLink">
          Login
        </label>

        <div id="sidebarMenu">
          <LoginForm />
        </div>
      </nav>
    </>
  );

  const userSplash = (
    <nav>
      <div className="header"></div>
      <NavLink 
      to={`/home`} 
      exact={true} 
      // activeClassName="active"
      >
        <img
          alt="logo"
          className="logo"
          src="https://user-images.githubusercontent.com/33510714/146314247-7ab006df-4b72-412e-8833-4775105cb9d4.png"
        />
        <span className="logoText">Traileo</span>
      </NavLink>
      <NavLink
        to={`/users/${user?.id}/dashboard`}
        exact={true}
        // activeClassName="active"
        className="homeLink"
      >
        Dashboard
      </NavLink>
      <NavLink
        to='/home'
        onClick={onLogout}
        exact={true}
        // activeClassName="active"
        className="loginLink"
      >
        Logout
      </NavLink>
    </nav>
  );

  return (
    <>
      { user ? userSplash : guestSplash }
    </>
  );
}

export default NavBar;
