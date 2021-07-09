import profile from "./images/kelliewatson-selfie-square.jpg";
import './style/Profile.css';

function Profile(){
    return(<div>
    <img src ={profile} className="Profile" alt="profile"/>
    <h1 className="Profile-name">
        Kellie Nichole Watson
    </h1></div>);
}

export default Profile;