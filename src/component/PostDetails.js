import {useParams} from 'react-router-dom';
import useFetch from '../useFetch';
import {useHistory,Link} from 'react-router-dom';
const PostDetails = () =>{
    const { id } = useParams();
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    const {data:post ,isError:error, isLoading} = useFetch("https://backend-react-json-server.herokuapp.com/posts/"+id,requestOptions);
    const history = useHistory();
    const handleDelete = () => {
        fetch('https://backend-react-json-server.herokuapp.com/posts/'+post.id,{
            method:'DELETE'
        }).then(()=>{
            history.push('/react-blog-test-v2');
        }).catch((e)=>{
            console.log(e);
        });
    }
    return (
        <div className="post-details">
            {!error&&isLoading&&<div>Loading Post...</div>}
            {error &&<div>{error}!!{<br></br>}Post not found</div>}
            {post &&(
                <article>
                    <h2>{post.title}</h2>
                    <p>posted by <Link className="link-highlight" to={`/profile/${post.author_id}`}>{post.author}</Link></p>
                    <div>{post.body}</div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
    );
}
export default PostDetails;