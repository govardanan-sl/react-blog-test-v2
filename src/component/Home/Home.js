import React, { Component } from 'react'
import { UserProfileID } from '../../contexts/UserProfileID';
// import PostList from '../PostList';
// import useFetch from '../../useFetch';
import PostList from '../PostList';

class Home extends Component {
    static contextType = UserProfileID;
    constructor(props){
        super(props);
        this.state={
            posts : [],
            isLoading : true,
            isError : null
        }
    }
    abortController = new window.AbortController();
    fetchPosts(){
        const {accessToken} = this.context;
        let url ="https://backend-react-json-server-auth.herokuapp.com/posts";
        let homeHeaders = new Headers();
        homeHeaders.append("Authorization","Bearer "+accessToken);
        homeHeaders.append("signal",this.abortController.signal);
        let requestOptions= {
            method: 'GET',
            headers:homeHeaders,
            redirect: 'follow'
        };
        fetch(url,requestOptions)
        .then(response => {
            if(!response.ok){
                throw Error("Could not Fetch data");
            }
            return response.json();
        })
        .then(result => {
            this.setState({
                posts : result,
                isLoading : false,
                isError:false
            })
        })
        .catch((e) =>{
            if(e.name==='AbortError'){
                console.log("Fetch Aborted");
            }else{
                console.log(e.message);
                this.setState({
                    isError:e.message
                });
            }
        });
    }
    componentDidMount(){
        const {accessToken} = this.context;
        console.log(accessToken);
        if(accessToken){
            this.fetchPosts();
        }
    }
    componentWillUnmount() {
        this.abortController.abort();
    }
    render() {
        const {isLoggedIn, profile_id,accessToken } = this.context;
        return (
            <div className="home">
                {isLoggedIn&&<h2>Welcome Back</h2>}
                <h1>Home Page</h1>
                {!this.state.isError && this.state.isLoading && accessToken&&<div>Loading....</div>}
                {this.state.isError && 
                    <div> 
                        <h2 style={{color:"#ff003cf0"}}>{this.state.isError}</h2>
                    </div>
                }
                {this.state.posts && <PostList posts={this.state.posts} title="All Posts"></PostList>}
                {profile_id&&this.state.posts && <PostList posts={this.state.posts.filter((post)=>post.author_id ===profile_id)} title="My Posts"/>}
                {!accessToken&&<h1 className="error">Please Login</h1>}
            </div>
        )
    }
}

export default Home;