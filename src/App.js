import profile from './kelliewatson-selfie-square.jpg';
import './App.css';
import Qualifications from "./Qualifications";
//import './Qualifications.js';

function App() {


  return (
    <div className="App">
      <header className="App-header">
          <img src ={profile} className="Profile" alt="profile"/>
        <h1 className="Profile-name">
          Kellie Nichole Watson
        </h1>
        <div className= "Qualifications">
            <Qualifications/>
          </div>

        <a
          className="Website-link"
          href="https://watsonxyz.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          WatsonXYZ.com
        </a>
      </header>
      <div className="Contact-info">


        </div>



    </div>
  );
}

export default App;
