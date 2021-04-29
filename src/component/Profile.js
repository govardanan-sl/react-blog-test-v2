import React from 'react'
import useFetch from '../useFetch';
import {useContext} from 'react';
import { UserProfileID } from '../contexts/UserProfileID';
import { Link } from 'react-router-dom';

function Profile() {
    const {profile_id,accessToken} = useContext(UserProfileID);
    const userId = useContext(UserProfileID);
    let profHeaders = new Headers();
    profHeaders.append("Authorization","Bearer "+accessToken);
    let requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: profHeaders
    };
    const { data:name ,isError:error, isLoading} = useFetch("https://backend-react-json-server.herokuapp.com/profile/"+userId.profile_id,requestOptions);
    return (
        <div>
            {!profile_id&&<h1><Link to="/login"  className="link-highlight">Please Login</Link></h1>}
            {profile_id&&error&&<h2>Error Occured</h2>}
            {profile_id&&isLoading&&<h2>Loading!!...</h2>}
            <h2>Profile</h2>
            {profile_id&&<div className="profile-container">
               <p> Name : {!error&&name&&name.name}</p>
               <p> Status : {}</p>
            </div>}
        </div>
    )
}

export default Profile;
