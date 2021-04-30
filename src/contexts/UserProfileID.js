import { Component, createContext } from "react";

export const UserProfileID = createContext();

class UserProfileIDContextProvider extends Component{
    state = {
        isLoggedIn : false,
        profile_id : null,
        accessToken:null
    }
    LoggedIn = (p_id) => {
        this.setState({
            isLoggedIn : true,
            profile_id : p_id
        })
    }
    Loggout = () =>{
        this.setState({
            isLoggedIn : false,
            profile_id : null,
            accessToken :null
        })
    }
    SetAccessToken= (token,p_id) =>{
        this.setState({
            isLoggedIn:true,
            profile_id : p_id,
            accessToken:token
        })
    }
    componentWillMount(){
        const localData = JSON.parse(localStorage.getItem('UserProfileData'));
        if(localData){
            this.setState(localData);
        }else{
            this.setState({
                isLoggedIn : false,
                profile_id : null,
                accessToken:null
            })
        }
    }
    componentDidUpdate(){
        localStorage.setItem('UserProfileData',JSON.stringify(this.state))
    }
    render(){
        return (
            <UserProfileID.Provider value={{...this.state,LoggedIn:this.LoggedIn,Loggout:this.Loggout,SetAccessToken:this.SetAccessToken}}>
                {this.props.children}
            </UserProfileID.Provider>
        );
    }
}

export default UserProfileIDContextProvider;