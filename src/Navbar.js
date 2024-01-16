import React from "react";
import {  useNavigate } from 'react-router-dom';
import {   Outlet } from "react-router-dom";

export default function Navbar() {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    const enteredPassword = window.prompt('Enter password:');
    const correctPassword = '1234'; // Replace with your actual password

    if (enteredPassword === correctPassword) {
      navigate('/Developers');
    } else {
      alert('Incorrect password. Access denied.');
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary mb-3">
        <div className="container-fluid me-auto">
          <a className="navbar-brand " href="/">
            RANDOM
          </a>
          <div className=" me-1">
          <button
              className="btn btn-outline-success" type="button" onClick={handleButtonClick}>
              Developer's Option
          </button>
          </div>
        </div>
      </nav>
      
      <div>
        <Outlet/>
      </div>
    </>
  );
}