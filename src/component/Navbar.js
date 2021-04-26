import {Link} from 'react-router-dom';

const Navbar= () =>{
    return (
        <nav className="navbar">
           <Link to ='/react-blog-test-v2'><h1>The Social Media App</h1></Link>
            <div className="links">
                <Link to = "/react-blog-test-v2">Home</Link>
                <Link to = "/">Profile</Link>
                <Link to = "/">About</Link>
                <Link to = "/create" style = {{
                    color:"white",
                    backgroundColor : "#f1356d",
                    borderRadius : '8px'
                }}>New Post</Link>
            </div>
        </nav>
    )
}

export default Navbar;