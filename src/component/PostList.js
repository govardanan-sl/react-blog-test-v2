import {Link} from 'react-router-dom';
const PostList = ({posts,title}) =>{
   // const posts=props.posts;

    return (  
        <div className= "post-list"> 
            <h2>{title}</h2>
            {posts.map((post)=>(
            <div className = "post-preview" key={post.id}> 
                <Link to={`/posts/${post.id}`}>
                 <h2>{post.title}</h2>
                 <p>{post.body}</p>
                 <p>by <Link to={`/profile/${post.author_id}`} className="link-highlight">{post.author}</Link></p> 
                </Link>
            </div>
            ))}
        </div>
    );
}

export default PostList;