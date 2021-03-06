import {Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";
const PostList = ({posts,title}) =>{
   // const posts=props.posts;
   const history = useHistory();
    return (  
        <div className= "post-list"> 
            <h2>{title}</h2>
            {posts.map((post)=>(
                <div onClick={()=>history.push(`/posts/${post.id}`)} key={post.id}>
                    <div className = "post-preview"> 
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <p>by <Link to={`/profile/${post.author_id}`} className="link-highlight">{post.author}</Link></p> 
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PostList;