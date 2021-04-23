//import {useState,useEffect} from 'react';
import PostList from './PostList';
import useFetch from '../useFetch';
const Home = () =>{
   const {data:posts,isLoading,isError} = useFetch("https://backend-react-json-server.herokuapp.com/posts"); 
    return(
        <div className="Home">
        {!isError && isLoading && <div>Loading....</div>}
        {isError && <div> 
            <h2 style={{color:"#ff003cf0"}}>{isError}</h2>
            </div>
        }
        {posts && <PostList posts={posts} title="All Posts"></PostList>}
        {posts && <PostList posts={posts.filter((post)=>post.author ==='bruce')} title="My Posts"/>}
        </div>
    )
}
export default Home;