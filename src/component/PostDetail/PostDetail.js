import React, { Component } from 'react'
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import { UserProfileID } from '../../contexts/UserProfileID';
class PostDetail extends Component {
    static contextType = UserProfileID;
    constructor(props){
        super(props);
        this.state={
            postData : null,
            isLoading : true,
            isError : null
        }
        this.handleDelete = this.handleDelete.bind(this);
    }
    abortController = new window.AbortController();
    fetchPosts(id){
        const {accessToken} = this.context;
        let url ="https://backend-react-json-server-auth.herokuapp.com/posts/"+id;
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
            if(response.status===401){
                return response.json();
            }
            if(!response.ok){
                throw Error("Could not Fetch data");
            }
            return response.json();
        })
        .then(result => {
            if(result.message==="Access token not provided"){
                this.setState({
                    postData : null,
                    isLoading : false,
                    isError:"Login Expired"
                })
                throw Error("Login Expired");
            }else{
                this.setState({
                    postData : result,
                    isLoading : false,
                    isError:false
                })
            }
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
    handleDelete = () => {
        const id = this.props.match.params.id;
        let postDetailHeaders = new Headers();
        const {accessToken} = this.context;
        postDetailHeaders.append("Authorization","Bearer "+accessToken);
        postDetailHeaders.append("signal",this.abortController.signal);
        let requestOptions= {
            method: 'DELETE',
            headers:postDetailHeaders,
            redirect: 'follow'
        };
        fetch('https://backend-react-json-server-auth.herokuapp.com/posts/'+id,requestOptions)
        .then(()=>{
            //history.push('/react-blog-test-v2');
            console.log("Deleted Successfully");
            const { history } = this.props;
            if(history) history.push('/react-blog-test-v2');
            
        }).catch((e)=>{
            console.log(e);
        });
    }
    componentDidMount(){
        const id = this.props.match.params.id;
        const {accessToken} = this.context;
        if(accessToken){
            this.fetchPosts(id);
        }
    }
    componentWillUnmount(){
        this.abortController.abort();
    }
    render() {
        return (
            <div className="post-details">
            {!this.state.isError&&this.state.isLoading&&<div>Loading Post...</div>}
            {this.state.isError&&<div className="error">{this.state.isError}!!{<br></br>}</div>}
            {this.state.postData &&(
                <article>
                    <h2>{this.state.postData.title}</h2>
                    <p>posted by <Link className="link-highlight" to={`/profile/${this.state.postData.author_id}`}>{this.state.postData.author}</Link></p>
                    <div>{this.state.postData.body}</div>
                    <button onClick={this.handleDelete}>Delete</button>
                </article>
            )}
        </div>
        )
    }
}

export default withRouter(PostDetail);
