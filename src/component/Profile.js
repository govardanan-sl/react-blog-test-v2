import React from 'react'
import useFetch from '../useFetch';
import {useContext} from 'react';
import { UserProfileID } from '../contexts/UserProfileID';

function Profile() {
    const userId = useContext(UserProfileID);
    const { data:name ,isError:error, isLoading} = useFetch("https://backend-react-json-server.herokuapp.com/profile/"+userId.profile_id);
    return (
        <div>
            {error&&<h2>Error Occured</h2>}
            {isLoading&&<h2>Loading!!...</h2>}
            <h2>Profile</h2>
            <div className="profile-container">
               <p> Name : {!error&&name&&name.name}</p>
               <p> Status : {}</p>
            </div>
        </div>
    )
}

export default Profile;
