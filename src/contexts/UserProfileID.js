import { Component, createContext } from "react";

export const UserProfileID = createContext();

class UserProfileIDContextProvider extends Component{
    state = {
        isLoggedIn : true,
        profile_id : 1,
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
            profile_id : null
        })
    }
    render(){
        return (
            <UserProfileID.Provider value={{...this.state,LoggedIn:this.LoggedIn,Loggout:this.Loggout}}>
                {this.props.children}
            </UserProfileID.Provider>
        );
    }
}

export default UserProfileIDContextProvider;