import { useContext, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserProfileID } from "../contexts/UserProfileID";

const Create = () => {
    const {profile_id,accessToken} = useContext(UserProfileID);
    const [title,setTitle] =useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] =useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, [inputRef]);

    const handleSubmit= (e) => {
        e.preventDefault();
        const post = {title , body, author,author_id: profile_id};
        setIsPending(true);
        var createPostHeader = new Headers();
        createPostHeader.append("Authorization", "Bearer "+accessToken);
        createPostHeader.append("Content-Type", "application/json");
        let requestOptions = {
            method: 'POST',
            Authorization : "Bearer "+accessToken,
            headers: createPostHeader,
            body : JSON.stringify(post)
        };
        let url = "https://backend-react-json-server-auth.herokuapp.com/posts"
          fetch(url, requestOptions)
          .then((res) => {
              if(res.status!==201){
                throw Error(res.statusText);
              }else{
                console.log("Posted");
                setIsPending(false);
                history.push('/react-blog-test-v2');
              }
          })
          .catch((err) => {
              console.log(err.message);
              setIsPending(false);
          });

    }
    return (
        <div className="create">
            <h2>New Post</h2>
            <form onSubmit={handleSubmit}>
                <label>Post Title : </label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    ref={inputRef}
                />
                <label>Post Body : </label>
                <textarea
                    value={body}
                    onChange={(e)=>setBody(e.target.value)}
                    required
                />
                <label>Author Name : </label>
                <input 
                    value={author}
                    onChange={(e)=>setAuthor(e.target.value)}
                    type="text"
                    required
                />
               {profile_id&&!isPending&&<button type='submit'>
                    Post
                </button>}
                {isPending&&<button disabled>
                    Please Wait...    
                </button>}
                {!profile_id&&<h2 className="error">Login to Post</h2>}
            </form>
        </div>
    );
}
export default Create;
