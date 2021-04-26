import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title,setTitle] =useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] =useState('');
    const [author_id,setAuthor_id]=useState('1');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit= (e) => {
        e.preventDefault();
        const post = {title , body, author, author_id};
        setIsPending(true);
        let requestOptions = {
            method: 'POST',
            headers: {"Content-Type" : "application/json"},
            body : JSON.stringify(post)
        };
        let url = "https://backend-react-json-server.herokuapp.com/posts"
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
          .catch((e) => {
              console.log(e.message);
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
                <input 
                    value={author_id}
                    onChange={(e)=>setAuthor_id(e.target.value)}
                    type="hidden"
                />
               {!isPending&&<button type='submit'>
                    Post
                </button>}
                {isPending&&<button disabled>
                    Please Wait...    
                </button>}
            </form>
        </div>
    );
}
export default Create;
