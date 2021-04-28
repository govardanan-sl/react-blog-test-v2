import { useContext } from 'react';
import {Link} from 'react-router-dom';
import { UserProfileID } from '../contexts/UserProfileID';

const Navbar= () =>{
    const {profile_id,isLoggedIn,Loggout} = useContext(UserProfileID);
    return (
        <nav className="navbar">
           <Link to ='/react-blog-test-v2'><h1>The Social Media App</h1></Link>
            <div className="links">
                <Link to = "/react-blog-test-v2">Home</Link>
                <Link to = "/profile">Profile</Link>
                <Link to = "/">About</Link>
                {isLoggedIn&&<Link to = "/create" style = {{
                    color:"white",
                    backgroundColor : "#f1356d",
                    borderRadius : '8px'
                }}>New Post</Link>}
                {!isLoggedIn&&<Link to = "/login" style = {{
                    color:"white",
                    backgroundColor : "#f1356d",
                    borderRadius : '8px'
                }}>Login</Link>}
                {profile_id&&<Link to = "#" style = {{
                    color:"white",
                    backgroundColor : "#f1356d",
                    borderRadius : '8px'
                }} onClick={Loggout}>Logout</Link>}
            </div>
        </nav>
    )
}

export default Navbar;