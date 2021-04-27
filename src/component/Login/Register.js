import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import loginImg from './login.svg';
import './style.scss';

const Register = () => {
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const profile = {name:username , email};
        setIsPending(true);
        let requestOptions = {
            method: 'POST',
            headers: {"Content-Type" : "application/json"},
            body : JSON.stringify(profile)
        };
        let url = "https://backend-react-json-server.herokuapp.com/profile"
          fetch(url, requestOptions)
          .then((res) => {
              if(res.status!==201){
                throw Error(res.statusText);
              }else{
                console.log("New User Added");
                setIsPending(false);
                history.push('/react-blog-test-v2');
              }
          })
          .catch((e) => {
              console.log(e.message);
              setIsPending(false);
          });

    }
    return (
        <div className="base-container">
        <div className="header"><h2>Register</h2></div>
        <div className="content">
        <div className="image">
            <img src={loginImg} alt="just a decoration"/>
        </div>
        <form onSubmit={handleSubmit}>
        <div className="form">
             <div className="form-group">
                <label htmlFor="username">Username</label>
                <input 
                    type="text" 
                    name="username" 
                    placeholder="username" 
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    required
                />
             </div>
             <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="email" 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    required
                />
             </div>
             <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                name="password" 
                placeholder="password" 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required
              />
             </div>
        </div>

        {!isPending&&<button type="submit" style = {{
                    color:"white",
                    backgroundColor : "#f1356d",
                    borderRadius : '8px',
                    width: '7rem',
                    height: '3rem',
                    borderBlockColor:'pinks'
        }}>
            Register
        </button>}
        </form>
        </div>
        </div>
    );
}


export default Register;