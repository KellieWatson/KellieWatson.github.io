import profile from "./kelliewatson-selfie-square.jpg";

function Profile(){
    return(<div>
    <img src ={profile} className="Profile" alt="profile"/>
    <h1 className="Profile-name">
        Kellie Nichole Watson
    </h1></div>);
}

export default Profile;