import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

const ProfileDetails = () => {
    const { id } = useParams();
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    const {data:profile ,isError:error, isLoading} = useFetch("https://backend-react-json-server.herokuapp.com/profile/"+id,requestOptions);
    
    return (
        <div className="profile-container">
            {!error&&isLoading&&<div>Loading Profile...</div>}
            {error &&<div>{error}!!{<br></br>}Profile not found</div>}
            {profile &&(
                <div className="profile-data"> 
                    <h2>Name : {profile.name}</h2>
                    <p>Email : {profile.email}</p>
                </div>
            )}
        </div>
    )
}

export default ProfileDetails;
