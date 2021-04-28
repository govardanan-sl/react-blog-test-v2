import React, { Component } from 'react'
// import PostList from '../PostList';
// import useFetch from '../../useFetch';
import PostList from '../PostList';
class Home extends Component {
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
        let url ="https://backend-react-json-server.herokuapp.com/posts";
        let requestOptions= {
            method: 'GET',
            redirect: 'follow'
        };
        fetch(url,{ signal: this.abortController.signal },requestOptions)
        .then(response => {
            if(!response.ok){
                throw Error("Could not Fetch data");
            }
            return response.json();
        })
        .then(result => {
            this.setState({
                posts : result
            });
            this.setState({
                isLoading : false
            })
            this.setState({
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
        this.fetchPosts();
    }
    componentWillUnmount() {
        this.abortController.abort();
    }
    render() {
        return (
            <div className="home">
                <h1>Home Page</h1>
                {!this.state.isError && this.state.isLoading && <div>Loading....</div>}
                {this.state.isError && 
                    <div> 
                        <h2 style={{color:"#ff003cf0"}}>{this.state.isError}</h2>
                    </div>
                }
                {this.state.posts && <PostList posts={this.state.posts} title="All Posts"></PostList>}
                {this.state.posts && <PostList posts={this.state.posts.filter((post)=>post.author ==='bruce')} title="My Posts"/>}
            </div>
        )
    }
}

export default Home;