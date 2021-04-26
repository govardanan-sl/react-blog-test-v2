import React from 'react'
import useFetch from '../useFetch';


function Profile() {
    const { data:name ,isError:error, isLoading} = useFetch("https://backend-react-json-server.herokuapp.com/profile/1");
    console.log(name,error);
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
