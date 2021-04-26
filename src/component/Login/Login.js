import React from 'react'
import loginImg from './login.svg'
import "./style.scss";

const Login = () => {
    return (
        <div className="base-container">
        <div className="header">Login</div>
        <div className="content">
        <div className="image">
            <img src={loginImg} alt="just a decoration"/>
        </div>
        <div className="form">
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="username" />
            </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="password" />
        </div>
        </div>

        <button type="button" style = {{
                    color:"white",
                    backgroundColor : "#f1356d",
                    borderRadius : '8px',
                    width: '7rem',
                    height: '3rem',
                    marginLeft: '6rem'
        }}>
            Login
        </button>
        </div>
        </div>
    );
}

export default Login
